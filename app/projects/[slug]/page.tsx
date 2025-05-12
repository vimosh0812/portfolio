
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Bookmark, ExternalLink, Share2, Calendar, Users, Download, CheckCircle, Award, Clock, Lightbulb, Target, Zap, ArrowRight } from 'lucide-react'
import { SetStateAction } from 'react'

const projects = [
  {
    "slug": "advanced-quiz-app",
    "title": "Quiz App for A/L Students",
    "category": "Education - Mobile App",
    "tags": ["Education", "Quiz App", "Advanced Learning", "Mobile App", "Sri Lanka"],
    "description": "An advanced quiz app designed for students in Sri Lanka, offering challenging questions and interactive learning features.",
    "fullDescription": "This advanced quiz app is tailored for students in Sri Lanka, providing a platform to test their knowledge across various subjects. It features a sleek design, interactive quizzes, and detailed performance analytics to help students improve their learning outcomes.",
    "image": "/quiz-app/1.png?height=400&width=600",
    "gallery": [
      "/quiz-app/2.png?height=600&width=800",
      "/quiz-app/3.png?height=600&width=800",
      "/quiz-app/4.png?height=600&width=800",
      "/quiz-app/5.png?height=600&width=800",
      "/quiz-app/6.png?height=600&width=800",
      "/quiz-app/7.png?height=600&width=800",
    ],
    "process": [
      "Conducting user research with advanced-level students",
      "Designing an intuitive and engaging interface",
      "Developing a robust question bank with varying difficulty levels",
      "Implementing real-time performance tracking and analytics",
      "Testing and refining the app based on user feedback"
    ],
    "outcomes": [
      "Improved student engagement by 75%",
      "Enhanced learning outcomes with detailed analytics",
      "Increased app retention rate by 60%"
    ],
    "nextProject": "student-progress-tracker",
    "projectDetails": {
      "client": "Educational Tech Startup",
      "duration": "5 weeks",
      "role": "UI/UX Designer",
      "team": "1 designer, 2 developers",
      "tools": ["Figma", "Adobe XD", "React Native"],
      "deliverables": ["Wireframes", "Prototypes", "UI Kit", "Interactive Mockups"]
    },
    "challenges": [
      "Creating a question bank that caters to diverse learning levels",
      "Designing an engaging UI for both mobile and tablet users",
      "Ensuring accessibility for students with limited resources",
      "Incorporating real-time feedback and analytics"
    ],
    "testimonial": {
      "quote": "This app has transformed the way students prepare for exams. The interactive quizzes and detailed analytics are game-changers.",
      "author": "Dr. Nimal Perera",
      "position": "Education Consultant, Sri Lanka"
    },
    "caseStudy": ""
  },
  {
    "slug": "digital-agency-template",
    "title": "Digital Marketing Agency Website Template",
    "category": "Web App - UI Kit",
    "tags": ["UI Kit", "Responsive Design", "Digital Marketing", "Web Design", "Template"],
    "description": "A sleek, conversion-focused website UI kit designed for digital marketing agencies with a modern, responsive layout and clean black-and-white theme.",
    "fullDescription": "This website UI kit is tailored for digital marketing agencies, offering an elegant and strategic design optimized for user engagement and lead generation. It includes reusable components, responsive layouts, and sections suited for showcasing services, case studies, and client testimonials.",
    "image": "/digital-agency/21.png?height=400&width=600",
    "gallery": [
      "/digital-agency/22.png?height=600&width=800",
      "/digital-agency/23.png?height=600&width=800",
      "/digital-agency/24.png?height=600&width=800",
    ],
    "process": [
      "Analyzing digital agency market and needs",
      "Crafting a strategic content structure",
      "Designing responsive and modular components",
      "Building SEO-friendly page templates",
      "User testing and iterative design improvements"
    ],
    "outcomes": [
      "Lead conversion rate improved by 65%",
      "Reduced development time for client sites",
      "Enhanced mobile and desktop usability"
    ],
    "nextProject": "branding-agency-website",
    "projectDetails": {
      "client": "Internal Design Project",
      "duration": "3 weeks",
      "role": "UI Designer",
      "team": "1 designer, 1 front-end developer",
      "tools": ["Figma", "Adobe XD"],
      "deliverables": ["UI Kit", "Landing Page Templates", "Reusable Components", "Style Guide"]
    },
    "challenges": [
      "Designing a layout that balances creativity and clarity",
      "Ensuring quick readability and strong calls-to-action",
      "Supporting case studies and testimonials in an engaging format",
      "Optimizing performance without compromising design quality"
    ],
    "testimonial": {
      "quote": "This template made it effortless to launch a professional online presence for our agency. It's modern, responsive, and incredibly easy to adapt.",
      "author": "Ava Morgan",
      "position": "Co-founder, BrightMark Digital"
    },
    "caseStudy": "The Digital Marketing Agency Template was created to help agencies establish a powerful web presence with ease. With a clean and modern aesthetic, responsive structure, and reusable components, it allows agencies to effectively communicate their value proposition and convert more leads. The kit features landing pages, services sections, portfolios, and testimonials, all built for flexibility and fast deployment."
  },
  {
    "slug": "cloudhub-saas-template",
    "title": "SAAS Website",
    "category": "Web App - UI Kit",
    "tags": ["UI Kit", "Responsive Design", "SAAS", "Web Design", "Template"],
    "description": "Cloudhub is a sleek and professional SAAS website UI kit with a modern black and white theme, designed for responsive performance and user-focused experience.",
    "fullDescription": "Cloudhub is a meticulously crafted UI kit designed specifically for SAAS websites. This comprehensive template offers a harmonious blend of modern design and functionality, ensuring a seamless user experience across all devices.",
    "image": "/saas.png?height=400&width=600",
    "gallery": [
      "/saas/24.png?height=600&width=800",
      "/saas/25.png?height=600&width=800",
      "/saas/26.png?height=600&width=800",
      "/saas/27.png?height=600&width=800",
      "/saas/28.png?height=600&width=800",
      "/saas/29.png?height=600&width=800",
      "/saas/30.png?height=600&width=800",
    ],
    "process": [
      "Researching modern SAAS trends",
      "Defining a flexible design system",
      "Developing responsive components",
      "Creating pre-built page layouts",
      "Testing across devices and browsers",
      "Iterative refinements and updates"
    ],
    "outcomes": [
      "Reduced development time by 60%",
      "Increased user engagement with responsive UI",
      "Enhanced branding with clean and modern visuals"
    ],
    "nextProject": "dashboard-design-kit",
    "projectDetails": {
      "client": "Internal Template Project",
      "duration": "3 weeks",
      "role": "UI Designer",
      "team": "1 designer, 1 front-end developer",
      "tools": ["Figma", "Adobe XD"],
      "deliverables": ["UI Kit", "Responsive Layouts", "Component Library", "Design Documentation"]
    },
    "challenges": [
      "Maintaining design consistency across components",
      "Ensuring full responsiveness on all screen sizes",
      "Balancing minimalism with functionality",
      "Creating a theme that appeals to diverse SAAS audiences"
    ],
    "testimonial": {
      "quote": "Cloudhub has saved us weeks of design time and delivered a highly professional look. Our developers love working with its clean structure.",
      "author": "Jordan Miles",
      "position": "Lead Developer, SAAS Startup"
    },
    "caseStudy": ""
  },  
  {
    "slug": "event-app",
    "title": "Event Booking App",
    "category": "Mobile App",
    "tags": ["UI/UX", "Event Booking", "Web Design", "Mobile App"],
    "description": "An event booking app designed specifically for elder people, featuring large fonts, simple navigation, for ease of use.",
    "fullDescription": "This event booking app was specifically designed to cater to the needs of elderly users. It features large fonts for better readability, simple navigation to reduce cognitive load, and an intuitive interface that ensures ease of use. The app allows users to browse, book, and manage event tickets effortlessly, making it a valuable tool for staying socially active and engaged.",
    "image": "/socialpass.png?height=400&width=600",
    "gallery": [
      "/social/10.png?height=600&width=800",
      "/social/11.png?height=600&width=800",
      "/social/12.png?height=600&width=800",
      "/social/13.png?height=600&width=800",
      "/social/14.png?height=600&width=800",
    ],
    "process": [
      "User Research & Personas",
      "Competitive Benchmarking",
      "Information Architecture & Wireframing",
      "Prototyping & Iteration",
      "Visual Design & UI System",
      "Usability Testing & Refinements"
    ],
    "outcomes": [
      "User engagement increased by 70%",
      "Booking process time reduced by 50%",
      "User satisfaction rating improved from 3.5 to 4.8/5"
    ],
    "nextProject": "freelance-marketplace",
    "projectDetails": {
      "client": "Elderly Care Organization",
      "duration": "4 weeks",
      "role": "UI/UX Designer",
      "team": "1 designer",
      "tools": ["Figma", "Sketch", ],
      "deliverables": ["Wireframes", "Prototypes", "User Research Report", "UI Kit", "Design System"]
    },
    "challenges": [
      "Creating an intuitive search and filtering system",
      "Designing a smooth and fast booking process",
      "Balancing user needs with accessibility requirements",
      "Optimizing UI for both web and mobile experiences"

    ],
    "testimonial": {
      "quote": "The new design has significantly improved user engagement, making job searching effortless and enjoyable.",
      "author": "Emily Carter",
      "position": "CEO, Recruitment Tech Startup"
    },
    caseStudy: ''
  },
  {
    "slug": "electrical-ecommerce",
    "title": "Electrical E-Commerce Platform",
    "category": "Mobile & Web App",
    "tags": ["UI/UX", "E-commerce","Mobile App"],
    "description": "",
    "fullDescription": "This e-commerce platform was designed to provide users with a seamless online shopping experience. The challenge was to create an engaging and accessible interface that allows users to browse, compare, and purchase groceries efficiently while ensuring a smooth checkout process.",
    "image": "/electrical.png?height=400&width=600",
    "gallery": [
      "/electrical/20.png?height=600&width=800",
      "/electrical/21.png?height=600&width=800",
      "/electrical/22.png?height=600&width=800",
      "/electrical/23.png?height=600&width=800",
      "/electrical/24.png?height=600&width=800",
      "/electrical/25.png?height=600&width=800",
      "/electrical/26.png?height=600&width=800"
    ],
    "process": [
      "User Research & Personas",
      "Competitive Benchmarking",
      "Information Architecture & Wireframing",
      "Prototyping & Iteration",
      "Visual Design & UI System",
      "Usability Testing & Refinements"
    ],
    "outcomes": [
      "Increased average order value by 25%",
      "Reduced checkout time by 40%",
      "Customer satisfaction rating improved from 4.0 to 4.8/5"
    ],
    "nextProject": "freelance-marketplace",
    "projectDetails": {
      "client": "Electic Shop Owner",
      "duration": "4 weeks",
      "role": "UI/UX Designer",
      "team": "1 designer",
      "tools": ["Figma", "Sketch", ],
      "deliverables": ["Wireframes", "Prototypes", "User Research Report", "UI Kit", "Design System"]
    },
    "challenges": [
      "Creating an intuitive search and filtering system",
      "Designing a smooth and fast checkout process",
      "Balancing user needs with accessibility requirements",
      "Optimizing UI for both web and mobile experiences"
    ],
    "testimonial": {
      "quote": "The new design has significantly improved user engagement, making job searching effortless and enjoyable.",
      "author": "Emily Carter",
      "position": "CEO, Recruitment Tech Startup"
    },
    caseStudy: ''
  },

  {
    "slug": "grocery-ecommerce-platform",
    "title": "Grocery E-Commerce Platform",
    "category": "Mobile App",
    "tags": ["UI/UX", "E-commerce","Mobile App"],
    "description": "A grocery e-commerce platform that simplifies online shopping with a user-friendly interface and personalized recommendations.",
    "fullDescription": "This grocery e-commerce platform was designed to provide users with a seamless online shopping experience. The challenge was to create an engaging and accessible interface that allows users to browse, compare, and purchase groceries efficiently while ensuring a smooth checkout process.",
    "image": "/grossoo.png?height=400&width=600",
    "gallery": [
      "/grosso/5.png?height=600&width=800",
      "/grosso/6.png?height=600&width=800",
      "/grosso/7.png?height=600&width=800",
      "/grosso/8.png?height=600&width=800",
      "/grosso/9.png?height=600&width=800",
    ],
    "process": [
      "User Research & Personas",
      "Competitive Benchmarking",
      "Information Architecture & Wireframing",
      "Prototyping & Iteration",
      "Visual Design & UI System",
      "Usability Testing & Refinements"
    ],
    "outcomes": [
      "Increased average order value by 25%",
      "Reduced checkout time by 40%",
      "Customer satisfaction rating improved from 4.0 to 4.8/5"
    ],
    "nextProject": "freelance-marketplace",
    "projectDetails": {
      "client": "Grocery Shop Owner",
      "duration": "4 weeks",
      "role": "UI/UX Designer",
      "team": "1 designer",
      "tools": ["Figma", "Sketch", ],
      "deliverables": ["Wireframes", "Prototypes", "User Research Report", "UI Kit", "Design System"]
    },
    "challenges": [
      "Creating an intuitive search and filtering system",
      "Designing a smooth and fast checkout process",
      "Balancing user needs with accessibility requirements",
      "Optimizing UI for both web and mobile experiences"
    ],
    "testimonial": {
      "quote": "The new design has significantly improved user engagement, making job searching effortless and enjoyable.",
      "author": "Emily Carter",
      "position": "CEO, Recruitment Tech Startup"
    },
    caseStudy: ''
  },
  {
    "slug": "job-search-platform",
    "title": "Job Search Platform",
    "category": "Web & Mobile App",
    "tags": ["UI/UX", "Job Portal", "Web Design", "Mobile App"],
    "description": "A seamless job search platform that connects job seekers with recruiters through a user-friendly and intuitive interface.",
    "fullDescription": "This job search platform was designed to simplify the hiring process for both job seekers and employers. The challenge was to create an engaging and accessible interface that allows users to find job opportunities efficiently while ensuring a smooth application process.",
    "image": "/cover1.png?height=400&width=600",
    "gallery": [
      "/cover12.png?height=600&width=800",
      "/cover13.png?height=600&width=800",
      "/cover14.png?height=600&width=800",
    ],
    "process": [
      "User Research & Personas",
      "Competitive Benchmarking",
      "Information Architecture & Wireframing",
      "Prototyping & Iteration",
      "Visual Design & UI System",
      "Usability Testing & Refinements"
    ],
    "outcomes": [
      "Job applications increased by 55%",
      "Time spent searching for jobs reduced by 40%",
      "User satisfaction rating improved from 3.5 to 4.8/5"
    ],
    "nextProject": "freelance-marketplace",
    "projectDetails": {
      "client": "Recruitment Tech Startup",
      "duration": "14 weeks",
      "role": "UI/UX Designer",
      "team": "2 designers",
      "tools": ["Figma", "Sketch", ],
      "deliverables": ["Wireframes", "Prototypes", "User Research Report", "UI Kit", "Design System"]
    },
    "challenges": [
      "Creating an intuitive search and filtering system",
      "Designing a smooth and fast application process",
      "Balancing recruiter and job seeker needs in a single interface",
      "Optimizing UI for both web and mobile experiences"
    ],
    "testimonial": {
      "quote": "The new design has significantly improved user engagement, making job searching effortless and enjoyable.",
      "author": "Emily Carter",
      "position": "CEO, Recruitment Tech Startup"
    },
    caseStudy: 'https://drive.google.com/file/d/1UIgLKy8G0UqYxU6T5X1aNER3ZdThmuTb/view?usp=share_link'
  },
  {
    "slug": "hotel-booking-platform",
    "title": "Hotel Booking Platform",
    "category": "Web & Mobile App",
    "tags": ["UI/UX", "Hotel Booking", "Web Design", "Mobile App"],
    "description": "A seamless hotel booking platform that helps users find, compare, and book hotels effortlessly.",
    "fullDescription": "This hotel booking platform was designed to streamline the accommodation booking process, offering users a seamless experience to find and reserve hotels based on their preferences while ensuring a hassle-free check-in process.",
    "image": "/hotel_cover.png?height=400&width=600",
    "gallery": [
        "/hotel_cover5.png?height=600&width=800",
        "/hotel_cover6.png?height=600&width=800",
        "/hotel_cover7.png?height=600&width=800",
        "/hotel_cover8.png?height=600&width=800",
        "/hotel_cover9.png?height=600&width=800",
        "/hotel_cover10.png?height=600&width=800",
        "/hotel_cover11.png?height=600&width=800",
        "/hotel_cover12.png?height=600&width=800",
        "/hotel_cover13.png?height=600&width=800",
    ],
    "process": [
        "User Research & Personas",
        "Competitive Analysis",
        "Information Architecture & Wireframing",
        "Prototyping & Testing",
        "Visual Design & UI System",
        "Final Implementation & Optimization"
    ],
    "outcomes": [
        "Hotel bookings increased by 60%",
        "Search-to-booking time reduced by 35%",
        "User satisfaction rating improved from 3.8 to 4.9/5"
    ],
    "nextProject": "travel-planning-app",
    "projectDetails": {
        "client": "TravelTech Company",
        "duration": "4 weeks",
        "role": "Lead UI/UX Designer",
        "team": "1 designer",
        "tools": ["Figma", "Adobe XD", "Sketch"],
        "deliverables": ["Wireframes", "Prototypes", "User Research Report", "UI Kit", "Design System"]
    },
    "challenges": [
        "Designing a seamless search and filtering experience",
        "Ensuring a smooth and intuitive booking process",
        "Optimizing the UI for both web and mobile",
        "Incorporating real-time availability and pricing"
    ],
    "testimonial": {
        "quote": "The platform has transformed the way our users book hotels, offering an effortless experience.",
        "author": "John Doe",
        "position": "CEO, TravelTech Company"
    },
    "caseStudy": "https://drive.google.com/file/d/1ABCXyz12345/view?usp=share_link"
  },
  {
    slug: "ecommerce-redesign",
    title: "E-commerce Redesign",
    category: "Website",
    tags: ["Website", "Responsive"],
    description:
      "A complete redesign of an e-commerce platform focusing on improving conversion rates and user experience.",
    fullDescription:
      "This e-commerce platform redesign focused on improving the shopping experience, streamlining the checkout process, and increasing conversion rates. The client was struggling with high cart abandonment rates and poor mobile performance.",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    process: [
      "UX Audit & Analytics Review",
      "User Journey Mapping",
      "Information Architecture",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing",
    ],
    outcomes: ["Increased conversion rate by 28%", "Reduced cart abandonment by 35%", "Improved mobile sales by 42%"],
    nextProject: "analytics-platform",
    projectDetails: {
      client: "Fashion Retailer",
      duration: "16 weeks",
      role: "Senior UX Designer",
      team: "2 designers, 4 developers, 1 product manager",
      tools: ["Figma", "Hotjar", "Google Analytics", "Optimal Workshop"],
      deliverables: ["UX Audit Report", "User Flows", "Wireframes", "High-fidelity Mockups", "Interactive Prototype"],
    },
    challenges: [
      "High cart abandonment rate (75%)",
      "Poor mobile experience with 40% of traffic coming from mobile",
      "Complex product catalog with many variations",
      "Outdated visual design affecting brand perception",
    ],
    testimonial: {
      quote:
        "The redesign completely transformed our online presence. Not only do we look more professional, but our conversion rates have skyrocketed.",
      author: "Michael Chen",
      position: "E-commerce Director, Fashion Retailer",
    },
    caseStudy: 'https://drive.google.com/file/d/1UIgLKy8G0UqYxU6T5X1aNER3ZdThmuTb/view?usp=share_link'

  },
  {
    "slug": "travel-booking-platform",
    "title": "Travel Booking Platform",
    "category": "Web & Mobile App",
    "tags": ["UI/UX", "Travel", "Web Design", "Mobile App"],
    "description": "A modern travel booking platform that simplifies searching, filtering, and booking travel packages.",
    "fullDescription": "This travel booking platform was designed to provide users with a seamless experience in finding, comparing, and booking travel packages, ensuring a hassle-free journey planning process.",
    "image": "/travel_cover0.png?height=400&width=600",
    "gallery": [
        "/travel_cover1.png?height=600&width=800",
        "/travel_cover3.png?height=600&width=800",
        "/travel_cover4.png?height=600&width=800",
        "/travel_cover5.png?height=600&width=800",
        "/travel_cover6.png?height=600&width=800",
        "/travel_cover7.png?height=600&width=800",
    ],
    "process": [
        "User Research & Personas",
        "Competitive Analysis",
        "Information Architecture & Wireframing",
        "Prototyping & Testing",
        "Visual Design & UI System",
        "Final Implementation & Optimization"
    ],
    "outcomes": [
        "Travel bookings increased by 65%",
        "Search-to-booking time reduced by 30%",
        "User satisfaction rating improved from 4.0 to 4.9/5"
    ],
    "nextProject": "hotel-booking-app",
    "projectDetails": {
        "client": "Global Travel Agency",
        "duration": "6 weeks",
        "role": "Lead UI/UX Designer",
        "team": "1 designer, 2 developers",
        "tools": ["Figma", "Adobe XD", "Sketch"],
        "deliverables": ["Wireframes", "Prototypes", "User Research Report", "UI Kit", "Design System"]
    },
    "challenges": [
        "Designing a seamless search and filtering experience",
        "Ensuring an intuitive travel package selection process",
        "Optimizing the UI for both web and mobile",
        "Incorporating real-time availability and dynamic pricing"
    ],
    "screens": {
        "Home Screen": "Displays featured travel destinations, offers, and a search bar for quick navigation.",
        "About Us": "Provides details about the company, mission, and customer testimonials.",
        "Contact Us": "Includes an inquiry form, customer support details, and live chat support.",
        "Packages Screen": "Lists all available travel packages with pricing, ratings, and user reviews.",
        "Search & Filter": "Allows users to search by destination, date, budget, and other preferences.",
        "Package Details": "Detailed view of the selected package, including itinerary, pricing, and available dates.",
        "Booking Screen": "A streamlined booking process with payment integration and confirmation."
    },
    "testimonial": {
        "quote": "This travel platform has made it incredibly easy for customers to find and book their dream vacations.",
        "author": "Jane Smith",
        "position": "CEO, Global Travel Agency"
    },
    "caseStudy": "https://drive.google.com/file/d/1XYZabc98765/view?usp=share_link"
  },
  {
    "slug": "car-selling-platform",
    "title": "Car Selling Platform",
    "category": "Website",
    "tags": ["UI/UX", "Car Marketplace", "Web Design", "E-Commerce"],
    "description": "A modern car selling platform that allows users to browse, compare, and purchase vehicles with ease.",
    "fullDescription": "This car selling platform was designed to streamline the process of buying and selling cars by offering users an intuitive interface with detailed listings, comparison tools, and secure transactions.",
    "image": "/car/car_cover0.png?height=400&width=600",
    "gallery": [
        "/car/car_cover1.png?height=600&width=800",
        "/car/car_cover2.png?height=600&width=800",
        "/car/car_cover3.png?height=600&width=800",
        "/car/car_cover4.png?height=600&width=800",
        "/car/car_cover5.png?height=600&width=800",
        "/car/car_cover6.png?height=600&width=800",
        "/car/car_cover7.png?height=600&width=800",
    ],
    "process": [
        "User Research & Personas",
        "Competitive Analysis",
        "Information Architecture & Wireframing",
        "Prototyping & Testing",
        "Visual Design & UI System",
        "Final Implementation & Optimization"
    ],
    "outcomes": [
        "Car listings increased by 70%",
        "Purchase process time reduced by 40%",
        "User satisfaction rating improved from 3.7 to 4.8/5"
    ],
    "nextProject": "automobile-service-app",
    "projectDetails": {
        "client": "Automotive Marketplace",
        "duration": "8 weeks",
        "role": "Lead UI/UX Designer",
        "team": "1 designer, 2 developers",
        "tools": ["Figma", "Adobe XD", "Sketch"],
        "deliverables": ["Wireframes", "Prototypes", "User Research Report", "UI Kit", "Design System"]
    },
    "challenges": [
        "Creating an efficient car search and filtering experience",
        "Designing an engaging and trustworthy buying experience",
        "Optimizing the UI for both web and mobile users",
        "Incorporating secure payment and financing options"
    ],
    "screens": {
        "Home Screen": "Showcases featured cars, promotions, and search functionality.",
        "Car Listings": "Displays all available cars with filters like price, brand, year, and fuel type.",
        "Car Details": "Provides in-depth specifications, images, financing options, and a 'Buy Now' button.",
        "Comparison Tool": "Allows users to compare multiple cars side by side.",
        "Sell Your Car": "A guided form for sellers to list their vehicles with images and details.",
        "Financing & Insurance": "Provides information and application options for car loans and insurance.",
        "Checkout & Payment": "A seamless checkout process with multiple payment and financing options."
    },
    "testimonial": {
        "quote": "The new platform has made car buying and selling easier than ever before.",
        "author": "Michael Johnson",
        "position": "CEO, Automotive Marketplace"
    },
    "caseStudy": "https://drive.google.com/file/d/1XYZabc98765/view?usp=share_link"
},{
  "slug": "furniture-ecommerce-platform",
  "title": "Furniture E-Commerce Platform",
  "category": "E-Commerce, Web & Mobile App",
  "tags": ["UI/UX", "E-Commerce", "Furniture", "Web Design", "Mobile App"],
  "description": "A seamless furniture shopping platform offering a personalized and interactive buying experience.",
  "fullDescription": "This furniture e-commerce platform was designed to simplify the furniture shopping experience by integrating AR, smart filtering, and a streamlined checkout process to enhance user satisfaction and increase conversions.",
  "image": "/furniture/furniture_cover0.png?height=400&width=600",
  "gallery": [
      "/furniture/furniture_cover1.png?height=600&width=800",
      "/furniture/furniture_cover2.png?height=600&width=800",
      "/furniture/furniture_cover3.png?height=600&width=800",
      "/furniture/furniture_cover4.png?height=600&width=800",
      "/furniture/furniture_cover5.png?height=600&width=800",
      "/furniture/furniture_cover6.png?height=600&width=800",
  ],
  "process": [
      "User Research & Persona Development",
      "Competitive Analysis & Market Research",
      "Wireframing & Prototyping",
      "UI/UX Design & Testing",
      "Mobile & Performance Optimization",
      "Final Implementation & Launch"
  ],
  "outcomes": [
      "50% increase in sales within 3 months",
      "40% reduction in cart abandonment",
      "60% increase in user engagement",
      "Customer ratings improved from 3.7 to 4.9 stars"
  ],
  "nextProject": "home-decor-marketplace",
  "projectDetails": {
      "client": "Furniture Retail Company",
      "duration": "6 weeks",
      "role": "Lead UI/UX Designer",
      "team": "2 designers, 3 developers",
      "tools": ["Figma", "Adobe XD", "Sketch", "React", "Shopify"],
      "deliverables": ["Wireframes", "Prototypes", "User Research Report", "UI Kit", "Design System"]
  },
  "challenges": [
      "Incorporating AR for product visualization",
      "Optimizing navigation for an extensive product catalog",
      "Enhancing checkout experience for higher conversions",
      "Integrating AI-driven recommendations for personalized shopping"
  ],
  "testimonial": {
      "quote": "The platform has completely changed how customers shop for furniture. The AR feature is a game-changer!",
      "author": "Michael Carter",
      "position": "CEO, Furniture Co."
  },
  "caseStudy": "https://drive.google.com/file/d/1XYZfurniture/view?usp=share_link"
}
,
{
  "slug": "recipe-app",
  "title": "Recipe App",
  "category": "Food & Cooking",
  "tags": ["UI/UX", "Recipes", "Mobile App", "Food"],
  "description": "A recipe app that helps users discover and cook delicious meals effortlessly.",
  "fullDescription": "The Recipe App is designed for food lovers who want to explore a vast collection of recipes, save favorites, and get step-by-step cooking instructions. With an intuitive interface, users can filter recipes based on ingredients, dietary preferences, and cooking time.",
  "image": "/reciepes/recipe_cover5.png",
  "gallery": [
      "/reciepes/recipe_cover1.png",
      "/reciepes/recipe_cover2.png",
      "/reciepes/recipe_cover3.png",
      "/reciepes/recipe_cover4.png",
      "/reciepes/recipe_cover0.png",
  ],
  "process": [
      "User Research & Culinary Trends Analysis",
      "UI Wireframing & Navigation Design",
      "Prototyping & Iteration",
      "Final Visual Design & Branding",
      "Development & Usability Testing"
  ],
  "outcomes": [
      "User engagement increased by 70%",
      "Cooking session completion rate improved by 50%",
      "User satisfaction rating reached 4.9/5"
  ],
  "nextProject": "meal-planning-app",
  "projectDetails": {
      "client": "FoodTech Startup",
      "duration": "6 weeks",
      "role": "Lead UI/UX Designer",
      "team": "2 designers, 4 developers",
      "tools": ["Figma", "Adobe XD", "Sketch"],
      "deliverables": ["Wireframes", "Prototypes", "User Research Report", "UI Kit", "Design System"]
  },
  "challenges": [
      "Developing a seamless recipe discovery system",
      "Ensuring an engaging and user-friendly cooking experience",
      "Optimizing UI for different devices and screen sizes"
  ],
  "testimonial": {
      "quote": "The Recipe App has made cooking easier and more enjoyable for our users.",
      "author": "Michael Brown",
      "position": "CEO, FoodTech Startup"
  },
  "caseStudy": "https://drive.google.com/file/d/1ABCXYZ12345/view?usp=share_link"
}
]

export async function generateStaticParams() {
  const paths = projects.map((project) => ({
    slug: project.slug,
  }))

  return paths.map((param) => ({
    slug: param.slug,
  }))
}

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-black text-white pt-16">
      {/* Back Section */} 
       <Link
          href="/#projects"
          className="inline-flex items-center gap-2 mb-8 text-sm text-gray-400 hover:text-orange-500 transition-colors cursor-pointer px-16"
          >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
      </Link> 
        {/* Hero Section */}
        <section className="relative pt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent opacity-30 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 py-12 md:py-24">

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-start">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string | number, index: number) => (
            <span key={index} className="rounded-full bg-orange-500/10 px-3 py-1 text-xs text-orange-500">
              {tag}
            </span>
          ))}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
              <p className="text-xl text-gray-400">{project.fullDescription}</p>
              <div className="flex flex-wrap gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            View Live Project
          </a>
          <button className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors">
            <Share2 className="h-4 w-4" />
            Share
          </button>
          <button className="inline-flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors">
            <Bookmark className="h-4 w-4" />
            Save
          </button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
              <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
          </div>
        </div>
        </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.gallery.map((image: SetStateAction<string | null>, index: number) => (
              <div
                key={index}
                className="relative h-[250px] md:h-[300px] rounded-xl overflow-hidden group cursor-pointer"
                // onClick={() => setExpandedImage(image)}
              >
                <Image
                  src={typeof image === 'string' ? image : "/placeholder.svg"}
                  alt={`${project.title} gallery image ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-orange-500 text-black rounded-full p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Project Details Section */}
       <section className="py-12">
       <div className="container mx-auto px-4">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             <div className="space-y-6">
             <div>
                 <h3 className="text-lg font-semibold mb-2">Client</h3>
                 <p className="text-gray-400">{project.projectDetails.client}</p>
               </div>
               <div>
                 <h3 className="text-lg font-semibold mb-2">Duration</h3>
                 <div className="flex items-center gap-2">
                   <Calendar className="h-4 w-4 text-orange-500" />
                   <p className="text-gray-400">{project.projectDetails.duration}</p>
                </div>
               </div>
               <div>
                 <h3 className="text-lg font-semibold mb-2">Role</h3>
                 <p className="text-gray-400">{project.projectDetails.role}</p>
               </div>
             </div>
             <div className="space-y-6">
               <div>
                 <h3 className="text-lg font-semibold mb-2">Team</h3>
                 <div className="flex items-center gap-2">
                   <Users className="h-4 w-4 text-orange-500" />
                   <p className="text-gray-400">{project.projectDetails.team}</p>
                 </div>
               </div>
               <div>
                 <h3 className="text-lg font-semibold mb-2">Tools</h3>
                 <div className="flex flex-wrap gap-2">
                   {project.projectDetails.tools.map((tool: string | number, index: number) => (
                    <span key={index} className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-gray-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Deliverables</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {project.projectDetails.deliverables.map((deliverable: string | number, index: number) => (
                    <li key={index}>{deliverable}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Key Challenges</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {project.challenges.map((challenge: string,index: number) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Section
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <svg
              className="w-12 h-12 text-orange-500 mx-auto mb-6"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-2xl italic text-gray-300 mb-6">{project.testimonial.quote}</p>
            <div>
              <p className="font-semibold text-white">{project.testimonial.author}</p>
              <p className="text-gray-400">{project.testimonial.position}</p>
            </div>
          </div>
        </div>
      </section> */}
      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Design Process</h2>
              <ol className="relative border-l border-orange-500/30">
                {project.process.map((step: string, index: number) => (
                  <li key={index} className="mb-10 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-orange-500/10 rounded-full -left-4 ring-4 ring-black text-orange-500">
                      {index + 1}
                    </span>
                    <h3 className="flex items-center mb-1 text-lg font-semibold text-white">{step}</h3>
                    {/* <p className="mb-4 text-base font-normal text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore.
                    </p> */}
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8">Outcomes</h2>
              <div className="space-y-6">
                {project.outcomes.map((outcome: string, index: number) => (
                  <div key={index} className="p-6 bg-zinc-900 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                        {index === 0 ? (
                          <Target className="h-6 w-6" />
                        ) : index === 1 ? (
                          <Clock className="h-6 w-6" />
                        ) : (
                          <Award className="h-6 w-6" />
                        )}
                      </div>
                      <p className="text-lg font-medium">{outcome}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights Section */}
      <section className="py-16 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">User-Centered Approach</h3>
              <p className="text-gray-400">
                By focusing on real user needs and pain points, we were able to create a solution that resonated with
                the target audience and solved genuine problems.
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Iterative Design Process</h3>
              <p className="text-gray-400">
                Multiple rounds of testing and refinement allowed us to identify issues early and continuously improve
                the design based on real user feedback.
              </p>
            </div>
            <div className="bg-zinc-900 p-8 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-6">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Measurable Results</h3>
              <p className="text-gray-400">
                By establishing clear metrics at the beginning of the project, we were able to measure success
                objectively and demonstrate the value of good design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Case Study Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-zinc-900 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to learn more about this project?</h2>
              <p className="text-gray-400 max-w-2xl">
                Download the complete case study to get in-depth insights into the research, design process, and
                outcomes of this project.
              </p>
            </div>
            <a
              href={project.caseStudy}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-black transition-all hover:bg-orange-600 whitespace-nowrap"
            >
              <Download className="h-4 w-4" />
              Download Case Study
            </a>
          </div>
        </div>
      </section>

  </main>
  )
}

export default ProjectPage
