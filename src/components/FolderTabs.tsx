import React from "react";

const FolderTabs: React.FC = () => {
  return (
    <>
      <div className="flex items-center space-x-1 px-3 overflow-x-scroll hide-scrollbar">
        <button
          type="button"
          className="text-sm px-3 py-2.5 rounded-t-md space-x-1.5 font-medium flex items-center justify-center border-b-[3px] text-light-text hover:bg-gray-100 border-b-light-accent dark:text-dark-text dark:hover:bg-dark-secondary  dark:border-b-dark-accent"
        >
          <span className="block">All</span>
          <div className="text-white rounded-full w-4 h-4 text-[0.6rem] flex items-center justify-center bg-light-accent dark:bg-dark-accent">
            4
          </div>
        </button>
        <button
          type="button"
          className="text-sm px-3 py-2.5 rounded-t-md space-x-1.5 font-medium flex items-center justify-center text-light-text hover:bg-gray-100 dark:text-dark-text dark:hover:bg-dark-secondary"
        >
          <span className="block">English</span>
          <div className="text-white rounded-full w-4 h-4 text-[0.6rem] flex items-center justify-center bg-light-accent dark:bg-dark-accent">
            40
          </div>
        </button>
        <button
          type="button"
          className="text-sm px-3 py-2.5 rounded-t-md space-x-1.5 font-medium flex items-center justify-center text-light-text hover:bg-gray-100 dark:text-dark-text dark:hover:bg-dark-secondary"
        >
          <span className="block">Programming</span>
          <div className="text-white rounded-full w-4 h-4 text-[0.6rem] flex items-center justify-center bg-light-accent dark:bg-dark-accent">
            13
          </div>
        </button>
        <button
          type="button"
          className="text-sm px-3 py-2.5 rounded-t-md space-x-1.5 font-medium flex items-center justify-center text-light-text hover:bg-gray-100 dark:text-dark-text dark:hover:bg-dark-secondary"
        >
          <span className="block">Movie</span>
          <div className="text-white rounded-full w-4 h-4 text-[0.6rem] flex items-center justify-center bg-light-accent dark:bg-dark-accent">
            1
          </div>
        </button>
        <button
          type="button"
          className="text-sm px-3 py-2.5 rounded-t-md space-x-1.5 font-medium flex items-center justify-center text-light-text hover:bg-gray-100 dark:text-dark-text dark:hover:bg-dark-secondary"
        >
          <span className="block">Music</span>
          <div className="text-white rounded-full w-4 h-4 text-[0.6rem] flex items-center justify-center bg-light-accent dark:bg-dark-accent">
            9
          </div>
        </button>
      </div>
    </>
  );
};

export default FolderTabs;
