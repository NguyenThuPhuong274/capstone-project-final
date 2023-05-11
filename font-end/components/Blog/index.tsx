import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {

      const totalBlog = blogData.length;
      let totalPage = Math.floor(totalBlog / 3);
      let pageList = [];
      if(totalPage % 3 != 0) totalPage +=1;

      for (let i = 0; i < totalPage; i++) {
        pageList.push(i);
      
      }

  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-28 h-full">
      <div className="container">
        <SectionTitle
          title="Tin Tức"
          paragraph="Chia sẻ kinh nghiệm học tập, văn hóa Nhật Bản"
          center
        />
      <div>
      <div id="default-carousel" className="relative h-[730px] w-full pl-20 pr-20 pb-20" data-carousel="slide" data-carousel-interval="5000">
      <div className="relative h-full overflow-hidden rounded-lg ">
    {pageList.map((pageNumber) => {

        let startIndex = pageNumber * 3;
        let endIndex = startIndex + 3;
        if(endIndex > totalBlog) endIndex = totalBlog;

      return  <div key={"item-" + pageNumber} data-carousel-item className={` hidden w-full h-full duration-700 ease-in-out grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 `}>
      {blogData.slice(startIndex, endIndex).map((blog) => (
        <div key={"blog-" + blog.id} id={pageNumber} className="w-full h-full">
          <SingleBlog blog={blog} />
        </div>
      ))}
  </div>

    })}
        
      </div>
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
      {pageList.map((pageNumber) => (
              <div key={pageNumber} >
                <button type="button" className="w-3 h-3 rounded-full transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp" aria-current={`${pageNumber == 0? true: false}`} aria-label={"Slide " + pageNumber} data-carousel-slide-to={pageNumber}></button>
              </div>
            ))}
      </div>
      <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>

      <span className="animate-bounce inline-flex bg-primary items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
              <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
              <span className="sr-only">Previous</span>
          </span>
      </button>
      <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="animate-bounce inline-flex bg-primary items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
              <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              <span className="sr-only">Next</span>
          </span>
      </button>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Blog;
