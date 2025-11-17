import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock, Star, CheckCircle, ArrowRight, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Nav"; // Assuming this is available
import Footer from "../components/Footer"; // Assuming this is available

// --- INLINE COMPONENT SUBSTITUTES ---
// These simple substitutes mimic the structure and class-passing capability
// of the missing components (Card, Button, Badge) using basic HTML elements.

// Card Components
const Card = ({ className = "", children }) => (
  <div className={`rounded-xl border bg-card text-card-foreground shadow ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ className = "", children }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ className = "", children }) => (
  <h3 className={`font-semibold tracking-tight text-2xl ${className}`}>
    {children}
  </h3>
);

const CardDescription = ({ className = "", children }) => (
  <p className={`text-sm text-luxury-muted ${className}`}>
    {children}
  </p>
);

const CardContent = ({ className = "", children }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

// Button Component
const Button = ({ className = "", variant = "default", size = "default", asChild = false, children, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  let variantClasses = "";
  if (variant === "default") {
    variantClasses = "bg-luxury-gold text-white hover:bg-luxury-gold/90";
  } else if (variant === "outline") {
    variantClasses = "border border-input bg-background hover:bg-accent hover:text-accent-foreground";
  }
  // Add more variants if necessary (e.g., secondary, ghost)

  let sizeClasses = "";
  if (size === "default") {
    sizeClasses = "h-10 py-2 px-4";
  } else if (size === "lg") {
    sizeClasses = "h-11 px-8";
  }
  // Add more sizes if necessary (e.g., sm, icon)

  const classes = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

  if (asChild && children && children.type === Link) {
    return <Link {...props} className={classes}>{children.props.children}</Link>;
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

// Badge Component
const Badge = ({ className = "", variant = "default", children }) => {
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  
  let variantClasses = "";
  if (variant === "default") {
    variantClasses = "border-transparent bg-primary text-primary-foreground hover:bg-primary/80";
  } else if (variant === "secondary") {
    // Custom style to match the example usage (white/gray look)
    variantClasses = "border-transparent bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100";
  } 
  // Add more variants if necessary

  const classes = `${baseClasses} ${variantClasses} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};
// --- END INLINE COMPONENT SUBSTITUTES ---


const ClinicsPage = () => {
  const location = useLocation();
  const [clinicData, setClinicData] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract clinic from URL
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const clinicSlug = pathSegments[1]; // 'amritsar', 'gurgaon', or 'jammu'
    
    if (clinicSlug && clinicSlug !== 'clinics') {
      loadClinicData(clinicSlug);
    } else {
      setClinicData(null);
      setLoading(false);
    }
  }, [location.pathname]);

  const loadClinicData = (clinicSlug) => { 
    setLoading(true);
    
    const clinicsData = { 
      amritsar: {
        id: 'amritsar',
        name: 'Timeless Aesthetics - Amritsar',
        address: '123 Beauty Street, Amritsar, Punjab 143001',
        phone: '+91 8750027070',
        email: 'amritsar@timelessaesthetics.in',
        hours: [
          'Monday - Saturday: 9:00 AM - 7:00 PM',
          'Sunday: 10:00 AM - 5:00 PM',
          'Closed on major holidays'
        ],
        services: [
          'Permanent Makeup',
          'Cosmetology',
          'Facial Aesthetics',
          'Dentistry',
          'Academy Courses'
        ],
        features: [
          'State-of-the-art equipment',
          'Certified professionals',
          'Sterile environment',
          'Comfortable treatment rooms',
          'Parking available',
          'Wheelchair accessible'
        ],
        image: '/images/courses-banner.jpeg',
        description: 'Our flagship clinic in Amritsar offers comprehensive aesthetic services in a modern, comfortable environment. Located in the heart of the city, we provide world-class treatments with the latest technology and expert care.',
        rating: 4.9,
        reviews: 127
      },
      gurgaon: {
        id: 'gurgaon',
        name: 'Timeless Aesthetics - Gurgaon',
        address: '456 Aesthetic Avenue, Gurgaon, Haryana 122001',
        phone: '+91 9876543210',
        email: 'gurgaon@timelessaesthetics.in',
        hours: [
          'Monday - Saturday: 9:00 AM - 7:00 PM',
          'Sunday: 10:00 AM - 5:00 PM',
          'Closed on major holidays'
        ],
        services: [
          'Permanent Makeup',
          'Cosmetology',
          'Facial Aesthetics',
          'Dentistry',
          'Academy Courses'
        ],
        features: [
          'Modern facility',
          'Expert team',
          'Advanced technology',
          'Luxury ambiance',
          'Valet parking',
          'Concierge service'
        ],
        image: '/images/courses-banner.jpeg',
        description: 'Our Gurgaon clinic brings luxury aesthetic care to the corporate hub. With cutting-edge technology and a team of experienced professionals, we deliver exceptional results in a sophisticated environment.',
        rating: 4.8,
        reviews: 89
      },
      jammu: {
        id: 'jammu',
        name: 'Timeless Aesthetics - Jammu',
        address: '789 Glamour Road, Jammu, Jammu & Kashmir 180001',
        phone: '+91 8765432109',
        email: 'jammu@timelessaesthetics.in',
        hours: [
          'Monday - Saturday: 9:00 AM - 7:00 PM',
          'Sunday: 10:00 AM - 5:00 PM',
          'Closed on major holidays'
        ],
        services: [
          'Permanent Makeup',
          'Cosmetology',
          'Facial Aesthetics',
          'Dentistry',
          'Academy Courses'
        ],
        features: [
          'Professional care',
          'Modern equipment',
          'Comfortable setting',
          'Expert staff',
          'Easy parking',
          'Family-friendly'
        ],
        image: '/images/courses-banner.jpeg',
        description: 'Our Jammu clinic provides comprehensive aesthetic services to the beautiful valley region. We combine traditional care with modern techniques to deliver outstanding results for our valued clients.',
        rating: 4.7,
        reviews: 156
      }
    };

    const clinic = clinicsData[clinicSlug];
    if (clinic) {
      setClinicData(clinic);
    } else {
      setClinicData(null);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-luxury-gold mx-auto"></div>
          <p className="mt-4 text-luxury-muted">Loading clinic information...</p>
        </div>
      </div>
    );
  }

  // If no specific clinic, show all clinics
  if (!clinicData) {
    const allClinics = [
      {
        id: 'amritsar',
        name: 'Timeless Aesthetics - Amritsar',
        address: '123 Beauty Street, Amritsar, Punjab 143001',
        phone: '+91 8750027070',
        email: 'amritsar@timelessaesthetics.in',
        image: '/images/courses-banner.jpeg',
        rating: 4.9,
        reviews: 127
      },
      {
        id: 'gurgaon',
        name: 'Timeless Aesthetics - Gurgaon',
        address: '456 Aesthetic Avenue, Gurgaon, Haryana 122001',
        phone: '+91 9876543210',
        email: 'gurgaon@timelessaesthetics.in',
        image: '/images/courses-banner.jpeg',
        rating: 4.8,
        reviews: 89
      },
      {
        id: 'jammu',
        name: 'Timeless Aesthetics - Jammu',
        address: '789 Glamour Road, Jammu, Jammu & Kashmir 180001',
        phone: '+91 8765432109',
        email: 'jammu@timelessaesthetics.in',
        image: '/images/courses-banner.jpeg',
        rating: 4.7,
        reviews: 156
      }
    ];

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />

        {/* Hero Section */}
        <div className="relative text-white py-20 bg-gradient-to-r from-luxury-gold to-luxury-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Our Clinics
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Visit us at any of our three convenient locations across India
              </p>
            </div>
          </div>
        </div>

        {/* All Clinics */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-luxury-dark mb-4">
              Choose Your Location
            </h2>
            <p className="text-luxury-muted text-lg">
              We have clinics in three major cities to serve you better
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {allClinics.map((clinic) => (
              <Card key={clinic.id} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={clinic.image}
                    alt={clinic.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{clinic.name}</CardTitle>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(clinic.rating) ? 'text-luxury-gold fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-luxury-muted">({clinic.reviews} reviews)</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                    <p className="text-luxury-muted text-sm">{clinic.address}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                    <p className="text-luxury-muted text-sm">{clinic.phone}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                    <p className="text-luxury-muted text-sm">{clinic.email}</p>
                  </div>
                  
                  {/* Replaced Button with 'asChild' logic */}
                  <Button asChild className="w-full group-hover:bg-luxury-gold group-hover:text-white transition-colors duration-300">
                    <Link to={`/clinics/${clinic.id}`} className="flex items-center justify-center gap-2">
                      Visit Clinic
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      {/* Hero Section */}
      <div 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${clinicData.image})`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Our Clinic
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {clinicData.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              {clinicData.description}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span>{clinicData.rating} ({clinicData.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>{clinicData.address.split(',')[1]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clinic Details */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Clinic Overview */}
            <Card>
              <CardHeader>
                <CardTitle>About Our Clinic</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-luxury-muted leading-relaxed">
                  {clinicData.description}
                </p>
              </CardContent>
            </Card>

            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle>Services Available</CardTitle>
                <CardDescription>
                  Comprehensive aesthetic services at this location
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {clinicData.services.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                      <span className="text-luxury-muted">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle>Clinic Features</CardTitle>
                <CardDescription>
                  What makes our clinic special
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {clinicData.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                      <span className="text-luxury-muted">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-luxury-muted text-sm">{clinicData.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-luxury-muted text-sm">{clinicData.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-luxury-gold flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-luxury-muted text-sm">{clinicData.email}</p>
                  </div>
                </div>
                
                <Button className="w-full" size="lg">
                  Book Appointment
                </Button>
                <Button variant="outline" className="w-full">
                  <Navigation className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card>
              <CardHeader>
              <CardTitle>Operating Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {clinicData.hours.map((hour, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Clock className="h-4 w-4 text-luxury-gold flex-shrink-0" />
                      <span className="text-luxury-muted text-sm">{hour}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Rating */}
            <Card>
              <CardHeader>
                <CardTitle>Client Reviews</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="flex justify-center items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < Math.floor(clinicData.rating) ? 'text-luxury-gold fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-2xl font-bold">{clinicData.rating}</span>
                  </div>
                  <p className="text-luxury-muted text-sm">Based on {clinicData.reviews} reviews</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    
      <Footer />
    </div>
  );
};

export default ClinicsPage;