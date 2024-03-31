import React, { useState } from 'react'
import RecentCallList from '../RecentCallList'

const RecentCallAside: React.FC = () => {
  const [editMode, setEditMode] = useState<boolean>(false)
  return (
    <>
      <div>
        <div className="flex items-center justify-center space-x-3.5 px-3 py-5 border-b border-b-gray-200 dark:border-b-dark-secondary">
          <h1 className="w-full font-bold text-center text-sm text-light-text dark:text-dark-text pl-14">
            Recent Calls ( 100 )
          </h1>
          <button
            onClick={() => setEditMode(!editMode)}
            type="button"
            className="text-xs font-bold min-w-14 text-light-text dark:text-dark-text"
          >
            {!editMode ? (
              <span>
                <i className="fa-solid fa-edit mr-1.5"></i>
                Edit
              </span>
            ) : (
              <span>
                <i className="fa-solid fa-circle-check mr-1.5"></i>
                Done
              </span>
            )}
          </button>
        </div>

        <div className="p-3 h-[690px] overflow-y-scroll hide-scrollbar">
          <RecentCallList editMode={editMode} />
          <RecentCallList editMode={editMode} />
          <RecentCallList editMode={editMode} />
          <RecentCallList editMode={editMode} />
          <RecentCallList editMode={editMode} />
          <RecentCallList editMode={editMode} />
          <RecentCallList editMode={editMode} />
          <RecentCallList editMode={editMode} />
          <RecentCallList editMode={editMode} />
          <RecentCallList editMode={editMode} />
          <RecentCallList editMode={editMode} />
          <RecentCallList editMode={editMode} />
          <RecentCallList editMode={editMode} />
          <RecentCallList editMode={editMode} />
        </div>
      </div>
    </>
  )
}

export default RecentCallAside
