import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Nav";
import Footer from "../components/Footer";

import FeaturedClients from "../components/FeaturedClients";
import WhyChooseUs from "../components/WhyChooseUs";
import BeforeAfterResults from "../components/BeforeAfterResults";
import FAQ from "../components/FAQ";
import BlogSection from "../components/BlogSection";

const courses = [
  {
    title: "Master's in Permanent Makeup",
    link: "/courses/permanent-makeup/masters-eyebrows",
    description:
      "Master advanced eyebrow micropigmentation techniques to deliver natural and flawless results.",
    image: "/images/courses/222.jpg",
  },
  {
    title: "PG Diploma in Permanent Make up",
    link: "/courses/permanent-makeup/pg-diploma",
    description:
      "A complete diploma covering all aspects of permanent makeup artistry.",
    image: "/images/courses/1.webp",
  },
  {
    title: "Master class in Scalp Micropigmentation",
    link: "/courses/permanent-makeup/master-scalp",
    description:
      "Learn industry-leading methods to replicate natural hair follicles and restore confidence.",
    image: "/images/courses/000.webp",
  },
  {
    title: "Master class in Medical Micropigmentation",
    link: "/courses/permanent-makeup/cert-lip",
    description:
      "Get certified in lip tinting and micropigmentation with modern techniques.",
    image: "/images/courses/2.webp",
  },
  {
    title: "Certificate Course in lash lift & tint Brow lamination and tint",
    link: "/courses/permanent-makeup/cert-skin-tech",
    description:
      "Learn the fundamentals of skin technology and advanced aesthetic care.",
    image: "/images/courses/222.jpg",
  },
  {
    title: "Medical Micropigmentation",
    link: "/courses/permanent-makeup/Medical-micropigmentation",
    description:
      "Learn the fundamentals of skin technology and advanced aesthetic care.",
    image: "/images/courses/222.jpg",
  },
];

const PermanentMakeupPage = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative h-72 flex items-center justify-center">
        <img
          src="/images/filler.jpg"
          alt="Permanent Makeup Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-playfair font-bold tracking-wide uppercase"
          >
            Permanent Makeup
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-2 text-sm opacity-90 font-lato"
          >
            Home / Courses / Permanent Makeup
          </motion.p>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-[#FAF8F6] py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.img
            src="/images/goo.jpg"
            alt="About Course"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl shadow-xl border-2 border-[#D4AF37] hover:scale-105 transition-transform duration-300"
          />

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#3B2F2F] mb-4 uppercase tracking-wide">
              About the <span className="text-[#D4AF37]">Course</span>
            </h2>
            <span className="block w-16 h-1 bg-[#D4AF37] mt-2 mb-6 rounded"></span>
            <p className="text-lg text-[#555555] font-lato leading-relaxed mb-6">
              Learn industry-standard techniques in micropigmentation and brow,
              lip, and scalp artistry. Our expert-designed curriculum ensures
              hands-on training and professional certification for a successful
              career in permanent makeup.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-medium font-lato tracking-wide hover:bg-[#D4AF37] hover:text-white hover:scale-105 transition-all duration-300"
            >
              Enroll Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-playfair font-bold text-center text-[#3B2F2F] mb-12 uppercase"
        >
          Available <span className="text-[#D4AF37]">Courses</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-[#3B2F2F] mb-3">
                  {course.title}
                </h3>
                <p className="text-[#555555] font-lato text-sm mb-4">
                  {course.description}
                </p>
                <Link
                  to={course.link}
                  className="inline-block px-5 py-2 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full text-sm font-medium font-lato hover:bg-[#D4AF37] hover:text-white hover:scale-105 transition-all duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FeaturedClients />
      <WhyChooseUs />
      <BeforeAfterResults />
      <FAQ />
      <BlogSection />

      <Footer />
    </>
  );
};

export default PermanentMakeupPage;
