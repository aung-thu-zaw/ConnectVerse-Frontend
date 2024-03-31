import React, { useEffect, useState } from 'react'
import useClickOutside from '../../hooks/useClickOutside'
import ValidationError from '../Form/Fields/ValidationError'
import Label from '../Form/Fields/Label'
import InputField from '../Form/Fields/InputField'
import SolidButton from '../Buttons/SolidButton'
import OutlineButton from '../Buttons/OutlineButton'

const RecentCallDeletionModal: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }) => {
      if (!modalOpen || keyCode !== 27) return
      setModalOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  const deletionModalRef = useClickOutside(() => {
    setModalOpen(false)
  })

  return (
    <>
      <div className="">
        <button
          type="button"
          className="text-sm text-red-600"
          onClick={() => setModalOpen(true)}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>

        <div
          className={`fixed z-50 left-0 top-0 flex h-full min-h-screen w-full items-center justify-center bg-[#000] bg-opacity-50 px-4 py-5 transition-opacity duration-300 ${
            modalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            ref={deletionModalRef}
            className="w-full max-w-[570px] rounded-md  px-8 py-12 text-center bg-light-background dark:bg-dark-background md:px-[70px] md:py-[60px] transition-transform duration-300 transform scale-0 sm:scale-100"
          >
            <h1 className="mb-10 font-bold text-xl text-light-text dark:text-dark-text">
              <i className="fa-solid fa-contact-book mr-3"></i>
              Add New Contact
            </h1>

            <form action="#" className="space-y-6">
              <div>
                <Label htmlFor="first-name" label="First Name" />

                <InputField
                  name="first-name"
                  type="text"
                  placeholder="Enter First Name ( required )"
                />

                <ValidationError message="" />
              </div>

              <div>
                <Label htmlFor="last-name" label="Last Name" />

                <InputField
                  name="first-name"
                  type="text"
                  placeholder="Enter Last Name ( optional )"
                />

                <ValidationError message="" />
              </div>

              <div>
                <Label htmlFor="phone" label="Phone Number" />

                <InputField
                  name="phone"
                  type="text"
                  placeholder="Enter Last Name ( optional )"
                />

                <ValidationError message="" />
              </div>

              <div className="flex items-center justify-end space-x-5">
                <OutlineButton type="button" children="Cancel" />

                <SolidButton type="submit" children="Save Contact" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default RecentCallDeletionModal
