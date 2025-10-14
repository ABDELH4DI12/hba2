import { Header } from "../components/header"
import { HeroSection } from "../components/hero-section"
import { ExpertiseSection } from "../components/expertise-section"
import { ProfileSection } from "../components/profile-section"
import { TrustSection } from "../components/trust-section"
import { ApproachSection } from "../components/approach-section"
import { ServicesSection } from "../components/services-section"
import { BonusSection } from "../components/bonus-section"
import { Footer } from "../components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ExpertiseSection />
      <ProfileSection />
      <TrustSection />
      <ApproachSection />
      <ServicesSection />
      <BonusSection />
      <Footer />
    </main>
  )
}
