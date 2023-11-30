import logo from './logo.svg';
import './App.css';
import Loading from './loading/loading';
import Content from "../src/Blog/content"
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  Routes
} from 'react-router-dom';
import Full from './Home/full';
import MainBlog from './Blog/main-blog';
import BlogPage from './Blog/single-blog';
function App() {
  const Contents =[
    {
        imgg:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date:"30 November",
        p1:'In recent years, the automotive industry has witnessed an electrifying revolution, quite literally. "The Future of Electric Vehicles: Trends and Innovations" blog explores the seismic shifts in transportation, led by the rise of electric vehicles (EVs). With a focus on sustainability and efficiency, manufacturers are redefining the driving experience through groundbreaking technology. Battery advancements, ranging from solid-state to fast-charging innovations, are rapidly extending the range and accessibility of EVs, addressing concerns about infrastructure and usability.',
        p2:"Moreover, the blog dives into the realm of autonomous driving, where AI and machine learning algorithms are propelling cars towards a self-reliant future. Innovations in sensors, lidars, and cameras are enhancing safety features, inching us closer to fully autonomous vehicles. The conversation expands to the integration of EVs into smart grids, exploring how these vehicles act as mobile energy storage units, potentially revolutionizing the energy sector.",
        p3:"Beyond technological advancements, the blog discusses the changing consumer landscape, with a growing emphasis on eco-consciousness and the push for greener alternatives. Join us as we dissect the trends and breakthroughs shaping the electrifying future of transportation and its profound impact on the way we drive and live"
    },
    {
        imgg:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date:"10 October",
        p1:`"Beginner's Guide to Car Maintenance: Essential Tips and Tricks" serves as a foundational toolkit for all car enthusiasts, demystifying the complexities of vehicle upkeep. For many new car owners, the world under the hood can be daunting, but this blog aims to empower with essential tips to keep your vehicle running smoothly.Starting with the basics, readers will learn the importance of routine checks: from monitoring tire pressure and fluid levels to understanding the significance of regular oil changes. The blog simplifies these tasks, breaking them down into manageable steps that any novice can grasp.`,
        p2:"Moving beyond the basics, the guide delves into DIY maintenance hacks, offering insights on simple repairs and troubleshooting common issues. From changing a flat tire to replacing wiper blades or air filters, the blog provides step-by-step instructions accompanied by visuals to boost confidence in tackling these tasks without professional assistance.",
        p3:"Moreover, the guide emphasizes the significance of a well-maintained vehicle not only for longevity but also for safety on the road. By equipping readers with fundamental knowledge and practical skills, this guide aims to instill a sense of empowerment and self-reliance when it comes to caring for their beloved automobiles. Join us as we navigate the essential elements of car maintenance, transforming novices into adept DIY car caretakers."
    },
    {
        imgg:"https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date:"15 September",
        p1:'"Off-Road Adventures: Exploring the Best SUVs for Outdoor Enthusiasts" embarks on a thrilling journey through the rugged terrain of adventure-ready vehicles, catering to the spirited explorer in every car enthusiast. As the demand for vehicles capable of conquering challenging landscapes rises, this blog sets out to unveil the top SUV models designed for off-road prowess and durability.',
        p2:"From legendary trailblazers like the Jeep Wrangler to the versatile Toyota 4Runner and the upscale Land Rover Defender, this guide evaluates and highlights the standout features of these robust machines. Dive into comprehensive reviews discussing ground clearance, traction control, off-road driving modes, and specialized technologies that ensure a seamless transition from city streets to untamed trails.b",
        p3:"Moreover, the blog explores the synergy between design and functionality in these off-road titans, delving into their cargo space, towing capabilities, and interior comforts, making them ideal companions for outdoor adventures. Whether it's scaling rocky terrains or cruising through muddy paths, these SUVs are engineered to provide the utmost reliability and performance, promising unforgettable experiences for outdoor enthusiasts seeking adrenaline-pumping escapades. Join us as we navigate the thrilling world of off-road SUVs, unlocking the potential for unforgettable outdoor adventures."
    },
    {
        imgg:"https://images.unsplash.com/photo-1504215680853-026ed2a45def?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date:"7 July",
        p1:`"The Evolution of Car Design: From Classic Elegance to Modern Aesthetics" is a captivating journey through the captivating evolution of automotive aesthetics, showcasing the remarkable transformation of design philosophies that have shaped the cars we admire today.
        Beginning with the elegance of vintage vehicles from the early 20th century, characterized by sweeping curves, ornate details, and timeless silhouettes, the blog elucidates how these classics set the stage for automotive design.`,
        p2:"As the decades passed, the aesthetic landscape underwent a seismic shift, embracing futuristic lines, aerodynamic principles, and minimalist approaches. From the iconic designs of the 1950s and '60s to the bold, angular contours of the '80s and '90s, each era contributed distinct styles and influences to the art of car design.",
        p3:"Today's automotive landscape is a fusion of innovation and aesthetics, incorporating cutting-edge technology with sleek, sophisticated exteriors. Concepts like sustainability, aerodynamics, and user-centric design are shaping modern cars, giving rise to electric vehicles with streamlined profiles and user-friendly interiors.Join us as we traverse through the decades, celebrating the creative evolution that has defined automotive design, from the elegance of the past to the futuristic marvels of the present, and explore how these designs continue to push the boundaries of beauty and functionality in the automotive world."
    },
    {
        imgg:"https://images.unsplash.com/photo-1537984822441-cff330075342?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date:"28 May",
        p1:'"Exploring the Latest Automotive Technologies: From AI to Self-Driving Cars" opens the doors to an exciting realm where technological innovations redefine the driving experience. The blog embarks on a comprehensive exploration of cutting-edge advancements that are reshaping the future of transportation.',
        p2:"At the heart of this revolution lies artificial intelligence (AI), a game-changer in the automotive industry. AI-powered systems are driving innovation, enhancing safety features, and optimizing vehicle performance. From adaptive cruise control to predictive maintenance and intelligent navigation, AI is transforming cars into smart, interconnected entities that adapt and learn, making driving safer and more efficient.Moreover, the blog delves into the realm of self-driving cars, where the intersection of AI and automotive engineering is at its pinnacle. These vehicles are not just a futuristic dream but a tangible reality, equipped with advanced sensors, cameras, and intricate algorithms that enable them to navigate roads autonomously. The discussions extend to the societal impacts of autonomous vehicles, from redefining mobility for individuals with disabilities to potentially revolutionizing urban transportation systems.",
        p3:"Additionally, the blog sheds light on connected technologies, where vehicles communicate with each other and the surrounding infrastructure, paving the way for smarter, more efficient transportation networks. Join us as we dissect these technological marvels, unravel their potential, and anticipate the transformative impact they will have on how we perceive and interact with automobiles."
    },
    {
        imgg:"https://images.unsplash.com/photo-1591920689160-ee83654e464a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date:"15 April",
        p1:`"Breaking Down Car Insurance: Understanding Coverage and Savings" offers a comprehensive guide through the intricate world of auto insurance, empowering readers to navigate the complexities of coverage while optimizing savings.

        This blog is a compass for individuals seeking clarity on the various aspects of car insurance. It demystifies the terminology, delving into the significance of comprehensive, collision, liability, and other coverage options. Readers gain insight into the factors that impact insurance premiums, from driving records and vehicle types to geographical location, enabling them to make informed decisions tailored to their needs.`,
        p2:"Furthermore, the blog unravels the intricacies of deductibles, outlining strategies to strike a balance between premiums and out-of-pocket expenses. It elucidates how a higher deductible may lower premiums but might pose a financial challenge in the event of a claim, providing readers with a nuanced understanding to make choices aligned with their financial circumstances.",
        p3:"Moreover, the blog is a treasure trove of tips on maximizing savings without compromising on coverage. It offers insights into available discounts, such as multi-policy bundling, safe driver incentives, and anti-theft device benefits, empowering readers to optimize their insurance plans while safeguarding their vehicles and wallets. Join us as we decode the nuances of car insurance, enabling you to navigate the insurance landscape with confidence and make informed decisions to protect your prized automobile."
    },
    
]


  return (
    <Router>
    <Routes>
    <Route path='/' element={<Loading />} exact />
    <Route path="/home" element={<Full></Full>} />
    <Route path="/blogs" element={<MainBlog></MainBlog>} />
    <Route path="/blogs/1" 
      element={<BlogPage
      page={"The Future of Electric Vehicles"} date={Contents[0].date}
      para1={Contents[0].p1} para2={Contents[0].p1} para3={Contents[0].p1}
      img={Contents[0].imgg}
      >

      </BlogPage>} />
    <Route path="/blogs/2" 
    element={<BlogPage
      page={"Beginner's Guide to Car Maintenance"} date={Contents[1].date}
      para1={Contents[1].p1} para2={Contents[1].p1} para3={Contents[1].p1}
      img={Contents[1].imgg}
      >

    </BlogPage>} />
    <Route path="/blogs/3" 
    element={<BlogPage
      page={"The Art of Restoring Vintage Cars"} date={Contents[2].date}
      para1={Contents[2].p1} para2={Contents[2].p1} para3={Contents[2].p1}
      img={Contents[2].imgg}
      >
    </BlogPage>} />
    <Route path="/blogs/4" 
    element={<BlogPage
      page={"The Evolution of Car Design"} date={Contents[3].date}
      para1={Contents[3].p1} para2={Contents[3].p1} para3={Contents[3].p1}
      img={Contents[3].imgg}
      >

    </BlogPage>} />
    <Route path="/blogs/5" 
    element={<BlogPage
      page={"Exploring the Latest Automotive Technologies"} date={Contents[4].date}
      para1={Contents[4].p1} para2={Contents[4].p1} para3={Contents[4].p1}
      img={Contents[4].imgg}
      >
      
    </BlogPage>} />
    <Route path="/blogs/6" 
    element={<BlogPage
      page={"Breaking Down Car Insurance"} date={Contents[5].date}
      para1={Contents[5].p1} para2={Contents[5].p1} para3={Contents[5].p1}
      img={Contents[5].imgg}
      >
      
    </BlogPage>} />
    </Routes>
  </Router>
  );
}

export default App;
