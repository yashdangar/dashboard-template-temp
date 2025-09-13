import { Bell, ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps = {}) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-secondary px-6">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-semibold text-foreground"></h1>
      </div>

      <div className="flex items-center space-x-4">
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" className={({isActive}) => isActive ? "text-sm font-medium text-foreground" : "text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"}>Dashboard</NavLink>
          <NavLink to="/reports" className={({isActive}) => isActive ? "text-sm font-medium text-foreground" : "text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"}>Reports</NavLink>
        </nav>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full"></span>
        </Button>

        <Button variant="ghost" className="flex items-center space-x-2">
          <span className="text-sm font-medium">Owner</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}