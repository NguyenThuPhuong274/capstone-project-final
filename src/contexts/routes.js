 
import { ROUTE_CONSTANTS } from "../constants/route.constants";
import {HomePage} from "../pages";
import SigninPage from "../pages/signin";
import SignupPage from "../pages/signup";
import ForgotPasswordPage from "../pages/forgot-password";
import ErrorPage from "../pages/error";
import BlogPage from "../pages/blog";
import AdminBlogPage from "../pages/admin/blog";
import AdminContactPage from "../pages/admin/contact";
import ContactPage from "../pages/contact";
import SupportPage from "../pages/support";
import AccountPage from "../pages/account";
import AdminCoursesPage from "../pages/admin/courses";
import CoursePage from "../pages/course";
import AdminCourseDetailsPage from "../pages/admin/course-details";

export const routes = [
  {
    path: ROUTE_CONSTANTS.HOME_PAGE,
    isPrivate: false,
    component: <HomePage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.COURSE_PAGE,
    isPrivate: false,
    component: <CoursePage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.ACCOUNT_PAGE,
    isPrivate: false,
    component: <AccountPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.BLOG_PAGE,
    isPrivate: false,
    component: <BlogPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.SUPPORT_PAGE,
    isPrivate: false,
    component: <SupportPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.ADMIN_BLOG_PAGE,
    isPrivate: false,
    component: <AdminBlogPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.ADMIN_COURSE_DETAILS,
    isPrivate: false,
    component: <AdminCourseDetailsPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.ADMIN_COURSE_PAGE,
    isPrivate: false,
    component: <AdminCoursesPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.ADMIN_CONTACT_PAGE,
    isPrivate: false,
    component: <AdminContactPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.CONTACT_PAGE,
    isPrivate: false,
    component: <ContactPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.SIGN_IN,
    isPrivate: false,
    component: <SigninPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.SIGN_UP,
    isPrivate: false,
    component: <SignupPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.FORGOT_PASSOWRD,
    isPrivate: false,
    component: <ForgotPasswordPage />,
    exact: true,
  },
  {
    path: ROUTE_CONSTANTS.ERROR_PAGE,
    isPrivate: false,
    component: <ErrorPage />,
    exact: true,
  },
];
