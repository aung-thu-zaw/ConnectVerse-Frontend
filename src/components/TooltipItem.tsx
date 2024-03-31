import React, { ReactNode } from 'react'

const TooltipItem: React.FC<{
  children: ReactNode
  tooltipsText: string
  position: string
}> = ({ children, tooltipsText, position }) => {
  return (
    <div className="mb-14">
      <div className="group relative inline-block">
        <div>{children}</div>
        <div
          className={` ${
            (position === 'right' &&
              `absolute left-full top-1/2 z-20 ml-3 -translate-y-1/2 whitespace-nowrap rounded px-4 py-[6px] text-sm font-semibold text-light-text dark:text-dark-text bg-gray-200 dark:bg-dark-secondary opacity-0 group-hover:opacity-100 transition-all`) ||
            (position === 'top' &&
              `absolute bottom-full left-1/2 z-20 mb-3 -translate-x-1/2 whitespace-nowrap rounded px-4 py-[6px] text-sm font-semibold text-light-text dark:text-dark-text bg-gray-200 dark:bg-dark-secondary opacity-0 group-hover:opacity-100 transition-all`) ||
            (position === 'left' &&
              `absolute right-full top-1/2 z-20 mr-3 -translate-y-1/2 whitespace-nowrap rounded px-4 py-[6px] text-sm font-semibold text-light-text dark:text-dark-text bg-gray-200 dark:bg-dark-secondary opacity-0 group-hover:opacity-100 transition-all`) ||
            (position === 'bottom' &&
              `absolute left-1/2 top-full z-20 mt-3 -translate-x-1/2 whitespace-nowrap rounded px-4 py-[6px] text-sm font-semibold text-light-text dark:text-dark-text bg-gray-200 dark:bg-dark-secondary opacity-0 group-hover:opacity-100 transition-all`)
          }`}
        >
          <span
            className={` ${
              (position === 'right' &&
                `absolute left-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm  bg-gray-200 dark:bg-dark-secondary`) ||
              (position === 'top' &&
                `absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm  bg-gray-200 dark:bg-dark-secondary`) ||
              (position === 'left' &&
                `absolute right-[-3px] top-1/2 -z-10 h-2 w-2 -translate-y-1/2 rotate-45 rounded-sm  bg-gray-200 dark:bg-dark-secondary`) ||
              (position === 'bottom' &&
                `absolute left-1/2 top-[-3px] -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm  bg-gray-200 dark:bg-dark-secondary`)
            } `}
          ></span>
          {tooltipsText}
        </div>
      </div>
    </div>
  )
}

export default TooltipItem
