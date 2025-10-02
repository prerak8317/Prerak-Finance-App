import React from "react";
import Content from "./Content";

function TableContent({ h2, p1, p2, p3, p4, p5, h1 }) {
  const sectionsData = [
    {
      heading: "Understanding Your Needs",
      points: [
        "Start a business? Launch costs like equipment, inventory, and marketing can be covered by SME loans.",
        "Expand your business? Financing can help you purchase new equipment, hire staff, or open new locations.",
        "Manage cash flow? A short-term SME loan can bridge temporary gaps in your income stream.",
      ],
    },
    {
      heading: "Types of SME Loans",
      points: [
        "Term Loans: A fixed amount of money repaid over a set period with regular installments.",
        "Line of Credit: Provides access to a revolving credit limit, similar to a credit card.",
        "Equipment Loans: Specifically for purchasing equipment, with the equipment itself as collateral.",
        "Invoice Financing: Borrow against outstanding invoices to improve cash flow.",
      ],
    },
    {
      heading: "Qualifying for SME Loans",
      text: "Lenders assess your business’s creditworthiness, profitability, and ability to repay the loan. Having a solid business plan and proper financial statements helps.",
    },
    {
      heading: "Interest Rates and Fees",
      text: "Shop around and compare interest rates, loan types, and repayment terms. Understand fees like origination and processing charges.",
    },
    {
      heading: "Alternatives to SME Loans",
      text: "Consider alternative funding sources such as crowdfunding, angel investors, or venture capital depending on your business model.",
    },
  ];
  return (
    <div className="md:flex md:flex-row flex flex-col md:items-start items-center justify-between mt-10">
      <div className="ml-12">
        <h2 className="text-red-600 text-xl font-semibold mb-4">{h2}</h2>
        <p className="text-sm font-semibold mb-4">{p1}</p>
        <p className="text-sm font-semibold mb-4">{p2}</p>
        <p className="text-sm font-semibold mb-4">{p3}</p>
        <p className="text-sm font-semibold mb-4">{p5}</p>

        <div className="flex gap-4 mt-5">
          <img
            src="./public/Twitter.png"
            alt="Twitter"
            className="w-3 h-3 md:w-5 md:h-5 cursor-pointer"
          />
          <img
            src="./public/linkdin.png"
            alt="linkdin"
            className="w-3 h-3 md:w-5 md:h-5 cursor-pointer"
          />
          <img
            src="./public/facebook.png"
            alt="facebook"
            className="w-3 h-3 md:w-5 md:h-5 cursor-pointer"
          />
          <img
            src="./public/instagram.png"
            alt="instagram"
            className="w-3 h-3 md:w-5 md:h-5 cursor-pointer"
          />
        </div>
      </div>
      <div className="md:mr-12 ml-12 mt-10 md:mt-0">
        <h2 className="text-red-600 text-2xl font-bold mb-4">{h2}</h2>
        <h1 className="text-2xl md:text-3xl mb-4">{h1}</h1>
        <p>{p4}</p>
        <Content
          title="What to know about Small and Medium Enterprise (SME) loans"
          intro="Financing your small or medium-sized business (SME) can be a critical step towards growth and success. SME loans offer a way to bridge funding gaps and inject capital into your operations."
          sections={sectionsData}
        />
        <Content
          title="How to manage a Small and Medium Enterprise (SME) loans"
          intro="Financing your small or medium-sized business (SME) can be a critical step towards growth and success. SME loans offer a way to bridge funding gaps and inject capital into your operations."
          sections={sectionsData}
        />
      </div>
    </div>
  );
}

export default TableContent;
