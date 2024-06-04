import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export const TagBadge = ({ cls, children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5 }}
      initial="hidden"
      className={`text-sm uppercase text-center mb-3 w-fit font-normal px-3 tracking-wide rounded-full  ${cls}`}
    >
      {children}
    </motion.div>
  );
};
