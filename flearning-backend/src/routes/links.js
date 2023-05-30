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
import TestController from "../controller/TestController";
import QuestionController from "../controller/QuestionController";
import BlogCategoryController from "../controller/BlogCategoryController";
import PaymentController from "../controller/PaymentController";
import DashboardController from "../controller/DashboardController";
import MailController from "../controller/MailController";
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
    route: CONSTANT_ROUTE.CHANGE_PASSWORD,
    method: "post",
    handleAction: UserController.changePassword,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_USER + "/get",
    method: "get",
    handleAction: UserController.getUser,
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
  // {
  //   route: CONSTANT_ROUTE.MANAGE_COURSE + "/get/by-name",
  //   method: "post",
  //   handleAction: CourseController.getCourseCourseName,
  // },
  {
    route: CONSTANT_ROUTE.MANAGE_COURSE + "/get/user-courses",
    method: "post",
    handleAction: CourseController.getUserCourses,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_COURSE + "/insert",
    method: "post",
    handleAction: CourseController.insertCourse,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_COURSE + "/insert/user-course",
    method: "post",
    handleAction: CourseController.insertUserCourse,
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
    route: CONSTANT_ROUTE.MANAGE_LESSON + "/insert/lesson-done",
    method: "post",
    handleAction: LessonController.insertLessonDone,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_LESSON + "/get/lesson-done",
    method: "post",
    handleAction: LessonController.getLessonsDone,
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
    route: CONSTANT_ROUTE.MANAGE_FEEDBACK + "/get/by-id",
    method: "post",
    handleAction: FeedbackController.getFeedbackById,
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
    route: CONSTANT_ROUTE.MANAGE_BLOG + "/get/by-id",
    method: "post",
    handleAction: BlogController.getBlogById,
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
    route: CONSTANT_ROUTE.MANAGE_BLOG_CATEGORY + "/get",
    method: "get",
    handleAction: BlogCategoryController.getBlogCategorys,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_BLOG_CATEGORY + "/insert",
    method: "post",
    handleAction: BlogCategoryController.insertBlogCategory,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_BLOG_CATEGORY + "/update",
    method: "post",
    handleAction: BlogCategoryController.updateBlogCategory,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_BLOG_CATEGORY + "/delete",
    method: "post",
    handleAction: BlogCategoryController.deleteBlogCategory,
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
  {
    route: CONSTANT_ROUTE.MANAGE_PAYMENT + "/create",
    method: "post",
    handleAction: PaymentController.createPayment,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_PAYMENT + "/insert",
    method: "post",
    handleAction: PaymentController.insertPayment,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_PAYMENT + "/get",
    method: "get",
    handleAction: PaymentController.getAllPayments,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_PAYMENT + "/get/by-user",
    method: "post",
    handleAction: PaymentController.getPaymentByUser,
  },
  {
    route: CONSTANT_ROUTE.DASHBOARD + "/get",
    method: "get",
    handleAction: DashboardController.getData,
  },
  {
    route: CONSTANT_ROUTE.MAIL + "/send",
    method: "post",
    handleAction: MailController.sendMail,
  },
  {
    route: CONSTANT_ROUTE.MAIL + "/send/forgot-password",
    method: "post",
    handleAction: MailController.sendMailForgotPassword,
  },


  {
    route: CONSTANT_ROUTE.MANAGE_TEST + "/get",
    method: "get",
    handleAction: TestController.getTests,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_TEST + "/get/test-done",
    method: "post",
    handleAction: TestController.getTestsDone,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_TEST + "/get-byid",
    method: "post",
    handleAction: TestController.getTestById,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_TEST + "/insert",
    method: "post",
    handleAction: TestController.insertTest,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_TEST + "/insert/test-done",
    method: "post",
    handleAction: TestController.insertTestDone,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_TEST + "/update",
    method: "post",
    handleAction: TestController.updateTest,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_TEST + "/delete",
    method: "post",
    handleAction: TestController.deleteTest
  },

  {
    route: CONSTANT_ROUTE.MANAGE_QUESTION + "/get/by-test-id",
    method: "get",
    handleAction: QuestionController.getQuestionByTestId,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_QUESTION + "/insert",
    method: "post",
    handleAction: QuestionController.insertQuestion,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_QUESTION + "/update",
    method: "post",
    handleAction: QuestionController.updateQuestion,
  },
  {
    route: CONSTANT_ROUTE.MANAGE_QUESTION + "/delete",
    method: "post",
    handleAction: QuestionController.deleteQuestion
  },

];
