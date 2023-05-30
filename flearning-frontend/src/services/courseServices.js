import { API } from "../constants";
import axios from "axios";

const courseServices = {
  getCourses: async () => {
    // console.log(user);
    const response = await axios.get(API.MANAGE_COURSE + "/get");
    return response.data;
  },
  getUserCourses: async (user) => {
    // console.log(user);
    const response = await axios.post(API.MANAGE_COURSE + "/get/user-courses", user);
    return response.data;
  },
  getCourseById: async (course) => {
    // console.log(user);
    const response = await axios.post(API.MANAGE_COURSE + "/get/by-id", course);
    return response.data;
  },

  insertCourse: async (course) => {
    const response = await axios.post(API.MANAGE_COURSE + "/insert", course);
    return response.data;
  },
  insertUserCourse: async (userCourse) => {
    const response = await axios.post(API.MANAGE_COURSE + "/insert/user-course", userCourse);
    return response.data;
  },
  updateCourse: async (course) => {
    const response = await axios.post(API.MANAGE_COURSE + "/update", course);
    return response.data;
  }

};

export default courseServices;
