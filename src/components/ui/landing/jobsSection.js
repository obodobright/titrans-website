import { TagBadge } from "@/components/Tag";
import { JobCard } from "@/components/card/jobCard";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { jobData } from "@/helper/data";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export const JobSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <main className="w-full relative">
      <section
        style={{
          backgroundImage: "url(/asset/job-bg-pattern.png)",
        }}
        className="w-full py-12 px-8 bg-black h-[400px] bg-no-repeat bg-cover bg-center "
      ></section>
      <CustomSectiomWrapper>
        <div className="text-white relative -top-[300px] ">
          <motion.div
            ref={ref}
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex items-end px-2 flex-wrap gap-2 justify-between"
          >
            <div>
              <TagBadge cls="text-black bg-[#4EAF4E]">HOT JOBS</TagBadge>
              <h3 className="font-bold text-[40px] text-white max-w- max-w-lg">
                Recent job openings and IT opportunities in the UK.
              </h3>
            </div>
            <button className="h-12 px-6 text-center rounded-[42px] bg-[#E58F24] text-white">
              <Link href="/jobs"> View More</Link>
            </button>
          </motion.div>
          <motion.div
            ref={ref}
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.5 }}
            initial="hidden"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
            className="bg-[#FAFAFA] gap-3 items-center justify-center grid grid-cols-3 gap- py-2 px-4 mt-9 rounded-[30px]"
          >
            {jobData.map((data, index) => (
              <JobCard key={index} job={data} />
            ))}
          </motion.div>
        </div>
      </CustomSectiomWrapper>
    </main>
  );
};
