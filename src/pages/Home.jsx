import React from 'react'
import home from "../assets/44.jpeg"
import mobileBanner from "../assets/000.jpeg"
import Nav from '../components/Nav'
import { SiViaplay } from "react-icons/si";
import ServicesSection from "../components/ServicesSection";
import TeamMember from "../components/TeamMember";
import FeaturedClients from "../components/FeaturedClients";
import WhyChooseUs from "../components/WhyChooseUs";
import BeforeAfterResults from "../components/BeforeAfterResults";
import FAQ from "../components/FAQ";
import BlogSection from "../components/BlogSection";
import AboutSection from "../components/AboutSection";
import Cardspage from '../components/Cardspage';
import ExploreCourses from '../components/ExploreCourses';
import About from '../components/About';
import ClientTestimonials from '../components/ClientTestimonials';
import ai from '../assets/ai.png'
import ai1 from '../assets/SearchAi.png'
import ReviewPage from '../components/ReviewPage';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
function Home() {
  
      const navigate = useNavigate()

  return (

    
    
    <div className='w-[100%] overflow-hidden'>

     <Nav/>

     <div className="w-full aspect-video relative overflow-hidden">
     <div className="w-full aspect-video relative overflow-hidden">

{/* Desktop Image */}
<img
  src={home}
  alt="Timeless Aesthetics facial aesthetics clinic Gurgaon"
  loading="eager"
  className="w-full h-full object-cover hidden md:block"
/>

<img
  src={mobileBanner}
  alt="Permanent makeup and cosmetology training academy Gurgaon"
  loading="lazy"
  className="w-full h-full object-cover block md:hidden"
/>

</div>

        <div className='absolute lg:top-[30%] top-[75%]  md:top-[80%] w-[100%] flex items-center justify-center gap-3 flex-wrap'>
          
      {/* <button className='px-[20px] py-[10px] lg:bg-white bg-black lg:text-black text-white rounded-[10px] text-[18px] font-light flex gap-2 cursor-pointer items-center justify-center' onClick={()=>navigate("/searchwithai")}>Search with AI <img src={ai} className='w-[30px] h-[30px] rounded-full hidden lg:block' alt="" /><img src={ai1} className='w-[35px] h-[35px] rounded-full lg:hidden' alt="" /></button> */}
      </div>
      </div>
      <ServicesSection />
     <About/>
      <TeamMember />
      <FeaturedClients />
      <ClientTestimonials />
      <WhyChooseUs />
      <BeforeAfterResults />
      <FAQ />
      <BlogSection />
      <Footer/>
      
    </div>

  ) 
}

export default Home
