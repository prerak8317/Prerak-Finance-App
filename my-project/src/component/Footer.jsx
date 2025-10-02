import Button from "./common/Button";
import FooterText from "./common/FooterText";

const Footer = () => {
  return (
    <>
      <div className="md:flex md:flex-row flex flex-col justify-between px-12 mt-[120px] md:text-left text-center items-center">
        <div>
          <h1 className="text-[30px]">
            Unlock Your Financial Potential with Proadvisor!
          </h1>
          <p className="mt-3">
            More than 150 trusted financial information providers in Cambodia
          </p>
        </div>
        <div className="flex gap-2 mt-8">
          <Button text="Learn more" className="bg-white !text-black border-2" />
          <Button text="Get started" />
        </div>
      </div>

      <div className="md:flex md:flex-row grid grid-cols-1 justify-between px-12 mt-12 gap-x-20 gap-y-10">
        {/* Company Info */}
        <div className="flex flex-col max-w-[20rem]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
              P
            </div>
            <span className="text-lg font-semibold">Prerak</span>
          </div>
          <p className="mt-4 text-gray-600">
            Prerak is a trusted financial advisory platform designed to empower
            individuals in making informed financial decisions.
          </p>
        </div>

        {/* Footer Links */}
        <FooterText
          className="flex flex-col gap-4"
          items={["Comparisons", "Loans", "Saving Accounts", "Fixed Deposit"]}
        />
        <FooterText
          className="flex flex-col gap-4"
          items={["Company", "About Us", "Promotions", "Contact Us"]}
        />
        <FooterText
          className="flex flex-col gap-4"
          items={[
            "Resources",
            "Articles",
            "Guides",
            "Tutorials",
            "Help Center",
            "Support",
          ]}
        />
        <FooterText
          className="flex flex-col gap-4"
          items={[
            "Career",
            "Internship",
            "Announcement",
            "Job Opportunity",
            "How to Apply",
          ]}
        />
        <FooterText
          className="flex flex-col gap-4"
          items={["Legal", "Term Conditions", "Privacy", "Cookies", "Settings"]}
        />
      </div>
      <hr />
      <div className="px-12 mt-8 mb-3 flex justify-between">
        <p className="md:text-[15px] text-[12px]">
          © 2025 Proadvisor. All rights reserved.
        </p>
        <div className="flex gap-4">
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
    </>
  );
};

export default Footer;
