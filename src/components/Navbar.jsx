import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-gradient-to-r from-[#699940] to-[#00713C] w-screen">
      <div className="container-fluid w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center">
              <div className="text-[#6B8E23] font-bold text-xs sm:text-sm">DSP</div>
            </div>
            <div className="text-white">
              <div className="font-bold text-sm sm:text-lg leading-tight">DSP</div>
              <div className="text-xs sm:text-sm leading-tight">INTERNATIONAL</div>
              <div className="text-xs sm:text-sm leading-tight">SCHOOL</div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <Link
              to="/"
              className="text-white hover:text-gray-200 transition-colors duration-200 font-medium text-sm xl:text-base"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-200 transition-colors duration-200 font-medium text-sm xl:text-base"
            >
              About
            </Link>
            <Link
              to="/gallery"
              className="text-white hover:text-gray-200 transition-colors duration-200 font-medium text-sm xl:text-base"
            >
              Gallery
            </Link>
            <Link
              to="/facilities"
              className="text-white hover:text-gray-200 transition-colors duration-200 font-medium text-sm xl:text-base"
            >
              Facilities
            </Link>
            <Link
              to="/mandatory-public-disclosure"
              className="text-white hover:text-gray-200 transition-colors duration-200 font-medium text-sm xl:text-base"
            >
              Mandatory Public Disclosure
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gray-200 transition-colors duration-200 font-medium text-sm xl:text-base"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-white p-2 rounded-md hover:bg-[#5a7a1f] transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            <svg
              className={`w-6 h-6 transform transition-transform duration-200 ${isMobileMenuOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-[#5a7a1f]">
            <Link
              to="/"
              className="block px-3 py-2 text-white hover:bg-[#5a7a1f] rounded-md transition-colors duration-200 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-white hover:bg-[#5a7a1f] rounded-md transition-colors duration-200 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/gallery"
              className="block px-3 py-2 text-white hover:bg-[#5a7a1f] rounded-md transition-colors duration-200 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/facilities"
              className="block px-3 py-2 text-white hover:bg-[#5a7a1f] rounded-md transition-colors duration-200 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Facilities
            </Link>
            <Link
              to="/mandatory-public-disclosure"
              className="block px-3 py-2 text-white hover:bg-[#5a7a1f] rounded-md transition-colors duration-200 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Mandatory Public Disclosure
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-white hover:bg-[#5a7a1f] rounded-md transition-colors duration-200 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
