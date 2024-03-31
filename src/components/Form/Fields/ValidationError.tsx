import React from 'react'

const ValidationError: React.FC<{ message: string }> = ({ message }) => {
  return (
    <>
      {message && (
        <p className="text-xs font-semibold mt-3 w-full text-left text-red-600">
          {message}
        </p>
      )}
    </>
  )
}

export default ValidationError
