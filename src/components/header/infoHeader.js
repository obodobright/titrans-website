import Image from "next/image";
import { CustomSectiomWrapper } from "../customWrapper";
import { LocationIcon } from "../icons";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export const InfoHeaderNav = () => {
  return (
    <nav className="w-full    bg-black ">
      <CustomSectiomWrapper>
        <div className="py-2 px-2 lg:p-2 block lg:flex h-auto lg:h-16 items-center justify-between">
          <div className="flex py-1 items-center justify-start gap-2">
            <Image height={30} className="w-5" width={30} alt="icon" src="/asset/time.png" />
            <p className="text-xs lg:text-sm text-white font-normal">Monday - Friday 8AM - 9PM</p>
          </div>
          <div className="block lg:flex py-1  items-center justify-start lg:gap-16">
            <div className="flex items-center justify-start gap-2">
              <LocationIcon />
              <p className="text-xs lg:text-sm text-white font-normal">
                27 Paramount building, princess Street, Swindon, UK, SN1 2SD
              </p>
            </div>

            <div className="flex my-2 items-center justify-start lg:justify-center gap-5">
              <Link
                target="_blank"
                href="https://www.instagram.com/titranstech?igsh=aGc3MWxlNTh2OGg2"
              >
                <FaInstagram
                  className="text-[#fff] hover:text-[#FFCC4A] transition-all scale-100 hover:scale-110"
                  fontSize={25}
                />
              </Link>
              <Link
                target="_blank"
                href="https://web.facebook.com/p/Titrans-Technology-100067238292329"
              >
                <FaFacebook
                  className="text-[#fff] hover:text-[#FFCC4A] transition-all scale-100 hover:scale-110"
                  fontSize={25}
                />
              </Link>
              <Link target="_blank" href="https://twitter.com/TitransTech">
                <FaTwitter
                  className="text-[#fff] hover:text-[#FFCC4A] transition-all scale-100 hover:scale-110"
                  fontSize={25}
                />
              </Link>
              <Link target="_blank" href="https://ng.linkedin.com/in/titrans-technology-165bab1a9">
                <FaLinkedin
                  className="text-[#fff] hover:text-[#FFCC4A] transition-all scale-100 hover:scale-110"
                  fontSize={25}
                />
              </Link>
            </div>
          </div>
        </div>
      </CustomSectiomWrapper>
    </nav>
  );
};
