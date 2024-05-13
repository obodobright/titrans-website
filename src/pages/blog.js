import { CustomLayout } from "@/components/CustomLayout";
import { TagBadge } from "@/components/Tag";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { BlogSection } from "@/components/ui/Blog/blogSection";
import { TextH2 } from "@/components/ui/landing/component/TextH2";
import { HeroLayout, HeroMirror } from "@/components/ui/landing/component/heroMirror";

export default function Blogs() {
  return (
    <CustomLayout>
      <HeroLayout bg="bg-blog-hero.png">
        <CustomSectiomWrapper>
          <HeroMirror>
            <TagBadge cls="bg-[#FFCC4A] text-black uppercase">Blog</TagBadge>
            <TextH2>Latest Blogs & News</TextH2>
          </HeroMirror>
        </CustomSectiomWrapper>
      </HeroLayout>
      <BlogSection />
    </CustomLayout>
  );
}
