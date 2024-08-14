import AppDialog from ".";
import { IoClose } from "react-icons/io5";
import { ContactForm, ContactTextField } from "../ui/contact/contactProcess";
import { useState } from "react";
import axios from "axios";

export const FormModal = ({ onClose, isOpen, openSuccessModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const createMeeting = async (e) => {
    e.preventDefault();
    const bodyData = {
      name,
      body: message,
      email,
    };

    try {
      setLoading(true);
      const res = await axios.post(
        "https://backend.titransmedics.co.uk/api/createmeeting",
        bodyData
      );
      const response = await res.data;

      if (response) {
        setLoading(false);
        openSuccessModal();
        setEmail("");
        setMessage("");
        setName("");
      }
    } catch (error) {
      console.log("errors", error);
      setLoading(false);
    }
  };
  return (
    <AppDialog onClose={onClose} isOpen={isOpen}>
      <div className="py-5 px-4">
        <div className="flex items-center justify-between relative">
          <h3 className="text-lg font-semibold text-black">Get in Touch</h3>
          <IoClose onClick={onClose} className="relative cursor-pointer -top-2" fontSize={20} />
        </div>
        <form onSubmit={createMeeting}>
          <ContactForm
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John David"
            label="Full Name"
          />
          <ContactForm
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="consult@mail.com"
            label="Email"
            type="email"
          />
          <ContactTextField
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Briefly tell us about your project and your current goals. How can we help you?"
            label="Message"
          />
          <button
            onClick={() => console.log("djdj")}
            className="w-full bg-black text-white h-10 px-4  rounded-lg text-base font-medium"
          >
            {loading ? "loading..." : "Submit"}
          </button>
        </form>
      </div>
    </AppDialog>
  );
};
