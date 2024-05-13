import { CustomLayout } from "@/components/CustomLayout";
import { TagBadge } from "@/components/Tag";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { ContactSectionProcess } from "@/components/ui/contact/contactProcess";
import { ContactSection } from "@/components/ui/contact/contacts";
import { SubScribeSection } from "@/components/ui/contact/subscribeSection";
import { TextH2 } from "@/components/ui/landing/component/TextH2";
import { HeroLayout, HeroMirror } from "@/components/ui/landing/component/heroMirror";

export default function Contact() {
  return (
    <CustomLayout>
      <HeroLayout bg="contact-hero.png">
        <CustomSectiomWrapper>
          <HeroMirror>
            <TagBadge cls="bg-[#FFCC4A] text-black">Contact us</TagBadge>
            <TextH2>Feel Free To Reach Us.</TextH2>
          </HeroMirror>
        </CustomSectiomWrapper>
      </HeroLayout>
      <ContactSection />
      <SubScribeSection />
      <ContactSectionProcess />
    </CustomLayout>
  );
}
