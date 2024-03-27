import React, { ReactNode, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

const MessageActionDropdown: React.FC<{
  children: ReactNode;
  position: string;
}> = ({ children, position }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const messageActionRef = useClickOutside(() => {
    setDropdownOpen(false);
  });

  return (
    <>
      <div ref={messageActionRef} className="w-auto">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center justify-center w-8 h-8 rounded-md bg-light-background dark:bg-dark-background hover:bg-gray-100 dark:hover:bg-dark-secondary"
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
            className={`shadow-1 absolute z-30 mt-2 border border-gray-200 bg-light-background text-light-text dark:shadow-box-dark dark:border-dark-secondary dark:bg-dark-background dark:text-dark-text p-2 min-w-[200px] w-auto rounded-md transition-all ${
              dropdownOpen
                ? "top-full opacity-100 visible"
                : "top-[110%] invisible opacity-0"
            } ${position === "left" ? "left-0" : "right-0"}`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageActionDropdown;
