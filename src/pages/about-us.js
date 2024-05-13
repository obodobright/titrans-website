import { CustomLayout } from "@/components/CustomLayout";
import { AboutHero } from "@/components/ui/about/AboutHero";
import { TeamSection } from "@/components/ui/about/teamSection";
import { ValueSection } from "@/components/ui/about/valueSection";
import { VisionSection } from "@/components/ui/about/visionSection";

export default function AboutUs() {
  return (
    <CustomLayout>
      <AboutHero />
      <VisionSection />
      <ValueSection />
      <TeamSection />
    </CustomLayout>
  );
}
