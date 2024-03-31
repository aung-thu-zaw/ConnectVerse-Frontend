import React from 'react'
import ContactList from '../ContactList'
import ContactListSearchForm from '../ContactListSearchForm'
import AddContactModal from '../Modals/AddContactModal'

const ContactAside: React.FC = () => {
  return (
    <>
      <div>
        <div className="flex items-center space-x-3.5 p-3">
          <ContactListSearchForm />

          <AddContactModal />
        </div>

        <div className="p-3 h-[690px] overflow-y-scroll hide-scrollbar">
          <ContactList />
          <ContactList />
          <ContactList />
          <ContactList />
          <ContactList />
          <ContactList />
          <ContactList />
          <ContactList />
          <ContactList />
          <ContactList />
          <ContactList />
          <ContactList />
          <ContactList />
          <ContactList />
        </div>
      </div>
    </>
  )
}

export default ContactAside
