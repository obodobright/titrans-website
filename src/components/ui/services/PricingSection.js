import { CustomLayout } from "@/components/CustomLayout";
import { TagBadge } from "@/components/Tag";
import { TextH3 } from "../landing/component/TextH2";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { PricingCard } from "@/components/card/PricingCard";

export const PricingSection = () => {
  return (
    <section className="w-full bg-[#F5F5F5] py-12 px-9">
      <CustomSectiomWrapper>
        <main>
          <div className="flex items-center justify-center flex-col">
            <TagBadge cls="bg-[#4EAF4E] text-white">PRICING</TagBadge>
            <TextH3>Our Pricing Plan</TextH3>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <PricingCard plan="Basic Plan" amount="$35" />
            <PricingCard isPopular={true} plan="Standard Plan" amount="$56" />
            <PricingCard plan="Premium Plan" amount="$75" />
          </div>
        </main>
      </CustomSectiomWrapper>
    </section>
  );
};
