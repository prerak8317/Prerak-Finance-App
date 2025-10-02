import React from "react";
import Button from "../common/Button";
import FeatureCard from "../common/FeatureCard";

function Hero() {
  return (
    <>
      {/* hero section  */}
      <div className="flex flex-col items-center justify-center mt-8 md:mt-[80px] w-full h-full">
        <button className="bg-[#FFE8E9] text-red-600 pr-2 py-1 rounded-xl">
          <span className="bg-red-600 text-white p-2 py-1 mr-2 rounded-xl">
            New Feature
          </span>
          Unlock the power of AI Chatbot
        </button>

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
          <Button
            text="Learn More"
            className="px-[120px] md:px-4 md:py-2 bg-white !text-black border border-1 border-gray-400"
          />
          <Button text="Get Started" className="px-[120px] md:px-4 md:py-2" />
        </div>
        <img
          src="../public/screen.png"
          alt=""
          className="mt-5 hidden md:block h-auto w-[70%]"
        />
        <img
          src="../public/Macbook-Pro-16-mockup-mobile.png"
          alt=""
          className="mt-5 block md:hidden w-full h-auto"
        />
        <p className="mt-8 text-[20px] text-center">
          The trusted provider over 150+ companies from Cambodia, of accuracy
          rates and financial information
        </p>
        <img
          src="../public/Bank-logo.png"
          alt=""
          className="mt-6 hidden md:block h-auto"
        />
        <img
          src="../public/Bank-logo-mobile.png"
          alt=""
          className="mt-6 block md:hidden h-auto"
        />
      </div>
      {/* feature section  */}
      <div className="flex flex-col items-center justify-center mt-[100px] md:mt-[80px] w-full h-full ">
        <Button text="Feature" />
        <h1 className="text-[25px] md:text-[45px] text-center font-semibold mt-5">
          Find Your Perfect Features With Our <br />
          Comparison Function in Seconds
        </h1>
        <p className="text-center mt-5">
          Our user-friendly comparison tool makes it easy to streamline your
          decision-making process.
        </p>
        <img
          src="../public/screen-two.png"
          alt=""
          className="mt-5 hidden md:block h-auto w-[70%]"
        />
        <img
          src="../public/screen-two-mobile.png"
          alt=""
          className="mt-5 block md:hidden w-full h-auto"
        />
      </div>
      {/* Feature card  */}
      <div className="md:flex md:flex-row flex flex-col justify-evenly w-full">
        <FeatureCard
          icon="/Featured-icon-1.png"
          className="w-12 mt-3"
          h2=" Grow Your Possibilities with 
          Flexible Loans"
          p="Secure the funds you need for any goal, big or small, with our flexible loan options. Explore competitive rates and convenient repayment plans."
        />
        <FeatureCard
          icon="/Featured-icon-2.png"
          className="w-12 mt-3"
          h2="Effortlessly Save and Watch Your Money Grow"
          p="Build your financial future with our secure and easy-to-use savings account. Earn interest on your deposits and enjoy convenient access to your funds."
        />
        <FeatureCard
          icon="/Featured-icon-3.png"
          className="w-12 mt-3"
          h2="Earn Guaranteed Returns with a Fixed Deposit"
          p="Our fixed deposit accounts offer attractive interest rates that are locked in for a set term. Grow your savings securely and predictably."
        />
      </div>
      {/* Map  */}
      <div>
        <div className="h-screen w-full bg-[url('/Map-Dot.png')] bg-cover bg-center flex flex-col items-center justify-center mt-5">
          <Button text="Locations" />
          <h1 className="text-center md:text-[40px] text-[25px] font-semibold">
            Compare Your Finance Over <br />
            Cambodia’s Bank
          </h1>
          <p className="text-center p-6">
            Our platform offers a powerful financial comparison tool that allows
            you to easily <br /> compare various financial products and services
            offered by different banks in <br /> Cambodia.
          </p>
        </div>
      </div>
      <div className="md:flex md:flex-row md:justify-between flex flex-col justify-center items-center md:items-start px-9 pt-5">
        <div>
          <p className="text-red-600 font-medium text-center md:text-left">
            Our Promotions
          </p>
          <h1 className="text-[30px] font-semibold text-center md:text-left">
            Lasted Promotions
          </h1>
          <p className="text-center md:text-left">
            Our platform keeps you updated on the most current and exciting
            promotions <br /> from banks and financial institutions in Cambodia.
          </p>
        </div>
        <div>
          <Button text="View More" className="mt-5 md:mt-0" />
        </div>
      </div>
      {/* Feature card 2 */}
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
    </>
  );
}

export default Hero;
