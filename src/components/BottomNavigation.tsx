import React from 'react'
import TooltipItem from './TooltipItem'
import ToolButton from './Buttons/ToolButton'

interface BottomNavigationProps {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  setActiveSection,
}) => {
  const handleNavigation = (section: string) => {
    setActiveSection(section)
  }

  return (
    <nav className="sticky bottom-0 flex items-center justify-center space-x-10">
      <TooltipItem position="top" tooltipsText="Chats">
        <ToolButton rounded onClick={() => handleNavigation('chats')}>
          <i className="fa-solid fa-message"></i>
        </ToolButton>
      </TooltipItem>

      <TooltipItem position="top" tooltipsText="Contacts">
        <ToolButton rounded onClick={() => handleNavigation('contacts')}>
          <i className="fa-solid fa-contact-book"></i>
        </ToolButton>
      </TooltipItem>

      <TooltipItem position="top" tooltipsText="Recent Calls">
        <ToolButton rounded onClick={() => handleNavigation('recentCalls')}>
          <i className="fa-solid fa-phone"></i>
        </ToolButton>
      </TooltipItem>

      <TooltipItem position="top" tooltipsText="Settings">
        <ToolButton rounded onClick={() => handleNavigation('settings')}>
          <i className="fa-solid fa-gear"></i>
        </ToolButton>
      </TooltipItem>
    </nav>
  )
}

export default BottomNavigation
