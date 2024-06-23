import { TestiCard } from "@/components/card/testiCard";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { QoutesIcon } from "@/components/icons";
import { testimonials } from "@/helper/data";
import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const TestimonySection = () => {
  const [current, setCurrent] = useState(1);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full p-4 relative -top-[200px]">
      <CustomSectiomWrapper>
        <motion.div
          ref={ref}
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          initial="hidden"
          className="flex items-center justify-center flex-col gap-2 "
        >
          <QoutesIcon />
          <div className=" comment-box">
            <p className="font-normal text-2xl">
              Titrans Tech&apos;s mentorship program transformed my career. The personalized
              guidance and hands-on training equipped me with skills and confidence to excel in the
              tech industry.
            </p>
          </div>
          <div className="flex items-center justify-center mt-6">
            {testimonials.map((data, index) => (
              <TestiCard data={data} isActive={index === current} key={index} />
            ))}
          </div>
          <div className="mt-3 text-center">
            <h3 className="font-medium text-3xl text-[#030211]">John D.</h3>
            <p className="text-lg font-normal text-[#030211]">Student</p>
          </div>
        </motion.div>
      </CustomSectiomWrapper>
    </section>
  );
};
