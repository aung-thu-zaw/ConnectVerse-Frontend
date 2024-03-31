import React from 'react'
import MessageBoxNavBar from './MessageBoxNavBar'
import ReceiverMessageBubble from './ChatBubble/ReceiverMessageBubble'
import SenderMessageBubble from './ChatBubble/SenderMessageBubble'
import ReceiverFileAttachmentBubble from './ChatBubble/ReceiverFileAttachmentBubble'
import SenderFileAttachmentBubble from './ChatBubble/SenderFileAttachmentBubble'
import ReceiverImageAttachmentBubble from './ChatBubble/ReceiverImageAttachmentBubble'
import SenderImageAttachmentBubble from './ChatBubble/SenderImageAttachmentBubble'
import MessageInputBox from './MessageInputBox'

const MainChatWindow: React.FC = () => {
  return (
    <>
      <main className="hidden w-full md:block h-full">
        <div className="w-full">
          <MessageBoxNavBar />
        </div>

        <div
          className="px-10 h-full"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-vector/chat-time-chalk-drawing-design-doodle-vector-clip-art-set-elements-seamless-pattern-icons-speech-bubble-message-emoji-letter-gadget-white-monochrome-design-isolated-dark-background_153823-116.jpg')",
            backgroundPosition: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backgroundBlendMode: 'multiply',
            //   backgroundImage:
            //     "url('https://st3.depositphotos.com/28989096/35612/v/450/depositphotos_356120386-stock-illustration-chat-time-cartoon-doodle-seamless.jpg')",
            //   backgroundPosition: "center",
            //   backgroundColor: "rgba(0, 0, 0, 0.1)",
            //   backgroundBlendMode: "multiply",
          }}
        >
          <div className="flex flex-col-reverse py-3 space-y-5 w-full h-[650px] overflow-y-scroll hide-scrollbar">
            <ReceiverMessageBubble />

            <SenderMessageBubble />

            <ReceiverFileAttachmentBubble />

            <p className="text-xs text-center font-bold text-light-text dark:text-dark-text w-full">
              September 22, 2023
            </p>

            <SenderFileAttachmentBubble />

            <ReceiverImageAttachmentBubble />

            <SenderMessageBubble />

            <SenderImageAttachmentBubble />

            <p className="text-xs text-center font-bold text-light-text dark:text-dark-text w-full">
              September 23, 2023
            </p>

            <ReceiverFileAttachmentBubble />

            <ReceiverImageAttachmentBubble />

            <ReceiverMessageBubble />
          </div>

          <div className="py-5">
            <MessageInputBox />
          </div>
        </div>
      </main>
    </>
  )
}

export default MainChatWindow
