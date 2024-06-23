import { CustomSectiomWrapper } from "@/components/customWrapper";
import { HeroLayout, HeroMirror } from "../landing/component/heroMirror";
import { TextH2 } from "../landing/component/TextH2";
import { TagBadge } from "@/components/Tag";

export const AboutHero = () => {
  return (
    <HeroLayout bg="hero-about.png">
      <CustomSectiomWrapper>
        <HeroMirror>
          <TagBadge cls="bg-[#FFCC4A] text-black">ABOUT US</TagBadge>
          <TextH2>Transforming Dreams into Digital Realities</TextH2>
        </HeroMirror>
      </CustomSectiomWrapper>
    </HeroLayout>
  );
};
