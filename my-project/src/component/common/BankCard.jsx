import React from "react";

function BankCard({
  type = "bank",
  icon,
  bankName = "Acleda Bank",
  rating = "5.0",
  interestRate = "9.2%",
  loanAmount = "100,000",
  loanType = "Small & Medium Enterprise (SME)",
}) {
  if (type === "bank") {
    return (
      <div className="border rounded-lg p-4 max-w-sm">
        <div className="text-center mb-3">
          <img src={icon} className="w-12 h-12 mx-auto mb-2" />
          <h3 className="font-semibold">{bankName}</h3>
          <p className="text-sm text-gray-500">Phnom Penh, Cambodia</p>
          <div className="flex items-center justify-center gap-1 mt-1">
            <span className="text-sm">{rating}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">
                  ⭐
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">6 years</span>
            <span className="font-semibold">{interestRate}</span>
          </div>
          <div className="text-xs text-gray-500">Maximum Loan Term</div>

          <div className="text-center font-bold text-lg">${loanAmount}</div>
          <div className="text-xs text-gray-500 text-center">Maximum Loan</div>

          <div className="text-center text-green-600 font-semibold">
            {loanType}
          </div>
          <div className="text-xs text-gray-500 text-center">Loan Type</div>
        </div>

        <div className="flex gap-2 mt-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded text-sm flex-1">
            Apply Now
          </button>
          <button className="border border-gray-300 px-4 py-2 rounded text-sm flex-1">
            Learn More
          </button>
        </div>
      </div>
    );
  }
}

export default BankCard;
