import { CustomLayout } from "@/components/CustomLayout";
import { TagBadge } from "@/components/Tag";
import { TextH3 } from "../landing/component/TextH2";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { PricingCard } from "@/components/card/PricingCard";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="w-full bg-[#F5F5F5] py-12 px-9">
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
              <TextH3>Our Pricing Plan</TextH3>
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
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
            className="mt-6 grid grid-cols-3 gap-3"
          >
            <PricingCard plan="Basic Plan" amount="$35" />
            <PricingCard isPopular={true} plan="Standard Plan" amount="$56" />
            <PricingCard plan="Premium Plan" amount="$75" />
          </motion.div>
        </main>
      </CustomSectiomWrapper>
    </section>
  );
};
