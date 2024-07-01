import { CustomLayout } from "@/components/CustomLayout";
import { AboutHero } from "@/components/ui/about/AboutHero";
import { TeamSection } from "@/components/ui/about/teamSection";
import { ValueSection } from "@/components/ui/about/valueSection";
import { VisionSection } from "@/components/ui/about/visionSection";
import { ScrollTop } from "@/components/ui/landing/scrollTop";

export default function AboutUs() {
  return (
    <CustomLayout>
      <AboutHero />
      <VisionSection />
      <ValueSection />
      <TeamSection />
      <ScrollTop />
    </CustomLayout>
  );
}
