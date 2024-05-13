import { CustomSectiomWrapper } from "@/components/customWrapper";
import { HeroLayout, HeroMirror } from "../landing/component/heroMirror";
import { TextH2 } from "../landing/component/TextH2";
import { TagBadge } from "@/components/Tag";

export const ServiceHero = () => {
  return (
    <HeroLayout bg="service-hero.png">
      <CustomSectiomWrapper>
        <HeroMirror>
          <TagBadge cls="bg-[#FFCC4A]">SERVICES</TagBadge>
          <TextH2>Creative Services For exceptional Business Growth</TextH2>
        </HeroMirror>
      </CustomSectiomWrapper>
    </HeroLayout>
  );
};
