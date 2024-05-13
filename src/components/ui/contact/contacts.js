/* eslint-disable @next/next/no-img-element */
import { TagBadge } from "@/components/Tag";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { TextH3 } from "../landing/component/TextH2";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

export const ContactSection = () => {
  return (
    <CustomSectiomWrapper>
      <section className="mt-12">
        <main className=" gap-9 py-12 px- flex items-center">
          <div>
            <img src="/asset/about.png" alt="learning-img" className="w-[700px]" />
          </div>
          <div className="lg:max-w-[420px] px-3">
            <TagBadge cls="bg-[#4EAF4E] text-white">Let’s talk</TagBadge>
            <TextH3>Get In Touch With Us</TextH3>
            <p className="font-normal text-[#595566] my-1 text-lg ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore.
            </p>
            <div>
              <div className="flex items-start gap-3 my-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#181818]">
                  <FiPhone color="white" />
                </div>
                <div>
                  <h3 className="font-normal text-sm text-[#595566]">Have Any Question?</h3>
                  <p className="text-base font-medium text-[#181818]">+44 7761 425 493</p>
                </div>
              </div>
              <div className="flex items-start gap-3 my-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#181818]">
                  <MdOutlineMail color="white" fontSize={20} />
                </div>
                <div>
                  <h3 className="font-normal text-sm text-[#595566]">Write Email</h3>
                  <p className="text-base font-medium text-[#181818]">Info@titranstech.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3 my-2">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#181818]">
                  <CiLocationOn color="white" fontSize={22} />
                </div>
                <div>
                  <h3 className="font-normal text-sm text-[#595566]">Visit Anytime</h3>
                  <p className="text-base font-medium text-[#181818]">
                    27 Paramount building, princess Street, <br /> Swindon, UK, SN1 2SD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </CustomSectiomWrapper>
  );
};
