import { CustomLayout } from "@/components/CustomLayout";
import { ScrollTop } from "@/components/ui/landing/scrollTop";
import { ServiceSection } from "@/components/ui/landing/services";
import { FAQSection } from "@/components/ui/services/Faq";
import { PricingSection } from "@/components/ui/services/PricingSection";
import { ProcessSection } from "@/components/ui/services/processSection";
import { ServiceHero } from "@/components/ui/services/serviceHero";

export default function Services() {
  return (
    <CustomLayout>
      <ServiceHero />
      <ProcessSection />
      <ServiceSection />
      {/* <PricingSection /> */}
      <FAQSection />
      <ScrollTop />
    </CustomLayout>
  );
}
