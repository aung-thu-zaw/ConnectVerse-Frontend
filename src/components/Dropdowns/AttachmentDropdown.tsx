import React, { useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

const AttachmentDropdown: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const attachmentRef = useClickOutside(() => {
    setDropdownOpen(false);
  });

  return (
    <>
      <div ref={attachmentRef} className="w-auto">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            // className="flex items-center justify-center w-10 h-10 rounded-full  hover:bg-gray-100 dark:hover:bg-dark-secondary"
            className="min-w-10 min-h-10 rounded-full text-gray-600 dark:text-gray-400 hover:text-light-accent dark:hover:text-dark-accent hover:bg-gray-100 dark:hover:bg-dark-background"
          >
            <i className="fa-solid fa-paperclip"></i>
          </button>
          <div
            className={`shadow-1 absolute right-0 mt-5 border border-gray-200 bg-light-background text-light-text dark:shadow-box-dark dark:border-dark-secondary dark:bg-dark-background dark:text-dark-text p-2 min-w-[200px] w-auto rounded-md transition-all ${
              dropdownOpen
                ? "-top-[133px] opacity-100 visible"
                : "-top-[110%] invisible opacity-0"
            }`}
          >
            <button
              type="button"
              className="w-full text-left block px-5 py-2 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-[#000] dark:hover:bg-opacity-50"
            >
              <i className="fa-solid fa-image mr-2"></i>
              Photo or Video
            </button>
            <button
              type="button"
              className="w-full text-left block px-5 py-2 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-[#000] dark:hover:bg-opacity-50"
            >
              <i className="fa-solid fa-file mr-2"></i>
              File
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttachmentDropdown;
