import { Header } from "../components/header"
import { ContactSection } from "../components/contact-section"
import { Footer } from "../components/footer"
import { Breadcrumb } from "../components/breadcrumb"
import { SEO } from "../components/seo"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Contactez-nous - HBA Consulting"
        description="Prenez contact avec HBA Consulting pour discuter de vos besoins en conseil stratégique, audit financier ou transformation digitale. Notre équipe d'experts est à votre écoute."
        keywords="HBA contact, contact HBA, HBA consulting contact, contact hbaconseil, rendez-vous HBA, consultant maroc, audit entreprise casablanca, conseil stratégique maroc"
        canonical="/contact"
      />
      <Header />
      <Breadcrumb />
      <main id="main-content" className="pt-4">
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
