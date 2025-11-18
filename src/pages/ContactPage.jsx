import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import Header from "../components/Nav";
import Footer from "../components/Footer";

// Utility to approximate custom colors for luxury theme
const LUXURY_GOLD = '#B8860B'; // DarkGoldenrod
const LUXURY_DARK = '#1a1a1a'; // Dark gray/black
const LUXURY_MUTED = '#6b7280'; // Gray-500
const RING_COLOR = LUXURY_GOLD; // Using gold for ring focus

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+91 8750027070", "+91 9876543210"],
      description: "Call us for appointments and inquiries"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@timelessaesthetics.in", "appointments@timelessaesthetics.in"],
      description: "Send us an email anytime"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: ["123 Beauty Street, Amritsar", "456 Aesthetic Avenue, Gurgaon", "789 Glamour Road, Jammu"],
      description: "Visit our clinics"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: 10:00 AM - 5:00 PM"],
      description: "We're here to serve you"
    }
  ];

  const clinics = [
    {
      name: "Amritsar Clinic",
      address: "123 Beauty Street, Amritsar, Punjab 143001",
      phone: "+91 8750027070",
      email: "amritsar@timelessaesthetics.in",
      hours: "Mon - Sat: 9:00 AM - 7:00 PM, Sun: 10:00 AM - 5:00 PM",
      services: ["Permanent Makeup", "Facial Aesthetics", "Cosmetology", "Dentistry"]
    },
    {
      name: "Gurgaon Clinic",
      address: "456 Aesthetic Avenue, Gurgaon, Haryana 122001",
      phone: "+91 9876543210",
      email: "gurgaon@timelessaesthetics.in",
      hours: "Mon - Sat: 9:00 AM - 7:00 PM, Sun: 10:00 AM - 5:00 PM",
      services: ["Permanent Makeup", "Facial Aesthetics", "Cosmetology", "Dentistry"]
    },
    {
      name: "Jammu Clinic",
      address: "789 Glamour Road, Jammu, Jammu & Kashmir 180001",
      phone: "+91 8765432109",
      email: "jammu@timelessaesthetics.in",
      hours: "Mon - Sat: 9:00 AM - 7:00 PM, Sun: 10:00 AM - 5:00 PM",
      services: ["Permanent Makeup", "Facial Aesthetics", "Cosmetology", "Dentistry"]
    }
  ];

  // Removed useToast hook and replaced it with a simple console/alert for demonstration
  // const { toast } = useToast();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  // Simplified handleChange to remove explicit TypeScript types from the function signature
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    
    // --- Mock API Submission ---
    try {
      // In a real application, you would uncomment and adjust the fetch call:
      /*
      const res = await fetch(import.meta.env.VITE_API_BASE_URL ? `${import.meta.env.VITE_API_BASE_URL}/api/leads` : `http://localhost:5000/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to submit");
      */
      
      // Simulating success
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      console.log("Form Submitted:", formData);
      alert("Message sent! We will contact you shortly.");
      
      setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      // Simulating failure
      console.error("Submission failed:", err);
      alert("Submission failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Hero Section */}
      <div
        className="relative text-white py-20 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/images/contact.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div> {/* overlay for readability */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Get in touch with us for consultations, appointments, or any questions about our services
            </p>
          </div>
        </div>
      </div>


      {/* Contact Information */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: LUXURY_DARK }}>
            Get In Touch
          </h2>
          <p className="text-lg" style={{ color: LUXURY_MUTED }}>
            We're here to help you achieve your aesthetic goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            // Replaced Card, CardHeader, CardTitle, CardDescription, CardContent with styled divs
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow duration-300">
              {/* CardHeader */}
              <div className="pb-4 space-y-1">
                <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${LUXURY_GOLD}10`, color: LUXURY_GOLD }}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold" style={{ color: LUXURY_DARK }}>{info.title}</h3>
                <p className="text-sm" style={{ color: LUXURY_MUTED }}>{info.description}</p>
              </div>
              {/* CardContent */}
              <div>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="text-sm" style={{ color: LUXURY_MUTED }}>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          {/* Replaced Card with styled div */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            {/* CardHeader */}
            <div className="pb-4 space-y-1">
              <h3 className="text-xl font-semibold flex items-center gap-2" style={{ color: LUXURY_DARK }}>
                <MessageCircle className="h-5 w-5" />
                Send us a Message
              </h3>
              <p className="text-sm" style={{ color: LUXURY_MUTED }}>
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>
            {/* CardContent */}
            <div>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    {/* Replaced Label with standard label */}
                    <label htmlFor="firstName" className="text-sm font-medium leading-none">First Name</label>
                    {/* Replaced Input with standard input */}
                    <input 
                      id="firstName" 
                      type="text" 
                      placeholder="Enter your first name" 
                      value={formData.firstName} 
                      onChange={handleChange} 
                      required 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{ borderColor: '#e5e7eb', '--tw-ring-color': RING_COLOR }}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium leading-none">Last Name</label>
                    <input 
                      id="lastName" 
                      type="text" 
                      placeholder="Enter your last name" 
                      value={formData.lastName} 
                      onChange={handleChange} 
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{ borderColor: '#e5e7eb', '--tw-ring-color': RING_COLOR }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none">Email</label>
                  <input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    style={{ borderColor: '#e5e7eb', '--tw-ring-color': RING_COLOR }}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium leading-none">Phone</label>
                  <input 
                    id="phone" 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    required 
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    style={{ borderColor: '#e5e7eb', '--tw-ring-color': RING_COLOR }}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium leading-none">Service Interest</label>
                  {/* Custom select styling for approximation */}
                  <select 
                    id="service" 
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-offset-2"
                    style={{ borderColor: '#e5e7eb', '--tw-ring-color': RING_COLOR }}
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">Select a service</option>
                    <option value="permanent-makeup">Permanent Makeup</option>
                    <option value="cosmetology">Cosmetology</option>
                    <option value="facial-aesthetics">Facial Aesthetics</option>
                    <option value="dentistry">Dentistry</option>
                    <option value="academy">Academy Courses</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none">Message</label>
                  {/* Replaced Textarea with standard textarea */}
                  <textarea 
                    id="message" 
                    placeholder="Tell us about your requirements or questions"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    style={{ borderColor: '#e5e7eb', '--tw-ring-color': RING_COLOR }}
                  />
                </div>
                
                {/* Replaced Button with standard button */}
                <button 
                  type="submit" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-11 px-8 py-2 w-full bg-black text-white hover:bg-gray-800"
                  style={{ backgroundColor: LUXURY_DARK }}
                  disabled={submitting}
                >
                  <Send className="h-4 w-4 mr-2" />
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* Map Placeholder */}
          {/* Replaced Card with styled div */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            {/* CardHeader */}
            <div className="pb-4 space-y-1">
              <h3 className="text-xl font-semibold" style={{ color: LUXURY_DARK }}>Find Us</h3>
              <p className="text-sm" style={{ color: LUXURY_MUTED }}>
                Visit our clinics for in-person consultations
              </p>
            </div>
            {/* CardContent */}
            <div>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  title="Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1522.6186082260655!2d77.0177726487854!3d28.459496580668984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f4806a6c11d%3A0x60d3d5f30882e7b4!2sCyber%20Hub!5e0!3m2!1sen!2sin!4v1640995200000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Clinics */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{ color: LUXURY_DARK }}>
              Our Clinics
            </h2>
            <p className="text-lg" style={{ color: LUXURY_MUTED }}>
              Visit us at any of our three convenient locations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {clinics.map((clinic, index) => (
              // Replaced Card, CardHeader, CardTitle, CardContent with styled divs
              <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
                {/* CardHeader */}
                <div className="pb-4 space-y-1 border-b mb-4">
                  <h3 className="text-xl font-semibold" style={{ color: LUXURY_DARK }}>{clinic.name}</h3>
                </div>
                {/* CardContent */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: LUXURY_GOLD }} />
                    <div>
                      <p className="text-sm" style={{ color: LUXURY_MUTED }}>{clinic.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 flex-shrink-0" style={{ color: LUXURY_GOLD }} />
                    <p className="text-sm" style={{ color: LUXURY_MUTED }}>{clinic.phone}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 flex-shrink-0" style={{ color: LUXURY_GOLD }} />
                    <p className="text-sm" style={{ color: LUXURY_MUTED }}>{clinic.email}</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: LUXURY_GOLD }} />
                    <p className="text-sm" style={{ color: LUXURY_MUTED }}>{clinic.hours}</p>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-sm mb-2" style={{ color: LUXURY_DARK }}>Services Available:</h4>
                    <div className="flex flex-wrap gap-2">
                      {clinic.services.map((service, serviceIndex) => (
                        <span 
                          key={serviceIndex}
                          className="px-2 py-1 text-xs rounded-full"
                          style={{ backgroundColor: `${LUXURY_GOLD}10`, color: LUXURY_GOLD }}
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Replaced Button with standard button */}
                  <button 
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full mt-4 bg-black text-white hover:bg-gray-800"
                    style={{ backgroundColor: LUXURY_DARK }}
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: LUXURY_DARK }}>
            Frequently Asked Questions
          </h2>
          <p className="text-lg" style={{ color: LUXURY_MUTED }}>
            Common questions about our services and procedures
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Replaced Card, CardHeader, CardTitle, CardContent with styled divs for FAQ */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="pb-2 space-y-1">
              <h4 className="text-lg font-semibold" style={{ color: LUXURY_DARK }}>How do I book an appointment?</h4>
            </div>
            <div>
              <p className="text-sm" style={{ color: LUXURY_MUTED }}>
                You can book an appointment by calling us at +91 8750027070, emailing us at info@timelessaesthetics.in, 
                or filling out the contact form above. We'll get back to you within 24 hours.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="pb-2 space-y-1">
              <h4 className="text-lg font-semibold" style={{ color: LUXURY_DARK }}>What services do you offer?</h4>
            </div>
            <div>
              <p className="text-sm" style={{ color: LUXURY_MUTED }}>
                We offer a comprehensive range of aesthetic services including permanent makeup, cosmetology, 
                facial aesthetics, and dentistry. We also provide professional training courses at our academy.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="pb-2 space-y-1">
              <h4 className="text-lg font-semibold" style={{ color: LUXURY_DARK }}>Do you offer consultations?</h4>
            </div>
            <div>
              <p className="text-sm" style={{ color: LUXURY_MUTED }}>
                Yes, we offer free consultations for all our services. During the consultation, we'll assess your 
                needs, discuss treatment options, and provide personalized recommendations.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="pb-2 space-y-1">
              <h4 className="text-lg font-semibold" style={{ color: LUXURY_DARK }}>What are your clinic hours?</h4>
            </div>
            <div>
              <p className="text-sm" style={{ color: LUXURY_MUTED }}>
                Our clinics are open Monday to Saturday from 9:00 AM to 7:00 PM, and Sunday from 10:00 AM to 5:00 PM. 
                We're closed on major holidays.
              </p>
            </div>
          </div>
        </div>
      </div>
    
      <Footer />
    </div>
  );
};

export default ContactPage;