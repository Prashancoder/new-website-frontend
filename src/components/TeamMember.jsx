import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const TeamMember = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const scrollRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Director",
      image: "/src/assets/team-member/sania-fotor.jpeg",
      shortDescription:
        "Leading aesthetic specialist with over 15 years of experience in cosmetic procedures and patient care.",
      fullDescription:
        "Dr. Sarah Johnson is a board-certified aesthetic specialist with over 15 years of experience in cosmetic procedures...",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      role: "Senior Aesthetic Surgeon",
      image: "/src/assets/team-member/Prabhneet.webp",
      shortDescription:
        "Expert in minimally invasive procedures and advanced surgical techniques for facial and body contouring.",
      fullDescription:
        "Dr. Michael Chen is a renowned aesthetic surgeon with expertise in minimally invasive procedures...",
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Dermatology Specialist",
      image: "/src/assets/team-member/Dr. Anshul.webp",
      shortDescription:
        "Board-certified dermatologist specializing in skin health, anti-aging treatments, and medical aesthetics.",
      fullDescription:
        "Dr. Emily Rodriguez is a board-certified dermatologist with extensive experience in medical aesthetics...",
    },
    {
      id: 4,
      name: "Dr. James Thompson",
      role: "Anesthesiologist",
      image: "/src/assets/team-member/Prabhneet.webp",
      shortDescription:
        "Specialized in patient safety and comfort during aesthetic procedures with over 12 years of experience.",
      fullDescription:
        "Dr. James Thompson is a board-certified anesthesiologist specializing in aesthetic procedures...",
    },
  ];

  const openModal = (member) => setSelectedMember(member);
  const closeModal = () => setSelectedMember(null);

  // ✅ Smooth auto-scroll carousel
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const totalWidth = scrollContainer.scrollWidth / 2;

    const step = () => {
      scrollAmount += 0.5;
      scrollContainer.scrollLeft = scrollAmount;
      if (scrollAmount >= totalWidth) scrollAmount = 0;
      requestAnimationFrame(step);
    };
    const animation = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF8F6]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-playfair font-bold uppercase text-[#3B2F2F] tracking-wide">
            Our Expert Team
          </h2>
          <span className="block w-20 h-1 bg-[#D4AF37] mx-auto mt-2 rounded"></span>
          <p className="text-[#555555] mt-4 max-w-2xl mx-auto">
            Meet our highly qualified professionals dedicated to providing exceptional aesthetic care.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="flex justify-center">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden snap-x snap-mandatory scroll-smooth pb-4"
            style={{ width: "100%", maxWidth: "960px" }}
          >
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 snap-center border-2 border-[#D4AF37] transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Image */}
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[#3B2F2F]">{member.name}</h3>
                  <p className="text-[#D4AF37] font-medium mb-2">{member.role}</p>
                  <p className="text-[#555555] text-sm line-clamp-3 mb-4">
                    {member.shortDescription}
                  </p>
                  <button
                    onClick={() => openModal(member)}
                    className="w-full border-2 border-[#D4AF37] text-[#D4AF37] py-2 px-4 rounded-lg hover:bg-[#D4AF37] hover:text-white transition-all duration-300 text-sm font-medium"
                  >
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedMember && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={(e) => e.target === e.currentTarget && closeModal()}
          >
            <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl border-2 border-[#D4AF37]">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-[#3B2F2F] hover:text-red-500"
              >
                <X size={28} />
              </button>

              {/* Modal Content */}
              <div>
                <div className="w-full bg-black flex items-center justify-center rounded-t-2xl">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="max-h-[350px] w-auto object-contain"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-playfair font-bold text-[#3B2F2F] mb-1">
                    {selectedMember.name}
                  </h3>
                  <p className="text-[#D4AF37] font-medium mb-4">{selectedMember.role}</p>
                  <p className="text-[#555555] leading-relaxed">
                    {selectedMember.fullDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamMember;
