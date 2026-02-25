import { cn, getStatusColor, getStatusLabel } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-[10px] font-medium tracking-widest uppercase",
        getStatusColor(status),
        className,
      )}
    >
      {getStatusLabel(status)}
    </span>
  );
}
