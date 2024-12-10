"use client";

import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import PrivateProvider from "./providers";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <PrivateProvider>

      <SidebarProvider>
        <AppSidebar />
        <main className="w-screen" suppressHydrationWarning>
          <div className="flex items-center gap-3">
            <SidebarTrigger />
            <ThemeToggle />
            <p>kamrul</p>
          </div>
          {children}
        </main>
      </SidebarProvider>
    </PrivateProvider>
    </>
  );
};

export default layout;
