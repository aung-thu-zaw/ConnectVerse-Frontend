import React from 'react'

const TextareaField: React.FC<{
  id?: string
  name: string
  placeholder?: string
  additionalClassName?: string
  rows?: number
  cols?: number
  readOnly?: boolean
  disabled?: boolean
  required?: boolean
  maxLength?: number
}> = ({
  id,
  name,
  placeholder,
  additionalClassName,
  rows,
  cols,
  readOnly,
  disabled,
  required,
  maxLength,
}) => {
  return (
    <textarea
      id={id}
      name={name}
      rows={rows}
      cols={cols}
      readOnly={readOnly}
      disabled={disabled}
      required={required}
      maxLength={maxLength}
      className={`px-5 py-4 rounded-md font-medium border w-full text-sm outline-none bg-light-secondary border-gray-300 dark:bg-dark-secondary dark:border-neutral-500 focus:border-light-accent dark:focus:border-dark-accent duration-200 ${additionalClassName}`}
      placeholder={placeholder}
    />
  )
}

export default TextareaField
