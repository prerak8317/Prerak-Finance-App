import React from "react";
import Button from "./Button";

function FeatureCard({ icon, customClass, h2, p }) {
  return (
    <>
      <div className="md:w-[30%] w-full border border-1 border-gray-200 rounded-lg flex flex-col items-center mt-7">
        <img src={icon} className={`${customClass}`} />
        <h2
          className={`${customClass} text-[25px] text-center mt-5 font-semibold`}
        >
          {h2}
        </h2>
        <p className={`${customClass} text-center mt-2`}>{p}</p>
        <Button
          text="Learn More ->"
          className="bg-white !text-black mt-4 mb-2"
        />
      </div>
    </>
  );
}

export default FeatureCard;
