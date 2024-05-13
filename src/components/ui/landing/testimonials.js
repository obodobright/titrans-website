import { TestiCard } from "@/components/card/testiCard";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { QoutesIcon } from "@/components/icons";
import { testimonials } from "@/helper/data";
import { useState } from "react";

export const TestimonySection = () => {
  const [current, setCurrent] = useState(1);

  return (
    <section className="w-full p-4 relative -top-[200px]">
      <CustomSectiomWrapper>
        <div className="flex items-center justify-center flex-col gap-2 ">
          <QoutesIcon />
          <div className=" comment-box">
            <p className="font-normal text-2xl">
              High-end digital experiences. Created at the heart of Manhattan, we are a should human
              team. The driving force of all speeches, we believe that creation should be the point
              around which any strategy revolves.
            </p>
          </div>
          <div className="flex items-center justify-center mt-6">
            {testimonials.map((data, index) => (
              <TestiCard data={data} isActive={index === current} key={index} />
            ))}
          </div>
          <div className="mt-3 text-center">
            <h3 className="font-medium text-3xl text-[#030211]">Aron Fernandez</h3>
            <p className="text-lg font-normal text-[#030211]">Founder of WiTechs.</p>
          </div>
        </div>
      </CustomSectiomWrapper>
    </section>
  );
};
