import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
export const FaqAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="py-2 my-3 border-b px-4">
      <div className="w-full mb-2  flex items-center justify-between">
        <p className="font-medium text-lg">What will happen when I’ve sent my application?</p>
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <FiMinus /> : <FiPlus />}</button>
      </div>
      {isOpen && (
        <div className="transition-all">
          <p>
            Ippsum is the result of synergy between our teams and our customers. Our company culture
            is focused on excellent productivity, customer satisfaction, respect for team and
            individual achievements.
          </p>
        </div>
      )}
    </section>
  );
};
