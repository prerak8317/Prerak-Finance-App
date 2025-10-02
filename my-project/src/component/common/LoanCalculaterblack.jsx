import React from "react";

function LoanCalculaterblack({
  title,
  buttonLabel,
  inputs,
  resultTitle,
  resultText,
  instructions,
}) {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg max-w-7xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {inputs.map((input, index) => (
          <input
            key={index}
            type="text"
            placeholder={input.placeholder}
            className="p-3 rounded-md text-black"
          />
        ))}
      </div>

      {/* Button */}
      <button className="bg-red-500 px-6 py-2 rounded-md font-semibold">
        {buttonLabel}
      </button>

      {/* Result Box */}
      <div className="bg-green-900 text-green-300 mt-6 p-4 rounded-md">
        <h3 className="font-bold mb-2">{resultTitle}</h3>
        <p>{resultText}</p>
      </div>

      {/* Instructions */}
      <div className="mt-6">
        <h4 className="font-bold mb-2">INSTRUCTIONS</h4>
        <ul className="list-disc pl-6 space-y-1 text-gray-300">
          {instructions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LoanCalculaterblack;
