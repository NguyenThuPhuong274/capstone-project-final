
import Blog from "../../../components/Blog";
import ScrollUp from "../../../components/Common/ScrollUp";
import Contact from "../../../components/Contact";
import Course from "../../../components/Course";
import Testimonials from "../../../components/Testimonials";
import React from "react";
import MyCourse from "../../../components/MyCourse/MyCourse";
const UserHomePage = () => {
  return <>
    <ScrollUp />
    <div className="py-44">
      <MyCourse />
      <Course />
      <Blog />
      <Testimonials />
      <Contact />
    </div>
  </>
};

export default UserHomePage;