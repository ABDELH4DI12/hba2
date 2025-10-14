import {
  GraduationCap,
  TrendingUp,
  Building2,
  Users,
  Target,
  Lightbulb,
  BarChart3,
  PieChart,
} from "lucide-react"
import { motion } from "framer-motion"

const activities = [
  { text: "Formations techniques", icon: GraduationCap },
  { text: "Conseil en structuration financière", icon: TrendingUp },
  { text: "Conseil en organisation", icon: Building2 },
  { text: "Conseil en transformation digitale", icon: Users },
  { text: "Conseil en optimisation de BFR / supply chain", icon: Target },
  { text: "Due diligences financières", icon: Lightbulb },
  { text: "Valorisations d'entreprises", icon: BarChart3 },
  { text: "Aide à la gestion de projets", icon: PieChart },
  { text: "Maîtrise d'ouvrage déléguée", icon: Building2 },
  { text: "Conseil adressant des besoins ad hoc", icon: Lightbulb },
]

export function ExpertiseSection() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#002961] mb-6">
            Nos Expertises
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des solutions expertes pour transformer vos défis en opportunités de croissance
          </p>
        </motion.div>

        {/* Full-width Rectangle with Image and Content */}
        <motion.div 
          className="grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Left Side - Image with Overlay */}
          <div className="relative h-80 md:h-96">
            <img 
              src="/assets/expertises.jpeg" 
              alt="Expertise HBA Consulting" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#002961]/80 via-[#002961]/60 to-[#13a0d3]/40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="text-center text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold">Excellence</h3>
                <p className="text-sm opacity-90">& Expertise</p>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#13a0d3]/10 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#13a0d3] rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#002961]">Des expertises variées</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Un accompagnement complet dans tous les domaines stratégiques de votre entreprise
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-[#13a0d3]/10 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#13a0d3] rounded-full"></div>
                  </div>
                  <h3 className="text-2xl font-semibold text-[#002961]">Un engagement d'excellence</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Une approche rigoureuse et personnalisée pour garantir votre réussite
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="border-t border-gray-200 pt-16">
          <div className="max-w-6xl mx-auto mb-12">
            <h3 className="text-2xl font-medium text-[#002961] text-center">
              Activités de Conseil
            </h3>
          </div>
          
          {/* Infinite Marquee */}
          <div className="relative overflow-hidden">
            <motion.div 
              className="flex gap-6"
              animate={{ x: [0, -2400] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {/* First set of cards */}
              {activities.map((activity, index) => {
                const IconComponent = activity.icon
                return (
                  <div 
                    key={`first-${index}`} 
                    className="flex-shrink-0 w-64 bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#13a0d3]/10 to-[#13a0d3]/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-[#13a0d3]/20 group-hover:to-[#13a0d3]/10 transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-[#13a0d3]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-[#002961] text-sm leading-tight group-hover:text-[#13a0d3] transition-colors duration-300">
                          {activity.text}
                        </h4>
                      </div>
                    </div>
                  </div>
                )
              })}
              
              {/* Duplicate set for seamless loop */}
              {activities.map((activity, index) => {
                const IconComponent = activity.icon
                return (
                  <div 
                    key={`second-${index}`} 
                    className="flex-shrink-0 w-64 bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#13a0d3]/10 to-[#13a0d3]/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-[#13a0d3]/20 group-hover:to-[#13a0d3]/10 transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-[#13a0d3]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-[#002961] text-sm leading-tight group-hover:text-[#13a0d3] transition-colors duration-300">
                          {activity.text}
                        </h4>
                      </div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
            
            {/* Gradient overlays for smooth edges */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
