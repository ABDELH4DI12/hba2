import { Header } from "../components/header"
import { Footer } from "../components/footer"
import { Breadcrumb } from "../components/breadcrumb"
import { Play } from "lucide-react"

const videos = [
  {
    id: "TBZlg7nJi0c",
    title: "Hicham Alaoui Bensaïd : La retraite à 60 ans n'est plus soutenable",
    url: "https://www.youtube.com/watch?v=TBZlg7nJi0c"
  },
  {
    id: "-fwbfxge45A", 
    title: "Analysis of the royal speech at the opening of the autumn session of Parliament",
    url: "https://www.youtube.com/watch?v=-fwbfxge45A"
  },
  {
    id: "VJROTAtXY9k",
    title: "The News in Front with Hicham BENSAID ALAOUI",
    url: "https://www.youtube.com/watch?v=VJROTAtXY9k"
  },
  {
    id: "7FvjmDKJDQc",
    title: "L'Info en Face avec Hicham BENSAID ALAOUI",
    url: "https://www.youtube.com/watch?v=7FvjmDKJDQc"
  },
  {
    id: "YruhWbB0EoU",
    title: "Le Débrief : L’essentiel de l’actualité de la semaine",
    url: "https://www.youtube.com/watch?v=YruhWbB0EoU"
  }
]

function VideoCard({ video }: { video: typeof videos[0] }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-video bg-gray-100">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium text-[#002961] leading-tight">
          {video.title}
        </h3>
        <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
          <Play className="w-4 h-4" />
          <span>Regarder sur YouTube</span>
        </div>
      </div>
    </div>
  )
}

export default function InterventionsMediasPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Breadcrumb />
      <main id="main-content">
        <section className="pt-8 pb-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="mb-20">
              <h1 className="text-4xl md:text-5xl font-light text-[#002961] mb-16">Interventions médias</h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                Découvrez les interventions de Hicham BENSAID ALAOUI dans les médias, 
                où il partage son expertise sur les enjeux économiques et financiers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <VideoCard key={index} video={video} />
              ))}
            </div>

            {videos.length === 0 && (
              <div className="text-center py-20">
                <div className="w-16 h-16 rounded-full bg-[#13a0d3]/10 flex items-center justify-center mx-auto mb-6">
                  <Play className="w-8 h-8 text-[#13a0d3]" />
                </div>
                <h3 className="text-xl font-medium text-[#002961] mb-4">Bientôt disponible</h3>
                <p className="text-gray-600">
                  Les interventions médias seront bientôt disponibles sur cette page.
                </p>
              </div>
            )}
          </div>
        </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
