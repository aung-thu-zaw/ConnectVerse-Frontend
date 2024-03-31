import React from 'react'
import CountBadge from './Badges/CountBadge'

const FolderTabs: React.FC = () => {
  return (
    <>
      <div className="flex items-center space-x-1 px-3 overflow-x-scroll hide-scrollbar">
        <button
          type="button"
          className="text-sm px-3 py-2.5 rounded-t-md space-x-1.5 font-medium flex items-center justify-center border-b-[3px] text-light-text hover:bg-gray-100 border-b-light-accent dark:text-dark-text dark:hover:bg-dark-secondary  dark:border-b-dark-accent"
        >
          <span className="block">All</span>
          <CountBadge count={20} />
        </button>
        <button
          type="button"
          className="text-sm px-3 py-2.5 rounded-t-md space-x-1.5 font-medium flex items-center justify-center text-light-text hover:bg-gray-100 dark:text-dark-text dark:hover:bg-dark-secondary"
        >
          <span className="block">English</span>
          <CountBadge count={4} />
        </button>
        <button
          type="button"
          className="text-sm px-3 py-2.5 rounded-t-md space-x-1.5 font-medium flex items-center justify-center text-light-text hover:bg-gray-100 dark:text-dark-text dark:hover:bg-dark-secondary"
        >
          <span className="block">Programming</span>
          <CountBadge count={2} />
        </button>
        <button
          type="button"
          className="text-sm px-3 py-2.5 rounded-t-md space-x-1.5 font-medium flex items-center justify-center text-light-text hover:bg-gray-100 dark:text-dark-text dark:hover:bg-dark-secondary"
        >
          <span className="block">Movie</span>
          <CountBadge count={40} />
        </button>
        <button
          type="button"
          className="text-sm px-3 py-2.5 rounded-t-md space-x-1.5 font-medium flex items-center justify-center text-light-text hover:bg-gray-100 dark:text-dark-text dark:hover:bg-dark-secondary"
        >
          <span className="block">Music</span>
          <CountBadge count={10} />
        </button>
      </div>
    </>
  )
}

export default FolderTabs
