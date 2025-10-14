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
  { text: "Conseil en optimisation de BFR / Supply Chain", icon: Package },
  { text: "Due Diligences financières", icon: FileSearch },
  { text: "Valorisations d'entreprises", icon: DollarSign },
  { text: "Aide à la gestion de projets", icon: FolderKanban },
  { text: "Maîtrise d'ouvrage déléguée", icon: Settings },
  { text: "Conseil adressant des besoins ad hoc", icon: Lightbulb },
]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <p className="text-sm font-medium text-gray-500 mb-8 tracking-wide">Nos enjeux principaux</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#002961] mb-16">Qui nous sommes</h2>

            <div className="grid md:grid-cols-2 gap-16 mb-20">
              <div>
                <div className="text-7xl font-light text-[#002961] mb-6">1</div>
                <h3 className="text-xl font-medium text-[#002961] mb-4">Des expertises variées</h3>
                <p className="text-gray-600 leading-relaxed">
                  Un accompagnement complet dans tous les domaines stratégiques de votre entreprise.
                </p>
              </div>
              <div>
                <div className="text-7xl font-light text-[#002961] mb-6">2</div>
                <h3 className="text-xl font-medium text-[#002961] mb-4">Un engagement d'excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Une approche rigoureuse et personnalisée pour garantir votre réussite.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-16">
            <h3 className="text-2xl font-medium text-[#002961] mb-12">Activités de Conseil</h3>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
              {activities.map((activity, index) => {
                const Icon = activity.icon
                return (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#13a0d3]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#13a0d3] transition-colors">
                      <Icon className="w-5 h-5 text-[#13a0d3] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-gray-700 leading-relaxed pt-2">{activity.text}</span>
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
