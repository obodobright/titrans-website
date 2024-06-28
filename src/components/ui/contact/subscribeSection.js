/* eslint-disable @next/next/no-img-element */
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const SubScribeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full p-10">
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
          className="w-full overflow-hidden  relative block md:flex items-center justify-between gap-2 rounded-[20px] bg-[#181818] px-5 md:px-12 py-12"
        >
          <img
            src="/asset/bg-contact-pattern.png"
            className="absolute  -z-0 top-0 right-0 w-44 "
            alt=""
          />
          <div className="relative z-10">
            <h3 className="font-semibold text-3xl text-white">Subscribe Our Newsletter</h3>
            <p className="text-sm font-bold text-white">
              Build stronger Customer Relationships with Consultalk
            </p>
          </div>
          <div className="md:flex my-3 md:my-auto  items-center gap-2">
            <input
              placeholder="your mail address"
              type="text"
              className="w-full hover:placeholder:text-black hover:border-[#E58F24] hover:border h-10 rounded-full bg-white px-4 outline-none "
            />
            <button className="h-10 relative z-30   rounded-[42px] text-base font-semibold px-6 my-1 bg-[#FFCC4A] cursor-pointer hover:bg-[#fff] transition-all">
              {" "}
              Subscribes
            </button>
          </div>
        </motion.div>
      </CustomSectiomWrapper>
    </section>
  );
};
