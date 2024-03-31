import React from 'react'
import Avatar from './Avatar'

const RecentCallList: React.FC<{ editMode: boolean }> = ({ editMode }) => {
  return (
    <>
      <div className="flex items-center w-full space-x-3">
        {editMode && (
          <button
            type="button"
            className={`text-sm text-red-600 transform transition-transform duration-300 ${editMode ? 'translate-x-2' : 'translate-x-0'}`}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        )}
        <div
          className={`w-full p-3 rounded-md cursor-pointer transform transition-transform duration-300 hover:bg-gray-100 dark:hover:bg-dark-secondary ${editMode ? 'translate-x-1' : 'translate-x-0'}`}
        >
          <div className="flex items-center space-x-3">
            <Avatar src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" />
            <div className="flex flex-col items-start w-full">
              <div className="flex items-center justify-between w-full text-light-text dark:text-dark-text">
                <h3 className="text-sm font-bold  mb-1">Aung Thu Zaw</h3>
                <div className="text-[0.65rem] space-x-2">
                  <span className="font-medium">12-Sep-2024</span>
                </div>
              </div>
              <div className="text-xs font-medium flex items-center justify-between space-x-3 w-full">
                <p className=" text-gray-500 dark:text-gray-400 line-clamp-1">
                  <span className="text-gray-500 dark:text-neutral-600 mr-2">
                    {/* <i className="fa-solid fa-phone-volume"></i> */}
                    <i className="fa-solid fa-video"></i>
                  </span>
                  Incoming Call (6 min)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecentCallList
