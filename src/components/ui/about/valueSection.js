import { TagBadge } from "@/components/Tag";
import { ValueCard } from "@/components/card/valueCard";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { valueData } from "@/helper/data";

export const ValueSection = () => {
  return (
    <main className="w-full py-12 px-9 bg-[#F8C648]">
      <CustomSectiomWrapper>
        <div className="flex items-end flex-wrap gap-2 justify-between">
          <div>
            <TagBadge cls="bg-[#4EAF4E] text-white uppercase">Growing with our Clients</TagBadge>
            <h2 className="text-4xl text-left text-[#181818] font-bold">
              Our core values & principles
            </h2>
            <p className="max-w-xl">
              Capitalize on low hanging fruit to identify a ballpark value added activity beta test.
              Override the digital divide with additional from DevOps.
            </p>
          </div>
          <button className="h-12 px-6 text-center rounded-[42px] bg-black text-white">
            View More
          </button>
        </div>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-">
          {valueData.map((data, index) => (
            <ValueCard key={index} value={data} />
          ))}
        </div>
      </CustomSectiomWrapper>
    </main>
  );
};
