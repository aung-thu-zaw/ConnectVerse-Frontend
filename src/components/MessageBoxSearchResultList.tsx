import React from 'react'
import Avatar from './Avatar'

const MessageBoxSearchResultList: React.FC = () => {
  return (
    <>
      <div className="p-3 rounded-md cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-secondary ">
        <div className="flex items-center space-x-3">
          <Avatar src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg" />

          <div className="flex flex-col items-start w-full">
            <div className="flex items-center justify-between w-full text-light-text dark:text-dark-text">
              <h3 className="text-sm font-bold  mb-1">Aung Thu Zaw</h3>
              <div className="text-[0.65rem] space-x-2">
                <span className="font-medium">Mar 14</span>
              </div>
            </div>
            <div className="text-xs font-medium flex items-center justify-between space-x-3 w-full">
              <p className=" text-gray-500 dark:text-gray-400 line-clamp-1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                ipsum non accusantium repellat sint aperiam illum id nihil
                possimus autem vel dolor quod aliquam tempore, perspiciatis ab
                ipsam. Eos, accusantium?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MessageBoxSearchResultList
