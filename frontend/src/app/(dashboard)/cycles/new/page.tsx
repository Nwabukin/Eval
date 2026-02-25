"use client";

import { useRouter } from "next/navigation";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";
import { zodResolver } from "@hookform/resolvers/zod";
import { cyclesService } from "@/services/cycles.service";
import { usersService } from "@/services/users.service";
import { queryKeys } from "@/lib/query-keys";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { UserRole } from "@/types/shared";
import { useState } from "react";

const createCycleSchema = z.object({
  name: z.string().min(1),
  startDate: z.string().min(1),
  endDate: z.string().min(1),
});

type CreateCycleForm = z.infer<typeof createCycleSchema>;

export default function NewCyclePage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [selectedCalibrators, setSelectedCalibrators] = useState<string[]>([]);

  const { data: calibratorsRes } = useQuery({
    queryKey: queryKeys.users.list({ role: UserRole.CALIBRATION }),
    queryFn: () => usersService.list({ role: UserRole.CALIBRATION, limit: 100 }),
  });

  const createMutation = useMutation({
    mutationFn: (data: CreateCycleForm) =>
      cyclesService.create({
        ...data,
        calibrationMemberIds: selectedCalibrators.length > 0 ? selectedCalibrators : undefined,
      }),
    onSuccess: () => {
      toast.success("Cycle created");
      queryClient.invalidateQueries({ queryKey: queryKeys.cycles.all });
      router.push("/cycles");
    },
    onError: () => toast.error("Failed to create cycle"),
  });

  const { register, handleSubmit, formState: { errors } } = useForm<CreateCycleForm>({
    resolver: zodResolver(createCycleSchema),
  });

  const calibrators = calibratorsRes?.data || [];

  const toggleCalibrator = (id: string) => {
    setSelectedCalibrators((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id],
    );
  };

  return (
    <>
      <PageHeader title="New Cycle" description="Create a new evaluation cycle" />

      <form
        onSubmit={handleSubmit((data) => createMutation.mutate(data))}
        className="bg-white dark:bg-card rounded-3xl premium-shadow p-10 border border-border/40 max-w-2xl space-y-6"
      >
        <div className="space-y-2">
          <Label className="section-label text-muted-foreground">Cycle Name</Label>
          <Input {...register("name")} placeholder="Q3 2025 Performance Review" className="rounded-xl h-10" />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="section-label text-muted-foreground">Start Date</Label>
            <Input {...register("startDate")} type="date" className="rounded-xl h-10" />
            {errors.startDate && <p className="text-xs text-destructive">{errors.startDate.message}</p>}
          </div>
          <div className="space-y-2">
            <Label className="section-label text-muted-foreground">End Date</Label>
            <Input {...register("endDate")} type="date" className="rounded-xl h-10" />
            {errors.endDate && <p className="text-xs text-destructive">{errors.endDate.message}</p>}
          </div>
        </div>

        {calibrators.length > 0 && (
          <div className="space-y-3">
            <Label className="section-label text-muted-foreground">Calibration Panel</Label>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {calibrators.map((c) => (
                <label key={c.id} className="flex items-center space-x-3 py-2 cursor-pointer">
                  <Checkbox
                    checked={selectedCalibrators.includes(c.id)}
                    onCheckedChange={() => toggleCalibrator(c.id)}
                  />
                  <span className="text-sm font-light">{c.firstName} {c.lastName}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-end space-x-4 pt-4">
          <Button type="button" variant="outline" onClick={() => router.back()} className="rounded-full text-xs tracking-wider uppercase font-light">
            Cancel
          </Button>
          <Button type="submit" disabled={createMutation.isPending} className="rounded-full text-xs tracking-wider uppercase font-light">
            {createMutation.isPending ? "Creating..." : "Create Cycle"}
          </Button>
        </div>
      </form>
    </>
  );
}
