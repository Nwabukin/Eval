"use client";

import { Bell, Search, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  title?: string;
}

export function AppHeader({ title }: HeaderProps) {
  const { logout } = useAuth();

  return (
    <header className="h-24 flex items-center justify-between px-12 bg-transparent">
      <div className="flex items-center">
        <span className="section-label text-muted-foreground">
          {title || "Performance Hub"}
        </span>
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-slate-300 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
          <Search className="h-5 w-5" strokeWidth={1.5} />
        </button>
        <button className="text-slate-300 hover:text-slate-600 dark:hover:text-slate-200 transition-colors relative">
          <Bell className="h-5 w-5" strokeWidth={1.5} />
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="text-slate-300 hover:text-slate-600">
              <LogOut className="h-5 w-5" strokeWidth={1.5} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => logout()}>
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
