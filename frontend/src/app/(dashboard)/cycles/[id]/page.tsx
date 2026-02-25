"use client";

import { use, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, Trash2, Lock } from "lucide-react";
import { cyclesService } from "@/services/cycles.service";
import { sheetsService } from "@/services/sheets.service";
import { questionsService } from "@/services/questions.service";
import { departmentsService } from "@/services/departments.service";
import { levelsService } from "@/services/levels.service";
import { queryKeys } from "@/lib/query-keys";
import { formatDate } from "@/lib/utils";
import { PageHeader } from "@/components/layout/page-header";
import { StatusBadge } from "@/components/domain/status-badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

export default function CycleDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const queryClient = useQueryClient();

  const { data: cycleRes, isLoading } = useQuery({
    queryKey: queryKeys.cycles.detail(id),
    queryFn: () => cyclesService.getById(id),
  });

  const { data: sheetsRes } = useQuery({
    queryKey: queryKeys.sheets.list({ cycleId: id }),
    queryFn: () => sheetsService.list({ cycleId: id }),
  });

  const { data: depsRes } = useQuery({
    queryKey: queryKeys.departments.list(),
    queryFn: () => departmentsService.list(),
  });

  const { data: levelsRes } = useQuery({
    queryKey: queryKeys.levels.list(),
    queryFn: () => levelsService.list(),
  });

  const closeMutation = useMutation({
    mutationFn: () => cyclesService.close(id),
    onSuccess: () => {
      toast.success("Cycle closed");
      queryClient.invalidateQueries({ queryKey: queryKeys.cycles.all });
    },
    onError: () => toast.error("Failed to close cycle"),
  });

  const cycle = cycleRes?.data;
  const sheets = sheetsRes?.data || [];
  const isClosed = cycle?.status === "CLOSED";

  if (isLoading) {
    return <div className="flex justify-center py-20"><span className="section-label text-muted-foreground">Loading...</span></div>;
  }

  if (!cycle) {
    return <div className="flex justify-center py-20"><span className="section-label text-muted-foreground">Cycle not found</span></div>;
  }

  return (
    <>
      <PageHeader
        title={cycle.name}
        description={`${formatDate(cycle.startDate)} — ${formatDate(cycle.endDate)}`}
        action={
          <div className="flex items-center space-x-3">
            <StatusBadge status={cycle.status} />
            {!isClosed && (
              <Button
                variant="outline"
                onClick={() => closeMutation.mutate()}
                disabled={closeMutation.isPending}
                className="rounded-full text-xs tracking-wider uppercase font-light"
              >
                <Lock className="mr-2 h-3.5 w-3.5" /> Close Cycle
              </Button>
            )}
          </div>
        }
      />

      <Tabs defaultValue="sheets" className="space-y-8">
        <TabsList className="bg-white dark:bg-card rounded-full premium-shadow border border-border/40 p-1">
          <TabsTrigger value="sheets" className="rounded-full text-xs tracking-wider uppercase font-light data-[state=active]:bg-accent">
            Sheets & Questions
          </TabsTrigger>
          <TabsTrigger value="panel" className="rounded-full text-xs tracking-wider uppercase font-light data-[state=active]:bg-accent">
            Calibration Panel
          </TabsTrigger>
        </TabsList>

        <TabsContent value="sheets">
          <SheetsManager cycleId={id} sheets={sheets} departments={depsRes?.data || []} levels={levelsRes?.data || []} disabled={isClosed} />
        </TabsContent>

        <TabsContent value="panel">
          <div className="bg-white dark:bg-card rounded-3xl premium-shadow p-10 border border-border/40">
            <h3 className="section-label text-muted-foreground mb-6">Calibration Members</h3>
            {cycle.calibrationMembers.length === 0 ? (
              <p className="text-sm font-light text-muted-foreground">No calibration members assigned</p>
            ) : (
              <div className="space-y-4">
                {cycle.calibrationMembers.map((m) => (
                  <div key={m.id} className="flex items-center space-x-3 py-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-xs font-medium">
                      {m.user.firstName.charAt(0)}{m.user.lastName.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-light">{m.user.firstName} {m.user.lastName}</p>
                      <p className="text-[10px] text-muted-foreground">{m.user.email}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}

function SheetsManager({
  cycleId,
  sheets,
  departments,
  levels,
  disabled,
}: {
  cycleId: string;
  sheets: Array<{ id: string; name: string; weight: number; minScore: number; maxScore: number; sortOrder: number; departmentId: string; levelId: string }>;
  departments: Array<{ id: string; name: string }>;
  levels: Array<{ id: string; name: string }>;
  disabled: boolean;
}) {
  const queryClient = useQueryClient();
  const [sheetDialog, setSheetDialog] = useState(false);
  const [newSheet, setNewSheet] = useState({ name: "", weight: "100", minScore: "1", maxScore: "10", departmentId: "", levelId: "" });
  const [selectedSheet, setSelectedSheet] = useState<string | null>(null);
  const [questionDialog, setQuestionDialog] = useState(false);
  const [newQuestion, setNewQuestion] = useState({ text: "", category: "", weight: "10" });

  const { data: questionsRes } = useQuery({
    queryKey: queryKeys.questions.list({ sheetId: selectedSheet }),
    queryFn: () => questionsService.list({ sheetId: selectedSheet! }),
    enabled: !!selectedSheet,
  });

  const createSheetMutation = useMutation({
    mutationFn: () =>
      sheetsService.create({
        name: newSheet.name,
        weight: Number(newSheet.weight),
        minScore: Number(newSheet.minScore),
        maxScore: Number(newSheet.maxScore),
        cycleId,
        departmentId: newSheet.departmentId,
        levelId: newSheet.levelId,
      }),
    onSuccess: () => {
      toast.success("Sheet created");
      queryClient.invalidateQueries({ queryKey: queryKeys.sheets.all });
      setSheetDialog(false);
      setNewSheet({ name: "", weight: "100", minScore: "1", maxScore: "10", departmentId: "", levelId: "" });
    },
    onError: () => toast.error("Failed to create sheet"),
  });

  const deleteSheetMutation = useMutation({
    mutationFn: (sheetId: string) => sheetsService.remove(sheetId),
    onSuccess: () => {
      toast.success("Sheet deleted");
      queryClient.invalidateQueries({ queryKey: queryKeys.sheets.all });
      if (selectedSheet) setSelectedSheet(null);
    },
  });

  const createQuestionMutation = useMutation({
    mutationFn: () =>
      questionsService.create({
        text: newQuestion.text,
        category: newQuestion.category || undefined,
        weight: Number(newQuestion.weight),
        sheetId: selectedSheet!,
      }),
    onSuccess: () => {
      toast.success("Question added");
      queryClient.invalidateQueries({ queryKey: queryKeys.questions.all });
      setQuestionDialog(false);
      setNewQuestion({ text: "", category: "", weight: "10" });
    },
    onError: () => toast.error("Failed to add question"),
  });

  const deleteQuestionMutation = useMutation({
    mutationFn: (qId: string) => questionsService.remove(qId),
    onSuccess: () => {
      toast.success("Question deleted");
      queryClient.invalidateQueries({ queryKey: queryKeys.questions.all });
    },
  });

  const questions = questionsRes?.data || [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <span className="section-label text-muted-foreground">Evaluation Sheets</span>
        {!disabled && (
          <Button onClick={() => setSheetDialog(true)} variant="outline" className="rounded-full text-xs tracking-wider uppercase font-light">
            <Plus className="mr-2 h-3.5 w-3.5" /> Add Sheet
          </Button>
        )}
      </div>

      {sheets.length === 0 ? (
        <div className="bg-white dark:bg-card rounded-3xl premium-shadow p-10 border border-border/40 text-center">
          <p className="text-sm font-light text-muted-foreground">No sheets created. Add sheets to define evaluation sections.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {sheets.map((sheet) => (
            <div
              key={sheet.id}
              onClick={() => setSelectedSheet(sheet.id)}
              className={`bg-white dark:bg-card rounded-2xl premium-shadow p-6 border cursor-pointer transition-all ${selectedSheet === sheet.id ? "border-primary/40" : "border-border/40 hover:border-primary/20"}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">{sheet.name}</p>
                  <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-tighter">
                    Score {sheet.minScore}–{sheet.maxScore} · Weight {sheet.weight}
                  </p>
                </div>
                {!disabled && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => { e.stopPropagation(); deleteSheetMutation.mutate(sheet.id); }}
                    className="text-destructive h-6 w-6 p-0"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedSheet && (
        <div className="bg-white dark:bg-card rounded-3xl premium-shadow p-8 border border-border/40">
          <div className="flex items-center justify-between mb-6">
            <span className="section-label text-muted-foreground">Questions</span>
            {!disabled && (
              <Button onClick={() => setQuestionDialog(true)} variant="outline" size="sm" className="rounded-full text-xs tracking-wider uppercase font-light">
                <Plus className="mr-2 h-3 w-3" /> Add Question
              </Button>
            )}
          </div>
          {questions.length === 0 ? (
            <p className="text-sm font-light text-muted-foreground">No questions yet</p>
          ) : (
            <div className="space-y-4">
              {questions.map((q, i) => (
                <div key={q.id} className="flex items-start justify-between py-3 border-b border-border/40 last:border-0">
                  <div className="flex-1">
                    <p className="text-sm font-light text-foreground">{i + 1}. {q.text}</p>
                    {q.category && <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-tighter">{q.category}</p>}
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-[10px] text-muted-foreground">w:{q.weight}</span>
                    {!disabled && (
                      <Button variant="ghost" size="sm" onClick={() => deleteQuestionMutation.mutate(q.id)} className="text-destructive h-6 w-6 p-0">
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <Dialog open={sheetDialog} onOpenChange={setSheetDialog}>
        <DialogContent>
          <DialogHeader><DialogTitle>Add Evaluation Sheet</DialogTitle></DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label className="section-label text-muted-foreground">Name</Label>
              <Input value={newSheet.name} onChange={(e) => setNewSheet({ ...newSheet, name: e.target.value })} className="rounded-xl h-10" placeholder="e.g. General Competencies" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label className="section-label text-muted-foreground">Weight</Label>
                <Input value={newSheet.weight} onChange={(e) => setNewSheet({ ...newSheet, weight: e.target.value })} type="number" className="rounded-xl h-10" />
              </div>
              <div className="space-y-2">
                <Label className="section-label text-muted-foreground">Min Score</Label>
                <Input value={newSheet.minScore} onChange={(e) => setNewSheet({ ...newSheet, minScore: e.target.value })} type="number" className="rounded-xl h-10" />
              </div>
              <div className="space-y-2">
                <Label className="section-label text-muted-foreground">Max Score</Label>
                <Input value={newSheet.maxScore} onChange={(e) => setNewSheet({ ...newSheet, maxScore: e.target.value })} type="number" className="rounded-xl h-10" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="section-label text-muted-foreground">Department</Label>
              <Select value={newSheet.departmentId} onValueChange={(v) => setNewSheet({ ...newSheet, departmentId: v })}>
                <SelectTrigger className="rounded-xl h-10"><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  {departments.map((d) => <SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label className="section-label text-muted-foreground">Level</Label>
              <Select value={newSheet.levelId} onValueChange={(v) => setNewSheet({ ...newSheet, levelId: v })}>
                <SelectTrigger className="rounded-xl h-10"><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  {levels.map((l) => <SelectItem key={l.id} value={l.id}>{l.name}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setSheetDialog(false)} className="rounded-full text-xs tracking-wider uppercase font-light">Cancel</Button>
            <Button onClick={() => createSheetMutation.mutate()} disabled={!newSheet.name || !newSheet.departmentId || !newSheet.levelId} className="rounded-full text-xs tracking-wider uppercase font-light">
              Create
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={questionDialog} onOpenChange={setQuestionDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Question (match Excel template)</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label className="section-label text-muted-foreground">
                Question text (copy exactly from Excel)
              </Label>
              <Textarea
                value={newQuestion.text}
                onChange={(e) => setNewQuestion({ ...newQuestion, text: e.target.value })}
                className="rounded-xl"
                placeholder='e.g. "Work well with team members"'
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="section-label text-muted-foreground">
                  Category (section name from Excel)
                </Label>
                <Input
                  value={newQuestion.category}
                  onChange={(e) => setNewQuestion({ ...newQuestion, category: e.target.value })}
                  className="rounded-xl h-10"
                  placeholder='e.g. TEAMWORK, DESIRED SOFT SKILLS'
                />
              </div>
              <div className="space-y-2">
                <Label className="section-label text-muted-foreground">
                  Weight (from Excel)
                </Label>
                <Input
                  value={newQuestion.weight}
                  onChange={(e) => setNewQuestion({ ...newQuestion, weight: e.target.value })}
                  type="number"
                  className="rounded-xl h-10"
                  placeholder="e.g. 10, 15, 20"
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setQuestionDialog(false)} className="rounded-full text-xs tracking-wider uppercase font-light">Cancel</Button>
            <Button onClick={() => createQuestionMutation.mutate()} disabled={!newQuestion.text} className="rounded-full text-xs tracking-wider uppercase font-light">
              Add
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
