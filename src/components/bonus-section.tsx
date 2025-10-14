import { Presentation, Calendar, Megaphone } from "lucide-react"

export function BonusSection() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <p className="text-sm font-medium text-gray-500 mb-4 tracking-wide">Notre Bonus</p>
            <h2 className="text-4xl md:text-5xl font-light text-[#002961]">
              Restitution Structurée aux Équipes et Impact Externe
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-[#13a0d3]/10 flex items-center justify-center mb-6">
                <Presentation className="w-6 h-6 text-[#13a0d3]" />
              </div>
              <h3 className="text-lg font-medium mb-4 text-[#002961]">Organisation d'ateliers de restitution</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Synthèse des principaux messages, de manière structurée, ludique et impactante
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-[#13a0d3]/10 flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-[#13a0d3]" />
              </div>
              <h3 className="text-lg font-medium mb-4 text-[#002961]">Structuration en évènement technique</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sélection de thèmes, de panélistes, de modérateurs, de lieux
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-[#13a0d3]/10 flex items-center justify-center mb-6">
                <Megaphone className="w-6 h-6 text-[#13a0d3]" />
              </div>
              <h3 className="text-lg font-medium mb-4 text-[#002961]">Impact interne & externe</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Mise en avant de messages stratégiques clairs et promotion de votre marque
              </p>
            </div>
          </div>

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
