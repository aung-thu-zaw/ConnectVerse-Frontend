import React from 'react'
import Avatar from './Avatar'

const ContactList: React.FC = () => {
  return (
    <>
      <div className="p-3 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-secondary ">
        <div className="flex items-center space-x-3">
          <Avatar src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" />

          <div className="flex flex-col items-start w-full">
            <div className="flex items-center justify-between w-full text-light-text dark:text-dark-text">
              <h3 className="text-sm font-bold  mb-1">Aung Thu Zaw</h3>
            </div>
            <div className="text-xs font-medium flex items-center justify-between space-x-3 w-full">
              <p className=" text-gray-500 dark:text-gray-400 line-clamp-1">
                Last sense a long time ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactList
