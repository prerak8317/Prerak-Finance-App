import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./common/Button";

function Navbar() {
  const [option, setOption] = useState(false);
  const [resOption, setResOption] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b shadow-sm text-black">
      <div className="mx-3 md:mx-8 flex items-center justify-between md:px-6 md:py-3 px-3 py-3">
        {/* Logo + Brand */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
            P
          </div>
          <span className="text-lg font-semibold">Prerak</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link to="/Home" className="block hover:text-red-600">
            Home
          </Link>
          <div className="relative group">
            <button
              className="hover:text-red-600 flex items-center gap-1"
              onClick={() => setOption(!option)}
            >
              Comparisons <span>▼</span>
            </button>
            {option && (
              <div className="absolute bg-white shadow-lg rounded-md mt-2 w-60">
                <Link
                  to="/LoansComparision"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Loans Comparison
                </Link>
                <Link
                  to="/SavingComparison"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Saving Account Comparison
                </Link>
                <Link
                  to="/FixedDepositComparison"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Fixed Deposit Account Comparison
                </Link>
              </div>
            )}
          </div>

          <div className="relative group">
            <button
              className="hover:text-red-600 flex items-center gap-1"
              onClick={() => setResOption(!resOption)}
            >
              Resources <span>▼</span>
            </button>
            {resOption && (
              <div className="absolute group-hover:block bg-white shadow-lg rounded-md mt-2 w-40">
                <Link to="/Blogs" className="block px-4 py-2 hover:bg-gray-100">
                  Blogs
                </Link>
                <Link
                  to="/Guides"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Guide & Tutorials
                </Link>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100"></a>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-red-600">
            Promotions
          </a>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-red-600 hidden md:flex">
            Log in
          </a>
          <Button text="Start Compares" />
          <a href="#" className="flex md:hidden">
            <img
              src="./public/bars.jpg"
              alt=""
              onClick={() => setOpen(!open)}
            />
          </a>
        </div>
      </div>
      {/* mobile */}
      {open && (
        <div className="md:hidden absolute w-full bg-white shadow-lg border-t">
          <nav className="flex flex-col gap-4 p-4 text-sm font-medium text-gray-700">
            <Link to="/Home" className="block hover:bg-gray-100">
              Home
            </Link>

            <div className="relative">
              <button
                className="hover:text-red-600 flex items-center gap-1 py-2"
                onClick={() => setOption(!option)}
              >
                Comparisons <span>▼</span>
              </button>
              {option && (
                <div className="bg-gray-50 rounded-md mt-2 ml-4">
                  <Link
                    to="/LoansComparision"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Loans Comparison
                  </Link>
                  <Link
                    to="/SavingComparison"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Saving Account Comparison
                  </Link>
                  <Link
                    to="/FixedDepositComparison"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Fixed Deposit Account Comparison
                  </Link>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="hover:text-red-600 flex items-center gap-1 py-2"
                onClick={() => setResOption(!resOption)}
              >
                Resources <span>▼</span>
              </button>
              {resOption && (
                <div className="bg-gray-50 rounded-md mt-2 ml-4">
                  <Link
                    to="/Blogs"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/Guides"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Guide & Tutorials
                  </Link>
                </div>
              )}
            </div>
            <a href="#" className="hover:text-red-600 py-2">
              Promotions
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
