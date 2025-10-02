import React from "react";
import Button from "../common/Button";
import Input from "./Input";

const LoanCalculater = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      {/* Top heading */}
      <Button text="Loan Comparisons" className="bg-gray-100 !text-black" />
      <h1 className="text-[23px] md:text-[40px] font-bold text-center mt-4">
        Find Your Ideal Loan with Our <br /> Comparison Tool
      </h1>
      <p className="max-w-[700px] text-center mt-4 md:text-[15px] text-[12px] px-2">
        Our loan comparison tool simplifies your search by displaying key loan
        options side-by-side. Compare interest rates, terms, and features to
        find the loan that fits your needs and budget. Get pre-qualified in
        minutes and take the guesswork out of borrowing.
      </p>

      {/* Input Section */}
      <div className="bg-gray-200 p-6 rounded-lg w-full max-w-[90%] mt-6 flex flex-col gap-6">
        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Input label="Select Bank(s)" option="Select your bank(s)" />
          <Input label="Select Term(s)" option="Select your term(s)" />
          <Input label="Select Loans" option="Select your loan" />
          <Input label="Select Currency" option="Select your currency" />
        </div>

        {/* Recommendation + Button */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-sm md:text-base text-center lg:text-left flex-1">
            Recommendation! We’ve found 51 products for you to take a look at.
            Our platform keeps you updated on the most current and exciting
            promotions from banks and financial institutions in Cambodia.
          </p>
          <div className="flex justify-center lg:justify-end w-full lg:w-auto">
            <Button text="Update Result" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculater;
