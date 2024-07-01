import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const HeroMirror = ({ children }) => {
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
      style={{
        boxShadow: "0px 24px 42px 0px #B9B9B940",
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      }}
      className="py-4 px-4 lg:py-12 lg:px-8 w-full md:max-w-lg  rounded-[29px]"
    >
      {children}
    </motion.div>
  );
};

export const HeroLayout = ({ bg, children }) => {
  return (
    <section
      style={{
        backgroundImage: `url(${bg})`,
      }}
      className="w-full  fle items-center relative bg-[whitesmoke]  bg-no-repeat bg-cover bg-center  bg-red-30 py-6 px-3 md:py-12 md:px-12 "
    >
      {children}
    </section>
  );
};
