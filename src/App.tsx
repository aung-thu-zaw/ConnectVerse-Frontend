import React from 'react'

import './App.css'
import ChatInterface from './pages/ChatInterface'
import Auth from './pages/Auth'
import Verification from './pages/Verification'

const App: React.FC = () => {
  return (
    <>
      <div>
        <Auth />
      </div>
      <div>
        <Verification />
      </div>
      <div>
        <ChatInterface />
      </div>
    </>
  )
}

export default App
