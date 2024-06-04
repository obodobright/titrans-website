import { TagBadge } from "@/components/Tag";
import { TextH3 } from "../landing/component/TextH2";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { numPer } from "@/helper/data";
import { CheckMark } from "@/components/icons";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <CustomSectiomWrapper>
      <section className="md:mt-12">
        <main className=" gap-5 py-12 px-3 md:px-1 flex flex-wrap md:flex-nowrap flex-col-reverse  md:flex-row  items-center">
          <div className=" px-3">
            <TagBadge cls="bg-[#4EAF4E] uppercase text-white">Our Vision</TagBadge>
            <motion.div
              ref={ref}
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              initial="hidden"
            >
              <TextH3>Turn your ideas into reality.</TextH3>
            </motion.div>{" "}
            <motion.p
              ref={ref}
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.5 }}
              initial="hidden"
              className="my-2 text-[#595566] font-normal text-base "
            >
              Experts from various tech fields unite to deliver exceptional service, training, and
              mentorship to make your dreams a spectacle!
            </motion.p>
            <motion.div
              ref={ref}
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.7 }}
              initial="hidden"
              className="flex items-start gap-2"
            >
              <div className="relative top-2">
                <CheckMark />
              </div>
              <p className="my-2 text-[#595566] font-normal text-base ">
                Bring to the table win-win survival strategies to ensure proactive domination. At
                the end of the day.
              </p>
            </motion.div>
            <motion.div
              ref={ref}
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.9 }}
              initial="hidden"
              className="flex items-start gap-2"
            >
              <div className="relative top-2">
                <CheckMark />
              </div>
              <p className="my-2 text-[#595566] font-normal text-base ">
                Capitalize on low hanging fruit to identify a ballpark value added activity to beta
                test override the digital.
              </p>
            </motion.div>
          </div>
          <div>
            <img src="/asset/vision-img.png" alt="learning-img" className="w-[700px]" />
          </div>
        </main>
        <motion.div
          ref={ref}
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 0.9 }}
          initial="hidden"
          className="flex flex-wrap pb-10 gap-8 items-center justify-center"
        >
          {numPer.map((num, index) => (
            <div className="mx-3 flex items-center justify-center flex-col" key={index}>
              <h2 className="text-3xl  md:text-5xl font-bold leading-[51px]">{num.number} </h2>
              <p className="text-sm text-center md:text-lg font-medium">{num.description}</p>
            </div>
          ))}
        </motion.div>
      </section>
    </CustomSectiomWrapper>
  );
};
