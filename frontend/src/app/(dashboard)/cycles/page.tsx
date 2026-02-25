"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { Plus, ChevronRight } from "lucide-react";
import { cyclesService } from "@/services/cycles.service";
import { queryKeys } from "@/lib/query-keys";
import { formatDate } from "@/lib/utils";
import { PageHeader } from "@/components/layout/page-header";
import { StatusBadge } from "@/components/domain/status-badge";
import { Button } from "@/components/ui/button";

export default function CyclesPage() {
  const router = useRouter();

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.cycles.list(),
    queryFn: () => cyclesService.list(),
  });

  const cycles = data?.data || [];

  return (
    <>
      <PageHeader
        title="Evaluation Cycles"
        description="Manage performance evaluation periods"
        action={
          <Button onClick={() => router.push("/cycles/new")} className="rounded-full text-xs tracking-wider uppercase font-light">
            <Plus className="mr-2 h-4 w-4" /> New Cycle
          </Button>
        }
      />

      {isLoading ? (
        <div className="text-center py-20"><span className="text-sm font-light text-muted-foreground">Loading...</span></div>
      ) : cycles.length === 0 ? (
        <div className="bg-white dark:bg-card rounded-3xl premium-shadow p-10 border border-border/40 text-center">
          <p className="text-sm font-light text-muted-foreground">No cycles created yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cycles.map((cycle) => (
            <div
              key={cycle.id}
              onClick={() => router.push(`/cycles/${cycle.id}`)}
              className="bg-white dark:bg-card rounded-3xl premium-shadow p-8 border border-border/40 cursor-pointer group hover:border-primary/20 transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-light text-foreground">{cycle.name}</h3>
                    <StatusBadge status={cycle.status} />
                  </div>
                  <p className="text-xs text-muted-foreground font-light">
                    {formatDate(cycle.startDate)} — {formatDate(cycle.endDate)}
                  </p>
                  {cycle.calibrationMembers.length > 0 && (
                    <p className="text-[10px] text-muted-foreground mt-2 uppercase tracking-tighter">
                      {cycle.calibrationMembers.length} calibration member{cycle.calibrationMembers.length > 1 ? "s" : ""}
                    </p>
                  )}
                </div>
                <ChevronRight className="h-5 w-5 text-slate-200 dark:text-slate-600 group-hover:text-muted-foreground transition-colors" />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
