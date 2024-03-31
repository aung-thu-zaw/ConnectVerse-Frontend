import React, { MouseEventHandler, ReactNode } from 'react'

const SolidButton: React.FC<{
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
        className="px-5 py-3 text-sm font-bold rounded-md border border-light-accent dark:border-dark-accent  bg-light-accent dark:hover:bg-green-600 hover:bg-green-600 text-white dark:text-white duration-150 "
        disabled={disabled}
      >
        {children}
      </button>
    </>
  )
}

export default SolidButton
