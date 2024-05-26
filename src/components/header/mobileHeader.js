import Link from "next/link";
import { BrandLogo, PhoneIcon } from "../icons";
import { useEffect, useState } from "react";

import { IoMdClose } from "react-icons/io";
import { navData } from "@/helper/data";
import { FaBars } from "react-icons/fa6";

export const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);
  return (
    <header className="py-4 scroll_hide  w-full flex lg:hidden  bg-transparent px-4 lg:px-12 ">
      <>
        <nav className="w-full flex  items-center  justify-between">
          <Link href="/">
            <BrandLogo />
          </Link>
          <nav role="button" onClick={() => setMenuOpen(!menuOpen)} className="flex lg:hidden ">
            {menuOpen ? (
              <IoMdClose fontSize={25} />
            ) : (
              <FaBars fontSize={20} role="button" className="block lg:hidden" />
            )}
          </nav>
        </nav>
        {menuOpen && (
          <div className="w-full bg-black  py-10 pt-4 px-7 absolute top-[180px] z-50 left-0  min-h-[20vh] overflow-hidden ">
            <div>
              <ul>
                {navData.map((route, routeIndex) => (
                  <li className="text-xl font-bold leading-6 my-4  text-white" key={routeIndex}>
                    <a onClick={() => setMenuOpen(false)} href={route.link}>
                      {route.name}
                    </a>
                  </li>
                ))}

                <div
                  role="button"
                  className="bg-[#EBEBEB] flex items-center justify-start rounded-[42px] gap-2 pl-2 pr-6 h-14 w-fit"
                >
                  <div className="flex items-center w-10 h-10 justify-center p-2 rounded-full bg-[#E58F24]">
                    <PhoneIcon />
                  </div>
                  <p>+44 7761 425 493</p>
                </div>
              </ul>
            </div>
          </div>
        )}
      </>
    </header>
  );
};
