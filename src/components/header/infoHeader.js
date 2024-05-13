import Image from "next/image";
import { CustomSectiomWrapper } from "../customWrapper";
import { FBIcon, IGICon, LinkedInICon, LocationIcon, XIcon } from "../icons";

export const InfoHeaderNav = () => {
  return (
    <nav className="w-full    bg-black ">
      <CustomSectiomWrapper>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center justify-start gap-2">
            <Image height={30} className="w-5" width={30} alt="icon" src="/asset/time.png" />
            <p className="text-sm text-white font-normal">Monday - Friday 8AM - 9PM</p>
          </div>
          <div className="flex items-center justify-start lg:gap-16">
            <div className="flex items-center justify-start gap-2">
              <LocationIcon />
              <p className="text-sm text-white font-normal">
                27 Paramount building, princess Street, Swindon, UK, SN1 2SD
              </p>
            </div>
            <div className="flex items-center justify-center gap-5">
              <IGICon />
              <FBIcon />
              <XIcon />
              <LinkedInICon />
            </div>
          </div>
        </div>
      </CustomSectiomWrapper>
    </nav>
  );
};
