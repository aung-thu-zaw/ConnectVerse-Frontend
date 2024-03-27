import React, { useEffect, useRef, useState } from "react";

const VideoChatPanel: React.FC = () => {
  const [panelOpen, setPanelOpen] = useState<boolean>(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }) => {
      if (!panelOpen || keyCode !== 27) return;
      setPanelOpen(false);
    };
    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  }, [panelOpen]);

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => setPanelOpen(true)}
          className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-dark-secondary"
        >
          <i className="fa-solid fa-video"></i>
        </button>

        <div
          ref={panelRef}
          className={`fixed left-0 top-0 z-30 flex flex-col h-full min-h-screen w-full items-center space-y-5 justify-center bg-light-background dark:bg-dark-background px-4 py-5 ${
            panelOpen ? "animate-zoomIn" : "animate-zoomOut"
          }`}
        >
          <button
            type="button"
            onClick={() => setPanelOpen(false)}
            className="absolute right-5 top-5 min-w-10 min-h-10 rounded-lg text-light-text hover:bg-gray-100 dark:bg-dark-secondary dark:text-gray-100"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <div className="w-[85%] h-[85%] rounded-md overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/1313246059/photo/online-conference-of-diverse-employees-on-the-screen.jpg?s=612x612&w=0&k=20&c=8QTqcR_MF0hti-XbFj_kgR5ITW0dyErv8qWQhc_CBHo="
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="border flex items-center justify-center space-x-5 min-w-[500px] w-[800px] rounded-full px-5 py-3 shadow bg-gray-200 border-gray-300 dark:bg-dark-secondary dark:border-neutral-600">
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-gray-300 dark:bg-dark-background  text-light-accent dark:text-dark-accent flex items-center justify-center"
            >
              <i className="fa-solid fa-microphone"></i>
            </button>

            <button
              type="button"
              className="w-10 h-10 rounded-full bg-red-600 text-white hover:bg-red-700 flex items-center justify-center"
            >
              <i className="fas fa-phone-slash"></i>
            </button>

            <button
              type="button"
              className="w-10 h-10 rounded-full bg-gray-300 text-light-text dark:text-dark-text dark:bg-dark-background flex items-center justify-center"
            >
              <i className="fa-solid fa-video"></i>
            </button>

            {/* <button
              type="button"
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <i className="fa-solid fa-desktop"></i>
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoChatPanel;
