import React from "react";

export default function PlusArrow({ setShowingAddNew }) {
  return (
    <div 
      onClick={() => setShowingAddNew(true)}
      className="bg-white rounded-xl p-6 max-w-sm flex flex-col items-center justify-center mb-5 cursor-pointer hover:bg-gray-50 transition duration-200 border-2 border-dashed border-gray-300 hover:border-gray-400 min-h-[320px]"
    >
      <div className="text-8xl text-gray-400 font-light">+</div>
      <p className="text-gray-500 mt-4 font-medium">Add New Item</p>
    </div>
  );
}