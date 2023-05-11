import { Course } from "@/types/course";

const coursesData: Course[] = [
    {
        id: 1,
        price: 5000000,
        duration: 12,
        description: "Khóa học N1 là chương trình đào tạo tiên tiến về ngoại ngữ Nhật Bản cấp độ cao.",
        title: "Khóa học N1",
        level: 1,
        img_url: "/images/course/course-1.png",
      },
      {
        id: 2,
        price: 500000,
        duration: 6,
        description: "Khóa học N2 là khóa học tiếng Nhật trình độ trung cấp tại Nhật Bản",
        title: "Khóa học N2",
        level: 2,
        img_url: "/images/course/course-2.png",
      },
      {
        id: 2,
        price: 1200000,
        duration: 10,
        description: "Khóa học N3 giúp nâng cao trình độ tiếng Nhật tại trung cấp",
        title: "Khóa học N3",
        level: 3,
        img_url: "/images/course/course-3.png",
      },
];

export default coursesData;