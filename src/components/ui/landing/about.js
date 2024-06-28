import { TagBadge } from "@/components/Tag";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { SmileIcon, StarIcon } from "@/components/icons";
import { numPer } from "@/helper/data";
import { TextH3 } from "./component/TextH2";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { StatsCount } from "@/components/statsCount";
import { useCountingNumber } from "@/components/animation";
import { animated, useSpring } from "@react-spring/web";
import { useCount } from "@/components/animation/useCount";

export const Aboutus = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { count } = useCount(50, 100);
  const { count: serviceCount } = useCount(200, 400);
  const { number } = useSpring({
    from: { number: 0 },
    number: 100,
    config: { duration: 2000 },
  });

  return (
    <CustomSectiomWrapper>
      <motion.section
        ref={ref}
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
        initial="hidden"
        className="md:mt-12"
      >
        <main className=" gap-5 py-12 px-3 md:px-1 flex flex-wrap md:flex-nowrap flex-col-reverse  md:flex-row  items-center">
          <div className="lg:max-w-[420px] px-3">
            <TagBadge cls="bg-[#E58F24] uppercase text-black">About Us</TagBadge>
            <TextH3>Providing Cutting Edge Tech Solutions.</TextH3>
            <p className="font-bold my-1 text-base md:text-lg ">
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
                  <p className="font-bold text-2xl ">{serviceCount}+</p>
                </div>
                <span className="text-base font-bold ">Business Services</span>
              </div>
              <div className="text-center bg-[#F6F6F6] p-3 rounded-2xl flex items-center justify-center flex-col py-3">
                <div className="flex items-center justify-center gap-1">
                  <SmileIcon />
                  {/* <animated.span>{myNumber.to((n) => n.toFixed(0))}</animated.span> */}
                  <animated.p className="font-bold text-2xl ">
                    {count}+{/* {number.to((n) => n.toFixed(0))}+ */}
                  </animated.p>
                </div>
                <span className="text-base font-bold ">Happy Customers</span>
              </div>
            </div>
          </div>
          <div className="scale-100 hover:scale-105 transition-all">
            <motion.img
              ref={ref}
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.6 }}
              initial="hidden"
              src="/asset/about.png"
              alt="learning-img"
              className="w-[700px]"
            />
          </div>
        </main>
        <motion.div
          ref={ref}
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          initial="hidden"
          className="flex flex-wrap pb-10 gap-8 items-center justify-center"
        >
          {numPer.map((num, index) => (
            <StatsCount num={num} key={index} />
          ))}
        </motion.div>
      </motion.section>
    </CustomSectiomWrapper>
  );
};
