import { TestiCard } from "@/components/card/testiCard";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { QoutesIcon } from "@/components/icons";
import { testimonials } from "@/helper/data";
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export const TestimonySection = () => {
  const [current, setCurrent] = useState(3);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, [8000]);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleClick = () => {
    setCurrent((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

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
            <p className="font-normal text-lg">{testimonials[current].testimony}</p>
          </div>
          <section className="flex items-center justify-between w-full">
            <div
              role="button"
              onClick={handleClick}
              className="w-12 flex group shadow items-center justify-center h-12 bg-white hover:bg-[#E58F24] transition-all  rounded-full"
            >
              <FaArrowLeftLong className="text-black group-hover:text-white" />
            </div>
            <div className="flex items-center justify-center mt-6">
              {testimonials.map((data, index) => (
                <TestiCard data={data} isActive={index === current} key={index} />
              ))}
            </div>
            <div
              role="button"
              onClick={handleClick}
              className="w-12 shadow  flex items-center justify-center h-12 group  bg-white hover:bg-[#E58F24] transition-all rounded-full"
            >
              <FaArrowRightLong className="text-black group-hover:text-white" />
            </div>
          </section>
        </motion.div>
      </CustomSectiomWrapper>
    </section>
  );
};
