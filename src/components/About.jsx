import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/about-us.webp";
import VideoPlayer from "./VideoPlayer";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { BiSolidBadgeCheck } from "react-icons/bi";

function About() {
  return (
    <section
      id="about-us"
      // FIXED: w-[100vw] hata kar w-full kiya (horizontal scroll avoid karne ke liye)
      // FIXED: Fixed height (80vh) hata kar py-16/20 kiya taaki content cut na ho
      className="w-full min-h-[60vh] bg-[#FAF8F6] py-16 lg:py-24 overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* Left Image with Video */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          // FIXED: Widths adjusted for responsive behavior
          className="w-full lg:w-5/12 flex items-center justify-center relative"
        >
          <div className="relative w-full max-w-md lg:max-w-full">
            <img
              src={aboutImg}
              alt="Dr. Shikha Baghi"
              className="w-full h-auto rounded-xl object-cover shadow-xl border-2 border-[#D4AF37] transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            />
            {/* Ensure VideoPlayer positioning is handled correctly inside that component */}
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 z-10">
               <VideoPlayer />
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          // FIXED: Padding remove karke parent container padding use ki hai
          className="w-full lg:w-6/12 flex flex-col justify-center"
        >
          {/* Title */}
          <div className="flex text-base md:text-lg items-center gap-4 text-[#D4AF37] font-semibold uppercase tracking-wide font-playfair">
            About Us <TfiLayoutLineSolid className="w-8 h-8 md:w-10 md:h-10" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3B2F2F] font-playfair mt-2 mb-6">
            Timeless Aesthetics
          </h2>

          <div className="space-y-4 text-[#555555] font-lato text-sm md:text-base leading-relaxed">
            <p>
              Timeless Aesthetics seamlessly blends expert cosmetic treatments with
              top-tier professional education. As a clinic, it delivers advanced
              facial aesthetics, permanent makeup, and modern cosmetology, ensuring
              clients receive refined, high-quality care.
            </p>

            <p>
              The academy empowers aspiring professionals through
              government-certified courses, hands-on training, and global
              accreditation. Whether you're seeking transformative beauty treatments
              or professional learning, Timeless Aesthetics stands as a hub of
              excellence.
            </p>

            <p>
              Led by <span className="font-semibold text-[#3B2F2F]">Dr. Shikha Baghi</span> — BDS,
              MDS (Endodontist), and the first Diamond Trainer of the American
              Academy of Micropigmentation (AAM) — along with{" "}
              <span className="font-semibold text-[#3B2F2F]">Mr. Ashish Thapar</span>, Founder &
              Managing Director (B.E. Production Engineering, T and T Realty
              Services Pvt. Ltd.).
            </p>
          </div>

          {/* Key Points - Grid System for better responsiveness */}
          <div className="mt-8 text-[#3B2F2F]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <BiSolidBadgeCheck className="text-[#D4AF37] w-6 h-6 flex-shrink-0" />
                <span className="text-sm md:text-base font-medium">Permanent Makeup Expertise</span>
              </div>
              <div className="flex items-center gap-3">
                <BiSolidBadgeCheck className="text-[#D4AF37] w-6 h-6 flex-shrink-0" />
                <span className="text-sm md:text-base font-medium">Certified Training</span>
              </div>
              <div className="flex items-center gap-3">
                <BiSolidBadgeCheck className="text-[#D4AF37] w-6 h-6 flex-shrink-0" />
                <span className="text-sm md:text-base font-medium">Global Recognition</span>
              </div>
              <div className="flex items-center gap-3">
                <BiSolidBadgeCheck className="text-[#D4AF37] w-6 h-6 flex-shrink-0" />
                <span className="text-sm md:text-base font-medium">Experienced Leaders</span>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-10">
            <a
              href="/about"
              className="inline-block px-8 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-full font-medium hover:bg-[#D4AF37] hover:text-white transition duration-300 transform hover:scale-105 shadow-md text-sm md:text-base"
            >
              Know More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;