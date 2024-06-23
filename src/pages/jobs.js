import { CustomLayout } from "@/components/CustomLayout";
import { TagBadge } from "@/components/Tag";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { TextH2 } from "@/components/ui/landing/component/TextH2";
import { HeroLayout, HeroMirror } from "@/components/ui/landing/component/heroMirror";
import { JobSection } from "@/components/ui/landing/jobsSection";

export default function Jobs() {
  return (
    <CustomLayout>
      <HeroLayout bg="hero-about.png">
        <CustomSectiomWrapper>
          <HeroMirror>
            <TagBadge cls="bg-[#FFCC4A]">JOB OPPORTUNITIES</TagBadge>
            <TextH2>Join Our Team and Shape the Future </TextH2>
          </HeroMirror>
        </CustomSectiomWrapper>
      </HeroLayout>
      <JobSection />
    </CustomLayout>
  );
}
