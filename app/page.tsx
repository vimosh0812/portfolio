"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Figma, Layers, Mail, Phone, Github, Twitter, Instagram } from "lucide-react"
import { useEffect } from "react"

export default function Portfolio() {
  const projects = [
    {
      slug: "job-search-platform",
      title: "Job Search Platform",
      category: "Mobile App",
      tags: ["Mobile App", "UI/UX"],
      description:
        "A seamless job search platform that connects job seekers with recruiters through a user-friendly and intuitive interface.",
      image : '/cover11.png'
    },
    {
      slug: "hotel-booking-platform",
      title: "Hotel Booking Platform",
      category: "Website-Mobile App",
      tags: ["Website", "Mobile App", "UI/UX"],
      description:
        "A seamless hotel booking platform that helps users find, compare, and book hotels effortlessly.",
      image : 'hotel_cover1.png'

    },
    {
      slug: "travel-booking-platform",
      title: "Localize Sri Lanka",
      category: "Website",
      tags: ["Website", "Travel"],
      description:
        "A modern travel booking platform that simplifies searching, filtering, and booking travel packages.",
      image : 'travel_cover.png'

    },
    {
      slug: "car-selling-platform",
      title: "Car Selling Platform",
      category: "Website",
      tags: ["Website", "Car"],
      description:
        "A modern car selling platform that allows users to browse, compare, and purchase vehicles with ease.",
      image : 'car/car_cover.png'

    },
    {
      slug: "furniture-ecommerce-platform",
      title: "Furniture E-Commerce Platform",
      category: "Website",
      tags: ["Website", "Furniture"],
      description: "A seamless furniture shopping platform offering a personalized and interactive buying experience.",
      image : 'furniture/furniture_cover.png'

    },
    {
      slug: "recipe-app",
      title: "Recipe App",
      category: "Food & Cooking",
      tags: ["Web App"],
      description:
        "A recipe app that helps users discover and cook delicious meals effortlessly.",
      image : 'reciepes/recipe_cover5.png'
    },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    // Simple animation without complex observers
    const sections = document.querySelectorAll("section")
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add("section-animate")
      }, index * 100)
    })
  }, [])

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 text-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-black/50 to-black pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute -z-10 h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <div className="relative z-10 mx-auto max-w-5xl space-y-8">
          <div
            className="animate-fade-in space-y-4 opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <h2 className="text-xl font-medium text-orange-500">Hello, I'm Vimosh</h2>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <span className="text-white">UI/UX</span>{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Designer
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-400">
              Crafting intuitive digital experiences that blend aesthetics with functionality
            </p>
          </div>
          <div
            className="animate-fade-in flex flex-col items-center justify-center gap-4 opacity-0 sm:flex-row"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group inline-flex h-12 w-48 items-center justify-center gap-2 rounded-full bg-orange-500 px-8 text-sm font-medium text-black transition-all hover:bg-orange-600"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex h-12 w-48 items-center justify-center gap-2 rounded-full border border-orange-500/20 bg-black/50 px-8 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-orange-500/50"
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="flex items-center justify-center rounded-full border border-orange-500/20 p-2"
          >
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
              className="h-5 w-5 text-orange-500"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-zinc-950 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row">
            <div className="w-full md:w-1/2">
              <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">About Me</h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  I'm a passionate UI/UX designer with over 2 years of experience creating user-centered digital
                  experiences that are both beautiful and functional.
                </p>
                <p>
                  My approach combines strategic thinking with creative design to solve complex problems and deliver
                  intuitive interfaces that users love.
                </p>
                <p>
                  I specialize in user research, wireframing, prototyping, and creating design systems that ensure
                  consistency across products.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-orange-500/10 px-4 py-2 text-sm text-orange-500">User Research</span>
                <span className="rounded-full bg-orange-500/10 px-4 py-2 text-sm text-orange-500">Wireframing</span>
                <span className="rounded-full bg-orange-500/10 px-4 py-2 text-sm text-orange-500">Prototyping</span>
                <span className="rounded-full bg-orange-500/10 px-4 py-2 text-sm text-orange-500">UI Design</span>
                <span className="rounded-full bg-orange-500/10 px-4 py-2 text-sm text-orange-500">Design Systems</span>
              </div>
            </div>
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl md:w-1/2">
              <Image
              src="/about-f.png?height=800&width=600"
              alt="Designer portrait"
              fill
              className="object-cover"
              priority
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group rounded-xl bg-zinc-900 p-8 transition-all hover:bg-zinc-800">
              <div className="mb-4 inline-flex rounded-full bg-orange-500/10 p-3 text-orange-500">
                <Figma className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">UI Design</h3>
              <p className="text-gray-400">
                Creating visually appealing interfaces with a focus on aesthetics, consistency, and brand identity.
              </p>
            </div>
            <div className="group rounded-xl bg-zinc-900 p-8 transition-all hover:bg-zinc-800">
              <div className="mb-4 inline-flex rounded-full bg-orange-500/10 p-3 text-orange-500">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">UX Design</h3>
              <p className="text-gray-400">
                Designing user experiences that are intuitive, accessible, and solve real user problems.
              </p>
            </div>
            <div className="group rounded-xl bg-zinc-900 p-8 transition-all hover:bg-zinc-800">
              <div className="mb-4 inline-flex rounded-full bg-orange-500/10 p-3 text-orange-500">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-white">Prototyping</h3>
              <p className="text-gray-400">
                Building interactive prototypes to test and validate design concepts before development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Featured Projects</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              A selection of my recent work showcasing my design process and problem-solving approach.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl bg-zinc-900 transition-all hover:bg-zinc-800"
              >
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                  src={project.image}
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
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-orange-500 transition-all hover:text-orange-400"
                  >
                    View Case Study <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-orange-500/20 bg-black/50 px-8 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-orange-500/50"
            >
              View All Projects
            </Link>
          </div> */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-zinc-950 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Get In Touch</h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Interested in working together? Feel free to reach out for collaborations or just a friendly hello.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="inline-flex rounded-full bg-orange-500/10 p-3 text-orange-500">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-white">Email</h3>
                  <a
                    href="mailto:hello@yourportfolio.com"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    vimosh2002@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="inline-flex rounded-full bg-orange-500/10 p-3 text-orange-500">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-white">Phone</h3>
                  <a href="tel:+15551234567" className="text-gray-400 hover:text-orange-500 transition-colors">
                    +94 (76) 772-2120
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-zinc-800 p-3 text-white hover:bg-orange-500 hover:text-black transition-all"
                >
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
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-zinc-800 p-3 text-white hover:bg-orange-500 hover:text-black transition-all"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-zinc-800 p-3 text-white hover:bg-orange-500 hover:text-black transition-all"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-zinc-800 p-3 text-white hover:bg-orange-500 hover:text-black transition-all"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-400">
                Name
                </label>
                <input
                id="name"
                type="text"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 focus:border-orange-500 focus:outline-none"
                placeholder="Your name"
                style={{ borderRadius: '8px' }}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-400">
                Email
                </label>
                <input
                id="email"
                type="email"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 focus:border-orange-500 focus:outline-none"
                placeholder="Your email"
                style={{ borderRadius: '8px' }}
                />
              </div>
              </div>
              <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-400">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 focus:border-orange-500 focus:outline-none"
                placeholder="Subject"
                style={{ borderRadius: '8px' }}
              />
              </div>
              <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 text-white placeholder:text-gray-500 focus:border-orange-500 focus:outline-none"
                placeholder="Your message"
                style={{ borderRadius: '8px' }}
              ></textarea>
              </div>
                <button
                type="submit"
                className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-orange-500 px-8 text-sm font-medium text-black transition-all hover:bg-orange-600 sm:w-auto"
                style={{ borderRadius: '8px' }}
                >
                Send Message
                </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-400">© 2025 Vimosh V. All rights reserved.</p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-orange-500"
              >
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
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-orange-500"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-orange-500"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:text-orange-500"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

