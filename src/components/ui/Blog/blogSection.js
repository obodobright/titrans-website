import { TagBadge } from "@/components/Tag";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { TextH3 } from "../landing/component/TextH2";
import { BlogCard } from "@/components/card/BlogCard";
import { BlogData } from "@/helper/data";

export const BlogSection = () => {
  return (
    <section className="w-full p-4 md:p-10">
      <CustomSectiomWrapper>
        <div className="flex items-end flex-wrap justify-between">
          <div className="max-w-md">
            <TagBadge cls="text-white bg-[#4EAF4E]">BLOG</TagBadge>
            <TextH3>Take a look at our latest articles & resources</TextH3>
          </div>
          <button className="h-10 bg-[#FFCC4A] rounded-full px-7 text-center text-black text-lg font-semibold">
            More News
          </button>
        </div>
        <div
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))" }}
          className="my-10 grid  gap-10 grid-cols-2"
        >
          {BlogData.map((data, index) => (
            <BlogCard data={data} key={index} />
          ))}
        </div>
      </CustomSectiomWrapper>
    </section>
  );
};
