import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, ArrowRight } from "lucide-react";
import Header from "../components/Nav";
import Footer from "../components/Footer";

const LUXURY_GOLD = '#B8860B';
const LUXURY_DARK = '#0f172a'; // Deep slate for better contrast
const LUXURY_MUTED = '#64748b';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "", service: "", message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const contactInfo = [
    { icon: <Phone />, title: "Call Us", details: ["+91 8750027070", "+91 9876543210"], desc: "Available 9AM - 7PM" },
    { icon: <Mail />, title: "Email Us", details: ["info@timelessaesthetics.in"], desc: "Response within 24hrs" },
    { icon: <MapPin />, title: "Visit Us", details: ["Amritsar, Gurgaon, Jammu"], desc: "Find your nearest clinic" },
    { icon: <Clock />, title: "Working Hours", details: ["Mon - Sat: 9AM - 7PM"], desc: "Sunday: 10AM - 5PM" }
  ];

  const clinics = [
    {
      name: "Gurgaon Headquarters",
      address: "456 Aesthetic Avenue, Sector 45, Gurgaon, HR",
      phone: "+91 9876543210",
      services: ["Facial Aesthetics", "Cosmetology", "Academy"]
    },
    {
      name: "Amritsar Clinic",
      address: "123 Beauty Street, Ranjit Avenue, Amritsar, PB",
      phone: "+91 8750027070",
      services: ["Permanent Makeup", "Dentistry"]
    },
    {
      name: "Jammu Clinic",
      address: "789 Glamour Road, Gandhi Nagar, Jammu, J&K",
      phone: "+91 8765432109",
      services: ["All Aesthetic Services"]
    }
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert("Thank you! Your inquiry has been received.");
    setSubmitting(false);
    setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans text-slate-900">
      <Header />

      {/* --- HERO SECTION --- */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <img 
          src="/images/courses/000.webp" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 transition-transform duration-1000 hover:scale-100"
          alt="Luxury Aesthetic Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#fafafa]"></div>
        
        <div className="relative z-10 text-center px-4">
          <span className="inline-block text-white tracking-[0.3em] uppercase text-sm mb-4 opacity-80">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 italic">Contact <span className="font-bold not-italic">Timeless</span></h1>
          <div className="w-24 h-1 bg-yellow-600 mx-auto"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-20">
        {/* --- CONTACT QUICK INFO --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((info, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all hover:shadow-xl hover:-translate-y-2">
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: `${LUXURY_GOLD}15`, color: LUXURY_GOLD }}>
                {React.cloneElement(info.icon, { size: 24 })}
              </div>
              <h3 className="font-bold text-lg mb-2 uppercase tracking-wider">{info.title}</h3>
              {info.details.map((d, idx) => <p key={idx} className="text-slate-600 font-medium">{d}</p>)}
              <p className="text-xs text-slate-400 mt-4 italic">{info.desc}</p>
            </div>
          ))}
        </div>

        {/* --- MAIN FORM SECTION --- */}
        <div className="grid lg:grid-cols-5 gap-12 items-start mb-24">
          <div className="lg:col-span-3 bg-white p-10 rounded-3xl shadow-2xl shadow-slate-200/50 border border-gray-100">
            <div className="mb-10">
              <h2 className="text-3xl font-bold mb-2">Send an Inquiry</h2>
              <p className="text-slate-500">Experience the gold standard of aesthetic care. Fill out the form below.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">First Name</label>
                  <input id="firstName" required value={formData.firstName} onChange={handleChange} type="text" placeholder="John" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-yellow-600 focus:ring-0 transition-all outline-none bg-slate-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Last Name</label>
                  <input id="lastName" value={formData.lastName} onChange={handleChange} type="text" placeholder="Doe" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-yellow-600 focus:ring-0 transition-all outline-none bg-slate-50" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                  <input id="email" required value={formData.email} onChange={handleChange} type="email" placeholder="john@example.com" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-yellow-600 focus:ring-0 transition-all outline-none bg-slate-50" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                  <input id="phone" required value={formData.phone} onChange={handleChange} type="tel" placeholder="+91 ..." 
                    className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-yellow-600 focus:ring-0 transition-all outline-none bg-slate-50" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Select Service</label>
                <select id="service" value={formData.service} onChange={handleChange} 
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-yellow-600 outline-none bg-slate-50 appearance-none">
                  <option value="">Choose a procedure</option>
                  <option value="pmu">Permanent Makeup</option>
                  <option value="cosmo">Cosmetology</option>
                  <option value="facial">Facial Aesthetics</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Message</label>
                <textarea id="message" rows={4} value={formData.message} onChange={handleChange} placeholder="How can we help you?" 
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-yellow-600 outline-none bg-slate-50" />
              </div>

              <button 
                type="submit" 
                disabled={submitting}
                className="w-full py-5 rounded-xl bg-slate-900 text-white font-bold uppercase tracking-[0.2em] hover:bg-black transition-all flex items-center justify-center gap-3 group"
              >
                {submitting ? "Processing..." : <>Send Message <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} /></>}
              </button>
            </form>
          </div>

          {/* --- MAP / SIDEBAR --- */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Our Presence</h3>
                <p className="text-slate-400 mb-6">Experience world-class treatments at any of our luxury clinic locations across India.</p>
                <div className="space-y-6">
                  {clinics.map((c, i) => (
                    <div key={i} className="group cursor-pointer">
                      <h4 className="font-bold text-yellow-600 group-hover:text-yellow-500 transition-colors flex items-center gap-2">
                        {c.name} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100" />
                      </h4>
                      <p className="text-sm text-slate-300">{c.address}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-600/10 rounded-full blur-3xl"></div>
            </div>

            <div className="rounded-3xl overflow-hidden h-[400px] border border-gray-200 shadow-lg shadow-slate-200">
               <iframe
                  title="Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.6800880456803!2d77.09457447532891!3d28.458470475760315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d232106de6803%3A0x334abceb23079c69!2sTimeless%20Aesthetics!5e1!3m2!1sen!2sin!4v1770361822684!5m2!1sen!2sin"               
               
               width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
               </iframe>
            </div>
          </div>
        </div>
      </div>

      {/* --- WHATSAPP FLOATING --- */}
      <a 
        href="https://wa.me/918750027070" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold px-0 group-hover:px-2">Chat with us</span>
        <MessageCircle size={28} />
      </a>

      <Footer />
    </div>
  );
};

export default ContactPage;