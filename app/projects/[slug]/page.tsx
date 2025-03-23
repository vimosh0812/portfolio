
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Bookmark, ExternalLink, Share2, Calendar, Users, Download, CheckCircle, Award, Clock, Lightbulb, Target, Zap, ArrowRight } from 'lucide-react'
import { SetStateAction } from 'react'

const projects = [
  {
    slug: "finance-dashboard-app",
    title: "Finance Dashboard App",
    category: "Mobile App",
    tags: ["UI/UX", "Mobile App"],
    description:
      "A comprehensive finance management application with intuitive data visualization and user-friendly interface.",
    fullDescription:
      "This finance dashboard app was designed to help users track their spending, investments, and financial goals in one place. The challenge was to present complex financial data in a way that's easy to understand and act upon.",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    process: [
      "User Research & Interviews",
      "Competitive Analysis",
      "Wireframing & Prototyping",
      "User Testing",
      "Visual Design",
      "Development Handoff",
    ],
    outcomes: [
      "Increased user engagement by 45%",
      "Reduced task completion time by 30%",
      "Improved user satisfaction score from 3.2 to 4.7/5",
    ],
    nextProject: "ecommerce-redesign",
    projectDetails: {
      client: "FinTech Startup",
      duration: "12 weeks",
      role: "Lead UI/UX Designer",
      team: "3 designers, 2 developers",
      tools: ["Figma", "Sketch", "Adobe XD", "InVision"],
      deliverables: ["User Research Report", "Wireframes", "Prototypes", "UI Kit", "Design System"],
    },
    challenges: [
      "Complex financial data visualization",
      "Creating intuitive navigation for multiple account types",
      "Designing for both novice and expert financial users",
      "Ensuring security while maintaining usability",
    ],
    testimonial: {
      quote:
        "The redesign transformed our app from a confusing mess of numbers to an intuitive tool that our users love. Engagement is up across all metrics.",
      author: "Sarah Johnson",
      position: "Product Manager, FinTech Startup",
    },
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
  },
  {
    slug: "analytics-platform",
    title: "Analytics Platform",
    category: "Web App",
    tags: ["Web App", "Dashboard"],
    description:
      "A data analytics platform with complex data visualization tools made simple through thoughtful UX design.",
    fullDescription:
      "This analytics platform was designed to help businesses make sense of their data through intuitive visualizations and actionable insights. The challenge was to make complex data accessible to users with varying levels of data literacy.",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    process: [
      "Stakeholder Interviews",
      "User Research",
      "Information Architecture",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing",
    ],
    outcomes: [
      "Reduced onboarding time by 50%",
      "Increased feature adoption by 65%",
      "Improved data-driven decision making across client organizations",
    ],
    nextProject: "health-tracking-app",
    projectDetails: {
      client: "Enterprise SaaS Company",
      duration: "20 weeks",
      role: "UX Lead",
      team: "4 designers, 6 developers, 2 data scientists",
      tools: ["Figma", "D3.js", "Tableau", "Adobe Creative Suite"],
      deliverables: [
        "User Personas",
        "Journey Maps",
        "Information Architecture",
        "Interactive Prototype",
        "Design System",
      ],
    },
    challenges: [
      "Making complex data visualization accessible to non-technical users",
      "Designing for multiple user roles with different data needs",
      "Creating a scalable system that could handle growing data sets",
      "Balancing depth of analysis with ease of use",
    ],
    testimonial: {
      quote:
        "Our customers are amazed at how easily they can now understand their data. What used to take data analysts days to interpret can now be understood by anyone in minutes.",
      author: "David Wilson",
      position: "CTO, Enterprise SaaS Company",
    },
  },
  {
    slug: "health-tracking-app",
    title: "Health Tracking App",
    category: "Mobile App",
    tags: ["Mobile App", "Health"],
    description:
      "A health and fitness tracking application designed to motivate users and provide meaningful insights.",
    fullDescription:
      "This health tracking app was designed to help users monitor their fitness activities, nutrition, and wellness goals. The focus was on creating a motivating experience that would encourage consistent use and healthy habits.",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    process: [
      "User Research & Interviews",
      "Competitive Analysis",
      "User Persona Development",
      "Wireframing & Prototyping",
      "Visual Design",
      "User Testing",
    ],
    outcomes: [
      "90% user retention after 3 months",
      "Average 4.8/5 star rating on app stores",
      "Featured in Apple's 'Apps We Love' collection",
    ],
    nextProject: "photography-portfolio",
    projectDetails: {
      client: "Health Tech Startup",
      duration: "14 weeks",
      role: "Product Designer",
      team: "2 designers, 3 developers, 1 health expert",
      tools: ["Figma", "Principle", "ProtoPie", "Adobe Illustrator"],
      deliverables: [
        "User Research Report",
        "User Personas",
        "App Wireframes",
        "UI Design",
        "Animation Specifications",
      ],
    },
    challenges: [
      "Creating habit-forming features that encourage daily use",
      "Designing for multiple health metrics without overwhelming users",
      "Balancing gamification with serious health tracking",
      "Ensuring data privacy and security for sensitive health information",
    ],
    testimonial: {
      quote:
        "The design team created an experience that truly resonates with our users. The app doesn't just track health data—it motivates real behavior change.",
      author: "Emma Rodriguez",
      position: "Founder, Health Tech Startup",
    },
  },
  {
    slug: "photography-portfolio",
    title: "Photography Portfolio",
    category: "Website",
    tags: ["Website", "Portfolio"],
    description: "A minimalist portfolio website for a professional photographer, focusing on visual storytelling.",
    fullDescription:
      "This photography portfolio was designed to showcase the client's work in a clean, minimalist interface that puts the focus entirely on the images. The challenge was to create a visually striking experience while ensuring fast load times for high-resolution images.",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    process: [
      "Client Discovery Workshop",
      "Content Strategy",
      "Wireframing & Prototyping",
      "Visual Design",
      "Performance Optimization",
      "Launch & Training",
    ],
    outcomes: [
      "Increased client inquiries by 75%",
      "Improved page load speed by 40%",
      "Featured in several design publications",
    ],
    nextProject: "project-management-tool",
    projectDetails: {
      client: "Professional Photographer",
      duration: "8 weeks",
      role: "UI Designer",
      team: "1 designer, 1 developer",
      tools: ["Figma", "Adobe Photoshop", "Webflow"],
      deliverables: ["Brand Guidelines", "Website Wireframes", "Visual Design", "Responsive Prototypes"],
    },
    challenges: [
      "Balancing minimal design with effective navigation",
      "Optimizing for fast loading of high-resolution images",
      "Creating a responsive design that works across all devices",
      "Designing a system the client could easily update themselves",
    ],
    testimonial: {
      quote:
        "My new portfolio perfectly captures my aesthetic while making my work shine. I've received more inquiries in the first month after launch than in the entire previous year.",
      author: "Alex Thompson",
      position: "Professional Photographer",
    },
  },
  {
    slug: "project-management-tool",
    title: "Project Management Tool",
    category: "Web App",
    tags: ["Web App", "SaaS"],
    description:
      "A collaborative project management platform designed to streamline workflows and improve team productivity.",
    fullDescription:
      "This project management tool was designed to help teams collaborate more effectively, track progress, and meet deadlines. The focus was on creating an intuitive interface that would reduce the learning curve and improve adoption rates.",
    image: "/placeholder.svg?height=400&width=600",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    process: [
      "User Research & Interviews",
      "Competitive Analysis",
      "User Flow Mapping",
      "Wireframing & Prototyping",
      "Visual Design",
      "Usability Testing",
    ],
    outcomes: [
      "Reduced project completion time by 25%",
      "Improved team communication efficiency by 40%",
      "Increased user satisfaction score from 3.5 to 4.8/5",
    ],
    nextProject: "finance-dashboard-app",
    projectDetails: {
      client: "Tech Company",
      duration: "18 weeks",
      role: "UX/UI Designer",
      team: "3 designers, 5 developers, 1 product manager",
      tools: ["Figma", "Miro", "Maze", "Zeplin"],
      deliverables: ["User Research Report", "User Flows", "Wireframes", "UI Design", "Interactive Prototype"],
    },
    challenges: [
      "Creating an intuitive system for complex project management",
      "Designing for multiple user roles with different permissions",
      "Balancing feature richness with simplicity",
      "Ensuring seamless integration with existing tools",
    ],
    testimonial: {
      quote:
        "The redesigned platform has transformed how our teams work. Tasks that used to take days now take hours, and our project completion rate has improved dramatically.",
      author: "James Peterson",
      position: "Director of Operations, Tech Company",
    },
  },
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
                    <p className="mb-4 text-base font-normal text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                      labore.
                    </p>
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
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-black transition-all hover:bg-orange-600 whitespace-nowrap"
            >
              <Download className="h-4 w-4" />
              Download Case Study
            </a>
          </div>
        </div>
      </section>
      {/* Next Project Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Next Project</h2>
            <p className="text-gray-400">Check out another project from my portfolio</p>
          </div>

          <div className="mt-12">
            <Link
              href={`/projects/${project.nextProject}`}
              className="group block relative h-[300px] rounded-xl overflow-hidden"
            >
              <Image
                src="/placeholder.svg?height=600&width=1200"
                alt="Next project"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col items-center justify-end p-8">
                <div className="text-center">
                  <p className="text-gray-400 mb-2">Next Project</p>
                  <h3 className="text-2xl font-bold mb-4">
                    {projects.find((p) => p.slug === project.nextProject)?.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-orange-500">
                    View Project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
  </main>
  )
}

export default ProjectPage
