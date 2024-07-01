/* eslint-disable @next/next/no-img-element */
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const PartnerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
          <motion.h3
            ref={ref}
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            initial="hidden"
            className="font-bold text-xl leading-6 tracking- tracking-[0.5em] text-center  "
          >
            WHO WE PARTNER WITH{" "}
          </motion.h3>
          <motion.div
            ref={ref}
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.5 }}
            initial="hidden"
            className="flex mt-6 items-center flex-wrap justify-center gap-2"
          >
            {partners.map((data, index) => (
              <img
                key={index}
                className="w-36 animate-pulse mx-4 scale-100 hover:scale-125 transition-all"
                src={`/asset/${data}`}
                alt="brand-partners"
              />
            ))}
          </motion.div>
        </div>
      </CustomSectiomWrapper>
    </section>
  );
};
