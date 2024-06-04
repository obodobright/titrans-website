import { TIcon } from "../icons";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ServiceCard = ({ service }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.section
      ref={ref}
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: 0.5 }}
      initial="hidden"
      className={`${
        service.isDark ? "bg-[#181818]" : "bg-[#EBEBEB]"
      } my-3 rounded-[20px]  py-7 px-5`}
    >
      {service.icon}
      <div className="mt-4">
        <h2
          className={`font-semibold text-xl ${
            service.isDark ? "text-[#ebebeb]" : "text-[#181818]"
          }`}
        >
          {service.name}
        </h2>
        <p
          className={`text-[#595566] text-sm ${
            service.isDark ? "text-[#ebebeb]" : "text-[#181818]"
          } `}
        >
          {service.description}
        </p>
      </div>
    </motion.section>
  );
};
