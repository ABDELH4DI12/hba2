import { FileText, TrendingUp, DollarSign, Database, FolderKanban, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: FileText,
    title: "Refonte de process",
    items: [
      "Revue détaillée de processus opérationnels clés",
      "Diagnostic de l'existant et élaboration de cartographies de risques",
      "Formulation de recommandations concrètes d'amélioration",
    ],
  },
  {
    icon: TrendingUp,
    title: "Accompagnement stratégique",
    items: [
      "Aide au positionnement stratégique d'entreprises",
      "Accompagnement dans la croissance et la maturité",
      "Diagnostic d'axes d'améliorations",
      "Élaboration et implémentation de plans de remédiation",
    ],
  },
  {
    icon: DollarSign,
    title: "Valorisation d'entreprises",
    items: [
      "Accompagnement dans des audits d'acquisition ou de cession",
      "Analyse normative des performances historiques",
      "Projection rationnelle des performances futures",
      "Valorisation d'entreprises",
    ],
  },
  {
    icon: Database,
    title: "Structuration financière",
    items: [
      "Analyse des éléments constitutifs du BFR",
      "Optimisation de la politique d'approvisionnement",
      "Système de scoring et sélection des clients",
      "Recherche de fournisseurs et optimisation des coûts",
    ],
  },
  {
    icon: FolderKanban,
    title: "Gestion de projets",
    items: [
      "Pilotage de projets complexes et transverses",
      "Transformation digitale",
      "Mise en place de stratégies ESG",
      "Capacité à fédérer différents intervenants",
    ],
  },
  {
    icon: GraduationCap,
    title: "Formations et études sectorielles",
    items: [
      "Préparation et animation de formations thématiques",
      "Élaboration d'études et d'analyses de risques sectoriels",
      "Analyse d'éléments de prospection commerciale",
      "Pilotage des risques",
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-gray-500 mb-4 tracking-wide">Nos services</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#002961]">Notre offre de valeur</h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div 
                  key={index} 
                  className="bg-gray-50 p-8 rounded-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -5, 
                    backgroundColor: "#ffffff", 
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" 
                  }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#13a0d3]/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-[#13a0d3]" />
                  </div>
                  <h3 className="text-lg font-medium mb-4 text-[#002961]">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
