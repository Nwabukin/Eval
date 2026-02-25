import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  subtitle?: string;
  className?: string;
}

export function StatCard({ label, value, subtitle, className }: StatCardProps) {
  return (
    <div className={cn("bg-white dark:bg-card rounded-3xl premium-shadow p-8 border border-border/40", className)}>
      <span className="section-label text-primary mb-3 block">{label}</span>
      <p className="text-3xl font-extralight text-foreground">{value}</p>
      {subtitle && (
        <p className="text-xs text-muted-foreground mt-2 font-light">{subtitle}</p>
      )}
    </div>
  );
}
