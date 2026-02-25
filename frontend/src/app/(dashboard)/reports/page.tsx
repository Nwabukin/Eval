"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FileSpreadsheet, FileText, FileDown } from "lucide-react";
import { reportsService } from "@/services/reports.service";
import { cyclesService } from "@/services/cycles.service";
import { queryKeys } from "@/lib/query-keys";
import { downloadBlob } from "@/lib/utils";
import { PageHeader } from "@/components/layout/page-header";
import { StatCard } from "@/components/domain/stat-card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export default function ReportsPage() {
  const [selectedCycleId, setSelectedCycleId] = useState<string>("");

  const { data: cyclesRes } = useQuery({
    queryKey: queryKeys.cycles.list(),
    queryFn: () => cyclesService.list(),
  });

  const { data: dashboardRes } = useQuery({
    queryKey: queryKeys.reports.dashboard(selectedCycleId || undefined),
    queryFn: () => reportsService.dashboard(selectedCycleId || undefined),
  });

  const cycles = cyclesRes?.data || [];
  const stats = dashboardRes?.data;

  const handleExport = async (format: "csv" | "excel" | "pdf") => {
    if (!selectedCycleId) {
      toast.error("Please select a cycle first");
      return;
    }
    try {
      const blob =
        format === "csv"
          ? await reportsService.exportCsv(selectedCycleId)
          : format === "excel"
            ? await reportsService.exportExcel(selectedCycleId)
            : await reportsService.exportPdf(selectedCycleId);

      const ext = format === "excel" ? "xlsx" : format;
      const cycle = cycles.find((c) => c.id === selectedCycleId);
      downloadBlob(blob, `evaluations-${cycle?.name || "report"}.${ext}`);
      toast.success(`${format.toUpperCase()} exported`);
    } catch {
      toast.error(`Failed to export ${format}`);
    }
  };

  return (
    <>
      <PageHeader
        title="Reports"
        description="Dashboard statistics and data exports"
        action={
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() => handleExport("csv")}
              className="rounded-full text-xs tracking-wider uppercase font-light"
            >
              <FileDown className="mr-2 h-4 w-4" /> Download CSV
            </Button>
            <Button
              variant="outline"
              onClick={() => handleExport("excel")}
              className="rounded-full text-xs tracking-wider uppercase font-light"
            >
              <FileSpreadsheet className="mr-2 h-4 w-4" /> Download Excel
            </Button>
            <Button
              variant="outline"
              onClick={() => handleExport("pdf")}
              className="rounded-full text-xs tracking-wider uppercase font-light"
            >
              <FileText className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </div>
        }
      />

      <div className="flex items-center space-x-4 mb-10">
        <Select value={selectedCycleId} onValueChange={setSelectedCycleId}>
          <SelectTrigger className="w-64 rounded-xl h-10 bg-white dark:bg-card">
            <SelectValue placeholder="Select cycle" />
          </SelectTrigger>
          <SelectContent>
            {cycles.map((c) => (
              <SelectItem key={c.id} value={c.id}>
                {c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {stats && (
        <div className="space-y-10">
          <div>
            <h3 className="section-label text-muted-foreground mb-4">Evaluation Status</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard label="Draft" value={stats.evaluations.draft} subtitle="Not yet submitted" />
              <StatCard label="Manager Review" value={stats.evaluations.submittedToManager} subtitle="Awaiting review" />
              <StatCard label="Calibration" value={stats.evaluations.submittedToCalibration} subtitle="In calibration" />
              <StatCard label="Finalized" value={stats.evaluations.finalized} subtitle="Complete" />
            </div>
          </div>

          <div>
            <h3 className="section-label text-muted-foreground mb-4">Overview</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard label="Total Employees" value={stats.totalEmployees} />
              <StatCard label="Completion Rate" value={`${Math.round(stats.completionRate)}%`} />
              <StatCard label="Avg Self Score" value={stats.averages.self.toFixed(1)} />
              <StatCard label="Avg Manager Score" value={stats.averages.manager.toFixed(1)} />
            </div>
          </div>

          {stats.averages.final > 0 && (
            <div>
              <h3 className="section-label text-muted-foreground mb-4">Final Scores</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <StatCard label="Total Completed" value={stats.totalCompleted} />
                <StatCard label="Total Pending" value={stats.totalPending} />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
