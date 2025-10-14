import { Award, GraduationCap, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const timelineData = [
  {
    period: "Janvier 2025 - Présent",
    startDate: { year: "2025", dayMonth: "Jan" },
    title: "Fondateur et Gérant",
    company: "HBA Consulting SARL AU",
    highlights: [
      "Conseil aux entreprises de toutes tailles et de tous secteurs",
      "Accompagnement au développement commercial des entreprises",
      "Assistance à positionnement stratégique",
      "Assistance à Maîtrise d'Ouvrage et Gestion de projets",
      "Organisation d'évènements thématiques",
    ],
    active: true,
  },
  {
    period: "Septembre 2020 - Décembre 2024",
    startDate: { year: "2020", dayMonth: "Sep" },
    title: "Directeur Général",
    company: "Allianz Trade Maroc et Tunisie",
    highlights: [
      "Leader marocain de l'assurance-crédit",
      "Définition de la stratégie de l'entreprise et pilotage des investissements",
      "Développement commercial au Maroc, Tunisie, Sénégal, Côte d'Ivoire et Kenya",
      "Scoring financier du portefeuille de clients dans 44 pays africains",
      "Gestion d'un risque de contrepartie financière de près de 75 milliards de dirhams",
    ],
  },
  {
    period: "2019 - 2020",
    startDate: { year: "2019", dayMonth: "Jan" },
    title: "Directeur du Crédit",
    company: "Allianz Trade Moyen-Orient",
    highlights: [
      "Membre du Conseil d'Administration",
      "Scoring financier dans 10 pays de la Région du Golfe Arabique",
      "Gestion d'un risque de contrepartie de près de 90 milliards de dirhams",
      "Aide au développement commercial sur le marché domestique et à l'export",
    ],
  },
  {
    period: "2013 - 2019",
    startDate: { year: "2013", dayMonth: "Jan" },
    title: "Directeur du Crédit",
    company: "Allianz Trade Maroc et Tunisie",
    highlights: [
      "Membre du Conseil d'Administration",
      "Scoring financier dans 44 pays africains",
      "Gestion d'un risque de contrepartie de près de 70 milliards de dirhams",
    ],
  },
  {
    period: "2005 - 2013",
    startDate: { year: "2005", dayMonth: "Sep" },
    title: "Senior Manager",
    company: "Ernst & Young Maroc",
    highlights: [
      "Audit et conseil avec spécialisations sectorielles (assurances, industrie, services)",
      "Certification des comptes et revue des processus opérationnels",
      "Plus de 100 missions de conseil financier et non financier gérées",
      "60 missions de revue de processus et d'environnement de contrôle interne",
      "Missions au Maroc et à l'étranger (Espagne, Algérie, Mauritanie, Sénégal)",
    ],
  },
]

const achievements = [
  {
    category: "HBA Premium Consulting & Events",
    icon: Award,
    items: [
      "Allianz Maroc : Coaching de 50 candidats à l'obtention de l'agrément d'intermédiaire d'assurance",
      "Sidérurgie : Instauration d'un nouveau système de credit management",
      "ACAPS : Chef de Projet pour l'étude d'impact de l'assurance multirisque habitation au Maroc",
      "Recherche d'investisseurs-cibles pour cession d'entreprises",
    ],
  },
  {
    category: "Allianz Trade",
    icon: TrendingUp,
    items: [
      "Croissance de près de 40% du chiffre d'affaires entre 2020 et 2024",
      "Optimisation des performances du portefeuille de placements (300 millions de dirhams)",
      "Certification Best Place to Work en 2023 (1ère place au Maroc - catégorie PME)",
      "Lauréat du Talent Program 2019 (16 talents sélectionnés parmi 5 500 salariés)",
    ],
  },
  {
    category: "Ernst & Young",
    icon: Award,
    items: [
      "Plus de 100 missions de conseil pour des entreprises marocaines et internationales",
      "60 missions de revue de l'environnement de contrôle interne",
      "20 missions de valorisation d'entreprises et de recherches de cibles d'investissement",
    ],
  },
  {
    category: "Autres Activités",
    icon: Award,
    items: [
      "Intervenant régulier à l'EMLyon Business School (campus de Casablanca)",
      "Enseignement en Executive MBA et Programme Grande Ecole",
      "Interventions médias régulières sur Radio Mars depuis 2015",
      "Fondateur de l'école de football KFA O'Darb à Dar Bouazza (2018)",
    ],
  },
]

export function ProfileSection() {
  return (
    <section id="qui-nous-sommes" className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
              {/* Profile Image */}
              <motion.div 
                className="flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <img 
                    src="/assets/hicham.png" 
                    alt="Hicham BENSAID ALAOUI - Fondateur & Gérant HBA Consulting" 
                    className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-3xl shadow-2xl border-4 border-white"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#13a0d3]/20 to-transparent"></div>
                </div>
              </motion.div>
              
              {/* Profile Info */}
              <motion.div 
                className="text-center md:text-left"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p className="text-sm font-medium text-gray-500 mb-4 tracking-wide">Fondateur & Gérant</p>
                <h2 className="text-4xl md:text-5xl font-light text-[#002961] mb-4">Hicham BENSAID ALAOUI</h2>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="bg-white p-8 rounded-lg"
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#13a0d3]/10 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-[#13a0d3]" />
              </div>
              <h3 className="text-lg font-medium text-[#002961] mb-3">Formation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Diplômé d'Audencia Nantes School of Management (2005) et titulaire du Diplôme National d'Expertise
                Comptable en France (2018)
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg"
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#13a0d3]/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-[#13a0d3]" />
              </div>
              <h3 className="text-lg font-medium text-[#002961] mb-3">Expérience</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Plus de 18 ans d'expérience en audit, conseil et direction générale dans des entreprises de premier plan
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg"
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 rounded-full bg-[#13a0d3]/10 flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-[#13a0d3]" />
              </div>
              <h3 className="text-lg font-medium text-[#002961] mb-3">Reconnaissance</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lauréat Choiseul Africa 100 (2022) - Top 100 des dirigeants africains de moins de 40 ans
              </p>
            </motion.div>
          </motion.div>

          <div className="mb-16">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-light text-[#002961] mb-4">Mon Voyage Professionnel</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Une aventure de plus de 18 ans à travers l'excellence, l'innovation et la transformation des entreprises</p>
            </motion.div>

            {/* Journey Cards Layout */}
            <div className="grid gap-8 md:gap-12">
              {timelineData.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`relative ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'} max-w-4xl`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Journey Card */}
                  <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 border-l-4 border-gray-400 p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    
                    {/* Floating Date Badge */}
                    <div className={`absolute -top-4 ${index % 2 === 0 ? 'right-8' : 'left-8'} px-4 py-2 rounded-full text-sm font-semibold text-white shadow-lg bg-gray-600`}>
                      {item.startDate.year}
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-2xl font-bold text-[#002961] mb-2 group-hover:text-[#13a0d3] transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-lg font-medium text-gray-700 mb-4">{item.company}</p>
                      </div>

                      {/* Impact Highlights */}
                      <div className="grid md:grid-cols-2 gap-3">
                        {item.highlights.slice(0, 4).map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-white/70 backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-gray-500"></div>
                            <span className="text-sm text-gray-700 leading-relaxed">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Additional highlights if any */}
                      {item.highlights.length > 4 && (
                        <div className="pt-2 border-t border-white/50">
                          {item.highlights.slice(4).map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-3 py-2">
                              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-gray-500"></div>
                              <span className="text-sm text-gray-600 leading-relaxed">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Decorative Elements */}
                    <div className={`absolute top-4 ${index % 2 === 0 ? 'left-4' : 'right-4'} w-12 h-12 rounded-full opacity-20 bg-gray-400`}></div>
                  </div>

                  {/* Connection Line to Next Item */}
                  {index < timelineData.length - 1 && (
                    <div className="hidden md:block absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-6 w-0.5 h-6 bg-gradient-to-b from-gray-300 to-transparent"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-medium text-gray-500 mb-4 tracking-wide">Nos succès</p>
              <h3 className="text-3xl md:text-4xl font-light text-[#002961]">Principales Réalisations</h3>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <motion.div 
                    key={index}
                    className="bg-white p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-[#13a0d3]/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#13a0d3]" />
                      </div>
                      <h4 className="font-semibold text-xl text-[#002961]">{achievement.category}</h4>
                    </div>
                    <ul className="space-y-4">
                      {achievement.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
                          <div className="w-2 h-2 rounded-full bg-[#13a0d3] mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
