import React from "react";
import MessageBoxSearchResultList from "./MessageBoxSearchResultList";

const MessageSearchBox: React.FC = () => {
  return (
    <>
      <div className="p-3 h-full border-l border-light-secondary dark:border-dark-secondary">
        <div className="flex items-center space-x-3">
          <form className="w-full">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>

              <input
                type="text"
                id="default-search"
                className="block w-full p-3.5 pl-10 text-sm  rounded-lg  transition-all focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-400 font-medium text-light-text bg-gray-100 border dark:bg-dark-secondary dark:text-gray-100 dark:border-gray-600"
                placeholder="Search ..."
              />
            </div>
          </form>

          <button
            type="button"
            className="min-w-10 min-h-10 rounded-lg text-light-text hover:bg-gray-100 dark:bg-dark-secondary dark:text-gray-100"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="py-5">
          <p className="text-xs font-semibold text-light-text dark:text-dark-text text-right mb-5">
            ( 20 ) Results Found
          </p>
          <div>
            <MessageBoxSearchResultList />
            <MessageBoxSearchResultList />
            <MessageBoxSearchResultList />
            <MessageBoxSearchResultList />
            <MessageBoxSearchResultList />
            <MessageBoxSearchResultList />
            <MessageBoxSearchResultList />
            <MessageBoxSearchResultList />
            <MessageBoxSearchResultList />
            <MessageBoxSearchResultList />
            <MessageBoxSearchResultList />
            <MessageBoxSearchResultList />
            <MessageBoxSearchResultList />
            <MessageBoxSearchResultList />
            <MessageBoxSearchResultList />
            <MessageBoxSearchResultList />
            <MessageBoxSearchResultList />
            <MessageBoxSearchResultList />
            <MessageBoxSearchResultList />
            <MessageBoxSearchResultList />
          </div>
          {/* <p className="text-center font-bold text-sm mt-10">
          <i className="fa-solid fa-message mr-2"></i>
          Search For Messages
        </p> */}
          {/* <p className="text-center font-bold text-sm">
          <i className="fa-solid fa-cancel mr-2"></i>
          No Messages Found!
        </p> */}
        </div>
      </div>
    </>
  );
};

export default MessageSearchBox;
