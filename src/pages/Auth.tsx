import React from "react";
import logo from "../assets/images/logo-color.png";

const Auth: React.FC = () => {
  return (
    <>
      <div className=" h-screen  bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
        <div className="container mx-auto h-full flex flex-col items-center justify-center space-y-10">
          <img src={logo} alt="Logo" className="h-28" />

          <p className="font-semibold text-gray-600 dark:text-gray-400 text-center max-w-[700px]">
            Welcome to Our ConnectVerse Communication Platform! Please enter
            your phone number below and we'll send you a 6-digit confirmation
            code to verify your account. If you're already registered, simply
            enter your phone number to log in. Let's get started!
          </p>

          <div className="flex items-center space-x-3">
            <div className="min-w-[300px]">
              <input
                type="text"
                className="px-5 py-4 rounded-md bg-light-secondary dark:bg-dark-secondary border w-full text-sm outline-none focus:border-light-accent dark:focus:border-dark-accent duration-200"
                placeholder="Enter Your Phone Number..."
              />
            </div>
            <button
              type="button"
              className="text-light-text dark:text-dark-text bg-light-accent dark:bg-dark-accent px-5 py-4 rounded-md text-sm font-bold"
            >
              Submit
              <i className="fa-solid fa-paper-plane ml-3"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
