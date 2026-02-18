import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import {
  BookOpen,
  Clock,
  Star,
  Users,
  PlayCircle,
  Award,
  ShoppingCart,
} from "lucide-react";

/**
 * Course data (converted from your TSX)
 * - kept as plain JS object
 */
const courseDataMap = {
  // Permanent Makeup Courses
"permanent-makeup/masters-eyebrows": {
    title: "Master's in Permanent Makeup",

    description: "An all-inclusive masterclass covering the full spectrum of Permanent Makeup. Master the advanced techniques for eyebrows, luscious lip blush, and precision eyeliner. This course is designed to turn you into a complete PMU artist with extensive hands-on training using global standards.",

    // ✅ NEW SEO DATA ADDED
    seoTitle: "Permanent Makeup Course in Amritsar | Timeless Aesthetics",

    seoDescription: "Get safe permanent makeup in Amritsar including microblading, lip blush, eyebrow tinting and natural-looking cosmetic results.",

    metaKeywords: "permanent makeup Amritsar, microblading Amritsar, lip blush Amritsar, eyebrow microblading Amritsar, cosmetic tattoo Amritsar, semi permanent makeup Amritsar, best permanent makeup clinic Amritsar",

    duration: "10 Days",
    level: "Mastery",
    category: "Permanent Makeup",
    price: "₹1,25,000",
    image: "/images/courses-banner.jpeg",

    features: [
        "Full PMU kit included (Machine & Pigments)",
        "Hands-on practice on live models",
        "Mastery in Brows, Lips, and Eyeliner",
        "Advanced mapping and symmetry tools",
        "Small batch training (max 4 students)",
        "Lifetime post-training mentorship",
        "Business branding & client acquisition module"
    ],

    curriculum: [
        "Fundamental Theory of PMU",
        "Advanced Skin Anatomy & Pigment Science",
        "Eyebrows: Microblading, Ombre & Powder Brows",
        "Lips: Lip Blush, Dark Lip Correction & Full Tint",
        "Eyeliner: Classic Winged & Lash Enhancement",
        "Color Theory & Needle Cartridge Selection",
        "Sanitization and Safety Protocols",
        "Portfolio Building & Photography",
        "Business setup and legal licensing"
    ],

    requirements: [
        "Passion for the beauty and aesthetic industry",
        "No prior experience required (Beginner to Master)",
        "Steady hand and keen eye for detail",
        "Valid ID proof"
    ],

    certification: "International Master's Diploma in Permanent Makeup from Timeless Aesthetics Academy",

    instructor: {
        name: "Dr. Aesthetic Kumar",
        bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
        experience: "Trained 500+ professionals globally",
        image: "/images/dr.png",
        courseDetailImage: "/courses2/MastersinPMU.png",
    },

    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
},



          "permanent-makeup/master-scalp": {
            title: "Master class in Scalp Micropigmentation",
            courseDetailImage: "/courses2/1.jpeg", // New Image Path
            description:
            "Specialized training in scalp micropigmentation for hair loss treatment. Learn advanced techniques to create natural-looking hair follicles and restore confidence in clients with hair loss.",
            duration: "4 Days",
            level: "Advanced",
            category: "Permanent Makeup",
            price: "₹55,000",
            image: "/images/courses-banner.jpeg",
            features: [
            "Advanced SMP techniques",
            "Hair loss pattern analysis",
            "Color matching expertise",
            "Client consultation skills",
            "Business development guidance",
            "Professional equipment training",
            ],
            curriculum: [
            "Scalp anatomy and hair growth",
            "Hair loss types and patterns",
            "SMP needle configurations",
            "Color theory for scalp work",
            "Client consultation process",
            "Treatment planning",
            "Aftercare protocols",
            ],
            requirements: [
            "Previous micropigmentation experience preferred",
            "Understanding of hair loss conditions",
            "Valid medical license (if applicable)",
            "Portfolio review",
            ],
            certification: "Master Certificate in Scalp Micropigmentation",
            instructor: {
            name: "Dr. Aesthetic Kumar",
            bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
            experience: "Trained 500+ professionals globally",
            image: "/images/dr.png", // replace with actual image
            courseDetailImage: "/courses2/Master class in Scalp Micropigmentation.png", 
            },
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            },









          "permanent-makeup/pg-diploma": {
            title: "PG Diploma in Permanent Make up",
            description: "Comprehensive postgraduate diploma covering all aspects of permanent makeup including eyebrows, lips, eyeliner, and areola restoration. Perfect for those seeking complete expertise in the field.",
            
            

              // ✅ NEW SEO DATA ADDED
    seoTitle: "Post Graduate Diploma in Permanent Makeup in Amritsar | Timeless Aesthetics",

    seoDescription: "Enroll in a Post Graduate Diploma in Permanent Makeup in Amritsar. Learn microblading, lip blush, cosmetic tattooing with expert training & certification",

    metaKeywords: "PG Diploma in Permanent Makeup, permanent makeup course Amritsar, microblading course Amritsar, cosmetic tattoo course Amritsar, PMU training Amritsar, professional makeup certification Amritsar, semi permanent makeup course",           
            
            duration: "10 Days",
            level: "Professional",
            category: "Permanent Makeup",
            price: "₹85,000",
            image: "/images/courses-banner.jpeg",
            features: [
              "Complete permanent makeup training",
              "All techniques covered",
              "Business management module",
              "Marketing strategies",
              "Client management system",
              "Advanced equipment training"
            ],
            curriculum: [
              "Foundation theory",
              "Eyebrow techniques",
              "Lip micropigmentation",
              "Eyeliner application",
              "Areola restoration",
              "Color theory and mixing",
              "Business setup and management",
              "Marketing and client acquisition"
            ],
            requirements: [
              "High school diploma or equivalent",
              "Basic computer skills",
              "Valid ID and address proof",
              "Medical fitness certificate"
            ],
            certification: "Post Graduate Diploma in Permanent Makeup",
            instructor: {
              name: "Dr. Aesthetic Kumar",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
courseDetailImage: "/courses2/PG Diploma in PMU.png", 

              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },




   "permanent-makeup/Medical-micropigmentation": {
    title: "Medical Micropigmentation",
    description: "A specialized clinical course focusing on paramedical tattooing. This masterclass covers advanced procedures like Areola restoration, Vitiligo camouflage, Scar revision, and Scalp Micropigmentation (SMP) to help patients regain confidence after medical treatments or trauma.",
    duration: "7 Days",
    level: "Expert / Master",
    category: "Paramedical Micropigmentation",
    price: "₹85,000", 
    image: "/images/courses-banner.jpeg",
    features: [
        "Clinical safety and sterilization protocols",
        "Paramedical camouflage techniques",
        "Vitiligo & Scar revision mastery",
        "Areola reconstruction training",
        "Hands-on practice on clinical models",
        "Medical grade pigment science",
        "Lifetime clinical support"
    ],
    curriculum: [
        "Introduction to Paramedical Tattooing",
        "Skin Grafting & Burn Scar Camouflage",
        "Vitiligo Re-pigmentation Techniques",
        "Areola Reconstruction Post-Mastectomy",
        "Scalp Micropigmentation (SMP) Fundamentals",
        "Cleft Lip Shape Correction",
        "Striae (Stretch Mark) Camouflage",
        "Medical Anesthesia & Pain Management",
        "Client Psychology & Medical Consultation"
    ],
    requirements: [
        "Basic knowledge of Micropigmentation or Nursing/Cosmetology",
        "Valid Medical or Beauty Professional ID",
        "Medical clearance & steady hands",
        "Passion for restorative aesthetics"
    ],
    certification: "Master Class Diploma in Medical & Paramedical Micropigmentation",
    instructor: {
        name: "Dr. Aesthetic Kumar",
        bio: "International trainer with 12+ years of expertise in Medical Micropigmentation & Restorative Aesthetics.",
        experience: "Trained 500+ professionals globally in clinical PMU",
        image: "/images/dr.png",
        courseDetailImage: "/Permanent Makeup/Lip_Blush_&_Neutralization.png"
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    courseDetailImage: "/courses2/1.jpeg"
    

},



"permanent-makeup/cert-brows-lash": {
    title: "Certificate in Brows and Lash Lift",

    description: "Comprehensive training in eyebrow and eyelash lifting techniques. Learn to enhance natural brows and lashes with safe, effective lifting methods.",

    // ✅ SEO DATA ADDED
    seoTitle: "Certificate in Brows & Lash Lift in Amritsar",

    seoDescription: "Certificate in Brows and Lash Lift course in Amritsar. Learn brow lamination, lash lift techniques with professional training and certification.",

    metaKeywords: "brows and lash lift course Amritsar, brow lamination course Amritsar, lash lift training Amritsar, eyebrow shaping course Amritsar, lash lift certification Amritsar, beauty certification course Amritsar",

    duration: "2 Days",
    level: "Beginner",
    category: "Permanent Makeup",
    price: "₹25,000",
    image: "/images/courses-banner.jpeg",

    features: [
        "Brow lifting techniques",
        "Lash lift procedures",
        "Chemical safety protocols",
        "Client consultation skills",
        "Aftercare guidance",
        "Product knowledge"
    ],

    curriculum: [
        "Hair structure and growth",
        "Chemical lifting principles",
        "Brow shaping and lifting",
        "Lash lift techniques",
        "Safety protocols",
        "Client consultation",
        "Aftercare instructions"
    ],

    requirements: [
        "No prior experience required",
        "Basic understanding of beauty treatments",
        "Valid ID proof",
        "Allergy testing recommended"
    ],

    certification: "Certificate in Brows and Lash Lift",

    instructor: {
        name: "Dr. Aesthetic Kumar",
        bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
        experience: "Trained 500+ professionals globally",
        image: "/images/dr.png",
    },

    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
},




"permanent-makeup/cert-scalp": {
    title: "Certificate in Scalp Micropigmentation",

    description: "Foundation course in scalp micropigmentation for beginners. Learn the basics of creating natural-looking hair follicles for clients with hair loss.",

    // ✅ SEO DATA ADDED
    seoTitle: "Scalp Micropigmentation Course in Amritsar | Timeless Aesthetics",

    seoDescription: "Get certified in scalp micropigmentation training in Amritsar. Learn SMP techniques for hair density, bald spots & professional client results.",

    metaKeywords: "scalp micropigmentation course Amritsar, SMP certification Amritsar, hair tattoo course Amritsar, scalp pigmentation training Amritsar, hair density treatment course, SMP professional training",

    duration: "3 Days",
    level: "Beginner",
    category: "Permanent Makeup",
    price: "₹40,000",
    image: "/images/goo.jpg",

    features: [
        "Basic SMP techniques",
        "Hair loss understanding",
        "Client consultation basics",
        "Equipment handling",
        "Safety protocols",
        "Aftercare procedures"
    ],

    curriculum: [
        "Introduction to SMP",
        "Hair loss types",
        "Basic needle techniques",
        "Color selection",
        "Client consultation",
        "Treatment planning",
        "Aftercare protocols"
    ],

    requirements: [
        "No prior experience required",
        "Interest in hair loss solutions",
        "Valid ID proof",
        "Medical clearance"
    ],

    certification: "Certificate in Scalp Micropigmentation",

    instructor: {
        name: "Dr. Aesthetic Kumar",
        bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
        experience: "Trained 500+ professionals globally",
        image: "/images/dr.png",
    },

    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
},





"permanent-makeup/cert-laser-hair": {
    title: "Certificate Course in Laser Hair Reduction",

    description: "Professional training in laser hair reduction techniques. Learn safe and effective methods for permanent hair removal using advanced laser technology.",

    // ✅ SEO DATA ADDED
    seoTitle: "Laser Hair Reduction Course in Amritsar | Laser Hair Reduction",

    seoDescription: "Enroll in Laser Hair Reduction Course in Amritsar. Learn laser safety, hair removal techniques & hands-on training.",

    metaKeywords: "laser hair reduction course Amritsar, laser hair removal training Amritsar, laser technician course Amritsar, aesthetic laser course Amritsar, laser safety training Amritsar, cosmetic laser certification",

    duration: "4 Days",
    level: "Intermediate",
    category: "Permanent Makeup",
    price: "₹50,000",
    image: "/images/goo.jpg",
    courseDetailImage: "/courses2/1.jpeg",

    features: [
        "Laser technology understanding",
        "Skin type analysis",
        "Safety protocols",
        "Treatment planning",
        "Client consultation",
        "Equipment maintenance"
    ],

    curriculum: [
        "Laser physics and safety",
        "Skin types and hair colors",
        "Treatment protocols",
        "Client consultation",
        "Pre and post care",
        "Equipment operation",
        "Business aspects"
    ],

    requirements: [
        "Basic medical knowledge preferred",
        "Valid ID proof",
        "Medical clearance",
        "Understanding of skin anatomy"
    ],

    certification: "Certificate in Laser Hair Reduction",

    instructor: {
        name: "Dr. Aesthetic Kumar",
        bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
        experience: "Trained 500+ professionals globally",
        image: "/images/dr.png",
    },

    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
},


"permanent-makeup/cert-skin-tech": { 
    title: "Certificate Course in Lash Lift & Tint, Brow Lamination and Tint",
    description: "Master the art of eye enhancement with our specialized dual-certification course. Learn to create perfectly curled lashes and fluffy, groomed brows using professional lifting and tinting techniques that last for weeks.",
    duration: "2 Days", // In procedures ke liye 2 din ideal hain
    level: "Beginner to Intermediate",
    category: "Lash & Brow Artistry",
    price: "₹25,000", 
    image: "/images/goo.jpg",
    courseDetailImage: "/PermanentMakeup/Lash_Lift_&_Brow_Lamination.png", // Added here
    features: [
        "Mastering Lash Lift & Tint",
        "Brow Lamination & Tinting expertise",
        "Eye anatomy and safety protocols",
        "Hands-on practice on live models",
        "Product chemistry and processing times",
        "Kit advice and business branding",
        "Lifetime post-training support"
    ],
    curriculum: [
        "Anatomy of the Eye and Hair Growth Cycle",
        "Client Consultation & Patch Testing",
        "Lash Lift Procedure: Step-by-Step Mastery",
        "Lash Tinting: Customizing shades for clients",
        "Brow Lamination: Mapping & Styling",
        "Brow Tinting & Shaping techniques",
        "Sanitization, Hygiene & Aftercare Protocols",
        "Client Troubleshooting & Maintenance",
        "Business setup and pricing your services"
    ],
    requirements: [
        "A keen eye for detail and steady hands",
        "Valid ID proof",
        "Interest in eye aesthetics",
        "No prior beauty experience required"
    ],
    certification: "Certificate in Professional Lash Lift, Brow Lamination & Tinting",
    instructor: {
        name: "Dr. Aesthetic Kumar",
        bio: "International trainer with 12+ years of expertise in Permanent Makeup, Lash & Brow Artistry.",
        experience: "Trained 500+ professionals globally",
        image: "/images/dr.png",
        courseDetailImage: "/courses2/Certificate Course in lash lift & tint Brow lamination and tint.png" // Added here as well
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
},








"permanent-makeup/Medical-Micropigmentation": { 
    title: "Certificate Course in Lash Lift & Tint, Brow Lamination and Tint",
    description: "Master the art of eye enhancement with our specialized dual-certification course. Learn to create perfectly curled lashes and fluffy, groomed brows using professional lifting and tinting techniques that last for weeks.",
    duration: "2 Days", // In procedures ke liye 2 din ideal hain
    level: "Beginner to Intermediate",
    category: "Lash & Brow Artistry",
    price: "₹25,000", 
    image: "/images/goo.jpg",
    courseDetailImage: "/courses2/1.jpeg", // Added here
    features: [
        "Mastering Lash Lift & Tint",
        "Brow Lamination & Tinting expertise",
        "Eye anatomy and safety protocols",
        "Hands-on practice on live models",
        "Product chemistry and processing times",
        "Kit advice and business branding",
        "Lifetime post-training support"
    ],
    curriculum: [
        "Anatomy of the Eye and Hair Growth Cycle",
        "Client Consultation & Patch Testing",
        "Lash Lift Procedure: Step-by-Step Mastery",
        "Lash Tinting: Customizing shades for clients",
        "Brow Lamination: Mapping & Styling",
        "Brow Tinting & Shaping techniques",
        "Sanitization, Hygiene & Aftercare Protocols",
        "Client Troubleshooting & Maintenance",
        "Business setup and pricing your services"
    ],
    requirements: [
        "A keen eye for detail and steady hands",
        "Valid ID proof",
        "Interest in eye aesthetics",
        "No prior beauty experience required"
    ],
    certification: "Certificate in Professional Lash Lift, Brow Lamination & Tinting",
    instructor: {
        name: "Dr. Aesthetic Kumar",
        bio: "International trainer with 12+ years of expertise in Permanent Makeup, Lash & Brow Artistry.",
        experience: "Trained 500+ professionals globally",
        image: "/images/dr.png",
        courseDetailImage: "/courses2/1.jpeg"
    },
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
},








// Cosmetology Courses
"cosmetology/master-chemical-peels": {
  title: "Certificate in Professional Cosmetology",

  description: "A comprehensive professional program covering the fundamentals and advanced techniques of skin care, hair treatments, and makeup artistry. Designed for aspiring beauty professionals to master the art and science of aesthetics.",

  // ✅ SEO DATA ADDED
  seoTitle: "Professional Cosmetology Course in Amritsar | Timeless Aesthetics",

  seoDescription: "Join a Professional Cosmetology course in Amritsar. Learn skincare, lasers, makeup & advanced aesthetic treatments with certification.",

  metaKeywords: "professional cosmetology course Amritsar, cosmetology course Amritsar, aesthetic cosmetology training Amritsar, skin and laser course Amritsar, beauty and cosmetology certification, cosmetologist course Amritsar",

  duration: "3 Months",
  level: "Beginner to Intermediate",
  category: "Cosmetology",
  price: "₹1,20,000",
  image: "/images/goo.jpg",
  courseDetailImage: "/courses2/cosmotolgy/1.png",

  features: [
      "Hands-on training in skin & hair care",
      "Advanced facial & chemical peel techniques",
      "Professional makeup & styling basics",
      "Client management & salon ethics",
      "Product chemistry & skin anatomy",
      "Internship opportunities"
  ],

  curriculum: [
      "Introduction to Cosmetology & Skin Science",
      "Deep Cleansing & Advanced Facials",
      "Chemical Peels & Skin Rejuvenation",
      "Hair Structure, Cutting & Coloring",
      "Basic to Bridal Makeup Artistry",
      "Manicure, Pedicure & Nail Art",
      "Sterilization & Clinical Safety",
      "Business Management for Beauty Professionals"
  ],

  requirements: [
      "Minimum 10th or 12th Standard education",
      "Passion for the beauty & wellness industry",
      "Valid ID proof",
      "No prior experience required"
  ],

  certification: "Professional Certificate in Cosmetology",

  instructor: {
      name: "Dr. Aesthetic Kumar",
      bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
      experience: "Trained 500+ professionals globally",
      image: "/images/dr.png",
      courseDetailImage: "/courses2/cosmotolgy/1.png"
  },

  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
},








"cosmetology/diploma-advanced": {
    title: "Diploma in Cosmetology",

    description: "A comprehensive diploma program designed to master the fundamentals and advanced techniques of cosmetology. This course covers clinical skin treatments, hair aesthetics, and professional beauty management to prepare you for a global career.",

    // ✅ SEO DATA ADDED
    seoTitle: "Diploma in Cosmetology Course in Amritsar | Timeless Aesthetics",

    seoDescription: "Enroll in a Diploma in Cosmetology in Amritsar. Learn skincare, lasers, makeup and advanced aesthetic treatments with certification.",

    metaKeywords: "diploma in cosmetology Amritsar, cosmetology course Amritsar, beauty and cosmetology diploma, aesthetic cosmetology training Amritsar, skin and laser course Amritsar, cosmetologist course Amritsar",

    duration: "6 Months",
    level: "Professional",
    category: "Cosmetology",
    price: "₹1,20,000",
    image: "/images/goo.jpg",

    features: [
        "In-depth cosmetology training",
        "Clinical & aesthetic treatment techniques",
        "Business management & salon ethics",
        "Advanced client consultation skills",
        "Comprehensive product & chemical knowledge",
        "Extensive practical & hands-on experience"
    ],

    curriculum: [
        "Advanced Skin Anatomy & Physiology",
        "Clinical Facial & Extraction Techniques",
        "Chemical Peels & Skin Resurfacing",
        "Microdermabrasion & Skin Polishing",
        "LED Light Therapy & Electrotherapy",
        "Hair Analysis & Advanced Styling",
        "Salon Operations & Business Management",
        "Professional Marketing & Social Media for Therapists"
    ],

    requirements: [
        "High school diploma (10th or 12th)",
        "Basic understanding of the beauty industry",
        "Valid ID proof",
        "Passion for aesthetic excellence"
    ],

    certification: "Diploma in Cosmetology",

    instructor: {
        name: "Dr. Aesthetic Kumar",
        bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
        experience: "Trained 500+ professionals globally",
        image: "/images/dr.png",
        courseDetailImage: "/courses2/cosmotolgy/2.png"
    },

    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
},





"cosmetology/cert-professional": {
    title: "Certificate in Professional Cosmetology",

    description: "Professional certification in cosmetology covering essential skin care treatments, facial techniques, and client consultation skills.",

    // ✅ SEO DATA ADDED
    seoTitle: "Professional Cosmetology Classes in Amritsar | Timeless Aesthetics",

    seoDescription: "Join professional cosmetology classes in Amritsar. Learn skincare, lasers, makeup & advanced aesthetic treatments with certification.",

    metaKeywords: "professional cosmetology classes Amritsar, cosmetology classes Amritsar, beauty and cosmetology training Amritsar, skin and laser classes Amritsar, aesthetic cosmetology course Amritsar, cosmetologist training Amritsar",

    duration: "3 Months",
    level: "Professional",
    category: "Cosmetology",
    price: "₹75,000",
    image: "/images/goo.jpg",

    features: [
        "Professional skin care training",
        "Facial treatment techniques",
        "Client consultation skills",
        "Product knowledge",
        "Safety protocols",
        "Business basics"
    ],

    curriculum: [
        "Skin anatomy and types",
        "Facial treatment protocols",
        "Product selection and application",
        "Client consultation",
        "Safety and hygiene",
        "Business fundamentals"
    ],

    requirements: [
        "High school education",
        "Interest in beauty industry",
        "Valid ID proof",
        "Medical clearance"
    ],

    certification: "Professional Certificate in Cosmetology",

    instructor: {
        name: "Dr. Aesthetic Kumar",
        bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
        experience: "Trained 500+ professionals globally",
        image: "/images/dr.png"
    },

    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
},



"cosmetology/cert-hydrafacial": {
    title: "Certificate Course in Medicated Hydrafacial",

    description: "Specialized training in medicated HydraFacial treatments. Learn to customize treatments for various skin concerns using advanced HydraFacial technology.",

    // ✅ SEO DATA ADDED
    seoTitle: "Medicated Hydrafacial Training in Amritsar | Timeless Aesthetics",

    seoDescription: "Join best medicated Hydrafacial training in Amritsar. Learn advanced Hydrafacial techniques, skin protocols & hands-on clinical training.",

    metaKeywords: "medicated Hydrafacial training Amritsar, Hydrafacial course Amritsar, advanced Hydrafacial training Amritsar, skin treatment training Amritsar, aesthetic facial course Amritsar, Hydrafacial certification",

    duration: "2 Days",
    level: "Intermediate",
    category: "Cosmetology",
    price: "₹30,000",
    image: "/assets/courses/permanent-cosmetology.jpg",

    features: [
        "HydraFacial technology training",
        "Medicated treatment protocols",
        "Skin analysis techniques",
        "Client consultation",
        "Equipment operation",
        "Aftercare procedures"
    ],

    curriculum: [
        "HydraFacial technology",
        "Medicated serums and protocols",
        "Skin analysis and treatment selection",
        "Equipment operation and maintenance",
        "Client consultation",
        "Aftercare and follow-up"
    ],

    requirements: [
        "Basic skin care knowledge",
        "Valid ID proof",
        "Medical clearance",
        "Equipment training completion"
    ],

    certification: "Certificate in Medicated HydraFacial",

    instructor: {
        name: "Dr. Aesthetic Kumar",
        bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
        experience: "Trained 500+ professionals globally",
        image: "/images/dr.png"
    },

    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
},

          
"cosmetology/cert-chemical-peels": {
    title: "Certificate Courses in Chemical Peels",

    description: "Foundation course in chemical peel treatments. Learn safe and effective methods for performing various types of chemical peels.",

    // ✅ SEO DATA ADDED
    seoTitle: "Chemical Peels Course in Amritsar | Timeless Aesthetics",

    seoDescription: "Enroll in a Chemical Peels course in Amritsar. Learn superficial to advanced peels, skin protocols & hands-on clinical training.",

    metaKeywords: "chemical peels course Amritsar, skin peel training Amritsar, aesthetic skin course Amritsar, chemical peel certification, dermatology peel training Amritsar, advanced facial peel course",

    duration: "2 Days",
    level: "Beginner",
    category: "Cosmetology",
    price: "₹25,000",
    image: "/images/goo.jpg",

    features: [
        "Chemical peel basics",
        "Safety protocols",
        "Skin type analysis",
        "Treatment selection",
        "Client consultation",
        "Aftercare procedures"
    ],

    curriculum: [
        "Introduction to chemical peels",
        "Skin anatomy and types",
        "Peel types and selection",
        "Safety protocols",
        "Application techniques",
        "Client consultation",
        "Aftercare procedures"
    ],

    requirements: [
        "No prior experience required",
        "Valid ID proof",
        "Medical clearance",
        "Interest in skin treatments"
    ],

    certification: "Certificate in Chemical Peels",

    instructor: {
        name: "Dr. Aesthetic Kumar",
        bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
        experience: "Trained 500+ professionals globally",
        image: "/images/dr.png"
    },

    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
},


          // Facial Aesthetics Courses
          "facial-aesthetics/medical": {
            title: "Masters in Medical Aesthetics",
            description: "Comprehensive master's program in facial aesthetics covering all aspects of non-surgical facial treatments including injectables, threads, and advanced techniques.",
            duration: "6 Months",
            level: "Master's",
            category: "Medical Aesthetics",
            price: "₹2,50,000",
            image: "/images/goo.jpg",
            features: [
              "Complete facial aesthetics training",
              "Advanced injection techniques",
              "Thread lift procedures",
              "Business management",
              "Clinical experience",
              "Mentorship program"
            ],
            curriculum: [
              "Facial anatomy and aging",
              "Injectable treatments (Botox, Fillers)",
              "Thread lift techniques",
              "Advanced procedures",
              "Client consultation and assessment",
              "Business management and marketing",
              "Clinical practice and supervision"
            ],
            requirements: [
              "Medical degree or equivalent",
              "Valid medical license",
              "Previous aesthetic experience preferred",
              "Portfolio review"
            ],
            certification: "Master's Degree in Facial Aesthetics",
            instructor: {
              name: "Dr. Aesthetic Kumar",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },




          
          "facial-aesthetics/masters": {
            title: "Masters in Facial Aesthetics",
            description: "Comprehensive master's program in facial aesthetics covering all aspects of non-surgical facial treatments including injectables, threads, and advanced techniques.",
            duration: "6 Months",
            level: "Master's",
            category: "Facial Aesthetics",
            price: "₹2,50,000",
            image: "/images/goo.jpg",
            features: [
              "Complete facial aesthetics training",
              "Advanced injection techniques",
              "Thread lift procedures",
              "Business management",
              "Clinical experience",
              "Mentorship program"
            ],
            curriculum: [
              "Facial anatomy and aging",
              "Injectable treatments (Botox, Fillers)",
              "Thread lift techniques",
              "Advanced procedures",
              "Client consultation and assessment",
              "Business management and marketing",
              "Clinical practice and supervision"
            ],
            requirements: [
              "Medical degree or equivalent",
              "Valid medical license",
              "Previous aesthetic experience preferred",
              "Portfolio review"
            ],
            certification: "Master's Degree in Facial Aesthetics",
            instructor: {
              name: "Dr. Aesthetic Kumar",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "facial-aesthetics/master-lipolytic": {
            title: "Master Class In Lipolytic Injections",
            description: "Advanced training in lipolytic injection techniques for fat reduction and body contouring. Learn safe and effective methods for non-surgical fat reduction.",
            duration: "3 Days",
            level: "Advanced",
            category: "Facial Aesthetics",
            price: "₹60,000",
            image: "/images/goo.jpg",
            features: [
              "Advanced lipolytic techniques",
              "Anatomy and safety protocols",
              "Treatment planning",
              "Client consultation",
              "Complication management",
              "Business development"
            ],
            curriculum: [
              "Fat anatomy and physiology",
              "Lipolytic agents and mechanisms",
              "Injection techniques and protocols",
              "Treatment planning and assessment",
              "Safety protocols and complications",
              "Client consultation and consent"
            ],
            requirements: [
              "Medical degree required",
              "Valid medical license",
              "Previous injection experience",
              "Portfolio review"
            ],
            certification: "Master Certificate in Lipolytic Injections",
            instructor: {
              name: "Dr. Aesthetic Kumar",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "facial-aesthetics/master-nose": {
            title: "Master Class in Nose correction",
            description: "Specialized training in non-surgical nose correction using advanced filler techniques. Learn to reshape and enhance nose appearance without surgery.",
            duration: "2 Days",
            level: "Advanced",
            category: "Facial Aesthetics",
            price: "₹45,000",
            image: "/images/goo.jpg",
            features: [
              "Non-surgical nose correction",
              "Advanced filler techniques",
              "Anatomy and safety",
              "Treatment planning",
              "Client consultation",
              "Complication management"
            ],
            curriculum: [
              "Nose anatomy and structure",
              "Filler selection and techniques",
              "Treatment planning and assessment",
              "Injection protocols",
              "Safety and complications",
              "Client consultation and consent"
            ],
            requirements: [
              "Medical degree required",
              "Valid medical license",
              "Previous filler experience",
              "Portfolio review"
            ],
            certification: "Master Certificate in Nose Correction",
            instructor: {
              name: "Dr. Aesthetic Kumar",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "facial-aesthetics/master-acne": {
            title: "Master Class In Acne Scar Treatment",
            description: "Advanced training in acne scar treatment using various techniques including lasers, microneedling, and chemical peels for optimal scar reduction.",
            duration: "3 Days",
            level: "Advanced",
            category: "Facial Aesthetics",
            price: "₹50,000",
            image: "/images/goo.jpg",
            features: [
              "Advanced scar treatment techniques",
              "Multiple treatment modalities",
              "Treatment planning",
              "Client consultation",
              "Safety protocols",
              "Results optimization"
            ],
            curriculum: [
              "Acne scar types and classification",
              "Laser treatments for scars",
              "Microneedling techniques",
              "Chemical peel protocols",
              "Combination treatments",
              "Treatment planning and assessment"
            ],
            requirements: [
              "Medical degree or equivalent",
              "Previous aesthetic experience",
              "Valid medical license",
              "Portfolio review"
            ],
            certification: "Master Certificate in Acne Scar Treatment",
            instructor: {
              name: "Dr. Aesthetic Kumar",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "facial-aesthetics/master-plasma": {
            title: "Masters Class in Plasma Pen",
            description: "Comprehensive training in plasma pen technology for skin tightening, scar treatment, and skin rejuvenation. Learn advanced techniques for optimal results.",
            duration: "2 Days",
            level: "Advanced",
            category: "Facial Aesthetics",
            price: "₹40,000",
            image: "/images/goo.jpg",
            features: [
              "Plasma pen technology training",
              "Advanced treatment techniques",
              "Safety protocols",
              "Client consultation",
              "Treatment planning",
              "Aftercare procedures"
            ],
            curriculum: [
              "Plasma pen technology and principles",
              "Treatment protocols and techniques",
              "Safety protocols and precautions",
              "Client consultation and assessment",
              "Treatment planning",
              "Aftercare and healing process"
            ],
            requirements: [
              "Medical degree or equivalent",
              "Previous aesthetic experience",
              "Valid medical license",
              "Equipment training completion"
            ],
            certification: "Master Certificate in Plasma Pen Treatment",
            instructor: {
              name: "Dr. Aesthetic Kumar",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "facial-aesthetics/master-undereye": {
            title: "Master class in Under eye rejuvenation",
            description: "Specialized training in under-eye rejuvenation techniques including fillers, PRP, and advanced treatments for dark circles, bags, and fine lines.",
            duration: "2 Days",
            level: "Advanced",
            category: "Facial Aesthetics",
            price: "₹45,000",
            image: "/images/goo.jpg",
            features: [
              "Under-eye anatomy and aging",
              "Advanced treatment techniques",
              "Safety protocols",
              "Client consultation",
              "Treatment planning",
              "Complication management"
            ],
            curriculum: [
              "Under-eye anatomy and aging process",
              "Treatment options and selection",
              "Injection techniques and protocols",
              "Safety protocols and complications",
              "Client consultation and assessment",
              "Treatment planning and follow-up"
            ],
            requirements: [
              "Medical degree required",
              "Valid medical license",
              "Previous injection experience",
              "Portfolio review"
            ],
            certification: "Master Certificate in Under-eye Rejuvenation",
            instructor: {
              name: "Dr. Aesthetic Kumar",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "facial-aesthetics/master-fillers": {
            title: "Master class in Lip Fillers",
            description: "Advanced training in lip augmentation using dermal fillers. Learn to create natural-looking, beautiful lips with safe and effective techniques.",
            duration: "2 Days",
            level: "Advanced",
            category: "Facial Aesthetics",
            price: "₹40,000",
            image: "/images/goo.jpg",
            features: [
              "Advanced lip filler techniques",
              "Anatomy and safety protocols",
              "Treatment planning",
              "Client consultation",
              "Complication management",
              "Results optimization"
            ],
            curriculum: [
              "Lip anatomy and structure",
              "Filler selection and techniques",
              "Treatment planning and assessment",
              "Injection protocols and safety",
              "Client consultation and consent",
              "Complications and management"
            ],
            requirements: [
              "Medical degree required",
              "Valid medical license",
              "Previous filler experience",
              "Portfolio review"
            ],
            certification: "Master Certificate in Lip Fillers",
            instructor: {
              name: "Dr. Aesthetic Kumar",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "facial-aesthetics/pg-diploma": {
            title: "PG Diploma in Facial Aesthetics",
            description: "Comprehensive postgraduate diploma in facial aesthetics covering all non-surgical treatments including injectables, threads, and advanced procedures.",
            duration: "4 Months",
            level: "Post Graduate",
            category: "Facial Aesthetics",
            price: "₹1,80,000",
            image: "/images/goo.jpg",
            features: [
              "Complete facial aesthetics training",
              "Advanced injection techniques",
              "Thread lift procedures",
              "Business management",
              "Clinical experience",
              "Mentorship program"
            ],
            curriculum: [
              "Facial anatomy and aging",
              "Injectable treatments",
              "Thread lift techniques",
              "Advanced procedures",
              "Client consultation",
              "Business management",
              "Clinical practice"
            ],
            requirements: [
              "Medical degree or equivalent",
              "Valid medical license",
              "Previous aesthetic experience preferred",
              "Portfolio review"
            ],
            certification: "Post Graduate Diploma in Facial Aesthetics",
            instructor: {
              name: "Dr. Aesthetic Kumar",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "facial-aesthetics/cert-lipolytic": {
            title: "Certificate Course in Lipolytic Injections",
            description: "Foundation course in lipolytic injection techniques for fat reduction. Learn safe and effective methods for non-surgical body contouring.",
            duration: "2 Days",
            level: "Intermediate",
            category: "Facial Aesthetics",
            price: "₹45,000",
            image: "/images/goo.jpg",
            features: [
              "Basic lipolytic techniques",
              "Anatomy and safety",
              "Treatment protocols",
              "Client consultation",
              "Safety procedures",
              "Aftercare protocols"
            ],
            curriculum: [
              "Fat anatomy and physiology",
              "Lipolytic agents and mechanisms",
              "Basic injection techniques",
              "Safety protocols",
              "Client consultation",
              "Aftercare procedures"
            ],
            requirements: [
              "Medical degree required",
              "Valid medical license",
              "Basic injection experience",
              "Medical clearance"
            ],
            certification: "Certificate in Lipolytic Injections",
            instructor: {
              name: "Dr. Aesthetic Kumar",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          // Fellowship Courses
          "fellowship/permanent-cosmetology": {
            title: "Fellowship in Permanent Make up and Cosmetology",
            description: "Comprehensive fellowship program combining permanent makeup and cosmetology training. Perfect for those seeking expertise in both fields.",
            duration: "8 Months",
            level: "Fellowship",
            category: "Fellowship Courses",
            price: "₹2,00,000",
            image: "/images/goo.jpg",
            features: [
              "Complete permanent makeup training",
              "Advanced cosmetology techniques",
              "Business management",
              "Clinical experience",
              "Mentorship program",
              "Research opportunities"
            ],
            curriculum: [
              "Permanent makeup techniques",
              "Advanced cosmetology",
              "Business management",
              "Client consultation",
              "Clinical practice",
              "Research methodology"
            ],
            requirements: [
              "High school diploma or equivalent",
              "Previous beauty industry experience preferred",
              "Valid ID proof",
              "Medical clearance"
            ],
            certification: "Fellowship in Permanent Makeup and Cosmetology",
            instructor: {
              name: "Dr. Aesthetic Kumar",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "fellowship/facial-permanent-cosmetology": {
            title: "Fellowship in Facial Aesthetics, Permanent Make up & Cosmetology",
            description: "Comprehensive fellowship covering facial aesthetics, permanent makeup, and cosmetology. The ultimate program for complete aesthetic expertise.",
            duration: "12 Months",
            level: "Fellowship",
            category: "Fellowship Courses",
            price: "₹3,50,000",
            image: "/images/goo.jpg",
            features: [
              "Complete aesthetic training",
              "All three specialties covered",
              "Advanced business management",
              "Clinical experience",
              "Research opportunities",
              "Mentorship program"
            ],
            curriculum: [
              "Facial aesthetics techniques",
              "Permanent makeup procedures",
              "Advanced cosmetology",
              "Business management",
              "Clinical practice",
              "Research and development"
            ],
            requirements: [
              "Medical degree or equivalent",
              "Valid medical license",
              "Previous aesthetic experience",
              "Portfolio review"
            ],
            certification: "Fellowship in Facial Aesthetics, Permanent Makeup & Cosmetology",
            instructor: {
              name: "Dr. Aesthetic Kumar",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "fellowship/facial-aesthetics": {
            title: "Fellowship in Facial Aesthetics",
            description: "Advanced fellowship program in facial aesthetics covering all non-surgical treatments and advanced procedures for comprehensive expertise.",
            duration: "6 Months",
            level: "Fellowship",
            category: "Fellowship Courses",
            price: "₹2,80,000",
            image: "/images/goo.jpg",
            features: [
              "Advanced facial aesthetics training",
              "All injection techniques",
              "Thread lift procedures",
              "Business management",
              "Clinical experience",
              "Research opportunities"
            ],
            curriculum: [
              "Advanced facial anatomy",
              "Injectable treatments",
              "Thread lift techniques",
              "Advanced procedures",
              "Business management",
              "Clinical practice"
            ],
            requirements: [
              "Medical degree required",
              "Valid medical license",
              "Previous aesthetic experience",
              "Portfolio review"
            ],
            certification: "Fellowship in Facial Aesthetics",
            instructor: {
              name: "Dr. Aesthetic Kumar",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "fellowship/permanent-micropigmentation": {
            title: "Fellowship in Permanent Make up & Cosmetology, Medical Micropigmentation , Plasma Pen",
            description: "Comprehensive fellowship combining permanent makeup, cosmetology, medical micropigmentation, and plasma pen techniques for complete expertise.",
            duration: "10 Months",
            level: "Fellowship",
            category: "Fellowship Courses",
            price: "₹3,00,000",
            image: "/images/goo.jpg",
            features: [
              "Complete permanent makeup training",
              "Advanced cosmetology",
              "Medical micropigmentation",
              "Plasma pen technology",
              "Business management",
              "Clinical experience"
            ],
            curriculum: [
              "Permanent makeup techniques",
              "Advanced cosmetology",
              "Medical micropigmentation",
              "Plasma pen procedures",
              "Business management",
              "Clinical practice"
            ],
            requirements: [
              "Medical degree or equivalent",
              "Valid medical license",
              "Previous aesthetic experience",
              "Portfolio review"
            ],
            certification: "Fellowship in Permanent Makeup, Cosmetology, Medical Micropigmentation & Plasma Pen",
            instructor: {
              name: "Dr. Aesthetic Kumar",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "fellowship/facial-permanent-micropigmentation": {
            title: "Fellowship in Facial Aesthetics, Permanent Make up & Cosmetology, Medical Micropigmentation , Plasma Pen",
            description: "The ultimate fellowship program covering all aspects of aesthetic medicine including facial aesthetics, permanent makeup, cosmetology, medical micropigmentation, and plasma pen techniques.",
            duration: "15 Months",
            level: "Fellowship",
            category: "Fellowship Courses",
            price: "₹4,50,000",
            image: "/images/goo.jpg",
            features: [
              "Complete aesthetic training",
              "All specialties covered",
              "Advanced business management",
              "Clinical experience",
              "Research opportunities",
              "Mentorship program"
            ],
            curriculum: [
              "Facial aesthetics techniques",
              "Permanent makeup procedures",
              "Advanced cosmetology",
              "Medical micropigmentation",
              "Plasma pen technology",
              "Business management",
              "Clinical practice",
              "Research methodology"
            ],
            requirements: [
              "Medical degree required",
              "Valid medical license",
              "Previous aesthetic experience",
              "Portfolio review"
            ],
            certification: "Fellowship in Facial Aesthetics, Permanent Makeup, Cosmetology, Medical Micropigmentation & Plasma Pen",
            instructor: {
              name: "Dr. Aesthetic Kumar",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },

          "laser-practice/laser-practice-page1": {
  title: "Certificate in Advanced Laser Treatments and Skin Rejuvenation",
  description: "Learn the art and science of advanced laser treatments for skin rejuvenation, hair reduction, and pigmentation correction from top industry experts.",
  duration: "6 Months",
  level: "Certificate",
  category: "Laser Practice Courses",
  price: "₹1,80,000",
  image: "/images/laser1.jpg",
  
  features: [
    "Hands-on laser training",
    "Skin rejuvenation techniques",
    "Laser safety certification",
    "Case-based learning",
    "Industry-standard equipment usage"
  ],
  curriculum: [
    "Introduction to laser technology",
    "Skin anatomy and laser interaction",
    "Hair reduction treatments",
    "Pigmentation and tattoo removal",
    "Laser facial rejuvenation",
    "Post-procedure care"
  ],
  requirements: [
    "Basic cosmetology knowledge",
    "Minimum 12th pass (Science preferred)",
    "Interest in laser and skin treatments"
  ],
  certification: "Certificate in Advanced Laser Treatments & Skin Rejuvenation",
  instructor: {
    name: "Dr. Neha Kapoor",
    bio: "Dermatologist and Laser Specialist with 10+ years of clinical experience in advanced laser techniques.",
    experience: "Trained over 300 professionals across India",
    image: "/images/drneha.jpg",
    courseDetailImage: "/courses2/1.jpeg", // New Image Path
  },
  videoUrl: "https://www.youtube.com/embed/Cz3b8x6X1Vw"
  },



  "laser-practice/laser-practice-page2": {
    title: "Professional Diploma in Aesthetic Laser and Light-Based Therapies",
    description: "A complete diploma course designed for medical and beauty professionals to master aesthetic laser and light-based treatments.",
    duration: "12 Months",
    level: "Diploma",
    category: "Laser Practice Courses",
    price: "₹2,80,000",
    image: "/images/laser2.jpg",
    features: [
      "Comprehensive laser training",
      "Light-based treatment modules",
      "Hands-on clinical sessions",
      "Certification recognized by top academies",
      "Real case studies"
    ],
    curriculum: [
      "Laser physics and safety protocols",
      "Hair and skin laser applications",
      "Fractional laser resurfacing",
      "Photo facial and LED therapy",
      "Laser tattoo and scar revision",
      "Business setup & client handling"
    ],
    requirements: [
      "Medical or beauty professional background",
      "Basic computer knowledge",
      "Interest in aesthetic procedures"
    ],
    certification: "Professional Diploma in Aesthetic Laser & Light-Based Therapies",
    instructor: {
      name: "Dr. Ritu Sharma",
      bio: "Certified Laser and Aesthetic Medicine Specialist with 8+ years of experience in laser-based skin therapies.",
      experience: "Conducted 200+ workshops on aesthetic laser treatments",
      image: "/images/drritu.jpg",
      courseDetailImage: "/courses2/1.jpeg", // New Image Path

    },
    videoUrl: "https://www.youtube.com/embed/dJRS8i3j8Fk"
  }
  
  ,
  };


const CoursePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const rawPath = decodeURIComponent(location.pathname);
    let coursePath = rawPath.replace(/^\/+|\/+$/g, "");

    if (coursePath.startsWith("courses/")) {
      coursePath = coursePath.replace("courses/", "");
    }

    const course = courseDataMap[coursePath];

    if (course) {
      setCourseData(course);
      document.title = course.seoTitle || course.title;
    } else {
      setCourseData(null);
    }

    setLoading(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        Loading...
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Course Not Found
      </div>
    );
  }

  return (
    <div className="bg-[#F4F1EC] min-h-screen">
      <Nav />

      {/* ================= HERO WITH BACKGROUND IMAGE ================= */}
      <section
        className="relative h-[420px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${courseData.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative text-center">
          <p className="uppercase text-sm tracking-widest text-[#D4AF37] mb-4">
            {courseData.category}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            {courseData.title}
          </h1>

          <div className="flex justify-center gap-6 mt-6 text-sm">
            <span className="flex items-center gap-2">
              <Clock size={16} /> {courseData.duration}
            </span>
            <span className="flex items-center gap-2">
              <Star size={16} /> {courseData.level}
            </span>
            <span className="flex items-center gap-2">
              <Users size={16} /> Small Batch
            </span>
          </div>
        </div>
      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-8">

            {/* Instructor Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md border">
              <div className="flex items-center gap-4">
                <img
                  src={courseData.instructor?.image}
                  className="w-16 h-16 rounded-full object-cover"
                  alt=""
                />
                <div>
                  <h3 className="font-semibold">
                    {courseData.instructor?.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {courseData.instructor?.experience}
                  </p>
                </div>
              </div>
            </div>

            {/* Course Overview */}
            <div className="bg-white p-6 rounded-2xl shadow-md border">
              <h3 className="font-semibold mb-4">Course Overview</h3>
              <p className="text-gray-600 leading-relaxed">
                {courseData.description}
              </p>
            </div>

            {/* Student Review (Static Demo) */}
            <div className="bg-white p-6 rounded-2xl shadow-md border">
              <h3 className="font-semibold mb-4">Student Reviews</h3>
              <p className="font-medium">Priya Sharma</p>
              <p className="text-yellow-500">★★★★★</p>
              <p className="text-gray-600 text-sm">
                Amazing course! Detailed training and hands-on practice.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">

            {/* Course Poster Image */}
            <div className="bg-white rounded-2xl shadow-lg p-4">
<img
  src={
    courseData.courseDetailImage ||
    courseData.instructor?.courseDetailImage ||
    courseData.image
  }
  alt="Course Detail"
  className="rounded-xl w-full object-cover"
/>

            </div>

            {/* Enrollment Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md border">
              <h3 className="font-semibold mb-4">Enrollment Details</h3>

              <div className="flex justify-between mb-3">
                <span>Duration:</span>
                <span>{courseData.duration}</span>
              </div>

              <div className="flex justify-between mb-3">
                <span>Level:</span>
                <span>{courseData.level}</span>
              </div>

              <div className="flex justify-between mb-6 font-bold text-lg text-[#C8A43F]">
                <span>Fee:</span>
                <span>{courseData.price}</span>
              </div>

              <button className="w-full bg-[#C8A43F] text-white py-3 rounded-lg hover:bg-[#b8932f] transition">
                Enroll Now
              </button>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoursePage;