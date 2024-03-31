import React from 'react'

const Label: React.FC<{ htmlFor?: string; label: string }> = ({
  htmlFor,
  label,
}) => {
  return (
    <label
      htmlFor={htmlFor ?? ''}
      className="text-left block w-full mb-2 text-sm font-semibold text-light-text dark:text-dark-text"
    >
      {label}
    </label>
  )
}

export default Label
