"use client";

import { use } from "react";
import { useQuery } from "@tanstack/react-query";
import { evaluationsService } from "@/services/evaluations.service";
import { queryKeys } from "@/lib/query-keys";
import { useCurrentUser } from "@/hooks/use-current-user";
import { PageHeader } from "@/components/layout/page-header";
import { EvaluationSheetView, EvaluationSummaryCards } from "@/components/domain/evaluation-sheet-view";
import { StatusBadge } from "@/components/domain/status-badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserRole, EvaluationStatus } from "@/types/shared";
import type { EvaluationAnswer } from "@/types/shared";

export default function EvaluationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const user = useCurrentUser();

  const { data: evalRes, isLoading } = useQuery({
    queryKey: queryKeys.evaluations.detail(id),
    queryFn: () => evaluationsService.getById(id),
  });

  if (isLoading) {
    return <div className="flex justify-center py-20"><span className="section-label text-muted-foreground">Loading...</span></div>;
  }

  const evaluation = evalRes?.data;
  if (!evaluation) {
    return <div className="flex justify-center py-20"><span className="section-label text-muted-foreground">Evaluation not found</span></div>;
  }

  const role = user?.role as UserRole;
  const isFinalized = evaluation.status === EvaluationStatus.FINALIZED;

  // Determine view mode based on role
  const viewMode = isFinalized
    ? "finalized" as const
    : role === UserRole.EMPLOYEE
      ? "employee-readonly" as const
      : role === UserRole.CALIBRATION
        ? "finalized" as const
        : "finalized" as const;

  const showManager = role !== UserRole.EMPLOYEE || isFinalized;
  const showFinal = isFinalized;

  const sheets = groupAnswersBySheet(evaluation.answers);
  const maxScore = sheets[0]?.maxScore || 10;

  const selfScores = evaluation.answers.filter((a) => a.selfScore != null).map((a) => a.selfScore!);
  const managerScores = evaluation.answers.filter((a) => a.managerScore != null).map((a) => a.managerScore!);
  const finalScores = evaluation.answers.filter((a) => a.finalScore != null).map((a) => a.finalScore!);

  const avg = (arr: number[]) => arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : null;

  return (
    <>
      <PageHeader
        title={`${evaluation.employee.firstName} ${evaluation.employee.lastName}`}
        description={evaluation.cycle.name}
        action={<StatusBadge status={evaluation.status} />}
      />

      <EvaluationSummaryCards
        selfAvg={avg(selfScores)}
        managerAvg={showManager ? avg(managerScores) : null}
        totalWeight={sheets.reduce((sum, s) => sum + s.weight, 0)}
        finalScore={showFinal ? avg(finalScores) : null}
        maxScore={maxScore}
        showManager={showManager}
        showFinal={showFinal}
      />

      {sheets.length > 1 ? (
        <Tabs defaultValue={sheets[0]?.id} className="space-y-6">
          <TabsList className="bg-white dark:bg-card rounded-full premium-shadow border border-border/40 p-1 flex-wrap h-auto">
            {sheets.map((s) => (
              <TabsTrigger key={s.id} value={s.id} className="rounded-full text-xs tracking-wider uppercase font-light data-[state=active]:bg-accent px-4">
                {s.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {sheets.map((s, i) => (
            <TabsContent key={s.id} value={s.id}>
              <EvaluationSheetView sheet={s} questions={s.questions} index={i} mode={viewMode} />
            </TabsContent>
          ))}
        </Tabs>
      ) : sheets.length === 1 ? (
        <EvaluationSheetView sheet={sheets[0]} questions={sheets[0].questions} index={0} mode={viewMode} />
      ) : (
        <div className="bg-white dark:bg-card rounded-3xl premium-shadow p-10 border border-border/40 text-center">
          <p className="text-sm font-light text-muted-foreground">No evaluation data available</p>
        </div>
      )}
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
