import { Header } from "../components/header"
import { HeroSection } from "../components/hero-section"
import { ProfileSection } from "../components/profile-section"
import { TrustSection } from "../components/trust-section"
import { ApproachSection } from "../components/approach-section"
import { ServicesSection } from "../components/services-section"
import { ExpertiseSection } from "../components/expertise-section"
import { BonusSection } from "../components/bonus-section"
import { Footer } from "../components/footer"
import { SEO } from "../components/seo"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="HBA Consulting - Expert en Stratégie d'Entreprise et Conseil au Maroc"
        description="HBA Consulting accompagne les entreprises marocaines dans leur croissance avec plus de 15 ans d'expertise en conseil stratégique, audit financier, transformation digitale et optimisation opérationnelle."
        keywords="HBA, HBA consulting, HBA conseil, HBA maroc, hbaconseil, conseil entreprise maroc, stratégie entreprise, audit financier, transformation digitale, cabinet conseil maroc"
        canonical="/"
      />
      <Header />
      <div id="main-content">
        <HeroSection />
        <ProfileSection />
        <TrustSection />
        <ApproachSection />
        <ServicesSection />
        <ExpertiseSection />
        <BonusSection />
      </div>
      <Footer />
    </div>
  )
}
