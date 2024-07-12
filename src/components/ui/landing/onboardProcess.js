import { TagBadge } from "@/components/Tag";
import { CourseCard } from "@/components/card/courseCard";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { RightArrow } from "@/components/icons";
import { InterestFormModal } from "@/components/modal/interestFormModal";
import { coursesData, processData } from "@/helper/data";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-full bg-[#F5F5F5] py-16 px-6">
        <CustomSectiomWrapper>
          <main className="lg:flex gap-12 items-start justify-between">
            <div className="w-full max-w-sm ">
              <TagBadge cls="bg-[#4EAF4E] text-black">PROCESS</TagBadge>
              <motion.div>
                <motion.h3
                  ref={ref}
                  animate={isInView ? "visible" : "hidden"}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  initial="hidden"
                  className="font-bold text-3xl"
                >
                  Our learning model
                </motion.h3>
                <motion.p className="my-3 text-base font-normal text-[#595566]">
                  Designed over the years by industry experts, we embark on a learning journey
                  across the entire digital product life-cycle. We are confident you will be
                  industry ready.
                </motion.p>
              </motion.div>
              <motion.div className="mt-12">
                {processData.map((processes, index) => (
                  <motion.div key={index} className="mb-12 border-t pt-5 flex items-start gap-2 ">
                    <div
                      className={`w-12 h-12 rounded-full  ${processes.bg} ${processes.color} flex justify-center items-center text-2xl`}
                    >
                      {processes.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg ">{processes.title}</h3>
                      <ul className="ml-4  list-disc">
                        {processes.process.map((dta, dtaIndex) => (
                          <li key={dtaIndex} className="text-[#595566] font-normal text-base">
                            {dta}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="w-full ">
              <TagBadge cls="bg-[#E58F24] text-white">BECOME AN IT INTERN</TagBadge>
              <motion.div>
                <h3 className="font-bold text-3xl">
                  Join our 6 months internship to launch your tech career
                </h3>
                <p className="my-3 text-base font-normal text-[#595566]">
                  We offer a unique opportunity to gain invaluable IT skills as well as hands on
                  experience with Real-World projects.
                </p>
                <p className="my-3 text-base font-normal text-[#595566]">
                  {" "}
                  Whether you are a Tech enthusiast, a seasoned pro, or just starting your journey.
                  Titrans Tech is here to guide you to IT haven.
                </p>
              </motion.div>
              <div>
                <motion.div
                  style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
                  className="grid gap-2 md:grid-cols-2"
                >
                  {coursesData.map((data, index) => (
                    <CourseCard key={index} course={data} />
                  ))}
                </motion.div>
              </div>
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
            className="flex items-center justify-center mt-10"
          >
            <button
              onClick={() => setIsOpen(true)}
              className="h-10 animate-pulse hover:bg-[#E58F24] gap-2 px-6 rounded-[42px] bg-[#181818] text-white flex items-center justify-center"
            >
              <span className="text-base font-medium">Register</span>

              <RightArrow />
            </button>
          </motion.div>
        </CustomSectiomWrapper>
      </div>
      {isOpen && <InterestFormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
};
