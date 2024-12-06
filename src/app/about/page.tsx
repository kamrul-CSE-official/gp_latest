import { BusinessAreasSection } from "@/components/pagesComponents/home/BusinessAreasSection";
import { HeroSection } from "@/components/pagesComponents/home/HeroSection";
import { ManagementSection } from "@/components/pagesComponents/home/ManagementSection";
import { VisionMissionSection } from "@/components/pagesComponents/home/VisionMissionSection";
import Footer from "@/components/shared/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        <HeroSection />
        <VisionMissionSection />
        <BusinessAreasSection />
        <ManagementSection />
      </div>
      <Footer />
    </div>
  );
}
