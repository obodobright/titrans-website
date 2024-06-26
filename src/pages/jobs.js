import { CustomLayout } from "@/components/CustomLayout";
import { TagBadge } from "@/components/Tag";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { TextH2 } from "@/components/ui/landing/component/TextH2";
import { HeroLayout, HeroMirror } from "@/components/ui/landing/component/heroMirror";
import { JobSection } from "@/components/ui/landing/jobsSection";
import { ScrollTop } from "@/components/ui/landing/scrollTop";

export default function Jobs() {
  return (
    <CustomLayout>
      <HeroLayout bg="https://ik.imagekit.io/hydekcjmz/titrans/job-titrans.png?updatedAt=1719580310703">
        <CustomSectiomWrapper>
          <HeroMirror>
            <TagBadge cls="bg-[#FFCC4A]">JOB OPPORTUNITIES</TagBadge>
            <TextH2>Join Our Team and Shape the Future </TextH2>
          </HeroMirror>
        </CustomSectiomWrapper>
      </HeroLayout>
      <JobSection />
      <ScrollTop />
    </CustomLayout>
  );
}
