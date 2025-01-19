import { LuChevronRight } from "react-icons/lu";
import { useState } from "react";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-stone-200">
      <button
        className="w-full text-left py-4 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-stone-800">{question}</span>
        <LuChevronRight className={`transform transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-4 text-stone-600">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqItem