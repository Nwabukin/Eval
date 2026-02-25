"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { reportsService } from "@/services/reports.service";
import { evaluationsService } from "@/services/evaluations.service";
import { cyclesService } from "@/services/cycles.service";
import { queryKeys } from "@/lib/query-keys";
import { formatDate, getStatusLabel } from "@/lib/utils";
import { UserRole } from "@/types/shared";
import { StatCard } from "@/components/domain/stat-card";

export default function DashboardPage() {
  const user = useCurrentUser();
  const router = useRouter();

  const { data: dashboardRes } = useQuery({
    queryKey: queryKeys.reports.dashboard(),
    queryFn: () => reportsService.dashboard(),
    enabled: !!user && user.role !== UserRole.EMPLOYEE,
  });

  const { data: myEvalRes } = useQuery({
    queryKey: queryKeys.evaluations.my(),
    queryFn: () => evaluationsService.my(),
    enabled: user?.role === UserRole.EMPLOYEE,
  });

  const { data: cyclesRes } = useQuery({
    queryKey: queryKeys.cycles.list(),
    queryFn: () => cyclesService.list(),
  });

  const stats = dashboardRes?.data;
  const myEval = myEvalRes?.data;
  const cycles = cyclesRes?.data || [];
  const activeCycle = cycles.find((c) => c.status === "OPEN");

  const firstName = user?.firstName || "there";
  const isEmployee = user?.role === UserRole.EMPLOYEE;

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const getProgress = () => {
    if (!myEval) return 0;
    switch (myEval.status) {
      case "DRAFT": return 20;
      case "SUBMITTED_TO_MANAGER": return 50;
      case "SUBMITTED_TO_CALIBRATION": return 75;
      case "FINALIZED": return 100;
      default: return 0;
    }
  };

  const getStepState = (step: "self" | "manager" | "calibration") => {
    if (!myEval) return "pending";
    const status = myEval.status;
    if (step === "self") {
      return status === "DRAFT" ? "active" : "complete";
    }
    if (step === "manager") {
      if (status === "DRAFT") return "pending";
      if (status === "SUBMITTED_TO_MANAGER") return "active";
      return "complete";
    }
    if (status === "DRAFT" || status === "SUBMITTED_TO_MANAGER") return "pending";
    if (status === "SUBMITTED_TO_CALIBRATION") return "active";
    return "complete";
  };

  return (
    <>
      <section className="mb-16">
        <h2 className="font-serif text-4xl text-foreground leading-tight">
          {getGreeting()}, {firstName}.
        </h2>
        <p className="text-muted-foreground font-light mt-3 tracking-wide text-lg">
          {isEmployee
            ? activeCycle
              ? `Your ${activeCycle.name} is currently underway.`
              : "No active evaluation cycle at this time."
            : activeCycle
              ? `The ${activeCycle.name} cycle is in progress.`
              : "No active evaluation cycle."}
        </p>
      </section>

      {isEmployee ? (
        <EmployeeDashboard
          myEval={myEval}
          activeCycle={activeCycle}
          cycles={cycles}
          progress={getProgress()}
          getStepState={getStepState}
          onContinue={() => router.push("/evaluations/my")}
        />
      ) : (
        <AdminDashboard stats={stats} activeCycle={activeCycle} role={user?.role} />
      )}
    </>
  );
}

function EmployeeDashboard({
  myEval,
  activeCycle,
  cycles,
  progress,
  getStepState,
  onContinue,
}: {
  myEval: ReturnType<typeof Object> | undefined | null;
  activeCycle: ReturnType<typeof Object> | undefined | null;
  cycles: Array<{ id: string; name: string; status: string; endDate: string }>;
  progress: number;
  getStepState: (step: "self" | "manager" | "calibration") => string;
  onContinue: () => void;
}) {
  const completedCycles = cycles.filter((c) => c.status === "CLOSED");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8 space-y-12">
        {/* Active Cycle Card */}
        {activeCycle && (
          <div className="glass-card rounded-3xl premium-shadow p-10 relative overflow-hidden border border-white/40 dark:border-border/40">
            <div className="flex justify-between items-start mb-12">
              <div>
                <span className="section-label text-primary mb-3 block">Current Milestone</span>
                <h3 className="text-2xl font-light text-foreground">
                  {(activeCycle as { name: string }).name}
                </h3>
                <p className="text-xs text-muted-foreground mt-2 font-light">
                  {formatDate((activeCycle as { startDate: string }).startDate)} — {formatDate((activeCycle as { endDate: string }).endDate)}
                </p>
              </div>
              <div className="text-right">
                <span className="text-4xl font-extralight text-slate-300 dark:text-slate-600">
                  {progress}<span className="text-sm ml-1">%</span>
                </span>
              </div>
            </div>

            <div className="space-y-8">
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-[1px] relative">
                <div
                  className="absolute top-0 left-0 h-[1px] bg-primary transition-all duration-1000"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex justify-between">
                {(["self", "manager", "calibration"] as const).map((step) => {
                  const state = getStepState(step);
                  const labels = { self: "Self Evaluation", manager: "Manager Review", calibration: "Calibration" };
                  return (
                    <div key={step} className={`flex flex-col items-center ${state === "pending" ? "opacity-30" : ""}`}>
                      <span className={`text-[10px] uppercase tracking-widest mb-2 ${state === "active" || state === "complete" ? "text-primary" : "text-muted-foreground"}`}>
                        {labels[step]}
                      </span>
                      <div className={`w-2 h-2 rounded-full ${state === "active" ? "bg-primary animate-pulse" : state === "complete" ? "bg-primary" : "bg-slate-300 dark:bg-slate-600"}`} />
                    </div>
                  );
                })}
              </div>
            </div>

            {myEval && (myEval as { status: string }).status === "DRAFT" && (
              <div className="mt-12 flex justify-end">
                <button
                  onClick={onContinue}
                  className="border border-border hover:border-slate-400 dark:hover:border-slate-500 text-muted-foreground px-8 py-3 rounded-full text-xs font-light tracking-widest uppercase transition-all duration-300"
                >
                  Continue Evaluation
                </button>
              </div>
            )}
          </div>
        )}

        {/* Alerts Card */}
        <div className="bg-white dark:bg-card rounded-3xl premium-shadow p-10 border border-border/40">
          <div className="flex items-center justify-between mb-8">
            <h3 className="section-label text-muted-foreground">Alerts</h3>
            <span className="text-[10px] text-slate-300 cursor-pointer hover:text-primary transition-colors uppercase tracking-widest">
              Clear All
            </span>
          </div>
          <div className="space-y-8">
            {activeCycle ? (
              <>
                <AlertItem
                  text="Self-Evaluation submission is open for the current cycle."
                  priority="Info"
                  time="Active"
                  dot="blue"
                />
                <AlertItem
                  text={`Cycle ends ${formatDate((activeCycle as { endDate: string }).endDate)}.`}
                  priority="Deadline"
                  time="Upcoming"
                  dot="slate"
                />
              </>
            ) : (
              <p className="text-sm font-light text-muted-foreground">No active alerts</p>
            )}
          </div>
        </div>
      </div>

      {/* History Sidebar */}
      <div className="lg:col-span-4">
        <div className="bg-white dark:bg-card rounded-3xl premium-shadow p-10 border border-border/40 sticky top-28">
          <div className="mb-10">
            <h3 className="section-label text-muted-foreground">History</h3>
            <p className="text-[10px] text-slate-300 mt-1 uppercase tracking-widest">
              Previous Cycles
            </p>
          </div>
          <div className="space-y-6">
            {completedCycles.length === 0 && (
              <p className="text-sm font-light text-muted-foreground">No completed cycles</p>
            )}
            {completedCycles.slice(0, 5).map((cycle, i) => (
              <div
                key={cycle.id}
                className={`flex justify-between items-center group cursor-pointer py-2 ${i > 0 ? "border-t border-border/40 pt-6" : ""}`}
              >
                <div>
                  <p className="text-sm font-light text-foreground">{cycle.name}</p>
                  <p className="text-[10px] text-muted-foreground tracking-tighter uppercase">
                    Completed {formatDate(cycle.endDate)}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <ChevronRight className="h-4 w-4 text-slate-200 dark:text-slate-600 group-hover:text-muted-foreground transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminDashboard({
  stats,
  activeCycle,
  role,
}: {
  stats: ReturnType<typeof Object> | undefined | null;
  activeCycle: ReturnType<typeof Object> | undefined | null;
  role: UserRole | undefined;
}) {
  const s = stats as {
    evaluations: {
      draft: number;
      submittedToManager: number;
      submittedToCalibration: number;
      finalized: number;
    };
    totalEmployees: number;
    completionRate: number;
    averages: { self: number; manager: number; final: number };
  } | null;

  const showCompanyTotals = role === UserRole.ADMIN;

  return (
    <div className="space-y-12">
      {activeCycle && (
        <div className="glass-card rounded-3xl premium-shadow p-10 border border-white/40 dark:border-border/40">
          <span className="section-label text-primary mb-3 block">Active Cycle</span>
          <h3 className="text-2xl font-light text-foreground">
            {(activeCycle as { name: string }).name}
          </h3>
          <p className="text-xs text-muted-foreground mt-2 font-light">
            {formatDate((activeCycle as { startDate: string }).startDate)} —{" "}
            {formatDate((activeCycle as { endDate: string }).endDate)}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Draft" value={s?.evaluations.draft ?? 0} subtitle="Not yet submitted" />
        <StatCard
          label="Manager Review"
          value={s?.evaluations.submittedToManager ?? 0}
          subtitle="Awaiting review"
        />
        <StatCard
          label="Calibration"
          value={s?.evaluations.submittedToCalibration ?? 0}
          subtitle="In calibration"
        />
        <StatCard label="Finalized" value={s?.evaluations.finalized ?? 0} subtitle="Complete" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {showCompanyTotals && (
          <StatCard label="Total Employees" value={s?.totalEmployees ?? 0} />
        )}
        <StatCard label="Completion Rate" value={`${Math.round(s?.completionRate ?? 0)}%`} />
      </div>
    </div>
  );
}

function AlertItem({ text, priority, time, dot }: { text: string; priority: string; time: string; dot: "blue" | "slate" }) {
  return (
    <div className="flex gap-6 items-start group">
      <div className={`w-1 h-1 mt-2 rounded-full ${dot === "blue" ? "bg-blue-400" : "bg-slate-200 dark:bg-slate-600"} group-hover:scale-150 transition-transform`} />
      <div className="flex-1">
        <p className="text-sm font-light text-foreground">{text}</p>
        <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-tighter">{priority}</p>
      </div>
      <span className="text-[10px] text-slate-300 uppercase tracking-widest font-light">{time}</span>
    </div>
  );
}
