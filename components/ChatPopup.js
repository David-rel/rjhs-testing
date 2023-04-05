// components/ChatPopup.js
import { useState } from 'react'

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed bottom-5 right-5 hidden md:flex lg:flex z-10">
      {isOpen ? (
        <div className="flex flex-col w-80 h-96 bg-white shadow-lg rounded-lg">
          <div className="flex items-center justify-between p-4 border-b border-gray-300">
            <h3 className="font-semibold text-lg">Live Chat</h3>
            <button onClick={toggleChat} className="focus:outline-none z-10">
              X
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-scroll">
            {/* Your chat content here */}
          </div>
          <div className="px-4 py-2 border-t border-gray-300">
            <input
              className="w-full px-3 py-1 text-sm border rounded-lg focus:outline-none"
              type="text"
              placeholder="Type your message"
            />
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="flex items-center justify-center w-16 h-16 text-white bg-red-500 rounded-full focus:outline-none z-10"
        >
          RJ
        </button>
      )}
    </div>
  )
}

export default ChatPopup
