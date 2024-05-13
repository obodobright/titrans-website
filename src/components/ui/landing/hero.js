import { CustomSectiomWrapper } from "@/components/customWrapper";
import { CalandarIcon } from "@/components/icons";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { HeroLayout, HeroMirror } from "./component/heroMirror";
import { TextH2 } from "./component/TextH2";

export const HeroBanner = () => {
  return (
    <HeroLayout bg="banner-hero.png">
      <div
        style={{ boxShadow: "0px 24px 42px 0px #B9B9B940" }}
        className="w-[130px] cursor-pointer absolute left-7  top-32 flex items-center justify-center h-[130px] bg-transparent rounded-full "
      >
        <div className="w-12 flex items-center justify-center h-12 bg-white rounded-full">
          <FaArrowLeftLong />
        </div>
      </div>
      <div className="w-[130px] cursor-pointer absolute right-7 top-32  border-2 border-white flex items-center justify-center h-[130px] bg-white rounded-full ">
        <div className="w-12  flex items-center justify-center h-12 bg-[#E58F24] rounded-full">
          <FaArrowRightLong color="white" />
        </div>
      </div>
      <CustomSectiomWrapper>
        <HeroMirror>
          <TextH2>Your Small Business Growth Advisors</TextH2>
          <p className="text-[#595566] text-base font-normal mt-3">
            Get help Alex Moore, a professional business coach with advanced experienced on growth
            and business scaling{" "}
          </p>
          <div className="flex items-center gap-3 mt-8">
            <button className="h-12 bg-black text-white rounded-[42px] px-5">Get Started</button>
            <button className="h-12 flex items-center gap-2 bg-white rounded-[42px] px-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#4EAF4E]">
                <CalandarIcon />
              </div>
              <span className="text-[#353535] font-semibold text-base">Book a Meeting</span>
            </button>
          </div>
        </HeroMirror>
      </CustomSectiomWrapper>
    </HeroLayout>
  );
};
