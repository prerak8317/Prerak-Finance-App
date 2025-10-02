import React from "react";
import LoanCalculater from "../common/LoanCalculater";
import Graph from "../common/Graph";
import TableContent from "../common/TableContent";
import LoanCalculaterblack from "../common/LoanCalculaterblack";
import FeatureCard from "../common/FeatureCard";
import FQ from "../common/FQ";
import BankCard from "../common/BankCard";

const FixedDepositComparison = () => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center mt-10">
        <LoanCalculater />
      </div>
      <div className="text-black text-center w-full flex flex-col items-center mt-20 px-4">
        <h2 className="text-[20px] font-bold">
          <span className="text-green-600">Loan Comparison Updated!</span> Find
          the Latest Rates Now
        </h2>
        <p className="text-center mt-4">
          We've refreshed our loan comparison results with the most up-to-date
          rates and <br className="hidden md:block" /> offers. Explore the
          latest deals from different lenders and find the perfect loan for{" "}
          <br className="hidden md:block" /> your needs. Get started saving
          money today!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 w-full max-w-7xl">
          <BankCard
            bankName="Acleda Bank"
            rating="5.0"
            interestRate="9.2%"
            loanAmount="100,000"
            loanType="SME Loan"
          />
          <BankCard
            bankName="ABA Bank"
            rating="4.8"
            interestRate="8.5%"
            loanAmount="150,000"
            loanType="Business Loan"
          />
          <BankCard
            bankName="Canadia Bank"
            rating="4.7"
            interestRate="9.0%"
            loanAmount="120,000"
            loanType="Personal Loan"
          />
          <BankCard
            bankName="Wing Bank"
            rating="4.6"
            interestRate="8.8%"
            loanAmount="80,000"
            loanType="Home Loan"
          />
          <BankCard
            bankName="Phillip Bank"
            rating="4.9"
            interestRate="7.5%"
            loanAmount="200,000"
            loanType="Corporate Loan"
          />
          <BankCard
            bankName="Vattanac Bank"
            rating="4.5"
            interestRate="9.5%"
            loanAmount="90,000"
            loanType="Car Loan"
          />
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

export default FixedDepositComparison;
