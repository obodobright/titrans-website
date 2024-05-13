import { CustomLayout } from "@/components/CustomLayout";
import { TagBadge } from "@/components/Tag";
import { TextH3 } from "../landing/component/TextH2";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { PricingCard } from "@/components/card/PricingCard";

export const PricingSection = () => {
  return (
    <section className="w-full py-12 px-9">
      <CustomSectiomWrapper>
        <main>
          <div className="flex items-center justify-center flex-col">
            <TagBadge cls="bg-[#4EAF4E] text-white">PRICING</TagBadge>
            <TextH3>Our Pricing Plan</TextH3>
          </div>
          <div>
            <PricingCard />
          </div>
        </main>
      </CustomSectiomWrapper>
    </section>
  );
};
