import React from "react";
import LoanCalculater from "../common/LoanCalculater";
import Graph from "../common/Graph";
import TableContent from "../common/TableContent";
import LoanCalculaterblack from "../common/LoanCalculaterblack";
import FeatureCard from "../common/FeatureCard";
import FQ from "../common/FQ";

const SavingComparison = () => {
  const banks = [
    {
      name: "Acleda Bank",
      website: "www.acledabank.com.kh",
      logo: "🏦",
      balance: "USD ≈ 50,000",
      rate: "4.65%",
      term: "3 months",
      value: "$1,046.50",
    },
    {
      name: "ABA Bank",
      website: "www.ababank.com",
      logo: "🏛️",
      balance: "USD ≈ 50,000",
      rate: "4.50%",
      term: "6 months",
      value: "$1,044.00",
    },
    {
      name: "Chip Mong Bank",
      website: "www.chipmongbank.com",
      logo: "🏢",
      balance: "USD ≈ 50,000",
      rate: "4.40%",
      term: "6 months",
      value: "$1,051.16",
    },
    {
      name: "Cambodia Public Bank",
      website: "www.cpbebank.com",
      logo: "🏪",
      balance: "USD ≈ 50,000",
      rate: "4.40%",
      term: "12 months",
      value: "$1,044.00",
    },
    {
      name: "Sathapana Bank",
      website: "www.sathapana.com.kh",
      logo: "💼",
      balance: "USD ≈ 50,000",
      rate: "4.35%",
      term: "12 months",
      value: "$1,047.50",
    },
    {
      name: "Vattanac Bank",
      website: "www.vattanacbank.com",
      logo: "🏨",
      balance: "USD ≈ 50,000",
      rate: "4.15%",
      term: "12 months",
      value: "$1,056.93",
    },
  ];
  return (
    <>
      <div className="flex flex-col gap-4 items-center mt-10">
        <LoanCalculater />
      </div>
      <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
              Good news! We've found{" "}
              <span className="text-green-600">51 products</span> for you to
              take a look at.
            </h1>
            <p className="text-sm sm:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Take a look and explore a wide range of options that match your
              needs. Whether it's finding the perfect savings account,
              investment opportunity, or financial service, our collection has
              something for everyone. Start exploring now and discover the
              perfect fit for your financial goals!
            </p>
          </div>

          {/* Desktop Table - Hidden on mobile */}
          <div className="hidden lg:block bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Banks
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Balance
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Interest Rate
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Term
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Savings Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {banks.map((bank, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
                          {bank.logo}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {bank.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {bank.website}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-gray-700 font-medium">
                      {bank.balance}
                    </td>
                    <td className="px-6 py-5">
                      <div className="font-semibold text-gray-900">
                        {bank.rate}
                      </div>
                      <div className="text-sm text-gray-500">
                        Interest rate (AER)
                      </div>
                    </td>
                    <td className="px-6 py-5 text-gray-700">{bank.term}</td>
                    <td className="px-6 py-5">
                      <div className="font-semibold text-gray-900">
                        {bank.value}
                      </div>
                      <div className="text-sm text-gray-500">Value (Gross)</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards - Shown on mobile/tablet */}
          <div className="lg:hidden space-y-4">
            {banks.map((bank, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm p-4 sm:p-6"
              >
                {/* Bank Info */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 rounded-full flex items-center justify-center text-2xl sm:text-3xl">
                    {bank.logo}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 text-base sm:text-lg">
                      {bank.name}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">
                      {bank.website}
                    </div>
                  </div>
                </div>

                {/* Bank Details Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Balance</div>
                    <div className="font-medium text-gray-900 text-sm sm:text-base">
                      {bank.balance}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Term</div>
                    <div className="font-medium text-gray-900 text-sm sm:text-base">
                      {bank.term}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">
                      Interest Rate
                    </div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">
                      {bank.rate}
                    </div>
                    <div className="text-xs text-gray-500">
                      Interest rate (AER)
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">
                      Savings Value
                    </div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base">
                      {bank.value}
                    </div>
                    <div className="text-xs text-gray-500">Value (Gross)</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Graph />
        <TableContent
          p4={
            <>
              This guide explores the top lenders for Small and Medium
              Enterprise (SME) loans in 2024. <br />
              We compare banks based on factors crucial for your business, such
              as interest rates, loan amounts, terms, and features. <br />
              Find the perfect fit to fuel your company's growth and success.
            </>
          }
          p1="Best Savings Accounts and Rates"
          p2="How to Choose a Savings Account?"
          p3="What to Know about Savings Accounts?"
          // p5="Calculate your loan payment"
          h1="Best savings accounts and rates in June 2024"
          h2="Table of Contents"
        />
      </div>
      <LoanCalculaterblack
        title="Estimate Your Loan Payments"
        buttonLabel="Progress Payments"
        inputs={[
          { placeholder: "Enter your initial amounts" },
          { placeholder: "Enter your repayment period" },
          { placeholder: "Enter your terms or leave it empty" },
          { placeholder: "Enter your periodic repayments" },
          { placeholder: "Enter your annual interest rate (%)" },
        ]}
        resultTitle="Your Result"
        resultText="To pay off the loan takes 104 monthly payments around of 100.00, plus a final payment of 45.69. The result is calculated for an indication purpose only and some charges might be applied."
        instructions={[
          "Please leave the field you want to calculate empty",
          "To calculate the Loan Amount: input the Periodic Repayments and the Term (months)",
          "To calculate the Periodic Repayments: input the Loan Amount and the Term (months)",
          "To calculate the Term: input the Loan Amount and the Periodic Repayments",
          "In addition, specify the Annual Interest Rate field, and then click on Process button",
        ]}
      />
      <div className="md:flex md:flex-row flex flex-col justify-evenly w-full p-3">
        <FeatureCard
          icon="/card-2-image.png"
          customClass="w-full mt-3 p-4"
          h2="Up to 30% discount on all movie tickets with Chip Mong Bank Visa ..."
          p="Give away 20 prizes every month! Top up your phone with Chip Mong Bank App! Win ..."
        />
        <FeatureCard
          icon="/card-2-image-2.png"
          customClass="w-full mt-3 p-4"
          h2="Up to 30% discount on all movie tickets with Chip Mong Bank Visa ..."
          p="Give away 20 prizes every month! Top up your phone with Chip Mong Bank App! Win ..."
        />
        <FeatureCard
          icon="/card-2-image-3.png"
          customClass="w-full mt-3 p-4"
          h2="Up to 30% discount on all movie tickets with Chip Mong Bank Visa ..."
          p="Give away 20 prizes every month! Top up your phone with Chip Mong Bank App! Win ..."
        />
      </div>
      <FQ
        h1="Frequently Asked Questions (FAQs)"
        p="Here you'll find answers to some of the most common questions we receive."
      />
    </>
  );
};

export default SavingComparison;
