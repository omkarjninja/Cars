function MainBlog(){

    const goto=()=>{
       window.location.href="/home"
    }
    const hey=[
        {year:"2023",day:"Nov 30",
        head:"The Future of Electric Vehicles: Trends and Innovations",
        para:"explores the rapidly evolving landscape of eco-friendly transportation. Delve into the latest advancements in battery technology, range improvements, and the exciting innovations shaping the next generation of electric cars. Join us as we uncover the trends driving the future of sustainable mobility.",
        img:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        go:"/blogs/1"},

        {year:"2023",day:"Oct 10",
        head:"Beginner's Guide to Car Maintenance: Essential Tips and Tricks",
        para:"is your roadmap to keeping your ride in top shape. From basic checks to DIY maintenance hacks, explore essential tips and tricks designed to empower every car owner. Say goodbye to uncertainty and hello to confidence as you navigate the basics of car care like a pro.",
        img:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        go:"/blogs/2"},

        {year:"2023",day:"Sept 15",
        head:"The Art of Restoring Vintage Cars: A Passionate Journey",
        para:"is your gateway to rugged exploration. Dive into our comprehensive guide highlighting the top SUV models equipped to conquer rough terrains, offering durability, capability, and adventure-ready features. Uncover the perfect off-road companion and elevate your outdoor escapades with confidence and style.",
        img:"https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        go:"/blogs/3"},

        {year:"2023",day:"July 7",
        head:"The Evolution of Car Design: From Classic Elegance to Modern Aesthetics",
        para:"takes you on a visual journey through the transformative history of automotive artistry. Discover how design philosophies have evolved, from the timeless elegance of classic cars to the sleek lines and futuristic concepts defining modern aesthetics. Explore the intersection of creativity and functionality that continues to shape the captivating beauty of cars throughout the ages.",
        img:"https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        go:"/blogs/4"},

        {year:"2023",day:"May 28",
        head:"Exploring the Latest Automotive Technologies: From AI to Self-Driving Cars",
        para:"unveils the cutting-edge innovations revolutionizing the driving experience. Delve into the world of artificial intelligence, autonomous vehicles, and connected systems reshaping the future of transportation. Join us as we navigate through the advancements that are transforming cars from mere vehicles to intelligent, interconnected entities, paving the way for a new era of mobility.",
        img:"https://images.unsplash.com/photo-1537984822441-cff330075342?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        go:"/blogs/5"},

        {year:"2023",day:"April 15",
        head:"Breaking Down Car Insurance: Understanding Coverage and Savings",
        para:" is your comprehensive guide to demystifying the complex world of auto insurance. Explore key coverage options, deductible insights, and smart strategies to maximize savings while ensuring optimal protection for your vehicle. Navigate the intricacies of car insurance policies with confidence, empowering yourself to make informed decisions and secure the best coverage for your needs.",
        img:"https://images.unsplash.com/photo-1591920689160-ee83654e464a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        go:"/blogs/6"},]
    return(
       
        <>
        <center>
                <h1 className="text-7xl text-semibold cursor-pointer" onClick={goto}>Home</h1>
                </center>
                {/* <h1 className="text-5xl mb-3 pl-3">Blogs</h1> */}
                <span className="flex items-center">
                <span className="text-5xl mb-3 pl-3 pr-6">Blogs</span>
                <span className="h-px flex-1 bg-black"></span>
                </span>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mb-5">
            {hey.map((val)=>(
                <article className="flex bg-white transition hover:shadow-xl p-3"
                onClick={()=>{
                window.open(val.go);
                }}
                >
                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                  <time
                    datetime="2022-10-10"
                    className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                  >
                    <span>{val.year}</span>
                    <span className="w-px flex-1 bg-gray-900/10"></span>
                    <span>{val.day}</span>
                  </time>
                </div>
              
                <div className="hidden sm:block sm:basis-56">
                  <img
                    alt="Guitar"
                    src={val.img}
                    className="aspect-square h-full w-full object-cover"
                  />
                </div>
              
                <div className="flex flex-1 flex-col justify-between">
                  <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <a href="#">
                      <h3 className="font-bold uppercase text-gray-900">
                        {val.head}
                      </h3>
                    </a>
              
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                     {val.para}
                    </p>
                  </div>
              
                  <div className="sm:flex sm:items-end sm:justify-end">
                    <a
                      href={val.go}
                      className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                    >
                      Read Blog
                    </a>
                  </div>
                </div>
              </article>
            ))}
  {/* <div className="h-32 rounded-lg bg-gray-200"></div> */}
  
</div>
        </>
    )
}
export default MainBlog;