/* eslint-disable @next/next/no-img-element */
import { CustomSectiomWrapper } from "@/components/customWrapper";

export const PartnerSection = () => {
  const partners = [
    "/partners1.png",
    "/partners2.png",
    "/partners3.png",
    "/partners4.png",
    "/partners5.png",
  ];
  return (
    <section className="relative -top-[50px]">
      <CustomSectiomWrapper>
        <div>
          <h3 className="font-bold text-xl leading-6 tracking- tracking-[0.5em] text-center  ">
            WHO WE PARTNER WITH{" "}
          </h3>
          <div className="flex mt-6 items-center flex-wrap justify-center gap-2">
            {partners.map((data, index) => (
              <img key={index} className="w-36 mx-4" src={`/asset/${data}`} alt="brand-partners" />
            ))}
          </div>
        </div>
      </CustomSectiomWrapper>
    </section>
  );
};
