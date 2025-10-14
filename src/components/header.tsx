import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const pathname = location.pathname

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Skip Navigation Link for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#13a0d3] text-white px-4 py-2 rounded z-50"
      >
        Aller au contenu principal
      </a>
      
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="group">
            <img 
              src="/assets/hbaLogo.png" 
              alt="HBA Logo" 
              className={`h-8 w-auto transition-all duration-300 ${
                isScrolled 
                  ? "brightness-0 saturate-100 hue-rotate-[210deg] brightness-[0.3] contrast-[2]" 
                  : ""
              }`}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-12">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors relative group ${
                pathname === "/"
                  ? "text-[#13a0d3]"
                  : isScrolled
                    ? "text-gray-900 hover:text-[#13a0d3]"
                    : "text-white hover:text-[#13a0d3]"
              }`}
            >
              Présentation
              <span
                className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#13a0d3] transition-transform origin-left ${pathname === "/" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
              />
            </Link>
            <Link
              to="/interventions-medias"
              className={`text-sm font-medium transition-colors relative group ${
                pathname === "/interventions-medias"
                  ? "text-[#13a0d3]"
                  : isScrolled
                    ? "text-gray-900 hover:text-[#13a0d3]"
                    : "text-white hover:text-[#13a0d3]"
              }`}
            >
              Interventions Médias
              <span
                className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#13a0d3] transition-transform origin-left ${pathname === "/interventions-medias" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
              />
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-[#13a0d3] text-white text-sm font-medium rounded-full hover:bg-[#002961] transition-all duration-300 hover:shadow-lg"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2">
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-900" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-6 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium ${pathname === "/" ? "text-[#13a0d3]" : "text-gray-900"}`}
              >
                Présentation
              </Link>
              <Link
                to="/interventions-medias"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-medium ${pathname === "/interventions-medias" ? "text-[#13a0d3]" : "text-gray-900"}`}
              >
                Interventions Médias
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-2.5 bg-[#13a0d3] text-white text-sm font-medium rounded-full text-center"
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
    </>
  )
}
