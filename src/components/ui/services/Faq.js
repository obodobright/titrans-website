import { TagBadge } from "@/components/Tag";
import { TextH3 } from "../landing/component/TextH2";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { FaqAccordion } from "./FaqAccordion";

export const FAQSection = () => {
  return (
    <section className="w-full bg-white py-12 px-9">
      <CustomSectiomWrapper>
        <main>
          <div className="flex items-center justify-center flex-col">
            <TagBadge cls="bg-[#4EAF4E] text-white">PRICING</TagBadge>
            <TextH3>Customer Questions</TextH3>
          </div>
          <div className="max-w-xl mt-6  mx-auto">
            <FaqAccordion />
            <FaqAccordion />
            <FaqAccordion />
            <FaqAccordion />
            <FaqAccordion />
            <FaqAccordion />
          </div>
        </main>
      </CustomSectiomWrapper>
    </section>
  );
};
