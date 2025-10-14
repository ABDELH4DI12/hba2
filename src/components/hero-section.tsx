import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-[#002961]">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-white leading-tight">HBA Premium Consulting</h1>

          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Cabinet de conseil au service des entreprises, avec des expertises variées et un engagement d'excellence
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#002961] rounded-full font-medium hover:bg-[#13a0d3] hover:text-white transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Contactez-nous
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/interventions-medias"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-[#002961] transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Interventions Médias
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
