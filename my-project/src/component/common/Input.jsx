import React from "react";

const Input = ({ label, option }) => {
  return (
    <div className="flex flex-col flex-1 min-w-[200px] sm:min-w-[250px] h-auto">
      <label className="flex items-center text-sm font-medium text-gray-700 mb-2 mt-2">
        {label}
      </label>
      <select className="w-full border border-gray-300 rounded-lg px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>{option}</option>
      </select>
    </div>
  );
};

export default Input;
