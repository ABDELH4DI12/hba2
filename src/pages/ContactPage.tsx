import { Header } from "../components/header"
import { ContactSection } from "../components/contact-section"
import { Footer } from "../components/footer"
import { Breadcrumb } from "../components/breadcrumb"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Breadcrumb />
      <main id="main-content" className="pt-4">
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
