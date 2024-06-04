import { TagBadge } from "@/components/Tag";
import { TextH3 } from "../landing/component/TextH2";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { FaqAccordion } from "./FaqAccordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="w-full bg-white py-12 px-9">
      <CustomSectiomWrapper>
        <main>
          <div className="flex items-center justify-center flex-col">
            <TagBadge cls="bg-[#4EAF4E] text-white">PRICING</TagBadge>
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
              <TextH3>Customer Questions</TextH3>
            </motion.div>{" "}
          </div>
          <motion.div
            ref={ref}
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, delay: 0.5 }}
            initial="hidden"
            className="max-w-xl mt-6  mx-auto"
          >
            <FaqAccordion />
            <FaqAccordion />
            <FaqAccordion />
            <FaqAccordion />
            <FaqAccordion />
            <FaqAccordion />
          </motion.div>
        </main>
      </CustomSectiomWrapper>
    </section>
  );
};
