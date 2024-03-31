import React, { MouseEventHandler, ReactNode } from 'react'

const OutlineButton: React.FC<{
  type: 'submit' | 'reset' | 'button'
  disabled?: boolean
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
}> = ({ type, disabled, children, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className="px-5 py-3 text-sm font-bold rounded-md hover:bg-gray-200 dark:hover:bg-dark-secondary text-light-text dark:text-dark-text  border border-gray-300 dark:border-neutral-500 duration-150 "
        disabled={disabled}
      >
        {children}
      </button>
    </>
  )
}

export default OutlineButton
