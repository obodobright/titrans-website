import { navData } from "@/helper/data";
import { CustomSectiomWrapper } from "../customWrapper";
import { BrandLogo } from "../icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaBars } from "react-icons/fa6";
import { MobileHeader } from "./mobileHeader";
import { FiPhone } from "react-icons/fi";

export const MainNavHeader = () => {
  const router = useRouter();
  const isActive = (link) => {
    return router?.pathname?.split("/")[1] == link?.split("?")[0].slice(1);
  };
  return (
    <nav className="w-full bg-white">
      <CustomSectiomWrapper>
        <nav className="hidden lg:flex px-3 h-14 md:h-24 items-center justify-between">
          <Link href="/">
            <BrandLogo />
          </Link>
          <>
            <ul className="hidden lg:flex gap-3 items-center justify-center">
              {navData.map((nav, index) => (
                <Link href={nav.link} key={index}>
                  <div className="flex transition-all  group  items-center justify-start gap-2">
                    <div
                      className={`w-3 h-3 group-hover:bg-[#E58F24] group-hover:border-[#E58F24] rounded-full border  ${
                        isActive(nav.link)
                          ? "bg-[#E58F24] border-transparent"
                          : "bg-transparent border-black"
                      } `}
                    ></div>
                    <p
                      className={`text-lg group-hover:text-[#E58F24] transition-all font-normal ${
                        isActive(nav.link) ? "text-[#E58F24]" : "text-[#707070]"
                      }`}
                    >
                      {nav.name}
                    </p>
                  </div>
                </Link>
              ))}
            </ul>
          </>
          <Link href="tel:+44 7835 554 987">
            <div className="bg-[#EBEBEB] hover:cursor-pointer transition-all hover:bg-[#E58F24] group hidden lg:flex items-center justify-start rounded-[42px] gap-2 pl-2 pr-6 h-14">
              <div className="flex items-center w-10 h-10 justify-center p-2 rounded-full bg-[#E58F24] group-hover:bg-black">
                <FiPhone className="group-hover:text-white" fontSize={20} />
              </div>
              <p className="group-hover:text-white">+44 7835 554 987</p>
            </div>
          </Link>
          <FaBars fontSize={20} role="button" className="block lg:hidden" />
        </nav>
        <MobileHeader />
      </CustomSectiomWrapper>
    </nav>
  );
};
