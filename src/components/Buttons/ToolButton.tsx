import React, { MouseEventHandler, ReactNode } from 'react'

const ToolButton: React.FC<{
  border?: boolean
  rounded?: boolean
  disabled?: boolean
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
}> = ({ border, rounded, disabled, children, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className={`text-sm min-w-11 min-h-11 flex items-center justify-center bg-gray-100 dark:bg-dark-secondary hover:bg-gray-200 dark:hover:bg-neutral-900 text-light-text dark:text-dark-text duration-200 ${border && 'border border-gray-300 dark:border-neutral-500'} ${rounded ? 'rounded-full' : 'rounded-md'}`}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  )
}

export default ToolButton
