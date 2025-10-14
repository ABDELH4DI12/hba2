import {
  GraduationCap,
  TrendingUp,
  Building2,
  Cpu,
  Package,
  FileSearch,
  DollarSign,
  FolderKanban,
  Settings,
  Lightbulb,
} from "lucide-react"

const activities = [
  { text: "Formations techniques", icon: GraduationCap },
  { text: "Conseil en structuration financière", icon: TrendingUp },
  { text: "Conseil en organisation", icon: Building2 },
  { text: "Conseil en transformation digitale", icon: Cpu },
  { text: "Conseil en optimisation de BFR / supply chain", icon: Package },
  { text: "Due diligences financières", icon: FileSearch },
  { text: "Valorisations d'entreprises", icon: DollarSign },
  { text: "Aide à la gestion de projets", icon: FolderKanban },
  { text: "Maîtrise d'ouvrage déléguée", icon: Settings },
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
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
              {activities.map((activity, index) => {
                const IconComponent = activity.icon
                return (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 hover:translate-x-1 transition-transform duration-200"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#13a0d3]/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-[#13a0d3]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#002961] mb-2">{activity.text}</h4>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
