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
      className={`${"bg-[#EBEBEB] hover:bg-[#181818] "} my-3 rounded-[20px] hover:cursor-pointer group hover:shadow scale-100 hover:scale-[1.03] transition-all  py-7 px-5`}
    >
      <div className="scale-100 group-hover:scale-105 transition-all">{service.icon}</div>
      <div className="mt-4">
        <h2 className={` font-semibold text-xl group-hover:text-white ${"text-[#181818]   "}`}>
          {service.name}
        </h2>
        <p className={`text-[#181818] group-hover:text-white   text-sm  `}>{service.description}</p>
      </div>
    </motion.section>
  );
};
