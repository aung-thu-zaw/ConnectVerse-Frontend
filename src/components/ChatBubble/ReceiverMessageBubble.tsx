import React from "react";
import MessageActionDropdown from "../Dropdowns/MessageActionDropdown";
import DropdownItem from "../Dropdowns/DropdownItem";
import ReactionEmojiDropdown from "../Dropdowns/ReactionEmojiDropdown";

const ReceiverMessageBubble: React.FC = () => {
  return (
    <>
      <div className="w-full flex items-center justify-start">
        <div className="flex items-start gap-2.5">
          <img
            className="w-8 h-8 rounded-full"
            src="https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg"
            alt="Jese image"
          />
          <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-light-background rounded-e-xl rounded-es-xl dark:bg-dark-background">
            <div className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
              <span className="text-sm font-semibold text-light-text dark:text-dark-text">
                Bonnie Green
              </span>
              <span className="text-xs font-normal text-gray-500 dark:text-gray-400">
                <i className="fa-solid fa-clock mr-1"></i>
                11:46
              </span>
            </div>

            <p className="text-sm font-normal py-2.5 text-light-text dark:text-dark-text">
              That's awesome. I think our users will really appreciate the
              improvements.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <button
                  type="button"
                  className="flex items-center text-xs font-normal text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-dark-secondary rounded-full px-3 py-1.5 space-x-2"
                >
                  <span>👍</span>
                  <span className="font-semibold text-light-text dark:text-dark-text">
                    2
                  </span>
                </button>
                <button
                  type="button"
                  className="flex items-center text-xs font-normal text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-dark-secondary rounded-full px-3 py-1.5 space-x-2"
                >
                  <span>😂</span>
                  <span className="font-semibold text-light-text dark:text-dark-text">
                    2
                  </span>
                </button>
                <button
                  type="button"
                  className="flex items-center text-xs font-normal text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-dark-secondary rounded-full px-3 py-1.5 space-x-2"
                >
                  <span>😎</span>
                  <span className="font-semibold text-light-text dark:text-dark-text">
                    2
                  </span>
                </button>
              </div>

              <div className="text-xs font-normal text-gray-500 dark:text-gray-400">
                Send
                <i className="fa-solid fa-eye ml-2"></i>
              </div>
            </div>
          </div>

          <div className="space-y-3 mt-5">
            <div>
              <MessageActionDropdown position="left">
                <DropdownItem label="Reply" icon="fa-solid fa-reply" />
                <DropdownItem label="Copy Text" icon="fa-solid fa-copy" />
                <DropdownItem label="Pin" icon="fa-solid fa-thumbtack" />
                <DropdownItem label="Forward" icon="fa-solid fa-share" />
                <DropdownItem label="Select" icon="fa-solid fa-circle-check" />
                <DropdownItem label="Report" icon="fa-solid fa-flag" />

                <hr className="my-2" />

                <a
                  href="#"
                  className="block px-5 py-2 text-sm font-medium rounded-md text-red-500 hover:bg-gray-200 dark:hover:bg-[#000] dark:hover:bg-opacity-50"
                >
                  <i className="fa-solid fa-trash-can mr-2"></i>
                  Delete Chat
                </a>
              </MessageActionDropdown>
            </div>

            <div className="ml-1">
              <ReactionEmojiDropdown position="left" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceiverMessageBubble;
