import React, { useState } from 'react'
import MainChatWindow from '../components/MainChatWindow'
import BottomNavigation from '../components/BottomNavigation'
import ChatAside from '../components/Asides/ChatAside'
import SettingAside from '../components/Asides/SettingAside'
import ContactAside from '../components/Asides/ContactAside'
import RecentCallAside from '../components/Asides/RecentCallAside'

const ChatInterface: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('chats')
  return (
    <>
      <div className="flex items-start justify-between h-screen overflow-hidden bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
        <aside className="w-full min-w-[350px] md:w-3/12 h-full border-r border-light-secondary dark:border-dark-secondary">
          <div>
            {activeSection === 'chats' && <ChatAside />}
            {activeSection === 'contacts' && <ContactAside />}
            {activeSection === 'recentCalls' && <RecentCallAside />}
            {activeSection === 'settings' && <SettingAside />}
          </div>

          <div className=" flex items-center justify-center space-x-10 border-t border-t-gray-200 dark:border-t-dark-secondary py-3.5 px-5">
            <BottomNavigation setActiveSection={setActiveSection} />
          </div>
        </aside>

        <MainChatWindow />

        {/* <aside className="min-w-[350px] w-full md:w-3/12 md:block hidden">
          <MessageSearchBox />
        </aside> */}
      </div>
    </>
  )
}

export default ChatInterface
