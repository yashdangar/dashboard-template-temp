import { ReactNode } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";
import { MobileNavigation } from "@/components/dashboard/MobileNavigation";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex h-screen bg-background ">
      <Sidebar />
      <div className="flex flex-1 flex-col overflow-hidden relative isolate">
        <Header />
        <main className="flex-1 overflow-auto p-4 md:p-6 pb-20 md:pb-6 space-y-6">{children}</main>
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-full -z-10"
          style={{
            height: "35vh",
            background:
              "linear-gradient(to left, oklch(0.7 0.25 180), oklch(0.7 0.25 200), oklch(0.6 0.2 270), oklch(0.7 0.3 320))",
            opacity: 0.35,
            maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
            WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
      </div>
      <MobileNavigation />
    </div>
  );
};

export default DashboardLayout;


