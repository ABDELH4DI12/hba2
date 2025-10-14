import { motion } from "framer-motion"

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
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Decorative top element */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#13a0d3] to-transparent"></div>
              <div className="mx-4 w-2 h-2 bg-[#13a0d3] rounded-full animate-pulse"></div>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-[#13a0d3] to-transparent"></div>
            </div>

            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-12 text-white leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <motion.span 
                className="inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                Smart
              </motion.span>{" "}
              <motion.span 
                className="inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                Solutions
              </motion.span>{" "}
              <motion.span 
                className="inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                for
              </motion.span>{" "}
              <motion.span 
                className="inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
              >
                Business
              </motion.span>{" "}
              <motion.span 
                className="inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                and
              </motion.span>{" "}
              <motion.span 
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#13a0d3] to-[#0891b2]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
              >
                Consulting
              </motion.span>
            </motion.h1>
            
            {/* Enhanced subtitle */}
            <motion.div 
              className="relative mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed tracking-wide">
                Solutions de conseil de confiance
              </p>
              <motion.div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#13a0d3] to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              ></motion.div>
            </motion.div>

            {/* Navigation Links - Horizontal Flex Layout */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.a
                href="#qui-nous-sommes"
                className="group relative inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full font-medium text-sm border border-white/30 shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(19, 160, 211, 0.8)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10">Qui nous sommes</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#13a0d3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </motion.a>
              
              <motion.a
                href="#contrat-confiance"
                className="group relative inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full font-medium text-sm border border-white/30 shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(19, 160, 211, 0.8)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10">Notre contrat</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#13a0d3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </motion.a>
              
              <motion.a
                href="#approche"
                className="group relative inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full font-medium text-sm border border-white/30 shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(19, 160, 211, 0.8)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10">Notre approche</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#13a0d3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </motion.a>
              
              <motion.a
                href="#services"
                className="group relative inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full font-medium text-sm border border-white/30 shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(19, 160, 211, 0.8)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10">Offre de valeur</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#13a0d3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </motion.a>
            </motion.div>

          </motion.div>
        </div>
      </div>

    </main>
  )
}
