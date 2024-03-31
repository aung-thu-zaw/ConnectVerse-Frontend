import React from 'react'

const InputField: React.FC<{
  id?: string
  name: string
  type: 'text' | 'password' | 'number' | 'email'
  placeholder?: string
  additionalClassName?: string
  readOnly?: boolean
  disabled?: boolean
  required?: boolean
  maxLength?: number
  minLength?: number
  pattern?: string
  defaultValue?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}> = ({
  id,
  name,
  type = 'text',
  placeholder,
  additionalClassName,
  readOnly,
  disabled,
  required,
  maxLength,
  minLength,
  pattern,
  defaultValue,
  value,
  onChange,
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      readOnly={readOnly}
      disabled={disabled}
      required={required}
      maxLength={maxLength}
      minLength={minLength}
      pattern={pattern}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      className={`px-5 py-4 rounded-md font-medium border w-full text-sm outline-none bg-light-secondary border-gray-300 dark:bg-dark-secondary dark:border-neutral-500 focus:border-light-accent dark:focus:border-dark-accent duration-200 ${additionalClassName}`}
      placeholder={placeholder}
    />
  )
}

export default InputField
