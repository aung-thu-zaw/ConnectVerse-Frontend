import React from "react";
import MessageActionDropdown from "../Dropdowns/MessageActionDropdown";
import DropdownItem from "../Dropdowns/DropdownItem";
import ReactionEmojiDropdown from "../Dropdowns/ReactionEmojiDropdown";

const SenderImageAttachmentBubble: React.FC = () => {
  return (
    <>
      <div className="w-full flex items-center justify-end">
        <div className="flex items-start gap-2.5">
          <div className="space-y-3 mt-5">
            <div>
              <MessageActionDropdown position="right">
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
              <ReactionEmojiDropdown position="right" />
            </div>
          </div>

          <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-light-accent rounded-ee-xl rounded-s-xl dark:bg-dark-accent">
            <div className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
              <span className="text-xs font-normal text-gray-200">
                <i className="fa-solid fa-clock mr-1"></i>
                11:46
              </span>
              <span className="text-sm font-semibold text-white">
                Bonnie Green
              </span>
            </div>

            <p className="text-sm font-normal py-2.5 text-white">
              That's awesome. I think our users will really appreciate the
              improvements.
            </p>

            <div className="grid gap-2.5 grid-cols-2 my-2.5">
              <div className="group relative">
                <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <button
                    data-tooltip-target="download-image-1"
                    className="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                      />
                    </svg>
                  </button>
                  <div
                    id="download-image-1"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Download image
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
                <img
                  src="https://media.istockphoto.com/id/1368965646/photo/multi-ethnic-guys-and-girls-taking-selfie-outdoors-with-backlight-happy-life-style-friendship.jpg?s=612x612&w=0&k=20&c=qYST1TAGoQGV_QnB_vMd4E8jdaQUUo95Sa2JaKSl_-4="
                  className="rounded-lg"
                />
              </div>
              <div className="group relative">
                <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <button
                    data-tooltip-target="download-image-2"
                    className="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                      />
                    </svg>
                  </button>
                  <div
                    id="download-image-2"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Download image
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
                <img
                  src="https://t4.ftcdn.net/jpg/05/01/89/63/360_F_501896390_l5acKgYBwxrVBewEBfa0aWDruVtJWzD3.jpg"
                  className="rounded-lg"
                />
              </div>
              <div className="group relative">
                <div className="absolute w-full h-full bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <button
                    data-tooltip-target="download-image-3"
                    className="inline-flex items-center justify-center rounded-full h-8 w-8 bg-white/30 hover:bg-white/50 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"
                      />
                    </svg>
                  </button>
                  <div
                    id="download-image-3"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Download image
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
                <img
                  src="https://as1.ftcdn.net/v2/jpg/01/84/88/32/1000_F_184883286_arSVYOEqfEkq6ZnjhAqW4cNx7VlUgzm7.jpg"
                  className="rounded-lg"
                />
              </div>
              <div className="group relative">
                <button className="absolute w-full h-full bg-gray-900/90 hover:bg-gray-900/50 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-medium text-white">+7</span>
                  <div
                    id="download-image"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Download image
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </button>
                <img
                  src="https://as2.ftcdn.net/v2/jpg/01/62/40/13/1000_F_162401333_GSWJfJBW9S6FS0P5N0P6Ieyi14c53v9A.jpg"
                  className="rounded-lg"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-xs text-right font-normal text-gray-200">
                Send
                <i className="fa-solid fa-eye ml-2"></i>
              </div>

              <div className="flex items-center space-x-1">
                <button
                  type="button"
                  className="flex items-center text-xs font-normal text-gray-500 dark:text-gray-400 bg-green-700 rounded-full px-3 py-1.5 space-x-2"
                >
                  <span>👍</span>
                  <span className="font-semibold text-dark-text dark:text-dark-text">
                    2
                  </span>
                </button>
                <button
                  type="button"
                  className="flex items-center text-xs font-normal text-gray-500 dark:text-gray-400 bg-green-700 rounded-full px-3 py-1.5 space-x-2"
                >
                  <span>😂</span>
                  <span className="font-semibold text-dark-text dark:text-dark-text">
                    2
                  </span>
                </button>
                <button
                  type="button"
                  className="flex items-center text-xs font-normal text-gray-500 dark:text-gray-400 bg-green-700 rounded-full px-3 py-1.5 space-x-2"
                >
                  <span>😎</span>
                  <span className="font-semibold text-dark-text dark:text-dark-text">
                    2
                  </span>
                </button>
              </div>
            </div>
          </div>

          <img
            className="w-8 h-8 rounded-full"
            src="https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg"
            alt="Jese image"
          />
        </div>
      </div>
    </>
  );
};

export default SenderImageAttachmentBubble;
