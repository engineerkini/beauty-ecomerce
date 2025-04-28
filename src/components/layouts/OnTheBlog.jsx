
import Blog from "../../assets/data/Blog";
import BlogCard from "../common/BlogCardComponent";
import BlogSlider from "../common/BlogSlider";
import MySlider from "../common/MySlider";
import SectionHeader from "../common/SectionHeader";

function OnTheBlog() {
 const blogs = Blog();
  return (
    <div className="w-full h-full">
      <div className=" w-full h-full px-4 xl:px-[100px] 2xl:px-[200px] md:px-6  flex flex-col items-center justify-center gap">
        <div className="w-full h-full justify-center items-center ">
          <SectionHeader>
            <span>On the Blog </span>
          </SectionHeader>
        </div>

        <div className="w-full">
          <div className=" w-auto py-[40px] h-auto ">
              <BlogSlider>
              { blogs.map((blog)=>(
                          <BlogCard 
                          title={blog.title}
                          description={blog.description}
                          imageSrc={blog.imageSrc}
                          imageAlt={blog.title}
                          buttonText="Read More"
                          onButtonClick={() => console.log('Button clicked')}
                          />
            ))
           
              

            }  
               </BlogSlider>
              
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnTheBlog;
