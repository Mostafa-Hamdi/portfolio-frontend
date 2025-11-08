"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, Settings } from "lucide-react";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <h2 className="text-lg font-semibold px-3 py-2">Dashboard</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <Home className="mr-2 h-4 w-4" />
                Home
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="#">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-3 text-sm text-muted-foreground">
        Footer text
      </SidebarFooter>
    </Sidebar>
  );
}
