import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  name: string;
  icon: LucideIcon;
  category: string;
  time?: string;
  action?: string;
  variant?: "chipotle" | "movies" | "flights" | "others";
  className?: string;
}

export function ServiceCard({ 
  name, 
  icon: Icon, 
  category, 
  time, 
  action = "Pick",
  variant = "others",
  className 
}: ServiceCardProps) {
  const serviceStyles = {
    chipotle: "service-gradient",
    movies: "service-gradient", 
    flights: "service-gradient",
    others: "service-gradient"
  };

  const actionStyles = {
    chipotle: "action-gradient",
    movies: "action-gradient", 
    flights: "action-gradient",
    others: "action-gradient"
  };

  return (
    <Card className={cn("bg-slate-900 border-slate-800 transition-smooth hover:shadow-lg", className)}>
      <CardContent className="p-5 min-h-[152px]">
        {/* Top Section */}
        <div className="mb-5">
          <h3 className="text-white text-lg font-semibold mb-1">{name}</h3>
          <div className="flex items-center space-x-2">
            <div className={cn("p-1 rounded", serviceStyles[variant])}>
              <Icon className="h-4 w-4 text-white drop-shadow-sm" />
            </div>
            <span className="text-white text-sm">{category}</span>
          </div>
        </div>
        
         {/* Bottom Action Button */}
         <button 
           className={cn("flex items-center justify-between px-4 py-3 rounded-lg w-full text-left border-0 outline-none", actionStyles[variant])}
           style={{color: '#ffffff'}}
         >
           {time && (
             <span className="text-sm font-bold drop-shadow-md" style={{color: '#ffffff', textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>{time}</span>
           )}
           <span className="text-sm font-bold drop-shadow-md" style={{color: '#ffffff', textShadow: '0 1px 2px rgba(0,0,0,0.8)'}}>{action}</span>
         </button>
      </CardContent>
    </Card>
  );
}