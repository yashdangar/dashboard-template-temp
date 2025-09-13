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
    chipotle: "service-chipotle",
    movies: "service-movies", 
    flights: "service-flights",
    others: "service-others"
  };

  return (
    <Card className={cn("transition-smooth hover:shadow-lg", className)}>
      <CardContent className="p-3 md:p-6">
        <div className="flex items-center justify-between mb-3 md:mb-4">
          <div className="flex items-center space-x-2 md:space-x-3 min-w-0 flex-1">
            <div className={cn("p-1.5 md:p-2 rounded-lg shrink-0", serviceStyles[variant])}>
              <Icon className="h-4 w-4 md:h-5 md:w-5 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-foreground text-sm md:text-base truncate">{name}</h3>
              <p className="text-xs md:text-sm text-muted-foreground truncate">{category}</p>
            </div>
          </div>
          {time && (
            <span className="text-xs md:text-sm text-muted-foreground shrink-0 ml-2">{time}</span>
          )}
        </div>
        
        <Button 
          variant="secondary" 
          className="w-full text-xs md:text-sm"
          size="sm"
        >
          {action}
        </Button>
      </CardContent>
    </Card>
  );
}