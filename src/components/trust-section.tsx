import { Target, Shield, Lightbulb, Users, TrendingUp, CheckCircle, Sparkles, Award, Zap } from "lucide-react"
import { motion } from "framer-motion"

const values = [
  { icon: Target, label: "Pertinence" },
  { icon: Shield, label: "Éthique" },
  { icon: Lightbulb, label: "Expertise" },
  { icon: CheckCircle, label: "Pratique" },
  { icon: TrendingUp, label: "Engagement" },
  { icon: Sparkles, label: "Créativité" },
  { icon: Users, label: "Collaboration" },
  { icon: Award, label: "Valeur ajoutée" },
  { icon: Zap, label: "Proximité" },
]

export function TrustSection() {
  return (
    <section id="contrat-confiance" className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-gray-500 mb-4 tracking-wide">Notre engagement</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#002961] mb-16">
              Notre contrat de confiance en conseil
            </h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center text-center gap-3 group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 rounded-full bg-[#13a0d3]/10 flex items-center justify-center group-hover:bg-[#13a0d3] transition-colors">
                    <Icon className="w-7 h-7 text-[#13a0d3] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">{value.label}</span>
                </motion.div>
              )
            })}
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-medium text-[#002961] mb-4">Expertise technique</h3>
              <p className="text-gray-600 leading-relaxed">
                Une maîtrise approfondie des enjeux financiers, organisationnels et stratégiques
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-medium text-[#002961] mb-4">Diagnostic précis et concret</h3>
              <p className="text-gray-600 leading-relaxed">
                Une analyse rigoureuse de votre situation pour des recommandations actionnables
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-medium text-[#002961] mb-4">Création de valeur ajoutée</h3>
              <p className="text-gray-600 leading-relaxed">
                Un accompagnement orienté résultats pour maximiser votre performance
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
