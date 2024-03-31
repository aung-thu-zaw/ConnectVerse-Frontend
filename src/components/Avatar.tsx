import React from 'react'

const Avatar: React.FC<{ size?: string; src: string; alt?: string }> = ({
  size,
  src,
  alt,
}) => {
  return (
    <>
      <div
        className={`inline-block rounded-full overflow-hidden ${
          size ? `size-[${size}]` : 'size-[42px]'
        }`}
      >
        <img
          className="w-full h-full object-cover"
          src={src}
          alt={alt || 'avatar'}
        />
      </div>
    </>
  )
}

export default Avatar
