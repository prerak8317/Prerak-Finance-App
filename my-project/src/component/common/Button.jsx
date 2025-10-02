import React from "react";

function Button({ text, className }) {
  return (
    <div>
      <button
        className={`bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 hover:text-white ${className}`}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
