import { Presentation, Calendar, Megaphone } from "lucide-react"
import { motion } from "framer-motion"

export function BonusSection() {
  const bonuses = [
    { icon: Presentation, title: "Organisation d'ateliers de restitution", description: "Synthèse des principaux messages, de manière structurée, ludique et impactante" },
    { icon: Calendar, title: "Structuration en évènement technique", description: "Sélection de thèmes, de panélistes, de modérateurs, de lieux" },
    { icon: Megaphone, title: "Impact interne & externe", description: "Mise en avant de messages stratégiques clairs et promotion de votre marque" },
  ]

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-gray-500 mb-4 tracking-wide">Nos plus</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#002961]">Nos bonus</h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {bonuses.map((bonus, index) => {
              const Icon = bonus.icon
              return (
                <motion.div 
                  key={index} 
                  className="bg-white p-8 rounded-lg text-center h-full flex flex-col"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#13a0d3]/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#13a0d3]" />
                  </div>
                  <h3 className="text-lg font-medium mb-4 text-[#002961]">{bonus.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed flex-grow">{bonus.description}</p>
                </motion.div>
              )
            })}
          </motion.div>

          <div className="bg-white p-12 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-medium text-[#002961] mb-3">Lieu et date</h3>
                <p className="text-sm text-gray-600">À déterminer conjointement avec le Management de la Société</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#002961] mb-3">Public</h3>
                <p className="text-sm text-gray-600">À la discrétion du Management de la Société</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#002961] mb-4">Couverture média</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-700">Télévisions</span>
                <span className="px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-700">Radios</span>
                <span className="px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-700">Réseaux sociaux</span>
                <span className="px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-700">Presse écrite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
