import { CustomLayout } from "@/components/CustomLayout";
import { ServiceSection } from "@/components/ui/landing/services";
import { PricingSection } from "@/components/ui/services/PricingSection";
import { ProcessSection } from "@/components/ui/services/processSection";
import { ServiceHero } from "@/components/ui/services/serviceHero";

export default function Services() {
  return (
    <CustomLayout>
      <ServiceHero />
      <ProcessSection />
      <ServiceSection />
      <PricingSection />
    </CustomLayout>
  );
}
