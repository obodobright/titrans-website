/* eslint-disable @next/next/no-img-element */
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { SuccessModal } from "@/components/modal/successModal";
import axios from "axios";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export const SubScribeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const subcribeNewsletter = async (e) => {
    e.preventDefault();
    const body = {
      email: email,
    };
    try {
      setLoading(true);
      const res = await axios.post(
        "https://backend.titransmedics.co.uk/api/createsubcription",
        body
      );
      const response = await res.data;

      if (response) {
        setLoading(false);
        setSuccess(true);
        setEmail("");
      }
    } catch (error) {
      console.log("errors", error);
      setLoading(false);
    }
  };

  return (
    <section className="w-full p-10">
      <CustomSectiomWrapper>
        <motion.div
          ref={ref}
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          initial="hidden"
          className="w-full overflow-hidden  relative block md:flex items-center justify-between gap-2 rounded-[20px] bg-[#181818] px-5 md:px-12 py-12"
        >
          <img
            src="/asset/bg-contact-pattern.png"
            className="absolute  -z-0 top-0 right-0 w-44 "
            alt=""
          />
          <div className="relative z-10">
            <h3 className="font-semibold text-3xl text-white">Subscribe Our Newsletter</h3>
            <p className="text-sm font-bold text-white">
              Build stronger Customer Relationships with Consultalk
            </p>
          </div>
          <form
            onSubmit={subcribeNewsletter}
            className="md:flex my-3 md:my-auto  items-center gap-2"
          >
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your mail address"
              type="email"
              className="w-full hover:placeholder:text-black hover:border-[#E58F24] hover:border h-10 rounded-full bg-white px-4 outline-none "
            />
            <button className="h-10 relative z-30   rounded-[42px] text-base font-semibold px-6 my-1 bg-[#FFCC4A] cursor-pointer hover:bg-[#fff] transition-all">
              {" "}
              {loading ? "loading..." : "Subscribe"}
            </button>
          </form>
        </motion.div>
      </CustomSectiomWrapper>
      {success && (
        <SuccessModal
          isOpen={success}
          onClose={() => setSuccess(false)}
          message="Added to newsletter!"
        />
      )}
    </section>
  );
};
