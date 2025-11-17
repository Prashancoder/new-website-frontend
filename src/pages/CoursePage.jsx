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
            title: "Master's in Permanent Eyebrows",
            description: "Comprehensive training in advanced eyebrow micropigmentation techniques, including microblading, powder brows, and combination methods. Learn from industry experts and master the art of creating natural-looking, long-lasting eyebrows.",
            duration: "5 Days",
            level: "Advanced",
            category: "Permanent Makeup",
            price: "₹45,000",
            image: "/images/courses-banner.jpeg",
            features: [
              "Hands-on practical training",
              "Latest equipment and techniques",
              "Small batch training (max 4 students)",
              "Certificate of completion",
              "Lifetime support and guidance",
              "Kit included in course fee"
            ],
            curriculum: [
              "Theory of micropigmentation",
              "Skin anatomy and color theory",
              "Microblading techniques",
              "Powder brow application",
              "Combination brow methods",
              "Aftercare and touch-ups",
              "Business setup guidance"
            ],
            requirements: [
              "Basic understanding of beauty industry",
              "No prior experience required",
              "Valid ID proof",
              "Medical fitness certificate"
            ],
            certification: "Certificate in Master's Permanent Eyebrows from Timeless Aesthetics Academy",
            instructor: {
              name: "Dr. Aesthetic Kumar",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
              image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },











          "permanent-makeup/master-scalp": {
            title: "Master class in Scalp Micropigmentation",
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
            },
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            },









          "permanent-makeup/pg-diploma": {
            title: "PG Diploma in Permanent Make up",
            description: "Comprehensive postgraduate diploma covering all aspects of permanent makeup including eyebrows, lips, eyeliner, and areola restoration. Perfect for those seeking complete expertise in the field.",
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
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "permanent-makeup/cert-lip": {
            title: "Certificate Course in Lip Micropigmentation",
            description: "Specialized training in lip micropigmentation techniques. Learn to enhance lip shape, color, and definition with safe and effective permanent makeup methods.",
            duration: "3 Days",
            level: "Intermediate",
            category: "Permanent Makeup",
            price: "₹35,000",
            image: "/images/courses-banner.jpeg",
            features: [
              "Lip anatomy and color theory",
              "Shape correction techniques",
              "Color selection and mixing",
              "Pain management strategies",
              "Aftercare protocols",
              "Touch-up procedures"
            ],
            curriculum: [
              "Lip anatomy and physiology",
              "Color theory for lips",
              "Shape analysis and correction",
              "Needle selection and techniques",
              "Pain management",
              "Aftercare and healing process",
              "Touch-up timing and techniques"
            ],
            requirements: [
              "Basic beauty industry knowledge",
              "No prior experience required",
              "Valid ID proof",
              "Medical clearance"
            ],
            certification: "Certificate in Lip Micropigmentation",
            instructor: {
              name: "Dr. Aesthetic Kumar",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",

          },
          "permanent-makeup/cert-brows-lash": {
            title: "Certificate in Brows and Lash Lift",
            description: "Comprehensive training in eyebrow and eyelash lifting techniques. Learn to enhance natural brows and lashes with safe, effective lifting methods.",
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
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "permanent-makeup/cert-scalp": {
            title: "Certificate in Scalp Micropigmentation",
            description: "Foundation course in scalp micropigmentation for beginners. Learn the basics of creating natural-looking hair follicles for clients with hair loss.",
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
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "permanent-makeup/cert-laser-hair": {
            title: "Certificate course in Laser Hair Reduction",
            description: "Professional training in laser hair reduction techniques. Learn safe and effective methods for permanent hair removal using advanced laser technology.",
            duration: "4 Days",
            level: "Intermediate",
            category: "Permanent Makeup",
            price: "₹50,000",
            image: "/images/goo.jpg",
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
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },



          "permanent-makeup/cert-skin-tech": {
            title: "Certificate Course Skin Technicial",
            description: "Comprehensive training in skin analysis and treatment techniques. Learn to assess skin conditions and provide appropriate treatments for various skin concerns.",
            duration: "5 Days",
            level: "Intermediate",
            category: "Permanent Makeup",
            price: "₹45,000",
            image: "/images/goo.jpg",
            features: [
              "Skin analysis techniques",
              "Treatment protocols",
              "Product knowledge",
              "Client consultation",
              "Safety procedures",
              "Equipment handling"
            ],
            curriculum: [
              "Skin anatomy and physiology",
              "Skin condition analysis",
              "Treatment selection",
              "Product application",
              "Client consultation",
              "Safety protocols",
              "Aftercare procedures"
            ],
            requirements: [
              "Basic understanding of skin care",
              "Valid ID proof",
              "Medical clearance",
              "Interest in skin treatments"
            ],
            certification: "Certificate in Skin Technology",
            instructor: {
              name: "Dr. Aesthetic Kumar",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          // Cosmetology Courses
          "cosmetology/master-chemical-peels": {
            title: "Master Class in Chemical Peels",
            description: "Advanced training in chemical peel treatments for various skin concerns. Learn to safely perform different types of chemical peels for optimal results.",
            duration: "3 Days",
            level: "Advanced",
            category: "Cosmetology",
            price: "₹35,000",
            image: "/images/goo.jpg",
            features: [
              "Advanced peel techniques",
              "Skin type analysis",
              "Safety protocols",
              "Client consultation",
              "Treatment planning",
              "Aftercare procedures"
            ],
            curriculum: [
              "Chemical peel theory",
              "Skin analysis techniques",
              "Peel selection criteria",
              "Application methods",
              "Safety protocols",
              "Client consultation",
              "Aftercare and healing"
            ],
            requirements: [
              "Previous skin care experience",
              "Valid ID proof",
              "Medical clearance",
              "Understanding of skin anatomy"
            ],
            certification: "Master Certificate in Chemical Peels",
            instructor: {
              name: "Dr. Aesthetic Kumar",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "cosmetology/diploma-advanced": {
            title: "Diploma in Advanced Cosmetology",
            description: "Comprehensive diploma program covering advanced cosmetology techniques including facials, chemical peels, microdermabrasion, and advanced skin treatments.",
            duration: "6 Months",
            level: "Professional",
            category: "Cosmetology",
            price: "₹1,20,000",
            image: "/images/goo.jpg",
            features: [
              "Complete cosmetology training",
              "Advanced treatment techniques",
              "Business management",
              "Client consultation skills",
              "Product knowledge",
              "Practical experience"
            ],
            curriculum: [
              "Skin anatomy and physiology",
              "Advanced facial techniques",
              "Chemical peels and treatments",
              "Microdermabrasion",
              "LED light therapy",
              "Business management",
              "Client consultation",
              "Marketing strategies"
            ],
            requirements: [
              "High school diploma",
              "Basic computer skills",
              "Valid ID proof",
              "Medical clearance"
            ],
            certification: "Diploma in Advanced Cosmetology",
            instructor: {
              name: "Dr. Aesthetic Kumar",
              bio: "International trainer with 12+ years of expertise in Permanent Makeup & Cosmetology.",
              experience: "Trained 500+ professionals globally",
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "cosmetology/cert-professional": {
            title: "Certificate in Professional Cosmetology",
            description: "Professional certification in cosmetology covering essential skin care treatments, facial techniques, and client consultation skills.",
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
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "cosmetology/cert-hydrafacial": {
            title: "Certificate Course in Medicated Hydrafacial",
            description: "Specialized training in medicated HydraFacial treatments. Learn to customize treatments for various skin concerns using advanced HydraFacial technology.",
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
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          "cosmetology/cert-chemical-peels": {
            title: "Certificate Courses in Chemical Peels",
            description: "Foundation course in chemical peel treatments. Learn safe and effective methods for performing various types of chemical peels.",
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
image: "/images/dr.png", // replace with actual image
              },
              videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          },
          // Facial Aesthetics Courses
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
    image: "/images/drneha.jpg"
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
    image: "/images/drritu.jpg"
  },
  videoUrl: "https://www.youtube.com/embed/dJRS8i3j8Fk"
}




,
};

const CoursePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = typeof useAuth === "function" ? useAuth() : null;
  const user = auth ? auth.user : null;

  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract course path from URL:
    // if route is /course/permanent-makeup/masters-eyebrows
    // we use slice(1).join("/") to get "permanent-makeup/masters-eyebrows"
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const coursePath = pathSegments.slice(1).join("/");
    const course = courseDataMap[coursePath] || null;
    setCourseData(course);
    setLoading(false);
  }, [location.pathname]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF8F6]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-[#D4AF37] mx-auto"></div>
          <p className="mt-6 text-[#555] text-lg font-lato">
            Loading course information...
          </p>
        </div>
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF8F6]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#3B2F2F] mb-4">Course Not Found</h1>
          <p className="text-[#555] mb-8">The course you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded-md border-2 border-[#D4AF37] bg-white text-[#3B2F2F]"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F6] flex flex-col font-lato">
      <Nav />

      {/* Hero Section */}
      <div
        className="relative text-white py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${courseData.image})`,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block mb-6 text-sm px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/90">
              {courseData.category}
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair uppercase tracking-wide">
              {courseData.title}
            </h1>

            <div className="flex flex-wrap justify-center gap-6 text-lg mt-8 text-white/90">
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5" /> {courseData.duration}
              </span>
              <span className="flex items-center gap-2">
                <Award className="h-5 w-5" /> {courseData.level}
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-5 w-5" /> Small Batch
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Instructor */}
            {courseData.instructor && (
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <div className="p-6 bg-white rounded-2xl shadow-md border-2 border-[#D4AF37]/30">
                  <div className="flex items-center gap-4">
                    {courseData.instructor.image && (
                      <img
                        src={courseData.instructor.image}
                        alt={courseData.instructor.name}
                        className="w-24 h-24 rounded-full object-cover border-2 border-[#D4AF37]"
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-[#3B2F2F]">{courseData.instructor.name}</h3>
                      <p className="text-[#555] text-sm">{courseData.instructor.bio}</p>
                      <p className="text-[#555] text-sm mt-1">{courseData.instructor.experience}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Overview */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="p-6 bg-white rounded-2xl shadow-md border-2 border-[#D4AF37]/30">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xl text-[#3B2F2F]">
                    <BookOpen className="h-5 w-5 text-[#D4AF37]" />
                    <h4 className="font-playfair">Course Overview</h4>
                  </div>
                </div>
                <p className="text-[#555] leading-relaxed text-lg">{courseData.description}</p>
                <span className="block w-16 h-1 bg-[#D4AF37] mt-4 rounded"></span>
              </div>
            </motion.div>

            {/* Video (login-gated) */}
            {courseData.videoUrl && (
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <div className="p-0 bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[#D4AF37]/20">
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-xl text-[#3B2F2F] mb-2">
                      <PlayCircle className="h-5 w-5 text-[#D4AF37]" />
                      <span className="font-playfair">Watch Intro Class</span>
                    </div>
                  </div>
                  <div className="p-6">
                    {user ? (
                      <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
                        <iframe src={courseData.videoUrl} title="Course Intro" className="w-full h-full" allowFullScreen></iframe>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-4 p-8 bg-[#FFF9F0] rounded-xl border border-[#D4AF37]/30">
                        <p className="text-[#3B2F2F] text-center">Please login to watch the free intro class.</p>
                        <button
                          onClick={() => navigate("/login")}
                          className="px-4 py-2 rounded-md border-2 border-[#D4AF37] text-[#3B2F2F] hover:bg-[#D4AF37] hover:text-white transition"
                        >
                          Login to Watch
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Student Reviews */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="p-6 bg-white rounded-2xl shadow-md border-2 border-[#D4AF37]/30">
                <div className="flex items-center gap-2 text-xl text-[#3B2F2F] mb-4">
                  <Star className="h-5 w-5 text-[#D4AF37]" />
                  <h4 className="font-playfair">Student Reviews</h4>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      name: "Priya Sharma",
                      rating: 5,
                      comment:
                        "Amazing course! The instructor explained everything in detail and the practice sessions were very helpful.",
                    },
                    {
                      name: "Rahul Verma",
                      rating: 4,
                      comment:
                        "Great experience, learned a lot about SMP techniques and handling clients.",
                    },
                  ].map((review, index) => (
                    <div key={index} className="border-b border-[#D4AF37]/20 pb-3 mb-3">
                      <h4 className="font-semibold text-[#3B2F2F]">{review.name}</h4>
                      <p className="text-[#D4AF37]">
                        {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                      </p>
                      <p className="text-[#555] text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* FAQs */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="p-6 bg-white rounded-2xl shadow-md border-2 border-[#D4AF37]/30">
                <div className="flex items-center gap-2 text-xl text-[#3B2F2F] mb-4">
                  <BookOpen className="h-5 w-5 text-[#D4AF37]" />
                  <h4 className="font-playfair">FAQs</h4>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      question: "Is prior experience required?",
                      answer: "Basic knowledge is preferred but beginners can also join as we cover fundamentals.",
                    },
                    {
                      question: "Do we get lifetime access to study material?",
                      answer: "Yes, all students get lifetime access to digital resources.",
                    },
                  ].map((faq, idx) => (
                    <div key={idx}>
                      <h4 className="font-semibold text-[#3B2F2F]">{faq.question}</h4>
                      <p className="text-[#555] text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Career Opportunities */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="p-6 bg-white rounded-2xl shadow-md border-2 border-[#D4AF37]/30">
                <div className="flex items-center gap-2 text-xl text-[#3B2F2F] mb-4">
                  <Award className="h-5 w-5 text-[#D4AF37]" />
                  <h4 className="font-playfair">Career Opportunities</h4>
                </div>
                <ul className="list-disc list-inside space-y-1 text-[#555]">
                  <li>Work as SMP Specialist in clinics</li>
                  <li>Start your own Aesthetic Studio</li>
                  <li>Become a Freelance Trainer</li>
                </ul>
              </div>
            </motion.div>

            {/* Gallery */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="p-6 bg-white rounded-2xl shadow-md border-2 border-[#D4AF37]/30">
                <div className="flex items-center gap-2 text-xl text-[#3B2F2F] mb-4">
                  <Clock className="h-5 w-5 text-[#D4AF37]" />
                  <h4 className="font-playfair">Gallery</h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["/images/mm.webp", "/images/goo.jpg", "/images/faical.webp"].map((img, index) => (
                    <img key={index} src={img} alt={`Gallery ${index + 1}`} className="w-full h-32 md:h-40 object-cover rounded-lg shadow-sm hover:scale-105 transition-transform" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar (Sticky) */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-8">
              <div className="p-6 bg-white rounded-2xl shadow-md border-2 border-[#D4AF37]/30">
                <h4 className="text-[#3B2F2F] font-playfair mb-4 text-lg">Course Information</h4>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[#555]">Duration:</span>
                    <span className="font-semibold">{courseData.duration}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[#555]">Level:</span>
                    <span className="px-3 py-1 text-sm rounded-full border"> {courseData.level} </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[#555]">Category:</span>
                    <span className="font-semibold">{courseData.category}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[#555]">Price:</span>
                    <span className="text-2xl font-bold text-[#D4AF37]">{courseData.price}</span>
                  </div>

                  <button
                    onClick={() => {
                      if (!user) return navigate("/login");
                      const pathSegments = location.pathname.split("/").filter(Boolean);
                      const coursePath = pathSegments.slice(1).join("/");
                      navigate(`/course/purchase/${coursePath}`);
                    }}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border-2 border-[#D4AF37] bg-white text-[#3B2F2F] hover:bg-[#D4AF37] hover:text-white transition"
                  >
                    <ShoppingCart className="h-4 w-4" /> Enroll Now
                  </button>

                  <button className="w-full mt-2 px-4 py-2 rounded-md border border-[#D4AF37] text-[#3B2F2F]">
                    Download Brochure
                  </button>
                </div>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-md border-2 border-[#D4AF37]/20">
                <h4 className="text-[#3B2F2F] font-playfair mb-4 text-lg">Course Features</h4>
                <div className="space-y-3">
                  {courseData.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-[#555]">
                      <Star className="h-4 w-4 text-[#D4AF37]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CoursePage;
