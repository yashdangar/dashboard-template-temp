import { Home, Package, FileText, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navigation = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Ops", icon: Package, href: "/ops" },
  { name: "Reports", icon: FileText, href: "/reports" },
  { name: "Receivables", icon: Settings, href: "/receivables" },
];

export function MobileNavigation() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="grid grid-cols-5 py-2">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={({isActive}) => cn(
                "flex flex-col items-center justify-center py-2 px-1 transition-smooth",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">{item.name}</span>
            </NavLink>
          );
        })}
        <div className="flex flex-col items-center justify-center py-2 px-1">
          <ThemeToggle />
          <span className="text-xs font-medium text-muted-foreground mt-1">Theme</span>
        </div>
      </div>
    </div>
  );
}