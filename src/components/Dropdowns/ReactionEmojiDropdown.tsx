import React, { useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import EmojiPicker, { Theme, EmojiStyle } from "emoji-picker-react";

const ReactionEmojiDropdown: React.FC<{ position: string }> = ({
  position,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const reactionEmojiDropdownRef = useClickOutside(() => {
    setDropdownOpen(false);
  });

  return (
    <div ref={reactionEmojiDropdownRef} className="relative">
      <button
        type="button"
        className={`text-xs font-normal w-6 h-6 flex items-center justify-center rounded-full   hover:text-green-500 bg-light-background dark:bg-dark-background hover:bg-gray-100 dark:hover:bg-dark-secondary ${
          dropdownOpen
            ? "text-green-500 dark:text-green-500"
            : "text-gray-500 dark:text-gray-400"
        }`}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <i className="fa-solid fa-smile"></i>
      </button>

      <div
        className={`absolute z-30 ${
          position === "left" ? "left-8" : "right-8"
        } -top-3 min-w-[200px] w-auto rounded-md transition-all ${
          dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <EmojiPicker
          reactionsDefaultOpen
          allowExpandReactions={false}
          lazyLoadEmojis={true}
          emojiStyle={"facebook" as EmojiStyle}
          theme={localStorage.getItem("color-theme") as Theme}
        />
      </div>
    </div>
  );
};

export default ReactionEmojiDropdown;
