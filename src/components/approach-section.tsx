import { Search, Cog, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export function ApproachSection() {
  return (
    <section id="approche" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-gray-500 mb-4 tracking-wide">Notre méthodologie</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#002961]">Notre approche macro</h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white p-10 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-full bg-[#13a0d3]/10 flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-[#13a0d3]" />
              </div>
              <div className="text-5xl font-light text-[#002961] mb-6">01</div>
              <h3 className="text-xl font-medium text-[#002961] mb-6">Cadrage préalable</h3>
              <ul className="text-sm text-gray-600 space-y-3">
                <li>• Immersion dans l'activité</li>
                <li>• Identification des enjeux majeurs</li>
                <li>• Échanges et alignement avec les dirigeants</li>
                <li>• Définition précise des besoins</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-10 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-full bg-[#13a0d3]/10 flex items-center justify-center mb-6">
                <Cog className="w-7 h-7 text-[#13a0d3]" />
              </div>
              <div className="text-5xl font-light text-[#002961] mb-6">02</div>
              <h3 className="text-xl font-medium text-[#002961] mb-6">Déploiement opérationnel</h3>
              <ul className="text-sm text-gray-600 space-y-3">
                <li>• Identification d'axes d'amélioration concrets</li>
                <li>• Élaboration d'un plan d'action détaillé</li>
                <li>• Mise en œuvre des recommandations</li>
                <li>• Suivi et ajustements</li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white p-10 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-full bg-[#13a0d3]/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-7 h-7 text-[#13a0d3]" />
              </div>
              <div className="text-5xl font-light text-[#002961] mb-6">03</div>
              <h3 className="text-xl font-medium text-[#002961] mb-6">Concrétisation</h3>
              <ul className="text-sm text-gray-600 space-y-3">
                <li>• Valorisation financière</li>
                <li>• Ingénierie financière</li>
                <li>• Optimisation du BFR</li>
                <li>• Gestion de projets</li>
                <li>• Refonte de process</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
