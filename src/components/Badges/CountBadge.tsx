import React from 'react'

const CountBadge: React.FC<{ count: number }> = ({ count }) => {
  return (
    <div className="text-white rounded-full min-w-5 min-h-5 text-[0.6rem] flex items-center justify-center bg-light-accent dark:bg-dark-accent">
      {count}
    </div>
  )
}

export default CountBadge
