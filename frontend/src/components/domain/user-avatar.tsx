import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";

interface UserAvatarProps {
  firstName: string;
  lastName: string;
  className?: string;
}

export function UserAvatar({ firstName, lastName, className }: UserAvatarProps) {
  return (
    <Avatar className={className}>
      <AvatarFallback className="bg-slate-100 dark:bg-slate-700 text-xs font-medium">
        {getInitials(firstName, lastName)}
      </AvatarFallback>
    </Avatar>
  );
}
