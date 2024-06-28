import Link from "next/link";
import { CustomSectiomWrapper } from "../customWrapper";
import { BrandLogo, FBIConDark, IGIConDark, LinkInIConDark, XIConDark } from "../icons";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: "url('/asset/footer-pattern.png')",
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full pt-7 pb-2 min-h-[40vh] bg-[#F5F5F5]"
    >
      <CustomSectiomWrapper>
        <div className="w-full pt-14">
          <div className="flex flex-col gap-1 text-center items-center justify-center">
            <h3 className="text-xl font-bold leading-6">Get in touch</h3>
            <h2 className="text-2xl md:text-3xl text-[#7C7C7C] font-bold leading-8">
              +44 7761 425 493 | info@titranstech.co.uk
            </h2>
          </div>
          {/* <div className="w-full h-[1px] bg-[#E0E0E0]"></div> */}
          <div className="block lg:flex mt-10 pt-4 border-t px-5 border-[#E0E0E0] items-start justify-between">
            <div className="relative -m">
              <BrandLogo size={150} />
            </div>
            <div className="block lg:flex gap-12 items-start">
              <ul>
                <LiTitle>Pages</LiTitle>
                <Li>
                  <Link className="hover:text-[#E58F24] transition-all" href="/">
                    Home
                  </Link>
                </Li>
                <Li>
                  <Link className="hover:text-[#E58F24] transition-all" href="/about-us">
                    About
                  </Link>
                </Li>
                <Li>
                  <Link className="hover:text-[#E58F24] transition-all" href="/services">
                    Services
                  </Link>
                </Li>
              </ul>
              <ul>
                <LiTitle>Contact</LiTitle>
                <Li cls="max-w-[250px]">
                  27 Paramount building, princess Street, Swindon, UK, SN1 2SD
                </Li>
              </ul>
              <ul>
                <LiTitle>Newsletter</LiTitle>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    className="h-12  hover:placeholder:text-black hover:border-[#E58F24] transition-all  rounded-[40px] outline-none bg-white border px-2 border-[#D3D3D3]"
                    placeholder="enter your mail... "
                  />
                  <button className="h-12 text-white hover:bg-[#E58F24] transition-all px-4 rounded-[40px] text-center bg-black">
                    Submit
                  </button>
                </div>
                <div className="flex pl-2 pt-5 items-center justify-start gap-2">
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/titranstech?igsh=aGc3MWxlNTh2OGg2"
                  >
                    <FaInstagram
                      className="text-[#030211] hover:text-[#E58F24] transition-all scale-100 hover:scale-110"
                      fontSize={25}
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://web.facebook.com/p/Titrans-Technology-100067238292329"
                  >
                    <FaFacebook
                      className="text-[#030211] hover:text-[#E58F24] transition-all scale-100 hover:scale-110"
                      fontSize={25}
                    />
                  </Link>
                  <Link target="_blank" href="https://twitter.com/TitransTech">
                    <FaTwitter
                      className="text-[#030211] hover:text-[#E58F24] transition-all scale-100 hover:scale-110"
                      fontSize={25}
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://ng.linkedin.com/in/titrans-technology-165bab1a9"
                  >
                    <FaLinkedin
                      className="text-[#030211] hover:text-[#E58F24] transition-all scale-100 hover:scale-110"
                      fontSize={25}
                    />
                  </Link>
                </div>
              </ul>
            </div>
          </div>
          <div className="mt-7">
            <div className="w-full h-[1px] bg-[#E0E0E0]"></div>
            <div className="py-3 px-2 text-center">
              <p className="text-[#030211] text-base font-medium">
                © Copyright TitransTech.. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </CustomSectiomWrapper>
    </footer>
  );
};

export const LiTitle = ({ children }) => {
  return <li className="text-xl mb-4 font-semibold leading-7 text-[#030211]">{children}</li>;
};

export const Li = ({ cls, children }) => {
  return <li className={`font-medium   leading-8 text-lg ${cls}`}>{children}</li>;
};
