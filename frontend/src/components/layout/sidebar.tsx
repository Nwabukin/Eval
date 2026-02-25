"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Building2,
  Layers,
  RotateCcw,
  ClipboardCheck,
  BarChart3,
  Settings,
  FileEdit,
} from "lucide-react";
import { cn, getInitials } from "@/lib/utils";
import { useCurrentUser } from "@/hooks/use-current-user";
import { UserRole } from "@/types/shared";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  roles: UserRole[];
}

const navItems: NavItem[] = [
  { label: "Overview", href: "/", icon: LayoutDashboard, roles: [UserRole.ADMIN, UserRole.EMPLOYEE, UserRole.LINE_MANAGER, UserRole.CALIBRATION] },
  { label: "My Evaluation", href: "/evaluations/my", icon: FileEdit, roles: [UserRole.EMPLOYEE] },
  { label: "Evaluations", href: "/evaluations", icon: ClipboardCheck, roles: [UserRole.ADMIN, UserRole.LINE_MANAGER, UserRole.CALIBRATION] },
  { label: "Users", href: "/users", icon: Users, roles: [UserRole.ADMIN] },
  { label: "Departments", href: "/departments", icon: Building2, roles: [UserRole.ADMIN] },
  { label: "Levels", href: "/levels", icon: Layers, roles: [UserRole.ADMIN] },
  { label: "Cycles", href: "/cycles", icon: RotateCcw, roles: [UserRole.ADMIN] },
  { label: "Reports", href: "/reports", icon: BarChart3, roles: [UserRole.ADMIN, UserRole.LINE_MANAGER, UserRole.CALIBRATION] },
  { label: "Settings", href: "/settings", icon: Settings, roles: [UserRole.ADMIN, UserRole.EMPLOYEE, UserRole.LINE_MANAGER, UserRole.CALIBRATION] },
];

export function AppSidebar() {
  const pathname = usePathname();
  const user = useCurrentUser();
  const userRole = user?.role as UserRole | undefined;

  const filteredItems = navItems.filter(
    (item) => !userRole || item.roles.includes(userRole),
  );

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 bg-white dark:bg-card border-r border-border z-50 flex flex-col">
      <div className="p-10 mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 border border-border flex items-center justify-center">
            <div className="w-3 h-3 rounded-full border-2 border-slate-400" />
          </div>
          <h1 className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Portal
          </h1>
        </div>
      </div>

      <nav className="flex-1 px-6 space-y-1">
        {filteredItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center space-x-4 px-4 py-3 rounded-full transition-all duration-300",
                active
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-slate-50 dark:hover:bg-slate-800",
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-sm font-light tracking-wide">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {user && (
        <div className="p-8">
          <div className="flex items-center space-x-4 p-4">
            <Avatar className="h-10 w-10 grayscale hover:grayscale-0 transition-all duration-500">
              <AvatarFallback className="bg-slate-100 dark:bg-slate-700 text-xs font-medium">
                {getInitials(user.firstName, user.lastName)}
              </AvatarFallback>
            </Avatar>
            <div className="overflow-hidden">
              <p className="text-xs font-medium text-foreground truncate">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-[10px] text-muted-foreground uppercase tracking-tighter truncate">
                {user.department?.name || user.role}
              </p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
