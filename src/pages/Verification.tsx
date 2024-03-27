import React from "react";
import logo from "../assets/images/logo-color.png";

const Auth: React.FC = () => {
  return (
    <>
      <div className=" h-screen  bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
        <div className="container mx-auto h-full flex flex-col items-center justify-center space-y-10">
          <img src={logo} alt="Logo" className="h-28" />

          <div className="flex items-center space-x-3">
            <p className="font-semibold text-lg text-light-accent dark:text-dark-accent text-center max-w-[700px]">
              <i className="fa-solid fa-phone mr-3"></i>
              09 2622 55839
            </p>

            <button
              type="button"
              className="w-8 h-8 rounded-full text-xs bg-light-secondary dark:bg-dark-secondary border shadow dark:shadow-gray-500"
            >
              <i className="fa-solid fa-rotate"></i>
            </button>
          </div>

          <p className="font-semibold text-gray-600 dark:text-gray-400 text-center max-w-[700px]">
            We've sent a 6-digit verification code to the phone number you
            provided for login. Please check your messages and enter the code
            below to proceed. This extra layer of security helps keep your
            account safe.
          </p>

          <div className="flex items-center space-x-3">
            <div className="min-w-[300px]">
              <input
                type="text"
                className="px-5 py-4 rounded-md bg-light-secondary dark:bg-dark-secondary border w-full text-sm outline-none focus:border-light-accent dark:focus:border-dark-accent duration-200"
                placeholder="Enter 6-Digit Verification Code"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
