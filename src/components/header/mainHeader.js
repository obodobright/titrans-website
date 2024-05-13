import { navData } from "@/helper/data";
import { CustomSectiomWrapper } from "../customWrapper";
import { BrandLogo, PhoneIcon } from "../icons";
import Link from "next/link";
import { useRouter } from "next/router";

export const MainNavHeader = () => {
  const router = useRouter();
  const isActive = (link) => {
    return router?.pathname?.split("/")[1] == link?.split("?")[0].slice(1);
  };
  return (
    <nav className="w-full bg-white">
      <CustomSectiomWrapper>
        <nav className="flex h-24 items-center justify-between">
          <BrandLogo />
          <>
            <ul className="flex gap-3 items-center justify-center">
              {navData.map((nav, index) => (
                <Link href={nav.link} key={index}>
                  <div className="flex items-center justify-start gap-2">
                    <div
                      className={`w-3 h-3 rounded-full border  ${
                        isActive(nav.link)
                          ? "bg-[#E58F24] border-transparent"
                          : "bg-transparent border-black"
                      } `}
                    ></div>
                    <p
                      className={`text-lg font-normal ${
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
          <div className="bg-[#EBEBEB] flex items-center justify-start rounded-[42px] gap-2 pl-2 pr-6 h-14">
            <div className="flex items-center w-10 h-10 justify-center p-2 rounded-full bg-[#E58F24]">
              <PhoneIcon />
            </div>
            <p>+44 7761 425 493</p>
          </div>
        </nav>
      </CustomSectiomWrapper>
    </nav>
  );
};
