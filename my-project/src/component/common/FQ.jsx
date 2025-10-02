import React, { useState } from "react";
import FAQs from "/public/plus-f&q.png";
import Button from "./Button";

function FQ({ h1, p }) {
  const [open, setOpen] = useState(false);
  const fq = [
    { question: "What can I compare on the Proadvisor comparison page?" },
    { question: "How do I use the comparison page?" },
    { question: "Is there a cost to using the comparison page?" },
    { question: "Is the information on the comparison page accurate?" },
    { question: "What if I can't decide which advisor is right for me?" },
  ];
  return (
    <>
      <div className="w-full h-fit flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center mt-10">
          <h1 className="mb-5 md:text-3xl text-2xl font-bold text-center">
            {h1}
          </h1>
          <p className="text-center">{p}</p>
        </div>
        <div className="mt-10 flex justify-center flex-col">
          {fq.map(function (item, i) {
            return (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b-2 pt-5 pb-3 md:px-7 px-3 text-center cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <p className="sm:text-left mb-3 sm:mb-0">{item.question}</p>
                <img
                  src={FAQs}
                  alt="FAQs"
                  className="w-5 h-5 mx-auto sm:mx-0"
                />
              </div>
            );
          })}
        </div>
        <div className="w-full h-fit flex flex-col items-center justify-center py-10">
          <img src="/public/Avatar-group.png" alt="" />
          <h1 className="font-bold mb-4">Still have questions?</h1>
          <p className="text-center mb-4">
            If you still have a question that's not listed, don't hesitate to
            contact us via our contact <br /> page. We're happy to help!
          </p>
          <Button text="Get in Touch" />
        </div>
      </div>
    </>
  );
}

export default FQ;
