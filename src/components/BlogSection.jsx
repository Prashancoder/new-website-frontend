import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "Profhilo – The Science Behind Skin Hydration and Bio-Remodeling",
    description: "What is Profhilo? Profhilo is a next-generation injectable treatment design...",
    image: "/blogs/1.jfif",
    link: "https://www.timelessaesthetics.in/blogs/from-botox-to-laser-hair-reduction-explore-our-range-of-services",
  },
  {
    id: 2,
    title: "PDRN – A Regenerative Approach to Aesthetic Care",
    description: "Understanding PDRN and its role in skin rejuvenation in aesthetic medicine...",
    image: "/blogs/2.jfif",
    link: "https://www.timelessaesthetics.in/blogs/rejuvenate-your-skin-and-body-with-wellness-drips",
  },
  {
    id: 3,
    title: "From Botox to Laser Hair Reduction: Explore Our Services",
    description: "In today’s fast-paced world, aesthetic treatments have become more than...",
    image: "/blogs/3.jfif",
    link: "https://www.timelessaesthetics.in/blogs/combat-aging-latest-trends-in-face-lift-treatments",
  },
];

const BlogSection = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF8F6] relative">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold uppercase text-[#3B2F2F] tracking-wide">
            Our Latest Blog
          </h2>
          <span className="block w-20 h-1 bg-[#D4AF37] mx-auto mt-2 rounded"></span>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transform transition duration-300 hover:scale-105 border-2 border-[#D4AF37]"
            >
              <div className="h-48 overflow-hidden rounded-t-2xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-playfair font-bold text-[#3B2F2F] mb-2 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-[#555555] text-sm mb-4 line-clamp-2 font-lato">
                  {blog.description}
                </p>
                
                {/* Changed from <a> tag to <button> to trigger modal */}
                <button
                  onClick={handleOpenModal}
                  className="text-sm font-medium text-[#D4AF37] hover:text-[#B8912C] transition-colors duration-200 cursor-pointer"
                >
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL / POPUP SECTION */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative bg-white rounded-xl shadow-2xl p-8 max-w-md w-full text-center border-t-4 border-[#D4AF37]"
            >
              {/* Close Icon */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-[#3B2F2F] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Icon / Image */}
              <div className="flex justify-center mb-4">
                <div className="bg-[#FAF8F6] p-4 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-2xl font-playfair font-bold text-[#3B2F2F] mb-2">
                Stay Tuned!
              </h3>
              <p className="text-[#555555] font-lato mb-6">
                Our detailed blogs are currently under construction. We are working hard to bring you the best aesthetic insights soon.
              </p>

              <button
                onClick={handleCloseModal}
                className="bg-[#D4AF37] text-white px-6 py-2 rounded-full font-medium hover:bg-[#B8912C] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Got it
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default BlogSection;