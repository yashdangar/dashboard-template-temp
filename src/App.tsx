import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import StaffOps from "./pages/StaffOps";
import ReportsAudits from "./pages/ReportsAudits";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <div className="relative min-h-screen">
        <div
          className="pointer-events-none fixed bottom-0 left-0 w-full z-0 dark:opacity-35 opacity-20"
          style={{
            height: "35vh",
            background:
              "linear-gradient(to left, oklch(0.7 0.25 180), oklch(0.7 0.25 200), oklch(0.6 0.2 270), oklch(0.7 0.3 320))",
            maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
            WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
        <div className="relative z-10">
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/ops" element={<StaffOps />} />
                <Route path="/reports" element={<ReportsAudits />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </div>
      </div>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
