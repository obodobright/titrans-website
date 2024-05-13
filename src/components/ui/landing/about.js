import { TagBadge } from "@/components/Tag";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { SmileIcon, StarIcon } from "@/components/icons";
import { numPer } from "@/helper/data";
import { TextH3 } from "./component/TextH2";

export const Aboutus = () => {
  return (
    <CustomSectiomWrapper>
      <section className="mt-12">
        <main className=" gap-5 py-12 px- flex items-center">
          <div className="lg:max-w-[420px] px-3">
            <TagBadge cls="bg-[#E58F24] uppercase text-black">About Us</TagBadge>
            <TextH3>Providing Cutting Edge Tech Solutions.</TextH3>
            <p className="font-bold my-1 text-lg ">
              Visionary minds revolutionizing the digital sphere through training, consultancy, and
              recruitment.
            </p>
            <p className="my-2 font-normal text-base ">
              Experts from various tech fields unite to deliver exceptional service, training, and
              mentorship to make your dreams a spectacle!
            </p>
            <div className="flex mt-4 border-t py-2 border-b items-center justify-start gap-5">
              <div className="text-center bg-[#F6F6F6] p-3 rounded-2xl flex items-center justify-center flex-col py-3">
                <div className="flex items-center gap-1 justify-center">
                  <StarIcon />
                  <p className="font-bold text-2xl ">400+</p>
                </div>
                <span className="text-base font-bold ">Business Services</span>
              </div>
              <div className="text-center bg-[#F6F6F6] p-3 rounded-2xl flex items-center justify-center flex-col py-3">
                <div className="flex items-center justify-center gap-1">
                  <SmileIcon />
                  <p className="font-bold text-2xl ">100+</p>
                </div>
                <span className="text-base font-bold ">Happy Customers</span>
              </div>
            </div>
          </div>
          <div>
            <img src="/asset/about.png" alt="learning-img" className="w-[700px]" />
          </div>
        </main>
        <div className="flex pb-10 gap-8 items-center justify-center">
          {numPer.map((num, index) => (
            <div className="mx-3 flex items-center justify-center flex-col" key={index}>
              <h2 className="text-5xl font-bold leading-[51px]">{num.number} </h2>
              <p className="text-lg font-medium">{num.description}</p>
            </div>
          ))}
        </div>
      </section>
    </CustomSectiomWrapper>
  );
};
