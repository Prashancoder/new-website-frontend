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
      className="w-[100vw] lg:h-[80vh] min-h-[60vh] flex flex-wrap items-center justify-center gap-4 bg-[#FAF8F6] py-10 overflow-hidden"
    >
      {/* Left Image with Video */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:w-[40%] md:w-[80%] w-[100%] flex items-center justify-center relative"
      >
        <img
          src={aboutImg}
          alt="Dr. Shikha Baghi"
          className="w-[80%] h-[90%] rounded-xl object-cover shadow-xl border-2 border-[#D4AF37] transform transition duration-500 hover:scale-105 hover:shadow-2xl"
        />
        <VideoPlayer />
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:w-[50%] md:w-[70%] w-[100%] flex flex-col justify-center px-[35px] md:px-[80px]"
      >
        {/* Title */}
        <div className="flex text-[18px] items-center gap-[15px] text-[#D4AF37] font-semibold uppercase tracking-wide font-playfair">
          About Us <TfiLayoutLineSolid className="w-[40px] h-[40px]" />
        </div>

        <h2 className="md:text-[45px] text-[35px] font-bold text-[#3B2F2F] font-playfair mt-2 mb-4">
          Timeless Aesthetics
        </h2>

        <p className="text-[#555555] leading-relaxed font-lato mb-4">
          Timeless Aesthetics seamlessly blends expert cosmetic treatments with
          top-tier professional education. As a clinic, it delivers advanced
          facial aesthetics, permanent makeup, and modern cosmetology, ensuring
          clients receive refined, high-quality care.
        </p>

        <p className="text-[#555555] leading-relaxed font-lato mb-4">
          The academy empowers aspiring professionals through
          government-certified courses, hands-on training, and global
          accreditation. Whether you're seeking transformative beauty treatments
          or professional learning, Timeless Aesthetics stands as a hub of
          excellence.
        </p>

        <p className="text-[#555555] leading-relaxed font-lato mb-4">
          Led by <span className="font-semibold">Dr. Shikha Baghi</span> — BDS,
          MDS (Endodontist), and the first Diamond Trainer of the American
          Academy of Micropigmentation (AAM) — along with{" "}
          <span className="font-semibold">Mr. Ashish Thapar</span>, Founder &
          Managing Director (B.E. Production Engineering, T and T Realty
          Services Pvt. Ltd.).
        </p>

        {/* Key Points */}
        <div className="w-[100%] lg:w-[80%] mt-6 text-[#3B2F2F]">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-[10px]">
              <BiSolidBadgeCheck className="text-[#D4AF37] w-[20px] h-[20px]" />
              Permanent Makeup Expertise
            </div>
            <div className="flex items-center gap-[10px]">
              <BiSolidBadgeCheck className="text-[#D4AF37] w-[20px] h-[20px]" />
              Certified Training
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[10px]">
              <BiSolidBadgeCheck className="text-[#D4AF37] w-[20px] h-[20px]" />
              Global Recognition
            </div>
            <div className="flex items-center gap-[10px]">
              <BiSolidBadgeCheck className="text-[#D4AF37] w-[20px] h-[20px]" />
              Experienced Leaders
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-8">
          <a
            href="/about"
            className="inline-block px-8 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-full font-medium hover:bg-[#D4AF37] hover:text-white transition duration-300 transform hover:scale-110 shadow-md"
          >
            Know More
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
