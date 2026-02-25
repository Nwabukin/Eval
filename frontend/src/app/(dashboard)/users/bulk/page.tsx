"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usersService } from "@/services/users.service";
import { queryKeys } from "@/lib/query-keys";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { UserRole } from "@/types/shared";

export default function BulkImportPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [csvText, setCsvText] = useState("");

  const bulkMutation = useMutation({
    mutationFn: (text: string) => {
      const lines = text.trim().split("\n").filter((l) => l.trim());
      const users = lines.map((line) => {
        const [email, password, firstName, lastName, role] = line.split(",").map((s) => s.trim());
        return {
          email,
          password,
          firstName,
          lastName,
          role: (role as UserRole) || UserRole.EMPLOYEE,
        };
      });
      return usersService.bulkCreate({ users });
    },
    onSuccess: (res) => {
      toast.success(`Created ${res.data.created} users`);
      if (res.data.errors?.length) {
        res.data.errors.forEach((e) => toast.error(e));
      }
      queryClient.invalidateQueries({ queryKey: queryKeys.users.all });
      router.push("/users");
    },
    onError: () => toast.error("Bulk import failed"),
  });

  return (
    <>
      <PageHeader title="Bulk Import" description="Import multiple users via CSV format" />

      <div className="bg-white dark:bg-card rounded-3xl premium-shadow p-10 border border-border/40 max-w-2xl space-y-6">
        <div className="space-y-2">
          <Label className="section-label text-muted-foreground">CSV Data</Label>
          <p className="text-xs text-muted-foreground font-light mb-2">
            One user per line: email, password, firstName, lastName, role
          </p>
          <Textarea
            value={csvText}
            onChange={(e) => setCsvText(e.target.value)}
            placeholder={"john@company.com,Pass123!,John,Doe,EMPLOYEE\njane@company.com,Pass123!,Jane,Smith,LINE_MANAGER"}
            className="rounded-xl min-h-[200px] font-mono text-sm"
          />
        </div>

        <div className="flex justify-end space-x-4 pt-4">
          <Button type="button" variant="outline" onClick={() => router.back()} className="rounded-full text-xs tracking-wider uppercase font-light">
            Cancel
          </Button>
          <Button
            onClick={() => bulkMutation.mutate(csvText)}
            disabled={!csvText.trim() || bulkMutation.isPending}
            className="rounded-full text-xs tracking-wider uppercase font-light"
          >
            {bulkMutation.isPending ? "Importing..." : "Import Users"}
          </Button>
        </div>
      </div>
    </>
  );
}
