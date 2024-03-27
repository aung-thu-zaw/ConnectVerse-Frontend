import React, { ReactNode, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

const ChatMenuDropdown: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const chatMenuRef = useClickOutside(() => {
    setDropdownOpen(false);
  });

  return (
    <>
      <div ref={chatMenuRef} className="w-auto">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-full  hover:bg-gray-100 dark:hover:bg-dark-secondary"
          >
            <svg
              className="flex-none size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="12" cy="5" r="1" />
              <circle cx="12" cy="19" r="1" />
            </svg>
          </button>
          <div
            className={`shadow-1 absolute right-0 mt-5 border border-gray-200 bg-light-background text-light-text dark:shadow-box-dark dark:border-dark-secondary dark:bg-dark-background dark:text-dark-text p-2 min-w-[200px] w-auto rounded-md transition-all ${
              dropdownOpen
                ? "top-full opacity-100 visible"
                : "top-[110%] invisible opacity-0"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatMenuDropdown;
