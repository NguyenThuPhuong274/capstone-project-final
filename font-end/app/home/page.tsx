"use client"
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Course from "@/components/Course";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Inter } from "@next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {

  return (
    <>
     <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Course />
      <Blog />
      <Testimonials />
      <Contact />
    </>
  );
}
