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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { CalibrationMode } from "@/types/shared";
import type { EvaluationAnswer } from "@/types/shared";

export default function CalibratePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const queryClient = useQueryClient();
  const [confirmFinalize, setConfirmFinalize] = useState(false);
  const [answersVersion, setAnswersVersion] = useState(0);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const localAnswersRef = useRef<Map<string, { finalScore?: number }>>(new Map());

  const { data: evalRes, isLoading } = useQuery({
    queryKey: queryKeys.evaluations.detail(id),
    queryFn: () => evaluationsService.getById(id),
  });

  const setModeMutation = useMutation({
    mutationFn: (mode: CalibrationMode) =>
      evaluationsService.setCalibrationMode(id, { mode }),
    onSuccess: () => {
      toast.success("Calibration mode set");
      queryClient.invalidateQueries({ queryKey: queryKeys.evaluations.detail(id) });
    },
    onError: () => toast.error("Failed to set mode"),
  });

  const saveDirectMutation = useMutation({
    mutationFn: (answers: { questionId: string; finalScore: number }[]) =>
      evaluationsService.saveDirectCalibration(id, { answers }),
    onSuccess: () => toast.success("Saved", { duration: 1500 }),
    onError: () => toast.error("Failed to save"),
  });

  const saveIndividualMutation = useMutation({
    mutationFn: (answers: { questionId: string; score: number }[]) =>
      evaluationsService.saveIndividualCalibration(id, { answers }),
    onSuccess: () => toast.success("Saved", { duration: 1500 }),
    onError: () => toast.error("Failed to save"),
  });

  const finalizeMutation = useMutation({
    mutationFn: () => evaluationsService.finalize(id),
    onSuccess: () => {
      toast.success("Evaluation finalized");
      queryClient.invalidateQueries({ queryKey: queryKeys.evaluations.all });
      setConfirmFinalize(false);
      router.push("/evaluations");
    },
    onError: () => toast.error("Failed to finalize"),
  });

  const evaluation = evalRes?.data;
  const isCalibrationStage = evaluation?.status === "SUBMITTED_TO_CALIBRATION";
  const isFinalized = evaluation?.status === "FINALIZED";
  const calibrationMode = evaluation?.calibrationMode;
  const isDirectMode = calibrationMode === CalibrationMode.DIRECT_TEAM;

  const debouncedSave = useCallback(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      const entries = Array.from(localAnswersRef.current.entries())
        .filter(([, a]) => a.finalScore != null);

      if (entries.length === 0) return;

      if (isDirectMode) {
        saveDirectMutation.mutate(
          entries.map(([questionId, a]) => ({ questionId, finalScore: a.finalScore! })),
        );
      } else {
        saveIndividualMutation.mutate(
          entries.map(([questionId, a]) => ({ questionId, score: a.finalScore! })),
        );
      }
    }, 1500);
  }, [isDirectMode, saveDirectMutation, saveIndividualMutation]);

  const handleScoreChange = useCallback(
    (questionId: string, _field: string, value: number) => {
      const existing = localAnswersRef.current.get(questionId) || {};
      localAnswersRef.current.set(questionId, { ...existing, finalScore: value });
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

  // Populate local answers
  if (localAnswersRef.current.size === 0 && evaluation.answers.length > 0) {
    evaluation.answers.forEach((a) => {
      localAnswersRef.current.set(a.question.id, { finalScore: a.finalScore ?? undefined });
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
        finalScore: local?.finalScore ?? q.finalScore,
      };
    }),
  }));

  const maxScore = sheetsWithLocal[0]?.maxScore || 10;

  const selfScores = evaluation.answers.filter((a) => a.selfScore != null).map((a) => a.selfScore!);
  const managerScores = evaluation.answers.filter((a) => a.managerScore != null).map((a) => a.managerScore!);
  const finalScores = sheetsWithLocal
    .flatMap((s) => s.questions)
    .filter((q) => q.finalScore != null)
    .map((q) => q.finalScore!);
  const avg = (arr: number[]) => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : null;

  const viewMode = isCalibrationStage ? "calibration-edit" as const : "finalized" as const;

  return (
    <>
      <PageHeader
        title={`Calibrate: ${evaluation.employee.firstName} ${evaluation.employee.lastName}`}
        description={evaluation.cycle.name}
        action={<StatusBadge status={evaluation.status} />}
      />

      {/* Calibration Mode Selection */}
      {isCalibrationStage && !calibrationMode && (
        <div className="bg-white dark:bg-card rounded-3xl premium-shadow p-8 border border-border/40 mb-8">
          <h3 className="section-label text-muted-foreground mb-4">Select Calibration Mode</h3>
          <p className="text-sm font-light text-muted-foreground mb-6">
            Choose how final scores will be determined for this evaluation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={() => setModeMutation.mutate(CalibrationMode.DIRECT_TEAM)}
              disabled={setModeMutation.isPending}
              className="p-6 rounded-2xl border border-border/40 hover:border-primary/40 transition-all text-left"
            >
              <p className="section-label text-primary mb-2">Direct Team</p>
              <p className="text-sm font-light text-foreground">
                Calibration team enters final scores directly by consensus.
              </p>
            </button>
            <button
              onClick={() => setModeMutation.mutate(CalibrationMode.INDIVIDUAL_AGGREGATE)}
              disabled={setModeMutation.isPending}
              className="p-6 rounded-2xl border border-border/40 hover:border-primary/40 transition-all text-left"
            >
              <p className="section-label text-primary mb-2">Individual Aggregate</p>
              <p className="text-sm font-light text-foreground">
                Each calibrator scores individually; final score is the average.
              </p>
            </button>
          </div>
        </div>
      )}

      {calibrationMode && (
        <div className="mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-medium tracking-widest uppercase text-muted-foreground">
            Mode: {calibrationMode === CalibrationMode.DIRECT_TEAM ? "Direct Team" : "Individual Aggregate"}
          </span>
        </div>
      )}

      <EvaluationSummaryCards
        selfAvg={avg(selfScores)}
        managerAvg={avg(managerScores)}
        totalWeight={sheetsWithLocal.reduce((sum, s) => sum + s.weight, 0)}
        finalScore={avg(finalScores)}
        maxScore={maxScore}
        showManager={true}
        showFinal={true}
      />

      {calibrationMode && (
        <>
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
                    mode={viewMode}
                    onScoreChange={isCalibrationStage ? handleScoreChange : undefined}
                  />
                </TabsContent>
              ))}
            </Tabs>
          ) : sheetsWithLocal.length === 1 ? (
            <EvaluationSheetView
              sheet={sheetsWithLocal[0]}
              questions={sheetsWithLocal[0].questions}
              index={0}
              mode={viewMode}
              onScoreChange={isCalibrationStage ? handleScoreChange : undefined}
            />
          ) : null}

          {isCalibrationStage && (
            <div className="mt-10 flex justify-end space-x-4">
              <Button
                variant="outline"
                onClick={() => {
                  const entries = Array.from(localAnswersRef.current.entries())
                    .filter(([, a]) => a.finalScore != null);
                  if (isDirectMode) {
                    saveDirectMutation.mutate(entries.map(([qId, a]) => ({ questionId: qId, finalScore: a.finalScore! })));
                  } else {
                    saveIndividualMutation.mutate(entries.map(([qId, a]) => ({ questionId: qId, score: a.finalScore! })));
                  }
                }}
                disabled={saveDirectMutation.isPending || saveIndividualMutation.isPending}
                className="rounded-full text-xs tracking-wider uppercase font-light"
              >
                Save Scores
              </Button>
              <Button
                onClick={() => setConfirmFinalize(true)}
                className="rounded-full text-xs tracking-wider uppercase font-light bg-gradient-to-r from-primary to-blue-700"
              >
                Finalize Evaluation
              </Button>
            </div>
          )}
        </>
      )}

      <AlertDialog open={confirmFinalize} onOpenChange={setConfirmFinalize}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Finalize Evaluation</AlertDialogTitle>
            <AlertDialogDescription>
              This will lock all scores permanently and mark the evaluation as complete. The employee will be notified of their final results. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => finalizeMutation.mutate()} disabled={finalizeMutation.isPending}>
              {finalizeMutation.isPending ? "Finalizing..." : "Confirm Finalize"}
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
