import { TestiCard } from "@/components/card/testiCard";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { QoutesIcon } from "@/components/icons";
import { testimonials } from "@/helper/data";
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const TestimonySection = () => {
  const [current, setCurrent] = useState(3);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, [5000]);

    return () => clearInterval(interval);
  }, [testimonials.length]);

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
            <p className="font-normal text-2xl">{testimonials[current].testimony}</p>
          </div>
          <div className="flex items-center justify-center mt-6">
            {testimonials.map((data, index) => (
              <TestiCard data={data} isActive={index === current} key={index} />
            ))}
          </div>
          <div className="mt-3 text-center">
            <h3 className="font-medium text-3xl text-[#030211]">{testimonials[current].name}</h3>
            <p className="text-lg font-normal text-[#030211]">{testimonials[current].jobTitle}</p>
          </div>
        </motion.div>
      </CustomSectiomWrapper>
    </section>
  );
};
