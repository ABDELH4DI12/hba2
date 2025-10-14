import { Header } from "../components/header"
import { HeroSection } from "../components/hero-section"
import { ProfileSection } from "../components/profile-section"
import { TrustSection } from "../components/trust-section"
import { ApproachSection } from "../components/approach-section"
import { ServicesSection } from "../components/services-section"
import { ExpertiseSection } from "../components/expertise-section"
import { BonusSection } from "../components/bonus-section"
import { Footer } from "../components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
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
