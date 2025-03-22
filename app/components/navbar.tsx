"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Frame, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <Frame className="h-6 w-6 text-orange-500" />
          <span className="text-white">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-sm text-white hover:text-orange-500 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-sm text-white hover:text-orange-500 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-sm text-white hover:text-orange-500 transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm text-white hover:text-orange-500 transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white py-2 hover:text-orange-500 transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white py-2 hover:text-orange-500 transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white py-2 hover:text-orange-500 transition-colors text-left"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white py-2 hover:text-orange-500 transition-colors text-left"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

