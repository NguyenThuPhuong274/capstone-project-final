import { API } from "../constants";
import axios from "axios";

 const lessonServices = {
  updateLesson: async (lesson) => {
    const response = await axios.post(API.MANAGE_LESSON + "/update", lesson);
    return response.data;
  },
  insertLesson: async (lesson) => {
    const response = await axios.post(API.MANAGE_LESSON + "/insert", lesson);
    return response.data;
  },
  insertLessonDone: async (lesson) => {
    const response = await axios.post(API.MANAGE_LESSON + "/insert/lesson-done", lesson);
    return response.data;
  },
  deleteLesson: async (lesson) => {
    const response = await axios.post(API.MANAGE_LESSON + "/delete", lesson);
    return response.data;
  },
  getLessons: async () => {
    const response = await axios.get(API.MANAGE_LESSON + "/get");
    return response.data;
  },
  getLessonsDone: async (user) => {
    const response = await axios.post(API.MANAGE_LESSON + "/get/lesson-done", user);
    return response.data;
  },
 
};

export default lessonServices;
