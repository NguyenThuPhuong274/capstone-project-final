import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Trang chủ",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Khóa học",
    path: "/course",
    newTab: false,
  },
  {
    id: 5,
    title: "Hỗ trợ",
    path: "/support",
    newTab: false,
  },
  {
    id: 3,
    title: "Liên hệ",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Tin tức",
    newTab: false,
    submenu: [
      {
        id: 43,
        title: "Kinh nghiệm học tiếng Nhật",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Văn hóa Nhật Bản",
        path: "/blog",
        newTab: false,
      },
      {
        id: 45,
        title: "Tin tức sự kiện",
        path: "/blog",
        newTab: false,
      },
      
    ],
  },
];
export default menuData;
