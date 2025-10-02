import React from "react";
import Button from "../common/Button";

const Blogs = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8 md:mt-[80px] w-full h-full">
      <Button
        text="Blogs"
        className="px-[120px] md:px-4 md:py-2 bg-white !text-black border border-1 border-gray-400"
      />
      <h1 className="text-[30px] md:text-[55px] text-center font-bold mt-5">
        Unlock Your Financial Potential with <br /> ProAdvisor's Innovative
        Solutions
      </h1>
      <p className="text-center mt-5">
        Our platform provides a comprehensive suite of cutting-edge tools and
        expert <br />
        guidance to empower you in making informed financial decisions.
      </p>
      <div className="md:flex-row flex flex-col justify-center items-center gap-2 mt-5 w-full">
        <input
          type="text"
          className="px-[120px] md:px-4 md:py-2 border border-gray-400 rounded-lg"
          placeholder="Enter Your Email"
        />
        <Button
          text="Subscribe"
          className="px-[120px] md:px-4 md:py-2 bg-red-500 hover:bg-red-600 !text-white border border-1 border-gray-400"
        />
      </div>
    </div>
  );
};

export default Blogs;
