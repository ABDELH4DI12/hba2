import { Award, GraduationCap, TrendingUp } from "lucide-react"

const timelineData = [
  {
    period: "Janvier 2025 - Présent",
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
    <section id="profil" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <p className="text-sm font-medium text-gray-500 mb-4 tracking-wide">Fondateur & Gérant</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#002961] mb-4">Hicham Bensaid Alaoui</h2>
            <p className="text-lg text-gray-600">43 ans</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <div className="bg-white p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-[#13a0d3]/10 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-[#13a0d3]" />
              </div>
              <h3 className="text-lg font-medium text-[#002961] mb-3">Formation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Diplômé d'Audencia Nantes School of Management (2005) et titulaire du Diplôme National d'Expertise
                Comptable en France (2018)
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-[#13a0d3]/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-[#13a0d3]" />
              </div>
              <h3 className="text-lg font-medium text-[#002961] mb-3">Expérience</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Plus de 18 ans d'expérience en audit, conseil et direction générale dans des entreprises de premier plan
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-[#13a0d3]/10 flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-[#13a0d3]" />
              </div>
              <h3 className="text-lg font-medium text-[#002961] mb-3">Reconnaissance</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lauréat Choiseul Africa 100 (2022) - Top 100 des dirigeants africains de moins de 40 ans
              </p>
            </div>
          </div>

          <div className="bg-white p-12 rounded-lg mb-16">
            <h3 className="text-2xl font-medium text-[#002961] mb-12">Parcours Professionnel</h3>

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div key={index} className="border-l-2 border-[#13a0d3] pl-8 relative">
                  <div
                    className={`absolute -left-2 top-0 w-4 h-4 rounded-full ${item.active ? "bg-[#13a0d3]" : "bg-gray-300"}`}
                  />
                  <div className="text-sm text-gray-500 mb-2">{item.period}</div>
                  <h4 className="text-xl font-medium text-[#002961] mb-1">{item.title}</h4>
                  <p className="text-gray-600 mb-4">{item.company}</p>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 leading-relaxed">
                        • {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-12 rounded-lg">
            <h3 className="text-2xl font-medium text-[#002961] mb-12">Principales Réalisations</h3>

            <div className="grid md:grid-cols-2 gap-12">
              {achievements.map((achievement, index) => (
                <div key={index}>
                  <h4 className="font-medium text-lg text-[#002961] mb-4">{achievement.category}</h4>
                  <ul className="space-y-3">
                    {achievement.items.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
