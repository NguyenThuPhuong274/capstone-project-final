import { CONSTANT_ROUTE } from "../constants";
import UserController from "../controller/UserController";
import CourseController from "../controller/CourseController";
import LessonController from "../controller/LessonController";
import ChapterController from "../controller/ChapterController";
import FeedbackController from "../controller/FeedbackController";
import SupportController from "../controller/SupportController";
import ContactController from "../controller/ContactController";
import BlogController from "../controller/BlogController";
import BlogDetailsController from "../controller/BlogDetailsController";
export const Links = [
  {
    route: CONSTANT_ROUTE.SIGN_IN,
    method: "post",
    handleAction: UserController.getUser,
  },
  {
    route: CONSTANT_ROUTE.SIGN_UP,
    method: "post",
    handleAction: UserController.insertUser,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_USER + "/get",
    method: "get",
    handleAction: UserController.getUser,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_USER + "/get/byusername",
    method: "post",
    handleAction: UserController.getUserByUsername,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_USER + "/insert",
    method: "post",
    handleAction: UserController.getUser,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_USER + "/update",
    method: "post",
    handleAction: UserController.updateUserInfo,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_COURSE + "/get",
    method: "get",
    handleAction: CourseController.getCourses,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_COURSE + "/get/by-id",
    method: "post",
    handleAction: CourseController.getCourseById,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_COURSE + "/insert",
    method: "post",
    handleAction: CourseController.insertCourse,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_COURSE + "/update",
    method: "post",
    handleAction: CourseController.updateCourse,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_CHAPTER + "/insert",
    method: "post",
    handleAction: ChapterController.insertChapter,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_CHAPTER + "/update",
    method: "post",
    handleAction: ChapterController.updateChapter,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_CHAPTER + "/delete",
    method: "post",
    handleAction: ChapterController.deleteChapter,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_LESSON + "/insert",
    method: "post",
    handleAction: LessonController.insertLesson,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_LESSON + "/update",
    method: "post",
    handleAction: LessonController.updateLesson,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_LESSON + "/delete",
    method: "post",
    handleAction: LessonController.deleteLesson,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_FEEDBACK + "/get",
    method: "get",
    handleAction: FeedbackController.getFeedbacks,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_FEEDBACK + "/insert",
    method: "post",
    handleAction: FeedbackController.insertFeedback,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_FEEDBACK + "/update",
    method: "post",
    handleAction: FeedbackController.updateFeedback,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_SUPPORT + "/get",
    method: "get",
    handleAction: SupportController.getSupports,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_SUPPORT + "/insert",
    method: "post",
    handleAction: SupportController.insertSupport,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_SUPPORT + "/update",
    method: "post",
    handleAction: SupportController.updateSupport,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_SUPPORT + "/delete",
    method: "post",
    handleAction: SupportController.deleteSupport,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_CONTACT + "/get",
    method: "get",
    handleAction: ContactController.getContacts,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_CONTACT + "/insert",
    method: "post",
    handleAction: ContactController.insertContact,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_CONTACT + "/update",
    method: "post",
    handleAction: ContactController.updateContact,
  },

  {
    route: CONSTANT_ROUTE.MANAGE_BLOG + "/get",
    method: "get",
    handleAction: BlogController.getBlogs,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_BLOG + "/insert",
    method: "post",
    handleAction: BlogController.insertBlog,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_BLOG + "/update",
    method: "post",
    handleAction: BlogController.updateBlog,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_BLOG + "/delete",
    method: "post",
    handleAction: BlogController.deleteBlog,
  },

  {
    route: CONSTANT_ROUTE.MANAGE_BLOG_DETAILS + "/insert",
    method: "post",
    handleAction: BlogDetailsController.insertBlogDetails,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_BLOG_DETAILS + "/update",
    method: "post",
    handleAction: BlogDetailsController.updateBlogDetails,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_BLOG_DETAILS + "/delete",
    method: "post",
    handleAction: BlogDetailsController.deleteBlogDetails,
  },

];
