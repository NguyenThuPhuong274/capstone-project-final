
"use client"
import { Inter } from "@next/font/google";
import React from "react";
import HomePage from "./home/page";
import DashboardPage from "./admin/dashboard/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [role, setRole] = React.useState("admin");
  

  return (
   <>
   {role != "admin" ? <HomePage /> : <DashboardPage />}
   </>
  );
}
