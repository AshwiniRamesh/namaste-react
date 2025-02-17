import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import MenuItem from "./MenuItem";

const CategorySection = ({ category, defaultOpen,showItems }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-6 border rounded-lg shadow-md bg-white overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 transition-all"
      >
        <h3 className="text-lg font-semibold">{category.title}</h3>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      <div className={`transition-all duration-300 ${isOpen ? "block p-4" : "hidden p-0"}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {category.itemCards.map((menu, idx) => (
            <MenuItem key={idx} menu={menu.card.info} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
