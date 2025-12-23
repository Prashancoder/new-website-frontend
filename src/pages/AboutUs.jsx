import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Heart, ShoppingBag, Clock, ShieldCheck } from 'lucide-react';
import Nav from '../components/Nav'; // Adjust path as per your folder structure
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-[#FAF8F6] font-lato text-[#3B2F2F]">
            <Nav />
            
            {/* --- HERO BANNER SECTION --- */}
            <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div 
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ 
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/courses/000.webp')`, // Replace with your banner path
                        backgroundAttachment: 'fixed'
                    }}
                ></div>

                {/* Content */}
                <div className="relative z-10 text-center text-white px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] mb-4 text-sm md:text-base">
                            Home / About Us
                        </p>
                        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
                            Timeless Aesthetics
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/80 leading-relaxed font-light">
                            India's pioneer in Permanent Makeup, Facial Aesthetics, and Modern Cosmetology.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Vision Section */}
            <section className="py-20 px-6">
                <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-playfair font-bold mb-8 text-[#D4AF37]">Redefining Beauty Standards</h2>
                        <div className="space-y-6 text-lg leading-relaxed text-[#555]">
                            <p>
                                <strong>Timeless Aesthetics</strong> is the premier aesthetic clinic in Gurgaon, offering a diverse range of 
                                non-surgical treatments. We specialize in <strong>Permanent Makeup, Facial Aesthetics, and Modern Cosmetology</strong>.
                            </p>
                            <p>
                                Founded and led by <strong>Dr. Shikha Baghi</strong>, Timeless Aesthetics pioneered the PMU and Cosmetology industry in India. 
                                Our mission is to combine medical expertise with artistic precision to reshape how beauty is perceived and achieved.
                            </p>
                            <p className="italic border-l-4 border-[#D4AF37] pl-4 py-2 bg-white shadow-sm">
                                Driven by a commitment to supporting survivors through initiatives like the <strong>Timeless Promise</strong>.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }} 
                        whileInView={{ opacity: 1, scale: 1 }} 
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img 
                            src="/images/our services/2.webp" 
                            alt="Timeless Aesthetics Clinic" 
                            className="rounded-2xl shadow-2xl border-2 border-[#D4AF37]/30 z-10 relative"
                        />
                        {/* Decorative background element */}
                        <div className="absolute -top-6 -right-6 w-full h-full border-2 border-[#D4AF37]/20 rounded-2xl -z-0"></div>
                        
                        <div className="absolute -bottom-8 -left-8 bg-[#3B2F2F] text-white p-8 rounded-2xl hidden md:block shadow-2xl">
                            <p className="text-4xl font-bold text-[#D4AF37]">1st</p>
                            <p className="text-xs uppercase tracking-widest mt-1">Diamond Trainer hub in India</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-24 bg-[#3B2F2F] text-white px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">The Minds Behind TA</h2>
                        <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                        {/* Dr. Shikha Baghi */}
                        <div className="flex flex-col items-center text-center">
                            <div className="relative mb-8">
                                <img src="/images/22.png" alt="Dr. Shikha Baghi" className="w-56 h-56 rounded-full object-cover border-4 border-[#D4AF37] shadow-2xl" />
                                <div className="absolute bottom-2 right-2 bg-[#D4AF37] p-2 rounded-full"><Award className="text-white h-6 w-6" /></div>
                            </div>
                            <h3 className="text-3xl font-playfair font-bold text-[#D4AF37]">Dr. Shikha Baghi</h3>
                            <p className="text-[#D4AF37]/80 font-bold mb-4">BDS, MDS (Endodontics) | Master Artist</p>
                            <p className="text-white/70 max-w-md leading-relaxed">
                                As the only Diamond Trainer of the American Academy of Micropigmentation (AAM) in India, 
                                Dr. Baghi is a master trainer who has shaped the careers of hundreds of professionals nationwide.
                            </p>
                        </div>

                        {/* Mr. Ashish Thapar */}
                        <div className="flex flex-col items-center text-center">
                            <div className="relative mb-8">
                                <img src="/images/11.jpg" alt="Mr. Ashish Thapar" className="w-56 h-56 rounded-full object-cover border-4 border-[#D4AF37]/50 shadow-2xl" />
                                <div className="absolute bottom-2 right-2 bg-[#D4AF37] p-2 rounded-full"><ShieldCheck className="text-white h-6 w-6" /></div>
                            </div>
                            <h3 className="text-3xl font-playfair font-bold text-[#D4AF37]">Mr. Ashish Thapar</h3>
                            <p className="text-[#D4AF37]/80 font-bold mb-4">Managing Director & Visionary</p>
                            <p className="text-white/70 max-w-md leading-relaxed">
                                Founder of TandT Realty Services, Mr. Thapar drives the strategic growth and business development, 
                                ensuring Timeless Aesthetics remains the industry leader in luxury and results.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Pillars Section */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {[
                            { icon: <Award />, title: "The Clinic", desc: "Expert non-surgical treatments focusing on Permanent Makeup and modern skin solutions." },
                            { icon: <BookOpen />, title: "The Academy", desc: "India's leading academy for Fellowship and Master's certification in aesthetics." },
                            { icon: <ShoppingBag />, title: "The Shop", desc: "Exclusive, health-compliant equipment curated for professional aesthetic artists." },
                            { icon: <Heart />, title: "The Promise", desc: "Free treatments for acid attack survivors as part of our commitment to humanity." }
                        ].map((item, index) => (
                            <motion.div 
                                key={index} 
                                whileHover={{ y: -10 }}
                                className="p-10 bg-[#FAF8F6] border border-[#D4AF37]/20 rounded-3xl text-center"
                            >
                                <div className="text-[#D4AF37] flex justify-center mb-6 scale-[1.8]">{item.icon}</div>
                                <h4 className="text-xl font-playfair font-bold mb-4">{item.title}</h4>
                                <p className="text-[#555] text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#D4AF37] px-6 text-center">
                <div className="container mx-auto">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-white">Experience Timeless Beauty</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="bg-[#3B2F2F] text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-white hover:text-[#3B2F2F] transition-all transform hover:scale-105">
                            Book an Appointment
                        </button>
                        <button className="bg-white text-[#3B2F2F] px-10 py-4 rounded-full font-bold shadow-xl hover:bg-[#3B2F2F] hover:text-white transition-all transform hover:scale-105">
                            Visit Academy
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;