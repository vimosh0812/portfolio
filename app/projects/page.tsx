"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowRight, Search } from "lucide-react"

export default function ProjectsPage() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const projects = [
    {
      slug: "finance-dashboard-app",
      title: "Finance Dashboard App",
      category: "Mobile App",
      tags: ["Mobile App", "UI/UX"],
      description:
        "A comprehensive finance management application with intuitive data visualization and user-friendly interface.",
    },
    {
      slug: "ecommerce-redesign",
      title: "E-commerce Redesign",
      category: "Website",
      tags: ["Website", "Responsive"],
      description:
        "A complete redesign of an e-commerce platform focusing on improving conversion rates and user experience.",
    },
    {
      slug: "analytics-platform",
      title: "Analytics Platform",
      category: "Web App",
      tags: ["Web App", "Dashboard"],
      description:
        "A data analytics platform with complex data visualization tools made simple through thoughtful UX design.",
    },
    {
      slug: "health-tracking-app",
      title: "Health Tracking App",
      category: "Mobile App",
      tags: ["Mobile App", "Health"],
      description:
        "A health and fitness tracking application designed to motivate users and provide meaningful insights.",
    },
    {
      slug: "photography-portfolio",
      title: "Photography Portfolio",
      category: "Website",
      tags: ["Website", "Portfolio"],
      description: "A minimalist portfolio website for a professional photographer, focusing on visual storytelling.",
    },
    {
      slug: "project-management-tool",
      title: "Project Management Tool",
      category: "Web App",
      tags: ["Web App", "SaaS"],
      description:
        "A collaborative project management platform designed to streamline workflows and improve team productivity.",
    },
    {
      slug: "travel-booking-app",
      title: "Travel Booking App",
      category: "Mobile App",
      tags: ["Mobile App", "Travel"],
      description:
        "A travel booking application that simplifies the process of finding and booking flights, hotels, and experiences.",
    },
    {
      slug: "music-streaming-service",
      title: "Music Streaming Service",
      category: "Web App",
      tags: ["Web App", "Entertainment"],
      description: "A music streaming service with personalized recommendations and a seamless listening experience.",
    },
    {
      slug: "food-delivery-platform",
      title: "Food Delivery Platform",
      category: "Mobile App",
      tags: ["Mobile App", "Food"],
      description:
        "A food delivery platform connecting users with local restaurants and providing real-time order tracking.",
    },
  ]

  // Filter projects based on search query
  const filteredProjects = searchQuery
    ? projects.filter(
        (project) =>
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    : projects

  const handleViewProject = (slug: string) => {
    router.push(`/projects/${slug}`)
  }

  return (
    <main className="min-h-screen bg-black text-white pt-16">
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent opacity-30 mix-blend-overlay"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
            <p className="text-xl text-gray-400">
              A collection of my work across various industries and platforms, showcasing my approach to solving design
              challenges.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-orange-500" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-zinc-800 bg-zinc-900 pl-10 pr-4 py-3 text-white placeholder:text-gray-500 focus:border-orange-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl bg-zinc-900 transition-all hover:bg-zinc-800 cursor-pointer"
                onClick={() => handleViewProject(project.slug)}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="rounded-full bg-orange-500/10 px-3 py-1 text-xs text-orange-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mb-4 text-gray-400">{project.description}</p>
                  <div className="inline-flex items-center gap-1 text-sm font-medium text-orange-500 transition-all hover:text-orange-400">
                    View Case Study <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No projects found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

