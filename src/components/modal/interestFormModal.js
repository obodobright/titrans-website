import AppDialog from ".";
import { IoClose } from "react-icons/io5";
import { ContactForm, ContactTextField, SelectField } from "../ui/contact/contactProcess";
import { courses } from "@/helper/data";
import { useState } from "react";

export const InterestFormModal = ({ onClose, isOpen }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <AppDialog onClose={onClose} isOpen={isOpen}>
      <div className="py-5 px-4">
        <div className="flex items-center justify-between relative">
          <h3 className="text-lg font-semibold text-black">Get in Touch</h3>
          <IoClose onClick={onClose} className="relative cursor-pointer -top-2" fontSize={20} />
        </div>
        <form>
          <ContactForm placeholder="John David" label="Full Name" />
          <ContactForm placeholder="consult@mail.com" label="Email" />
          <SelectField
            value={selectedOption}
            handleChange={(selected) => setSelectedOption(selected)}
            placeholder="Select Preferred course"
            label="Choose preferred course"
            option={courses}
          />

          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className="w-full bg-black text-white h-10 px-4  rounded-lg text-base font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </AppDialog>
  );
};
