"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { levelsService } from "@/services/levels.service";
import { queryKeys } from "@/lib/query-keys";
import { formatDate } from "@/lib/utils";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import type { Level } from "@/types/shared";

export default function LevelsPage() {
  const queryClient = useQueryClient();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Level | null>(null);
  const [name, setName] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.levels.list(),
    queryFn: () => levelsService.list(),
  });

  const createMutation = useMutation({
    mutationFn: () => levelsService.create({ name }),
    onSuccess: () => {
      toast.success("Level created");
      queryClient.invalidateQueries({ queryKey: queryKeys.levels.all });
      closeDialog();
    },
    onError: () => toast.error("Failed to create level"),
  });

  const updateMutation = useMutation({
    mutationFn: () => levelsService.update(editing!.id, { name }),
    onSuccess: () => {
      toast.success("Level updated");
      queryClient.invalidateQueries({ queryKey: queryKeys.levels.all });
      closeDialog();
    },
    onError: () => toast.error("Failed to update level"),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => levelsService.remove(id),
    onSuccess: () => {
      toast.success("Level deleted");
      queryClient.invalidateQueries({ queryKey: queryKeys.levels.all });
      setDeleteId(null);
    },
    onError: () => toast.error("Failed to delete level"),
  });

  const openCreate = () => { setEditing(null); setName(""); setDialogOpen(true); };
  const openEdit = (l: Level) => { setEditing(l); setName(l.name); setDialogOpen(true); };
  const closeDialog = () => { setDialogOpen(false); setEditing(null); setName(""); };

  const levels = data?.data || [];

  return (
    <>
      <PageHeader
        title="Levels"
        description="Manage employee levels"
        action={
          <Button onClick={openCreate} className="rounded-full text-xs tracking-wider uppercase font-light">
            <Plus className="mr-2 h-4 w-4" /> Add Level
          </Button>
        }
      />

      <div className="bg-white dark:bg-card rounded-3xl premium-shadow border border-border/40 overflow-hidden">
        {isLoading ? (
          <div className="p-10 text-center"><span className="text-sm font-light text-muted-foreground">Loading...</span></div>
        ) : levels.length === 0 ? (
          <div className="p-10 text-center"><span className="text-sm font-light text-muted-foreground">No levels yet</span></div>
        ) : (
          <div className="divide-y divide-border/40">
            {levels.map((level) => (
              <div key={level.id} className="flex items-center justify-between px-8 py-5 group">
                <div>
                  <p className="text-sm font-light text-foreground">{level.name}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-tighter mt-1">
                    Created {formatDate(level.createdAt)}
                  </p>
                </div>
                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="ghost" size="sm" onClick={() => openEdit(level)}>
                    <Pencil className="h-3.5 w-3.5" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setDeleteId(level.id)} className="text-destructive">
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{editing ? "Edit Level" : "Add Level"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label className="section-label text-muted-foreground">Name</Label>
              <Input value={name} onChange={(e) => setName(e.target.value)} className="rounded-xl h-10" placeholder="Level name" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={closeDialog} className="rounded-full text-xs tracking-wider uppercase font-light">Cancel</Button>
            <Button
              onClick={() => editing ? updateMutation.mutate() : createMutation.mutate()}
              disabled={!name.trim()}
              className="rounded-full text-xs tracking-wider uppercase font-light"
            >
              {editing ? "Save" : "Create"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Level</AlertDialogTitle>
            <AlertDialogDescription>This will permanently delete this level.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteId && deleteMutation.mutate(deleteId)} className="bg-destructive text-destructive-foreground">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
