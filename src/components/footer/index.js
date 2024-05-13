import { CustomSectiomWrapper } from "../customWrapper";
import {
  BrandLogo,
  FBIConDark,
  FBIcon,
  IGICon,
  IGIConDark,
  LinkInIConDark,
  LinkedInICon,
  XIConDark,
  XIcon,
} from "../icons";

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
          <div className="flex flex-col gap-1 items-center justify-center">
            <h3 className="text-xl font-bold leading-6">Get in touch</h3>
            <h2 className="text-3xl text-[#7C7C7C] font-bold leading-8">
              +44 7761 425 493 | info@titranstech.co.uk
            </h2>
          </div>
          {/* <div className="w-full h-[1px] bg-[#E0E0E0]"></div> */}
          <div className="flex mt-10 pt-4 border-t border-[#E0E0E0] items-start justify-between">
            <div className="relative -m">
              <BrandLogo size={150} />
            </div>
            <div className="flex gap-12 items-start">
              <ul>
                <LiTitle>Pages</LiTitle>
                <Li>Home</Li>
                <Li>About</Li>
                <Li>Work</Li>
                <Li>Pricing</Li>
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
                    className="h-12 rounded-[40px] outline-none bg-white border px-2 border-[#D3D3D3]"
                    placeholder="enter your mail... "
                  />
                  <button className="h-12 text-white px-4 rounded-[40px] text-center bg-black">
                    Submit
                  </button>
                </div>
                <div className="flex pl-2 pt-5 items-center justify-start gap-2">
                  <IGIConDark />
                  <FBIConDark />
                  <XIConDark />
                  <LinkInIConDark />
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
  return <li className={`font-medium leading-8 text-lg ${cls}`}>{children}</li>;
};
