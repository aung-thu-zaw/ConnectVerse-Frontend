import React from 'react'
import MainMenuActionDropdown from '../Dropdowns/MainMenuActionDropdown'
import ChatListSearchForm from '../ChatListSearchForm'
import FolderTabs from '../FolderTabs'
import ChatList from '../ChatList'

const ChatAside: React.FC = () => {
  return (
    <>
      <div>
        <div className="flex items-center space-x-3.5 p-3">
          <MainMenuActionDropdown />

          <ChatListSearchForm />
        </div>

        <div className="border-b border-b-gray-200 dark:border-b-dark-secondary">
          <FolderTabs />
        </div>

        <div className="p-3 h-[645px] overflow-y-scroll hide-scrollbar">
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
    </>
  )
}

export default ChatAside
