"use client";

import { use, useState, useCallback, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { evaluationsService } from "@/services/evaluations.service";
import { queryKeys } from "@/lib/query-keys";
import { PageHeader } from "@/components/layout/page-header";
import { EvaluationSheetView, EvaluationSummaryCards } from "@/components/domain/evaluation-sheet-view";
import { StatusBadge } from "@/components/domain/status-badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import type { EvaluationAnswer } from "@/types/shared";

export default function ManagerReviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const queryClient = useQueryClient();
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [answersVersion, setAnswersVersion] = useState(0);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const localAnswersRef = useRef<Map<string, { managerScore?: number; managerRemarks?: string }>>(new Map());

  const { data: evalRes, isLoading } = useQuery({
    queryKey: queryKeys.evaluations.detail(id),
    queryFn: () => evaluationsService.getById(id),
  });

  const saveMutation = useMutation({
    mutationFn: (answers: { questionId: string; score: number; remarks?: string }[]) =>
      evaluationsService.saveManager(id, { answers }),
    onSuccess: () => toast.success("Saved", { duration: 1500 }),
    onError: () => toast.error("Failed to save"),
  });

  const submitMutation = useMutation({
    mutationFn: () => evaluationsService.submitManager(id),
    onSuccess: () => {
      toast.success("Manager review submitted");
      queryClient.invalidateQueries({ queryKey: queryKeys.evaluations.all });
      setConfirmSubmit(false);
      router.push("/evaluations");
    },
    onError: () => toast.error("Failed to submit review"),
  });

  const evaluation = evalRes?.data;
  const isSubmittedToManager = evaluation?.status === "SUBMITTED_TO_MANAGER";

  const debouncedSave = useCallback(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const answers = Array.from(localAnswersRef.current.entries())
        .filter(([, a]) => a.managerScore != null)
        .map(([questionId, a]) => ({
          questionId,
          score: a.managerScore as number,
          remarks: a.managerRemarks || undefined,
        }));
      if (answers.length > 0) saveMutation.mutate(answers);
    }, 1500);
  }, [saveMutation]);

  const handleScoreChange = useCallback(
    (questionId: string, _field: string, value: number) => {
      const existing = localAnswersRef.current.get(questionId) || {};
      localAnswersRef.current.set(questionId, { ...existing, managerScore: value });
      setAnswersVersion((v) => v + 1);
      debouncedSave();
    },
    [debouncedSave],
  );

  const handleRemarksChange = useCallback(
    (questionId: string, _field: string, value: string) => {
      const existing = localAnswersRef.current.get(questionId) || {};
      localAnswersRef.current.set(questionId, { ...existing, managerRemarks: value });
      setAnswersVersion((v) => v + 1);
      debouncedSave();
    },
    [debouncedSave],
  );

  if (isLoading) {
    return <div className="flex justify-center py-20"><span className="section-label text-muted-foreground">Loading...</span></div>;
  }

  if (!evaluation) {
    return <div className="flex justify-center py-20"><span className="section-label text-muted-foreground">Evaluation not found</span></div>;
  }

  // Populate local answers ref
  if (localAnswersRef.current.size === 0 && evaluation.answers.length > 0) {
    evaluation.answers.forEach((a) => {
      localAnswersRef.current.set(a.question.id, {
        managerScore: a.managerScore ?? undefined,
        managerRemarks: a.managerRemarks ?? undefined,
      });
    });
    setAnswersVersion((v) => v + 1);
  }

  const sheets = groupAnswersBySheet(evaluation.answers);

  const sheetsWithLocal = sheets.map((s) => ({
    ...s,
    questions: s.questions.map((q) => {
      const local = localAnswersRef.current.get(q.questionId);
      return {
        ...q,
        managerScore: local?.managerScore ?? q.managerScore,
        managerRemarks: local?.managerRemarks ?? q.managerRemarks,
      };
    }),
  }));

  const maxScore = sheetsWithLocal[0]?.maxScore || 10;

  const selfScores = evaluation.answers.filter((a) => a.selfScore != null).map((a) => a.selfScore!);
  const managerScores = evaluation.answers.filter((a) => a.managerScore != null).map((a) => a.managerScore!);
  const avg = (arr: number[]) => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : null;

  return (
    <>
      <PageHeader
        title={`Review: ${evaluation.employee.firstName} ${evaluation.employee.lastName}`}
        description={evaluation.cycle.name}
        action={<StatusBadge status={evaluation.status} />}
      />

      <EvaluationSummaryCards
        selfAvg={avg(selfScores)}
        managerAvg={avg(managerScores)}
        totalWeight={sheetsWithLocal.reduce((sum, s) => sum + s.weight, 0)}
        finalScore={null}
        maxScore={maxScore}
        showManager={true}
        showFinal={false}
      />

      {sheetsWithLocal.length > 1 ? (
        <Tabs defaultValue={sheetsWithLocal[0]?.id} className="space-y-6">
          <TabsList className="bg-white dark:bg-card rounded-full premium-shadow border border-border/40 p-1 flex-wrap h-auto">
            {sheetsWithLocal.map((s) => (
              <TabsTrigger key={s.id} value={s.id} className="rounded-full text-xs tracking-wider uppercase font-light data-[state=active]:bg-accent px-4">
                {s.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {sheetsWithLocal.map((s, i) => (
            <TabsContent key={s.id} value={s.id}>
              <EvaluationSheetView
                sheet={s}
                questions={s.questions}
                index={i}
                mode={isSubmittedToManager ? "manager-edit" : "finalized"}
                onScoreChange={isSubmittedToManager ? handleScoreChange : undefined}
                onRemarksChange={isSubmittedToManager ? handleRemarksChange : undefined}
              />
            </TabsContent>
          ))}
        </Tabs>
      ) : sheetsWithLocal.length === 1 ? (
        <EvaluationSheetView
          sheet={sheetsWithLocal[0]}
          questions={sheetsWithLocal[0].questions}
          index={0}
          mode={isSubmittedToManager ? "manager-edit" : "finalized"}
          onScoreChange={isSubmittedToManager ? handleScoreChange : undefined}
          onRemarksChange={isSubmittedToManager ? handleRemarksChange : undefined}
        />
      ) : null}

      {isSubmittedToManager && (
        <div className="mt-10 flex justify-end space-x-4">
          <Button
            variant="outline"
            onClick={() => {
              const answers = Array.from(localAnswersRef.current.entries())
                .filter(([, a]) => a.managerScore != null)
                .map(([questionId, a]) => ({
                  questionId,
                  score: a.managerScore as number,
                  remarks: a.managerRemarks || undefined,
                }));
              if (answers.length > 0) saveMutation.mutate(answers);
            }}
            disabled={saveMutation.isPending}
            className="rounded-full text-xs tracking-wider uppercase font-light"
          >
            {saveMutation.isPending ? "Saving..." : "Save Draft"}
          </Button>
          <Button
            onClick={() => setConfirmSubmit(true)}
            className="rounded-full text-xs tracking-wider uppercase font-light"
          >
            Submit Review
          </Button>
        </div>
      )}

      <AlertDialog open={confirmSubmit} onOpenChange={setConfirmSubmit}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submit Manager Review</AlertDialogTitle>
            <AlertDialogDescription>
              This will lock your scores and send the evaluation to calibration. This cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => submitMutation.mutate()} disabled={submitMutation.isPending}>
              {submitMutation.isPending ? "Submitting..." : "Confirm Submit"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

function groupAnswersBySheet(answers: EvaluationAnswer[]) {
  const map = new Map<string, {
    id: string; name: string; weight: number; minScore: number; maxScore: number; sortOrder: number;
    questions: Array<{
      questionId: string; questionText: string; category: string | null | undefined;
      weight: number; sortOrder: number;
      selfScore: number | null; selfRemarks: string | null;
      managerScore: number | null; managerRemarks: string | null; finalScore: number | null;
    }>;
  }>();
  for (const answer of answers) {
    const sheet = answer.question.sheet;
    if (!sheet) continue;
    if (!map.has(sheet.id)) {
      map.set(sheet.id, { id: sheet.id, name: sheet.name, weight: sheet.weight, minScore: sheet.minScore, maxScore: sheet.maxScore, sortOrder: sheet.sortOrder, questions: [] });
    }
    map.get(sheet.id)!.questions.push({
      questionId: answer.question.id, questionText: answer.question.text,
      category: answer.question.category, weight: answer.question.weight ?? 10,
      sortOrder: answer.question.sortOrder ?? 0,
      selfScore: answer.selfScore, selfRemarks: answer.selfRemarks,
      managerScore: answer.managerScore, managerRemarks: answer.managerRemarks,
      finalScore: answer.finalScore,
    });
  }
  return Array.from(map.values()).sort((a, b) => a.sortOrder - b.sortOrder);
}
