import React, { useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import ToggleModeButton from "../ToggleModeButton";

const MainMenuActionDropdown: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const mainActionRef = useClickOutside(() => {
    setDropdownOpen(false);
  });

  return (
    <>
      <div ref={mainActionRef} className="w-auto">
        <div className="relative">
          <button
            type="button"
            className="min-w-10 min-h-10 rounded-full text-light-text hover:bg-gray-100 dark:bg-dark-secondary dark:text-gray-100"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <i className="fa-solid fa-bars"></i>
          </button>

          <div
            className={`shadow-1 absolute left-0 mt-5 border border-gray-200 bg-light-background text-light-text dark:shadow-box-dark dark:border-dark-secondary dark:bg-dark-background dark:text-dark-text p-2 min-w-[210px] w-auto rounded-md transition-all ${
              dropdownOpen
                ? "top-10 opacity-100 visible"
                : "-top-[100%] invisible opacity-0"
            }`}
          >
            <button
              type="button"
              className="w-full text-left block px-5 py-2 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-[#000] dark:hover:bg-opacity-50"
            >
              <i className="fa-solid fa-bookmark mr-5"></i>
              Saved Messages
            </button>
            <button
              type="button"
              className="w-full text-left block px-5 py-2 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-[#000] dark:hover:bg-opacity-50"
            >
              <i className="fa-solid fa-contact-book mr-5"></i>
              Contacts
            </button>
            <button
              type="button"
              className="w-full text-left block px-5 py-2 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-[#000] dark:hover:bg-opacity-50"
            >
              <i className="fa-solid fa-gear mr-5"></i>
              Settings
            </button>
            <button
              type="button"
              className="w-full text-left block px-5 py-2 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-[#000] dark:hover:bg-opacity-50"
            >
              <i className="fa-solid fa-folder mr-5"></i>
              Chat Folders
            </button>
            <ToggleModeButton />
            <button
              type="button"
              className="w-full text-left block px-5 py-2 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-[#000] dark:hover:bg-opacity-50"
            >
              <i className="fa-solid fa-bug mr-5"></i>
              Report Bug
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenuActionDropdown;
