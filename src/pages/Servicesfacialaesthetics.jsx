import Header from "../components/Nav";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Services Data
const services = [
  {
    slug: "botox",
    title: "Botox",
    description: "Reduce fine lines and wrinkles for a youthful, refreshed look with Botox treatments.",
    image: "/images/courses/000.webp",
    link: "/services/facial-aesthetics/botox",
  },
  {
    slug: "face-lift",
    title: "Face Lift",
    description: "Tighten sagging skin and restore facial contours with advanced facelift procedures.",
    image: "/images/courses/1.webp",
    link: "/services/facial-aesthetics/face-lift",
  },
  {
    slug: "thread-lift",
    title: "Thread Lift",
    description: "Non-surgical facelift using dissolvable threads for lifted and firmer skin.",
    image: "/images/courses/2.webp",
    link: "/services/facial-aesthetics/thread-lift",
  },
  {
    slug: "nose-fillers",
    title: "Nose Fillers",
    description: "Enhance and reshape your nose with non-surgical dermal filler treatments.",
    image: "/images/courses/3.webp",
    link: "/services/facial-aesthetics/nose-fillers",
  },
  {
    slug: "chin-jawline",
    title: "Chin & Jawline Augmentation",
    description: "Define chin and jawline for a sculpted, balanced, and youthful facial profile.",
    image: "/images/courses/222.jpg",
    link: "/services/facial-aesthetics/chin-jawline",
  },
  {
    slug: "lip-fillers",
    title: "Lip Fillers",
    description: "Add volume, shape, and hydration to lips with natural-looking lip fillers.",
    image: "/images/courses/000.webp",
    link: "/services/facial-aesthetics/lip-fillers",
  },
  {
    slug: "chemical-peels",
    title: "Chemical Peels",
    description: "Improve skin texture, tone, and clarity with customized chemical peels.",
    image: "/images/courses/1.webp",
    link: "/services/facial-aesthetics/chemical-peels",
  },
  {
    slug: "acne-scar",
    title: "Acne Scar Treatment",
    description: "Reduce acne scars and achieve smoother skin with advanced treatments.",
    image: "/images/courses/2.webp",
    link: "/services/facial-aesthetics/acne-scar",
  },
  {
    slug: "vitamin-drips",
    title: "Vitamin Drips",
    description: "Boost skin glow, hydration, and immunity with nutrient-rich vitamin drips.",
    image: "/images/courses/3.webp",
    link: "/services/facial-aesthetics/vitamin-drips",
  },
  {
    slug: "pdrn",
    title: "PDRN",
    description: "Stimulate skin repair, collagen production, and rejuvenation using PDRN therapy.",
    image: "/images/courses/000.webp",
    link: "/services/facial-aesthetics/pdrn",
  },
  {
    slug: "profhilo",
    title: "Profhilo",
    description: "Deep skin hydration and bio-remodeling for firm, radiant, and youthful skin.",
    image: "/images/courses/1.webp",
    link: "/services/facial-aesthetics/profhilo",
  },
  {
    slug: "hyperhidrosis",
    title: "Hyperhidrosis",
    description: "Treat excessive sweating effectively with safe and long-lasting solutions.",
    image: "/images/courses/2.webp",
    link: "/services/facial-aesthetics/hyperhidrosis",
  },
  {
    slug: "polynucleotides",
    title: "Polynucleotides",
    description: "Regenerate skin cells, boost elasticity, and restore skin health naturally.",
    image: "/images/courses/3.webp",
    link: "/services/facial-aesthetics/polynucleotides",
  },
  {
    slug: "exosomes",
    title: "Exosomes",
    description: "Next-gen skin rejuvenation therapy using exosomes for repair and glow.",
    image: "/images/courses/222.jpg",
    link: "/services/facial-aesthetics/exosomes",
  },
  {
    slug: "neck-rejuvenation",
    title: "Neck Rejuvenation",
    description: "Tighten, smooth, and rejuvenate aging neck skin with targeted treatments.",
    image: "/images/courses/000.webp",
    link: "/services/facial-aesthetics/neck-rejuvenation",
  },
  {
    slug: "hands-rejuvenation",
    title: "Hands Rejuvenation",
    description: "Restore youthfulness to hands by reducing wrinkles, spots, and thinning skin.",
    image: "/images/courses/1.webp",
    link: "/services/facial-aesthetics/hands-rejuvenation",
  },
];

const Servicesfacialaesthetics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Banner */}
      <div
        className="relative bg-cover bg-center h-48 md:h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/our services/1.webp')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-3xl md:text-4xl font-bold">Permanent Makeup</h1>
          <p className="mt-2 text-sm">Home / Permanent Makeup</p>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-[#FAF8F6] py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="/images/goo.jpg"
            alt="About Treatments"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl shadow-xl border-2 border-[#D4AF37] hover:scale-105 transition-transform duration-300"
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#3B2F2F] mb-4 uppercase tracking-wide">
              About the <span className="text-[#D4AF37]">Treatments</span>
            </h2>
            <span className="block w-16 h-1 bg-[#D4AF37] mt-2 mb-6 rounded"></span>

            <p className="text-lg text-[#555555] font-lato leading-relaxed mb-6">
              Learn industry-standard techniques in micropigmentation and brow,
              lip, and scalp artistry. Our expert-designed services deliver
              confidence and beauty with long-lasting results.
            </p>

            <Link
              to="/contact"
              className="inline-block px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-medium font-lato tracking-wide hover:bg-[#D4AF37] hover:text-white hover:scale-105 transition-all duration-300"
            >
              Book Appointment
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-playfair font-bold text-center text-[#3B2F2F] mb-12 uppercase"
        >
          Our <span className="text-[#D4AF37]">Services</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-[#3B2F2F] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#555555] font-lato text-sm mb-4">
                  {service.description}
                </p>

                <Link
                  to={`/services/facial-aesthetics/${service.slug}`}
                  className="inline-block px-5 py-2 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full text-sm font-medium font-lato hover:bg-[#D4AF37] hover:text-white hover:scale-105 transition-all duration-300"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicesfacialaesthetics;
