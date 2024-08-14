import { TagBadge } from "@/components/Tag";
import { CustomSectiomWrapper } from "@/components/customWrapper";
import { TextH3 } from "../landing/component/TextH2";
import { FiPhone } from "react-icons/fi";
import { CiClock2, CiLocationOn } from "react-icons/ci";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Select from "react-select";
import axios from "axios";
import { SuccessModal } from "@/components/modal/successModal";

export const ContactSectionProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const createContact = async (e) => {
    e.preventDefault();
    const bodyData = {
      name,
      subject,
      body: message,
      email,
      body: message,
    };

    try {
      setLoading(true);
      const res = await axios.post(
        "https://backend.titransmedics.co.uk/api/createcontact",
        bodyData
      );
      const response = await res.data;

      if (response) {
        setLoading(false);
        setSuccess(true);
        setEmail("");
        setMessage("");
        setSubject("");
        setName("");
      }
    } catch (error) {
      console.log("errors", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full p-10">
        <CustomSectiomWrapper>
          <div className="md:flex  items-center gap-12">
            <div className="max-w-md">
              <TagBadge cls="bg-[#FFCC4A] text-white">PROCESS</TagBadge>
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
                <TextH3>Contact Us. It’s Easy.</TextH3>
              </motion.div>{" "}
              <motion.p
                ref={ref}
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.5 }}
                initial="hidden"
                className="font-normal text-[#595566] my-1 text-lg "
              >
                We value your questions and feedback. Connect with us effortlessly through any of
                our contact options.
              </motion.p>
              <motion.div
                ref={ref}
                animate={isInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: 0.7 }}
                initial="hidden"
                className="mt-6"
              >
                <div className="flex items-start gap-3 my-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FFECBB]">
                    <FiPhone color="#DEAA27" />
                  </div>
                  <div>
                    <h3 className="font-normal text-sm text-[#595566]">Call Today</h3>
                    <p className="text-base font-medium text-[#181818]">+44 7761 425 493</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 my-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#A4EDA4]">
                    <CiClock2 color="#4EAF4E" fontSize={20} />
                  </div>
                  <div>
                    <h3 className="font-normal text-sm text-[#595566]">Monday To Friday</h3>
                    <p className="text-base font-medium text-[#181818]">9AM - 5PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 my-6">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#EAEAEA]">
                    <CiLocationOn color="#181818" fontSize={22} />
                  </div>
                  <div>
                    <h3 className="font-normal text-sm text-[#595566]">UK Office</h3>
                    <p className="text-base font-medium text-[#181818]">
                      27 Paramount building, princess Street, <br /> Swindon, UK, SN1 2SD
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            {/* <form onSubmit={createContact}> */}
            <motion.form
              onSubmit={createContact}
              ref={ref}
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: 0.7 }}
              initial="hidden"
              action=""
            >
              <section className="grid grid-cols-2 gap-3">
                <ContactForm
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John David"
                  label="Full Name"
                />
                <ContactForm
                  type="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="consult@mail.com"
                  label="Email"
                />
              </section>
              <ContactForm
                value={subject}
                required
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                label="Subject"
              />
              <ContactTextField
                placeholder="Briefly tell us about your project and your current goals. How can we help you?"
                label="Message"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="py-2 px-6 bg-black rounded-lg text-white">
                {loading ? "loading..." : "Submit"}
              </button>
            </motion.form>
            {/* </form> */}
          </div>
        </CustomSectiomWrapper>
      </div>
      {success && (
        <SuccessModal
          isOpen={success}
          onClose={() => setSuccess(false)}
          message="Message sent successfully, we will reach out soon!"
        />
      )}
    </>
  );
};

export const ContactForm = ({ type = "text", required, value, onChange, label, placeholder }) => {
  return (
    <section className="my-2">
      <label className="w-full" htmlFor="Full Name">
        {label}
      </label>
      <input
        required={required}
        value={value}
        onChange={onChange}
        type={type}
        className="h-10 w-full hover:placeholder:text-black hover:border-[#E58F24] transition-all outline-none border rounded-full px-3"
        placeholder={placeholder}
      />
    </section>
  );
};

export const ContactTextField = ({ value, onChange, label, placeholder }) => {
  return (
    <section className="my-2">
      <label className="w-full" htmlFor="Full Name">
        {label}
      </label>
      <textarea
        name={label}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-28 hover:border-[#E58F24] transition-all w-full outline-none border rounded-[22px] py-2 px-3"
        id=""
      ></textarea>
    </section>
  );
};

export const SelectField = ({ value, label, required, option, placeholder, handleChange }) => {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "1px solid whitesmoke",
      borderRadius: "10px",
      background: "#fff",
      height: "30px",
      color: "#fff",
    }),

    option: (provided, state) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      padding: "5px",
      backgroundColor: state.isSelected ? "whitesmoke" : state.isFocused ? "#F6F8FA" : "white",
      color: state.isSelected ? "black" : state.isFocused ? "black" : "black",
    }),
  };

  return (
    <section className="my-3">
      <label htmlFor="">
        <p className="my-1 text-base font-medium leading-5 text-[#0A0D14] dark:text-white ">
          {label}
        </p>
      </label>
      <Select
        value={value}
        required={required}
        className="text-white"
        onChange={handleChange}
        options={option}
        // formatOptionLabel={formatOptionLabel}
        styles={customStyles}
        placeholder={placeholder}
      />
    </section>
  );
};
