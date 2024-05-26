/* eslint-disable @next/next/no-img-element */
import { TagBadge } from "@/components/Tag";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { PhoneIcon } from "@/components/icons";

export const Call2Action = () => {
  return (
    <section className="relative px-3 -top-[150px]">
      <CustomSectiomWrapper>
        <div className="w-full  bg-black rounded-[30px]  flex items-center justify-between ">
          <div className="px-4 py-4 md:px-12  max-w-md">
            <TagBadge cls={"bg-[#4EAF4E] text-black"}>Book Now</TagBadge>
            <h3 className="text-white font-semibold text-3xl md:text-5xl">
              Better Consult, <span className="text-[#727272]">Better</span> Results
            </h3>
            <p className="font-normal text-sm md:text-base text-[#FFFFFF]">
              Our software development agency has a growth up to 30% per each year. If you are
              result-oriented, not afraid to take initiative – drop us a note and join our team!
            </p>
            <button className="mt-4 flex items-center justify-start gap-1 bg-[#FFCC4A] px-7 pl-4 h-11 rounded-full text-black">
              <PhoneIcon />
              <span>+44 7761 425 493</span>
            </button>
          </div>
          <div className="px-12 hidden md:block">
            <img className="w-[550px]" src="/asset/call-action.png" alt="register-today-img" />
          </div>
        </div>
      </CustomSectiomWrapper>
    </section>
  );
};
