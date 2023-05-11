"use client"
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Pagination from "@/components/Pagination";
import { useState } from "react";

const Blog = () => {

  const [currentPage, onPageChange] = useState(1);

  return (
    <>
      <Breadcrumb
        pageName="Tin tức"
        description="Cập nhật tin tức khóa học, chia sẻ kinh nghiệp"
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
           <Pagination totalPages={10} currentPage={currentPage} onPageChange={onPageChange}   />
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
