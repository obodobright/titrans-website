import { CustomLayout } from "@/components/CustomLayout";
import { Aboutus } from "@/components/ui/landing/about";
import { HeroBanner } from "@/components/ui/landing/hero";
import { ProcessSection } from "../components/ui/landing/onboardProcess";
import { ServiceSection } from "@/components/ui/landing/services";
import { JobSection } from "@/components/ui/landing/jobsSection";
import { TestimonySection } from "@/components/ui/landing/testimonials";
import { Call2Action } from "@/components/ui/landing/Call2action";
import { PartnerSection } from "@/components/ui/landing/partners";

export default function Home() {
  return (
    <CustomLayout>
      <HeroBanner />
      <Aboutus />
      <ProcessSection />
      <ServiceSection />
      <JobSection />
      <TestimonySection />
      <Call2Action />
      <PartnerSection />
    </CustomLayout>
  );
}
