"use client";

import { useState, useCallback, useRef } from "react";
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
import type { Evaluation, EvaluationAnswer } from "@/types/shared";

export default function MyEvaluationPage() {
  const queryClient = useQueryClient();
  const [confirmSubmit, setConfirmSubmit] = useState(false);
  const [activeSheetIndex, setActiveSheetIndex] = useState(0);
  const [answersVersion, setAnswersVersion] = useState(0);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const localAnswersRef = useRef<Map<string, Partial<EvaluationAnswer>>>(new Map());

  const { data: evalRes, isLoading } = useQuery({
    queryKey: queryKeys.evaluations.my(),
    queryFn: () => evaluationsService.my(),
  });

  const saveMutation = useMutation({
    mutationFn: (answers: { questionId: string; score: number; remarks?: string }[]) =>
      evaluationsService.saveSelf(evaluation!.id, { answers }),
    onSuccess: () => toast.success("Saved", { duration: 1500 }),
    onError: () => toast.error("Failed to save"),
  });

  const submitMutation = useMutation({
    mutationFn: () => evaluationsService.submitSelf(evaluation!.id),
    onSuccess: () => {
      toast.success("Self-evaluation submitted");
      queryClient.invalidateQueries({ queryKey: queryKeys.evaluations.my() });
      setConfirmSubmit(false);
    },
    onError: () => toast.error("Failed to submit"),
  });

  const evaluation = evalRes?.data;
  const isDraft = evaluation?.status === "DRAFT";

  const debouncedSave = useCallback(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const answers = Array.from(localAnswersRef.current.entries())
        .filter(([, a]) => a.selfScore != null)
        .map(([questionId, a]) => ({
          questionId,
          score: a.selfScore as number,
          remarks: (a.selfRemarks as string) || undefined,
        }));
      if (answers.length > 0) saveMutation.mutate(answers);
    }, 1500);
  }, [saveMutation]);

  const handleScoreChange = useCallback(
    (questionId: string, _field: string, value: number) => {
      const existing = localAnswersRef.current.get(questionId) || {};
      localAnswersRef.current.set(questionId, { ...existing, selfScore: value });
      setAnswersVersion((v) => v + 1);
      debouncedSave();
    },
    [debouncedSave],
  );

  const handleRemarksChange = useCallback(
    (questionId: string, _field: string, value: string) => {
      const existing = localAnswersRef.current.get(questionId) || {};
      localAnswersRef.current.set(questionId, { ...existing, selfRemarks: value });
      setAnswersVersion((v) => v + 1);
      debouncedSave();
    },
    [debouncedSave],
  );

  if (isLoading) {
    return <div className="flex justify-center py-20"><span className="section-label text-muted-foreground">Loading...</span></div>;
  }

  if (!evaluation) {
    return (
      <>
        <PageHeader title="My Evaluation" description="No active evaluation cycle" />
        <div className="bg-white dark:bg-card rounded-3xl premium-shadow p-10 border border-border/40 text-center">
          <p className="text-sm font-light text-muted-foreground">There is no active evaluation cycle for you at this time.</p>
        </div>
      </>
    );
  }

  const sheets = groupAnswersBySheet(evaluation.answers);
  const orderedSheets = sortSheetsForFlow(sheets);

  const sheetsWithLocal = orderedSheets.map((s) => ({
    ...s,
    questions: s.questions.map((q) => {
      const local = localAnswersRef.current.get(q.questionId);
      return {
        ...q,
        selfScore: local?.selfScore ?? q.selfScore,
        selfRemarks: local?.selfRemarks ?? q.selfRemarks,
      };
    }),
  }));

  const maxScore = sheetsWithLocal[0]?.maxScore || 10;

  const selfScores = evaluation.answers.filter((a) => a.selfScore != null).map((a) => a.selfScore!);
  const selfAvg = selfScores.length > 0 ? selfScores.reduce((a, b) => a + b, 0) / selfScores.length : null;
  const totalWeight = sheetsWithLocal.reduce((sum, s) => sum + s.weight, 0);

  // Populate local answers ref from server data on first render
  if (localAnswersRef.current.size === 0 && evaluation.answers.length > 0) {
    evaluation.answers.forEach((a) => {
      localAnswersRef.current.set(a.question.id, {
        selfScore: a.selfScore,
        selfRemarks: a.selfRemarks,
      });
    });
    setAnswersVersion((v) => v + 1);
  }

  const hasMultipleSheets = sheetsWithLocal.length > 1;
  const currentSheet = sheetsWithLocal[activeSheetIndex] ?? sheetsWithLocal[0];

  return (
    <>
      <PageHeader
        title="My Evaluation"
        description={evaluation.cycle.name}
        action={<StatusBadge status={evaluation.status} />}
      />

      <EvaluationSummaryCards
        selfAvg={selfAvg}
        managerAvg={null}
        totalWeight={totalWeight}
        finalScore={null}
        maxScore={maxScore}
        showManager={false}
        showFinal={false}
      />

      {sheetsWithLocal.length > 0 && currentSheet && (
        <div className="space-y-6">
          {hasMultipleSheets && (
            <div className="flex items-center justify-between mb-2">
              <div className="flex flex-wrap gap-2">
                {sheetsWithLocal.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveSheetIndex(idx)}
                    className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-light border transition-colors ${
                      idx === activeSheetIndex
                        ? "bg-accent border-accent text-foreground"
                        : "bg-background border-border text-muted-foreground hover:border-accent/60"
                    }`}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-muted-foreground">
                Sheet {activeSheetIndex + 1} of {sheetsWithLocal.length}
              </span>
            </div>
          )}

          <EvaluationSheetView
            sheet={currentSheet}
            questions={currentSheet.questions}
            index={activeSheetIndex}
            mode={isDraft ? "employee-edit" : "employee-readonly"}
            onScoreChange={isDraft ? handleScoreChange : undefined}
            onRemarksChange={isDraft ? handleRemarksChange : undefined}
          />
        </div>
      )}

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {hasMultipleSheets && (
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              disabled={activeSheetIndex === 0}
              onClick={() => setActiveSheetIndex((idx) => Math.max(0, idx - 1))}
              className="rounded-full text-xs tracking-wider uppercase font-light"
            >
              Previous
            </Button>
            <Button
              variant="outline"
              disabled={activeSheetIndex === sheetsWithLocal.length - 1}
              onClick={() =>
                setActiveSheetIndex((idx) =>
                  Math.min(sheetsWithLocal.length - 1, idx + 1),
                )
              }
              className="rounded-full text-xs tracking-wider uppercase font-light"
            >
              Next
            </Button>
          </div>
        )}

        {isDraft && (
          <div className="flex justify-end gap-4">
            <Button
              variant="outline"
              onClick={() => {
                const answers = Array.from(localAnswersRef.current.entries())
                  .filter(([, a]) => a.selfScore != null)
                  .map(([questionId, a]) => ({
                    questionId,
                    score: a.selfScore as number,
                    remarks: (a.selfRemarks as string) || undefined,
                  }));
                if (answers.length > 0) saveMutation.mutate(answers);
              }}
              disabled={saveMutation.isPending}
              className="rounded-full text-xs tracking-wider uppercase font-light"
            >
              {saveMutation.isPending ? "Saving..." : "Save Draft"}
            </Button>
            {sheetsWithLocal.length === 0 || activeSheetIndex === sheetsWithLocal.length - 1 ? (
              <Button
                onClick={() => setConfirmSubmit(true)}
                className="rounded-full text-xs tracking-wider uppercase font-light"
              >
                Submit Evaluation
              </Button>
            ) : null}
          </div>
        )}
      </div>

      <AlertDialog open={confirmSubmit} onOpenChange={setConfirmSubmit}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Submit Self-Evaluation</AlertDialogTitle>
            <AlertDialogDescription>
              Once submitted, you will not be able to edit your scores or remarks. Your evaluation will be sent to your line manager for review.
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
    id: string;
    name: string;
    weight: number;
    minScore: number;
    maxScore: number;
    sortOrder: number;
    questions: Array<{
      questionId: string;
      questionText: string;
      category: string | null | undefined;
      weight: number;
      sortOrder: number;
      selfScore: number | null;
      selfRemarks: string | null;
      managerScore: number | null;
      managerRemarks: string | null;
      finalScore: number | null;
    }>;
  }>();

  for (const answer of answers) {
    const sheet = answer.question.sheet;
    if (!sheet) continue;

    if (!map.has(sheet.id)) {
      map.set(sheet.id, {
        id: sheet.id,
        name: sheet.name,
        weight: sheet.weight,
        minScore: sheet.minScore,
        maxScore: sheet.maxScore,
        sortOrder: sheet.sortOrder,
        questions: [],
      });
    }

    map.get(sheet.id)!.questions.push({
      questionId: answer.question.id,
      questionText: answer.question.text,
      category: answer.question.category,
      weight: answer.question.weight ?? 10,
      sortOrder: answer.question.sortOrder ?? 0,
      selfScore: answer.selfScore,
      selfRemarks: answer.selfRemarks,
      managerScore: answer.managerScore,
      managerRemarks: answer.managerRemarks,
      finalScore: answer.finalScore,
    });
  }

  return Array.from(map.values()).sort((a, b) => a.sortOrder - b.sortOrder);
}

function sortSheetsForFlow<T extends { name: string }>(sheets: T[]): T[] {
  if (sheets.length <= 1) return sheets;

  const generalIndex = sheets.findIndex(
    (s) => s.name.trim().toLowerCase() === "general",
  );
  if (generalIndex <= 0) return sheets;

  const copy = [...sheets];
  const [general] = copy.splice(generalIndex, 1);
  copy.unshift(general);
  return copy;
}
