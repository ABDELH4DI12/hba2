import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-100"
      style={{
        backgroundImage: 'url(/assets/background.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Light dark overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-left">
            {/* Decorative line with text */}
            <div className="flex items-center mb-4">
              <div className="w-16 h-px bg-[#13a0d3] mr-4"></div>
              <div className="text-sm font-medium text-white tracking-wide uppercase">
                Solutions de Conseil de Confiance
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-white leading-tight">
              Nous redonnons vie à vos entreprises
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 font-light leading-relaxed max-w-xl">
              Votre partenaire de confiance en conseil d'entreprise expert. Où la qualité rencontre la précision, et vos projets trouvent une seconde vie !
            </p>

            {/* Navigation Links - Solid styling */}
            <div className="grid grid-cols-2 gap-2 mb-8 max-w-md">
              <a
                href="#qui-nous-sommes"
                className="group inline-flex items-center justify-center px-3 py-2 bg-white text-[#002961] rounded-md font-medium hover:bg-[#13a0d3] hover:text-white transition-all duration-300 text-xs border border-gray-200 shadow-sm"
              >
                Qui nous sommes
              </a>
              <a
                href="#contrat-confiance"
                className="group inline-flex items-center justify-center px-3 py-2 bg-white text-[#002961] rounded-md font-medium hover:bg-[#13a0d3] hover:text-white transition-all duration-300 text-xs border border-gray-200 shadow-sm"
              >
                Notre contrat
              </a>
              <a
                href="#approche"
                className="group inline-flex items-center justify-center px-3 py-2 bg-white text-[#002961] rounded-md font-medium hover:bg-[#13a0d3] hover:text-white transition-all duration-300 text-xs border border-gray-200 shadow-sm"
              >
                Notre approche
              </a>
              <a
                href="#services"
                className="group inline-flex items-center justify-center px-3 py-2 bg-white text-[#002961] rounded-md font-medium hover:bg-[#13a0d3] hover:text-white transition-all duration-300 text-xs border border-gray-200 shadow-sm"
              >
                Offre de valeur
              </a>
            </div>

            {/* Main CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-[#13a0d3] text-white rounded-lg font-medium hover:bg-white hover:text-[#002961] transition-all duration-300 border-2 border-[#13a0d3] hover:border-white"
              >
                <span>Réserver une Consultation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/assets/bulb.webp" 
                alt="Bulb representing business solutions" 
                className="max-w-full h-auto max-h-[600px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
