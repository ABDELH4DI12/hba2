import { Target, Shield, Lightbulb, Users, TrendingUp, CheckCircle, Sparkles, Award, Zap } from "lucide-react"

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
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <p className="text-sm font-medium text-gray-500 mb-4 tracking-wide">Notre Engagement</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#002961] mb-16">
              Notre Contrat de Confiance en Conseil
            </h2>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-8 mb-20">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="flex flex-col items-center text-center gap-3 group">
                  <div className="w-16 h-16 rounded-full bg-[#13a0d3]/10 flex items-center justify-center group-hover:bg-[#13a0d3] transition-colors">
                    <Icon className="w-7 h-7 text-[#13a0d3] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs font-medium text-gray-700">{value.label}</span>
                </div>
              )
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-medium text-[#002961] mb-4">Expertise technique</h3>
              <p className="text-gray-600 leading-relaxed">
                Une maîtrise approfondie des enjeux financiers, organisationnels et stratégiques
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-[#002961] mb-4">Diagnostic précis et concret</h3>
              <p className="text-gray-600 leading-relaxed">
                Une analyse rigoureuse de votre situation pour des recommandations actionnables
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-[#002961] mb-4">Création de valeur ajoutée</h3>
              <p className="text-gray-600 leading-relaxed">
                Un accompagnement orienté résultats pour maximiser votre performance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
