import { CustomLayout } from "@/components/CustomLayout";
import { TagBadge } from "@/components/Tag";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { ContactSectionProcess } from "@/components/ui/contact/contactProcess";
import { ContactSection } from "@/components/ui/contact/contacts";
import { SubScribeSection } from "@/components/ui/contact/subscribeSection";
import { TextH2 } from "@/components/ui/landing/component/TextH2";
import { HeroLayout, HeroMirror } from "@/components/ui/landing/component/heroMirror";
import { ScrollTop } from "@/components/ui/landing/scrollTop";

export default function Contact() {
  return (
    <CustomLayout>
      <HeroLayout bg="https://ik.imagekit.io/hydekcjmz/titrans/contact-titrans.png?updatedAt=1719580310671">
        <CustomSectiomWrapper>
          <HeroMirror>
            <TagBadge cls="bg-[#FFCC4A] text-black">Contact us</TagBadge>
            <TextH2>We’re Here to Help and Answer Any Questions </TextH2>
          </HeroMirror>
        </CustomSectiomWrapper>
      </HeroLayout>
      <ContactSection />
      <SubScribeSection />
      <ContactSectionProcess />
      <ScrollTop />
    </CustomLayout>
  );
}
