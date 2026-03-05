import React from 'react'
import home from "../assets/44.jpeg"
import mobileBanner from "../assets/mobile.jpg"
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import ServicesSection from "../components/ServicesSection";
import TeamMember from "../components/TeamMember";
import FeaturedClients from "../components/FeaturedClients";
import WhyChooseUs from "../components/WhyChooseUs";
import BeforeAfterResults from "../components/BeforeAfterResults";
import FAQ from "../components/FAQ";
import BlogSection from "../components/BlogSection";
import About from '../components/About';
import ClientTestimonials from '../components/ClientTestimonials';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate()

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Timeless Aesthetics",
    "description": "Aesthetic Skin Clinic in Amritsar offering laser hair removal, HIFU, HydraFacial, Botox, fillers, microbloding & bridal aesthetic services.",
    "url": "https://www.timelessaestheticss.com",
    "telephone": "+919876543210",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Amritsar",
      "addressRegion": "Punjab",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/timelessaestheticss",
      "https://www.instagram.com/timelessaestheticss"
    ]
  };

  return (

    <div className='w-[100%] overflow-hidden'>

      <SEO 
        title="Aesthetic Skin Clinic in Amritsar | Timeless Aesthetics"
        description="Timeless Aesthetics Amritsar offers laser hair removal, HIFU, HydraFacial, Botox, fillers, microblading & bridal aesthetic services."
        keywords="aesthetic clinic Amritsar, skin care clinic, laser hair removal, HIFU treatment, HydraFacial, Botox, dermal fillers, microblading, permanent makeup, bridal services"
        canonicalUrl="https://www.timelessaestheticss.com/"
        ogImage="/logo.png"
        structuredData={structuredData}
      />

      <header>
        <Nav/>
      </header>

      <main>

        {/* Hero Banner */}
        <div className="w-full relative overflow-hidden h-[70vh] md:h-auto md:aspect-video">

          {/* Desktop Image */}
          <img
            src={home}
            alt="Timeless Aesthetics facial aesthetics clinic Amritsar"
            loading="eager"
            width="1920"
            height="1080"
            className="w-full h-full object-cover hidden md:block"
          />

          {/* Mobile Image */}
          <img
            src={mobileBanner}
            alt="Permanent makeup and cosmetology training academy Amritsar"
            loading="lazy"
            width="1080"
            height="1920"
            className="w-full h-full object-cover block md:hidden"
          />

          {/* Hero Content */}
          <div className='absolute lg:top-[30%] top-[75%] md:top-[80%] w-full flex items-center justify-center gap-3 flex-wrap'>
          </div>

        </div>

        <ServicesSection />
        <About/>
        <TeamMember />
        <FeaturedClients />
        {/* <ClientTestimonials /> */}
        <WhyChooseUs />
        <BeforeAfterResults />
        <FAQ />
        <BlogSection />

      </main>

      <Footer/>

    </div>

  ) 
}

export default Home