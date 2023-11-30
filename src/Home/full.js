import First from "./first";
import "./home.css"
import Navbar from "./navbar";
import Blog from "../Blog/blog";
import Solo from "../Blog/solo";
import Partner from "../partners/partner";
import Carousel from "../carousel/carousel";
import NewsLetter from "../newsletter/newsletter";
import Footer from "../footer/footer";
function Full(){
    const info=[
        {
            id:"about",
            head:"ABOUT",
            para:"Welcome to our automotive haven! At NINJA, our love for cars drives everything we do. We're passionate about sharing our expertise and knowledge to empower every car enthusiast. Whether you're a seasoned gearhead or just starting your journey into the world of automobiles, we're here to fuel your passion. Expect comprehensive guides, insightful reviews, and the latest updates on everything from classic rides to cutting-edge technology. Join us as we navigate the highways of automotive excellence, celebrating the beauty, innovation, and thrill that cars bring to our lives.",
            imgadd:"https://images.pexels.com/photos/3457780/pexels-photo-3457780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id:"history",
            head:"HISTORY",
            para:"The history of automobiles is a riveting tale of innovation, perseverance, and boundless imagination. In our History section, embark on a fascinating journey through the evolution of cars, tracing their roots from the earliest steam-powered contraptions to the sleek, high-performance machines of today. Explore pivotal moments, iconic models, and the visionary minds behind groundbreaking advancements that have revolutionized transportation. Discover how these four-wheeled marvels have shaped societies, influenced cultures, and continue to redefine our relationship with mobility. Buckle up as we delve into the rich tapestry of automotive history, celebrating the ingenuity and progress that have propelled us forward on the roads of time.",
            imgadd:"https://images.pexels.com/photos/17169450/pexels-photo-17169450/free-photo-of-black-and-white-photo-of-vintage-cars-parked.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
    ]
    return(
        <>
        <First></First>
        <Blog></Blog>
        <Solo 
        head={info[0].head}
        para={info[0].para}
        immg={info[0].imgadd}
        id={info[0].id}
        ></Solo>
        <Solo 
        head={info[1].head}
        para={info[1].para}
        immg={info[1].imgadd}
        id={info[1].id}
        > 

        </Solo>
        <Partner></Partner>
        <Carousel></Carousel>
        <NewsLetter></NewsLetter>
        <Footer></Footer>
        </>
    )
}
export default Full;