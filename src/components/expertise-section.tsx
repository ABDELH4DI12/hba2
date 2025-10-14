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
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Notre expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une expertise complète au service de votre croissance, avec des solutions sur mesure adaptées à vos défis spécifiques.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-gray-500 mb-4 tracking-wide">Nos domaines</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#002961]">Nos expertises</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <div className="text-7xl font-light text-[#002961] mb-6">1</div>
              <h3 className="text-xl font-medium text-[#002961] mb-4">Des expertises variées</h3>
              <p className="text-gray-600 leading-relaxed">
                Un accompagnement complet dans tous les domaines stratégiques de votre entreprise
              </p>
            </div>
            <div>
              <div className="text-7xl font-light text-[#002961] mb-6">2</div>
              <h3 className="text-xl font-medium text-[#002961] mb-4">Un engagement d'excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Une approche rigoureuse et personnalisée pour garantir votre réussite
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-16">
            <h3 className="text-2xl font-medium text-[#002961] mb-12">
              Activités de Conseil
            </h3>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {activities.map((activity, index) => {
                const IconComponent = activity.icon
                return (
                  <motion.div 
                    key={index} 
                    className="bg-white p-8 rounded-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-4 hover:translate-x-1 transition-transform duration-200">
                      <div className="w-12 h-12 rounded-full bg-[#13a0d3]/10 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-[#13a0d3]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-[#002961] mb-2">{activity.text}</h4>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
