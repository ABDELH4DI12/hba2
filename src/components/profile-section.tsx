import { GraduationCap, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export function ProfileSection() {
  return (
    <section id="qui-nous-sommes" className="min-h-screen relative bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#13a0d3]/2 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#002961]/2 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 min-h-screen flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

          {/* Left Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-medium text-[#13a0d3] mb-4 tracking-widest uppercase">Fondateur & Gérant</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#002961] mb-6">
                Hicham
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#13a0d3] to-[#0891b2]">
                  BENSAID ALAOUI
                </span>
              </h1>
            </motion.div>

            <motion.p
              className="text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Avec plus de <span className="font-semibold text-[#002961]">18 ans d'excellence</span> en conseil stratégique,
              j'accompagne les entreprises dans leur transformation et leur croissance à travers une approche
              unique alliant <span className="text-[#13a0d3] font-semibold">expertise financière</span> et
              <span className="text-[#13a0d3] font-semibold"> vision stratégique</span>.
            </motion.p>

            {/* Key Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 py-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <motion.div
                  className="text-4xl font-bold text-[#13a0d3] mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  18+
                </motion.div>
                <p className="text-sm text-gray-600">Années d'expertise</p>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-4xl font-bold text-[#13a0d3] mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  100+
                </motion.div>
                <p className="text-sm text-gray-600">Projets réalisés</p>
              </div>
              <div className="text-center">
                <motion.div
                  className="text-4xl font-bold text-[#13a0d3] mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  50+
                </motion.div>
                <p className="text-sm text-gray-600">Entreprises accompagnées</p>
              </div>
            </motion.div>

            {/* Expertise Pills */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              {["ESSEC Business School", "Université Paris Dauphine", "EMLyon", "Radio Mars"].map((item, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 shadow-sm"
                  whileHover={{ scale: 1.05, backgroundColor: "#13a0d3", color: "white", borderColor: "#13a0d3" }}
                  transition={{ duration: 0.2 }}
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#13a0d3] to-[#0891b2] text-white rounded-full font-medium text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discutons de votre projet
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/assets/hicham.png"
                    alt="Hicham BENSAID ALAOUI"
                    className="w-full h-auto aspect-[3/4] object-cover md:h-[500px] lg:h-[600px] md:aspect-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002961]/30 via-transparent to-transparent"></div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-10 -right-10 bg-white p-6 rounded-2xl shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <TrendingUp className="w-8 h-8 text-[#13a0d3] mb-2" />
                <p className="text-sm font-semibold text-[#002961]">Croissance</p>
                <p className="text-xs text-gray-600">Stratégique</p>
              </motion.div>


              <motion.div
                className="absolute top-1/2 -right-5 bg-white p-4 rounded-full shadow-lg"
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{ rotate: 360 }}
                transition={{
                  opacity: { duration: 0.6, delay: 1 },
                  scale: { duration: 0.6, delay: 1 },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
                viewport={{ once: true }}
              >
                <GraduationCap className="w-6 h-6 text-[#002961]" />
              </motion.div>

              {/* Background Decoration */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#13a0d3]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#002961]/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
