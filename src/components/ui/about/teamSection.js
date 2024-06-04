import { TagBadge } from "@/components/Tag";
import { TeamCard } from "@/components/card/teamCard";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="py-12 w-full bg-[#F5F5F5] px-8">
      <CustomSectiomWrapper>
        <div className="flex items-end justify-between">
          <div>
            <TagBadge cls="bg-[#FFCC4A] text-black uppercase">Our team</TagBadge>
            <motion.h2
              ref={ref}
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              initial="hidden"
              className="text-4xl max-w-md text-left text-[#181818] font-bold"
            >
              We champion the bold to achieve the extraordinary
            </motion.h2>
            <motion.p
              ref={ref}
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.5 }}
              initial="hidden"
              className="max-w-xl my-3"
            >
              Ippsum is the result of synergy between our teams and our customers. Our company
              culture is focused on excellent productivity, customer satisfaction, respect for team.
            </motion.p>
          </div>
        </div>
        <motion.div
          ref={ref}
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delayChildren: 0.6 }}
          initial="hidden"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
          className="mt-8 grid items-center justify-center  grid-cols-3 gap-3"
        >
          {Array.from({ length: 6 }).map((data, index) => (
            <TeamCard key={index} />
          ))}
        </motion.div>
      </CustomSectiomWrapper>
    </section>
  );
};
