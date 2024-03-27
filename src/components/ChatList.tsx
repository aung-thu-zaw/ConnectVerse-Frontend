import React from "react";

const ChatList: React.FC = () => {
  return (
    <>
      <div className="p-3 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-secondary ">
        <div className="flex items-center space-x-3">
          <img
            className="inline-block size-[42px] rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Image Description"
          />
          <div className="flex flex-col items-start w-full">
            <div className="flex items-center justify-between w-full text-light-text dark:text-dark-text">
              <h3 className="text-sm font-bold  mb-1">Aung Thu Zaw</h3>
              <div className="text-[0.65rem] space-x-2">
                <span className="font-medium">Sun</span>
                <span className="text-light-accent dark:text-dark-accent">
                  <i className="fa-solid fa-check-double"></i>
                </span>
              </div>
            </div>
            <div className="text-xs font-medium flex items-center justify-between space-x-3 w-full">
              <p className=" text-gray-500 dark:text-gray-400 line-clamp-1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                ipsum non accusantium repellat sint aperiam illum id nihil
                possimus autem vel dolor quod aliquam tempore, perspiciatis ab
                ipsam. Eos, accusantium?
              </p>

              <div className="bg-light-accent min-w-5 min-h-5 rounded-full flex items-center justify-center text-[0.6rem] font-semibold text-white">
                10
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatList;
