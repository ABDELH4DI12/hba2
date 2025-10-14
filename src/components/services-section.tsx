import { FileText, TrendingUp, DollarSign, Database, FolderKanban, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

const services = [
  {
    icon: FileText,
    image: "/assets/Refonte_de_process.jpeg",
    title: "Refonte de process",
    items: [
      "Revue détaillée de processus opérationnels clés",
      "Diagnostic de l'existant et élaboration de cartographies de risques",
      "Formulation de recommandations concrètes d'amélioration",
    ],
  },
  {
    icon: TrendingUp,
    image: "/assets/bsns_strtg.jpg",
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
    image: "/assets/valoridation.jpg",
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
    image: "/assets/finance_opt.jpg",
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
    image: "/assets/porject_man.jpg",
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
    image: "/assets/corp_training.jpg",
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
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium text-gray-500 mb-4 tracking-wide">Nos services</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#002961]">Notre offre de valeur</h2>
          </motion.div>

          {/* Swiper Slider with External Navigation */}
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Enhanced Custom Navigation Buttons - Outside Container */}
            <div className="swiper-button-prev-custom absolute -left-16 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white shadow-xl rounded-full flex items-center justify-center hover:bg-[#13a0d3] hover:text-white transition-all duration-300 cursor-pointer group border-2 border-gray-100 hover:border-[#13a0d3]">
              <svg className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="swiper-button-next-custom absolute -right-16 top-1/2 -translate-y-1/2 z-10 w-14 h-14 bg-white shadow-xl rounded-full flex items-center justify-center hover:bg-[#13a0d3] hover:text-white transition-all duration-300 cursor-pointer group border-2 border-gray-100 hover:border-[#13a0d3]">
              <svg className="w-6 h-6 text-gray-700 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={32}
              slidesPerView={3}
              slidesPerGroup={1}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination-custom',
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  slidesPerGroup: 1,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                  slidesPerGroup: 1,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                  slidesPerGroup: 1,
                },
              }}
              className="services-swiper"
            >
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <SwiperSlide key={index} style={{position:'relative'}} >
                    <motion.div 
                      className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 h-full"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      viewport={{ once: true }}
                    >
                      {/* Image Section */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#13a0d3]" />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-6">
                        <h3 className="text-xl font-medium mb-4 text-[#002961]">{service.title}</h3>
                        <ul className="space-y-3">
                          {service.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-[#13a0d3] rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                )
              })}
            </Swiper>

            {/* Custom Pagination */}
            <div className="swiper-pagination-custom flex justify-center mt-8 gap-2"></div>
          </motion.div>
        </div>
      </div>

    </section>
  )
}

