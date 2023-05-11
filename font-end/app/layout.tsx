"use client";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const [role, setRole] = React.useState("admin");

  // React.useEffect(() => {
  //   sessionStorage.getItem("name");
  //   setRole(sessionStorage.getItem("role"));
  // },[role]);
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="dark:bg-black">
        <Providers>
         
         {role == "admin"? <TopNav /> : <Header />} 
         {role == "admin"? <SideNav /> : <></>} 
          
          {children}
          {role != "admin"? <Footer /> : <></>} 
          <ScrollToTop /> 
       </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import { AdminLayout } from "@/layouts/dashboard/layout";
import { TopNav } from "@/layouts/dashboard/top-nav";
import { SideNav } from "@/layouts/dashboard/side-nav";

