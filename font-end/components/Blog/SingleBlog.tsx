import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, tags, category, publishDate } = blog;
  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden rounded-md h-full bg-white shadow-one dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link href="/" className="relative block h-[230px] w-full">
         
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 h-full  sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <h3>
            <Link
              href="/"
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 border-b overflow-auto max-h-36 h-36 border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {paragraph}
           
          </p>
          <div className="flex flex-row items-center justify-between">
          <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
              {publishDate}
              </h4>
              <Link href={"/"} className="bg-lime text-black text-sm font-medium rounded-full py-2 px-4">
            {category}
          </Link>
          </div>
          <div className="mt-6  w-full ">
            <button className=" w-full items-center rounded-md bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
            Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
