import React, { useState } from 'react'
import EmojiPicker, { Theme } from 'emoji-picker-react'
import useClickOutside from '../hooks/useClickOutside'
import AttachmentDropdown from './Dropdowns/AttachmentDropdown'

const MessageInputBox: React.FC = () => {
  const [emojiBoxOpen, setEmojiBoxOpen] = useState(false)

  const emojiBoxRef = useClickOutside(() => {
    setEmojiBoxOpen(false)
  })

  return (
    <>
      <form className="flex items-center justify-center space-x-3">
        <div className="relative min-w-[350px] max-w-[700px] rounded-lg px-5 py-3 flex items-center space-x-1.5 w-full bg-light-background dark:bg-dark-secondary">
          <div>
            <div
              ref={emojiBoxRef}
              className={`absolute -top-[460px] transition-all ${emojiBoxOpen ? 'block ' : 'hidden'}`}
            >
              <EmojiPicker
                theme={localStorage.getItem('color-theme') as Theme}
              />
            </div>
            <button
              type="button"
              className={`min-w-10 min-h-10 rounded-full text-gray-600 dark:text-gray-400 hover:text-light-accent dark:hover:text-dark-accent hover:bg-gray-100 dark:hover:bg-dark-background ${emojiBoxOpen ? 'text-light-accent dark:text-dark-accent bg-gray-100 dark:bg-dark-background' : ''}`}
              onClick={() => setEmojiBoxOpen(!emojiBoxOpen)}
            >
              <i className="fa-regular fa-smile"></i>
            </button>
          </div>

          <div className="w-full">
            <input
              type="text"
              className="border-none outline-none bg-transparent  text-sm w-full"
              placeholder="Message ..."
            />
          </div>

          <AttachmentDropdown />
        </div>

        <button
          type="button"
          className="min-w-14 min-h-14 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 bg-light-background hover:bg-light-accent  dark:bg-dark-secondary hover:dark:bg-dark-accent hover:text-white hover:dark:text-white duration-200"
        >
          <i className="fa-solid fa-microphone"></i>
        </button>
      </form>
    </>
  )
}

export default MessageInputBox
