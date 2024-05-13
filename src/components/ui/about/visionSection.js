import { TagBadge } from "@/components/Tag";
import { TextH3 } from "../landing/component/TextH2";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { numPer } from "@/helper/data";
import { CheckMark } from "@/components/icons";

export const VisionSection = () => {
  return (
    <CustomSectiomWrapper>
      <section className="mt-12">
        <main className=" gap-5 py-12 px- flex items-center">
          <div className=" px-3">
            <TagBadge cls="bg-[#4EAF4E]">Our Vision</TagBadge>
            <TextH3>Turn your ideas into reality.</TextH3>

            <p className="my-2 text-[#595566] font-normal text-base ">
              Experts from various tech fields unite to deliver exceptional service, training, and
              mentorship to make your dreams a spectacle!
            </p>
            <div className="flex items-start gap-2">
              <div className="relative top-2">
                <CheckMark />
              </div>
              <p className="my-2 text-[#595566] font-normal text-base ">
                Bring to the table win-win survival strategies to ensure proactive domination. At
                the end of the day.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="relative top-2">
                <CheckMark />
              </div>
              <p className="my-2 text-[#595566] font-normal text-base ">
                Capitalize on low hanging fruit to identify a ballpark value added activity to beta
                test override the digital.
              </p>
            </div>
          </div>
          <div>
            <img src="/asset/vision-img.png" alt="learning-img" className="w-[700px]" />
          </div>
        </main>
        <div className="flex pb-10 gap-8 items-center justify-center">
          {numPer.map((num, index) => (
            <div className="mx-3 flex items-center justify-center flex-col" key={index}>
              <h2 className="text-5xl font-bold leading-[51px]">{num.number} </h2>
              <p className="text-lg font-medium">{num.description}</p>
            </div>
          ))}
        </div>
      </section>
    </CustomSectiomWrapper>
  );
};
