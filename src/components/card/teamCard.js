/* eslint-disable @next/next/no-img-element */
import { TagBadge } from "../Tag";
import { IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";

export const TeamCard = () => {
  return (
    <div className="">
      <div className="max-w-[300px] my-3 rounded-[20px]  overflow-hidden relative">
        <div className="absolute right-3 bottom-2">
          <TagBadge cls="bg-[#FFCC4A] text-black">CEO at Company</TagBadge>
        </div>
        <img src="/asset/team-member.png" alt="member-img" />
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold">Sarah Jasmine</h2>
        <p className="text-[#595566] text-sm">
          Leverage agile frameworks to provide a robust synopsis for high level overviews.
        </p>

        <div className="flex items-center gap-4 mt-2 justify-center">
          <IoLogoInstagram fontSize={25} />
          <IoLogoFacebook fontSize={25} />
          <IoLogoTwitter fontSize={25} />
        </div>
      </div>
    </div>
  );
};
