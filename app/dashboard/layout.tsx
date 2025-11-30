"use client";
import { useSelector } from "react-redux";
import Login from "./components/Login";

import { PropsWithChildren, useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/sidebar";
import "./index.css";
export default function Layout({ children }: PropsWithChildren) {
  const isLogin = useSelector((state: any) => state.auth.isLogin);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      {isLogin ? (
        <>
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="lg:grid lg:grid-cols-[250px_auto] min-h-[calc(100vh-88px)]">
            <Sidebar sidebarOpen={sidebarOpen} />
            {children}
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
    // <SidebarProvider>
    //   <AppSidebar />
    //   <SidebarInset>
    //     <header className="flex h-16 shrink-0 items-center justify-between pr-5 gap-2 border-b">
    //       <div className="flex items-center  gap-2 px-3">
    //         <SidebarTrigger />
    //         <Separator orientation="vertical" className="mr-2 h-4" />
    //         <Breadcrumb>
    //           <BreadcrumbList>
    //             <BreadcrumbItem className="hidden md:block">
    //               <BreadcrumbLink href="#">
    //                 Building Your Application
    //               </BreadcrumbLink>
    //             </BreadcrumbItem>
    //             <BreadcrumbSeparator className="hidden md:block" />
    //             <BreadcrumbItem>
    //               <BreadcrumbPage>Data Fetching</BreadcrumbPage>
    //             </BreadcrumbItem>
    //           </BreadcrumbList>
    //         </Breadcrumb>
    //       </div>
    //       <Profile />
    //     </header>
    //     {children}
    //   </SidebarInset>
    // </SidebarProvider>
  );
}
