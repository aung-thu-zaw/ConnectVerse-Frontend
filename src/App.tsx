import React from "react";
import ChatList from "./components/ChatList";
import MainMenuActionDropdown from "./components/Dropdowns/MainMenuActionDropdown";
import MessageSearchBox from "./components/MessageSearchBox";
import FolderTabs from "./components/FolderTabs";
import MainChatMessageInterface from "./components/MainChatMessageInterface";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <div className="flex items-start justify-between h-screen overflow-hidden bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
        <aside className="w-full min-w-[350px] md:w-3/12 h-full border-r border-light-secondary dark:border-dark-secondary">
          <div>
            <div className="flex items-center space-x-3.5 p-3">
              <MainMenuActionDropdown />

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

                  {/* <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-5 hover:cursor-pointer text-gray-500 hover:text-red-600 transition-all"
                >
                  <i className="fa-solid fa-circle-xmark"></i>
                </button> */}
                  <input
                    type="text"
                    id="default-search"
                    className="block w-full p-3.5 pl-10 text-sm  rounded-full  transition-all focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-slate-400 font-medium text-light-text bg-gray-100 border dark:bg-dark-secondary dark:text-gray-100 dark:border-gray-600"
                    placeholder="Search ..."
                  />
                </div>
              </form>
            </div>

            <div className="border-b border-b-gray-200 dark:border-b-dark-secondary">
              <FolderTabs />
            </div>

            <div className="p-3 h-[700px] overflow-y-scroll hide-scrollbar">
              <ChatList />
              <ChatList />
              <ChatList />
              <ChatList />
              <ChatList />
              <ChatList />
              <ChatList />
              <ChatList />
              <ChatList />
              <ChatList />
              <ChatList />
              <ChatList />
              <ChatList />
              <ChatList />
            </div>
          </div>
        </aside>

        <MainChatMessageInterface />

        <aside className="min-w-[350px] w-full md:w-3/12 md:block hidden">
          <MessageSearchBox />
        </aside>
      </div>
    </>
  );
};

export default App;
