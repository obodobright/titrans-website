import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
export const FaqAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="py-2 my-3 border-b px-4">
      <div className="w-full mb-2  flex items-center justify-between">
        <p className="font-medium text-lg">{question}</p>
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <FiMinus /> : <FiPlus />}</button>
      </div>
      {isOpen && (
        <div className="transition-all">
          <p>{answer}</p>
        </div>
      )}
    </section>
  );
};
