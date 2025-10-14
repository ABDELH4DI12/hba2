import { Header } from "../components/header"
import { Footer } from "../components/footer"

export default function InterventionsMediasPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20 min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <h1 className="text-6xl font-bold text-center text-primary">Hello World</h1>
        </div>
      </div>
      <Footer />
    </main>
  )
}
