"use client";

import { useState, useCallback } from "react";
import { User, UserMinus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { EvaluationAnswer } from "@/types/shared";

type ViewMode = "employee-edit" | "employee-readonly" | "manager-edit" | "calibration-edit" | "finalized";

interface SheetSection {
  id: string;
  name: string;
  weight: number;
  minScore: number;
  maxScore: number;
  sortOrder: number;
}

interface QuestionAnswer {
  questionId: string;
  questionText: string;
  category?: string | null;
  weight: number;
  sortOrder: number;
  selfScore: number | null;
  selfRemarks: string | null;
  managerScore: number | null;
  managerRemarks: string | null;
  finalScore: number | null;
}

interface EvaluationSheetViewProps {
  sheet: SheetSection;
  questions: QuestionAnswer[];
  index: number;
  mode: ViewMode;
  onScoreChange?: (questionId: string, field: "selfScore" | "managerScore" | "finalScore", value: number) => void;
  onRemarksChange?: (questionId: string, field: "selfRemarks" | "managerRemarks", value: string) => void;
}

export function EvaluationSheetView({
  sheet,
  questions,
  index,
  mode,
  onScoreChange,
  onRemarksChange,
}: EvaluationSheetViewProps) {
  const showSelf = true;
  const showManager = mode !== "employee-edit" && mode !== "employee-readonly";
  const showCalibration = mode === "calibration-edit" || mode === "finalized";

  const selfEditable = mode === "employee-edit";
  const managerEditable = mode === "manager-edit";
  const calibrationEditable = mode === "calibration-edit";

  const gridCols = showCalibration
    ? "lg:grid-cols-12"
    : showManager
      ? "lg:grid-cols-10"
      : "lg:grid-cols-8";

  const kpiCols = "lg:col-span-4";
  const selfCols = showManager ? "lg:col-span-3" : "lg:col-span-4";
  const managerCols = showCalibration ? "lg:col-span-3" : "lg:col-span-3";
  const calibrationCols = "lg:col-span-2";

  return (
    <div className="bg-white dark:bg-card rounded-2xl premium-shadow border border-border/40 overflow-hidden">
      {/* Sheet Header */}
      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-border/40 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/40 text-primary font-bold text-sm">
            {index + 1}
          </span>
          <h3 className="font-medium text-foreground uppercase tracking-wide text-sm">{sheet.name}</h3>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-xs font-medium text-muted-foreground">
          <span>Weight:</span>
          <span className="text-primary">{sheet.weight}</span>
        </div>
      </div>

      {/* Questions */}
      <div className="divide-y divide-border/40">
        {questions
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map((q) => (
            <div
              key={q.questionId}
              className={`p-0 lg:p-6 grid grid-cols-1 ${gridCols} gap-0 lg:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-border/40`}
            >
              {/* Objective + KPIs */}
              <div className={`${kpiCols} p-4 lg:p-0 space-y-2`}>
                <label className="section-label text-muted-foreground block">
                  {q.category || "Success Criteria"}
                </label>
                {q.questionText && (
                  <ul className="list-disc list-inside space-y-1 text-sm text-foreground">
                    {q.questionText
                      .split(/\r?\n/)
                      .map((line) => line.trim())
                      .filter((line) => line.length > 0)
                      .map((line, idx) => (
                        <li key={idx}>{line.replace(/^•\s*/, "")}</li>
                      ))}
                  </ul>
                )}
                <p className="text-[10px] text-muted-foreground">Weight: {q.weight}</p>
              </div>

              {/* Self Assessment */}
              {showSelf && (
                <div className={`${selfCols} p-4 lg:p-0 lg:pl-6 space-y-3 ${selfEditable ? "bg-blue-50/30 dark:bg-blue-900/10 lg:bg-transparent" : ""}`}>
                  <label className="section-label text-primary flex items-center gap-2">
                    <User className="h-3 w-3" />
                    Self Assessment
                  </label>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">Score</label>
                    {selfEditable ? (
                      <Input
                        type="number"
                        min={sheet.minScore}
                        max={sheet.maxScore}
                        step="0.5"
                        value={q.selfScore ?? ""}
                        onChange={(e) => onScoreChange?.(q.questionId, "selfScore", Number(e.target.value))}
                        className="rounded-lg h-9 w-24"
                        placeholder={`${sheet.minScore}-${sheet.maxScore}`}
                      />
                    ) : (
                      <p className="font-medium text-foreground text-lg">
                        {q.selfScore ?? "—"}
                        <span className="text-xs text-muted-foreground font-normal">/{sheet.maxScore}</span>
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">Remarks</label>
                    {selfEditable ? (
                      <Textarea
                        value={q.selfRemarks ?? ""}
                        onChange={(e) => onRemarksChange?.(q.questionId, "selfRemarks", e.target.value)}
                        className="rounded-lg text-sm min-h-[60px]"
                        placeholder="Your comments..."
                      />
                    ) : (
                      <p className="text-sm text-foreground italic border-l-2 border-primary/30 pl-3 py-1">
                        {q.selfRemarks || "No remarks"}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Manager Review */}
              {showManager && (
                <div className={`${managerCols} p-4 lg:p-0 lg:pl-6 space-y-3`}>
                  <label className="section-label text-muted-foreground flex items-center gap-2">
                    <UserMinus className="h-3 w-3" />
                    Manager Review
                  </label>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">Manager Score</label>
                    {managerEditable ? (
                      <Input
                        type="number"
                        min={sheet.minScore}
                        max={sheet.maxScore}
                        step="0.5"
                        value={q.managerScore ?? ""}
                        onChange={(e) => onScoreChange?.(q.questionId, "managerScore", Number(e.target.value))}
                        className="rounded-lg h-9 w-24"
                        placeholder={`${sheet.minScore}-${sheet.maxScore}`}
                      />
                    ) : (
                      <div className="bg-slate-50 dark:bg-slate-800 rounded px-3 py-2 text-sm font-medium text-foreground inline-block">
                        {q.managerScore ?? "—"}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">Manager Remarks</label>
                    {managerEditable ? (
                      <Textarea
                        value={q.managerRemarks ?? ""}
                        onChange={(e) => onRemarksChange?.(q.questionId, "managerRemarks", e.target.value)}
                        className="rounded-lg text-sm min-h-[60px]"
                        placeholder="Manager comments..."
                      />
                    ) : (
                      <p className="text-sm text-foreground">
                        {q.managerRemarks || "No remarks"}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Calibration Score */}
              {showCalibration && (
                <div className={`${calibrationCols} p-4 lg:p-0 lg:pl-6 space-y-3`}>
                  <label className="section-label text-muted-foreground">Calibration</label>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">Final Score</label>
                    {calibrationEditable ? (
                      <Input
                        type="number"
                        min={sheet.minScore}
                        max={sheet.maxScore}
                        step="0.5"
                        value={q.finalScore ?? ""}
                        onChange={(e) => onScoreChange?.(q.questionId, "finalScore", Number(e.target.value))}
                        className="rounded-lg h-9 w-24 border-primary/30 bg-primary/5"
                        placeholder={`${sheet.minScore}-${sheet.maxScore}`}
                      />
                    ) : (
                      <div className="bg-primary/10 dark:bg-primary/20 rounded px-3 py-2 text-sm font-bold text-primary inline-block">
                        {q.finalScore ?? "—"}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

interface SummaryCardsProps {
  selfAvg: number | null;
  managerAvg: number | null;
  totalWeight: number;
  finalScore: number | null;
  maxScore: number;
  showManager: boolean;
  showFinal: boolean;
}

export function EvaluationSummaryCards({ selfAvg, managerAvg, totalWeight, finalScore, maxScore, showManager, showFinal }: SummaryCardsProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${showFinal ? 4 : showManager ? 3 : 2} gap-6 mb-8`}>
      <div className="bg-white dark:bg-card p-5 rounded-2xl border border-border/40 premium-shadow flex items-center justify-between">
        <div>
          <p className="section-label text-muted-foreground">Self Rating</p>
          <p className="text-2xl font-bold mt-1 text-foreground">
            {selfAvg?.toFixed(1) ?? "—"}
            <span className="text-sm font-normal text-muted-foreground">/{maxScore}</span>
          </p>
        </div>
        <User className="h-8 w-8 text-blue-400 opacity-80" />
      </div>

      {showManager && (
        <div className="bg-white dark:bg-card p-5 rounded-2xl border border-border/40 premium-shadow flex items-center justify-between">
          <div>
            <p className="section-label text-muted-foreground">Manager Rating</p>
            <p className="text-2xl font-bold mt-1 text-foreground">
              {managerAvg?.toFixed(1) ?? "—"}
              <span className="text-sm font-normal text-muted-foreground">/{maxScore}</span>
            </p>
          </div>
          <UserMinus className="h-8 w-8 text-indigo-400 opacity-80" />
        </div>
      )}

      <div className="bg-white dark:bg-card p-5 rounded-2xl border border-border/40 premium-shadow flex items-center justify-between">
        <div>
          <p className="section-label text-muted-foreground">Total Weight</p>
          <p className="text-2xl font-bold mt-1 text-foreground">{totalWeight}</p>
        </div>
        <div className="h-8 w-8 text-emerald-400 opacity-80 flex items-center justify-center text-2xl font-light">⚖</div>
      </div>

      {showFinal && (
        <div className="bg-gradient-to-br from-primary to-blue-700 p-5 rounded-2xl shadow-md flex items-center justify-between text-white">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-blue-100 font-medium">Final Score</p>
            <p className="text-2xl font-bold mt-1">{finalScore?.toFixed(1) ?? "—"}</p>
          </div>
          <div className="text-3xl opacity-80">★</div>
        </div>
      )}
    </div>
  );
}
