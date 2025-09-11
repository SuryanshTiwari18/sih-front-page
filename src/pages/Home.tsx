import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ChallengesSection from "@/components/ChallengesSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <ChallengesSection />
      </main>
      <Footer />
    </div>
  );
}
