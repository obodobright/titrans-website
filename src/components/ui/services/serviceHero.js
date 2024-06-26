import { CustomSectiomWrapper } from "@/components/customWrapper";
import { HeroLayout, HeroMirror } from "../landing/component/heroMirror";
import { TextH2 } from "../landing/component/TextH2";
import { TagBadge } from "@/components/Tag";

export const ServiceHero = () => {
  return (
    <HeroLayout bg="https://ik.imagekit.io/hydekcjmz/titrans/service-titrans.png?updatedAt=1719580312177">
      <CustomSectiomWrapper>
        <HeroMirror>
          <TagBadge cls="bg-[#FFCC4A] text-black">SERVICES</TagBadge>
          <TextH2>Unlocking Potential through Innovative Solutions</TextH2>
        </HeroMirror>
      </CustomSectiomWrapper>
    </HeroLayout>
  );
};
