
export function HeroSection() {
  return (
    <main 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-100"
      style={{
        backgroundImage: 'url(/assets/chess.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      role="banner"
      aria-label="HBA Consulting - Solutions de conseil stratégique"
    >
      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#13a0d3]/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#13a0d3]/40 rounded-full animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
        <div className="flex items-center justify-center min-h-[80vh]">
          {/* Centered Content */}
          <div className="text-center">
            {/* Decorative top element */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#13a0d3] to-transparent"></div>
              <div className="mx-4 w-2 h-2 bg-[#13a0d3] rounded-full animate-pulse"></div>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#13a0d3] to-transparent"></div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-12 text-white leading-tight">
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">Smart</span>{" "}
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">Solutions</span>{" "}
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">for</span>{" "}
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">Business</span>{" "}
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">and</span>{" "}
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#13a0d3] to-[#0891b2] transform hover:scale-105 transition-transform duration-300">
                Consulting
              </span>
              <span className="inline-block text-[#13a0d3] transform hover:scale-105 transition-transform duration-300">.</span>
            </h1>
            
            {/* Enhanced subtitle */}
            <div className="relative mb-16">
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed tracking-wide">
                Solutions de Conseil de Confiance
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#13a0d3] to-transparent"></div>
            </div>

            {/* Navigation Links - Horizontal Flex Layout */}
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              <a
                href="#qui-nous-sommes"
                className="group relative inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full font-medium hover:bg-[#13a0d3] hover:scale-110 transition-all duration-300 text-sm border border-white/30 shadow-lg hover:shadow-xl overflow-hidden"
              >
                <span className="relative z-10">Qui nous sommes</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#13a0d3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </a>
              
              <a
                href="#contrat-confiance"
                className="group relative inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full font-medium hover:bg-[#13a0d3] hover:scale-110 transition-all duration-300 text-sm border border-white/30 shadow-lg hover:shadow-xl overflow-hidden"
              >
                <span className="relative z-10">Notre contrat</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#13a0d3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </a>
              
              <a
                href="#approche"
                className="group relative inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full font-medium hover:bg-[#13a0d3] hover:scale-110 transition-all duration-300 text-sm border border-white/30 shadow-lg hover:shadow-xl overflow-hidden"
              >
                <span className="relative z-10">Notre approche</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#13a0d3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </a>
              
              <a
                href="#services"
                className="group relative inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full font-medium hover:bg-[#13a0d3] hover:scale-110 transition-all duration-300 text-sm border border-white/30 shadow-lg hover:shadow-xl overflow-hidden"
              >
                <span className="relative z-10">Offre de valeur</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#13a0d3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </a>
            </div>

          </div>
        </div>
      </div>

    </main>
  )
}
