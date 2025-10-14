import { Search, Cog, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

export function ApproachSection() {
  return (
    <section id="approche" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-gray-500 mb-4 tracking-wide">Notre méthodologie</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#002961]">Notre approche macro</h2>
        </motion.div>

        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{ 
              background: 'white', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: 'none',
              borderRadius: '12px',
              padding: '24px'
            }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            iconStyle={{ 
              background: '#13a0d3', 
              color: '#fff'
            }}
            icon={<Search />}
          >
            <h3 className="text-xl font-semibold text-[#002961] mb-3">Cadrage préalable</h3>
            <p className="text-gray-600 mb-4">
              Immersion dans votre activité pour comprendre vos enjeux et définir une stratégie sur mesure.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Analyse approfondie de votre activité</li>
              <li>• Alignement avec vos dirigeants</li>
              <li>• Définition d'objectifs mesurables</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ 
              background: '#002961', 
              color: 'white',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: 'none',
              borderRadius: '12px',
              padding: '24px'
            }}
            contentArrowStyle={{ borderRight: '7px solid #002961' }}
            iconStyle={{ 
              background: '#002961', 
              color: '#fff'
            }}
            icon={<Cog />}
          >
            <h3 className="text-xl font-semibold text-white mb-3">Déploiement opérationnel</h3>
            <p className="text-gray-100 mb-4">
              Transformation de la stratégie en actions concrètes avec accompagnement continu.
            </p>
            <ul className="text-sm text-gray-100 space-y-2">
              <li>• Plan d'action détaillé et priorisé</li>
              <li>• Mobilisation des équipes</li>
              <li>• Suivi des indicateurs de performance</li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ 
              background: 'white', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: 'none',
              borderRadius: '12px',
              padding: '24px'
            }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            iconStyle={{ 
              background: '#22c55e', 
              color: '#fff'
            }}
            icon={<CheckCircle2 />}
          >
            <h3 className="text-xl font-semibold text-[#002961] mb-3">Concrétisation</h3>
            <p className="text-gray-600 mb-4">
              Mesure des résultats et pérennisation des acquis pour un impact durable.
            </p>
            <ul className="text-sm text-gray-600 space-y-2">
              <li>• Valorisation financière des gains</li>
              <li>• Optimisation des processus</li>
              <li>• Transfert de compétences</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  )
}
