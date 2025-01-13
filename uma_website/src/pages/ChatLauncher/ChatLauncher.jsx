import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import ChatBot from '../ChatBot/ChatBot';


const ChatLauncher = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Icon Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-16 right-4 z-50 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
        title="Open chat"
      >
        <MessageCircle size={28} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-4 right-4 z-50 w-[380px] transition-all duration-300 transform ${
          isOpen
            ? 'scale-100 opacity-100 translate-y-0'
            : 'scale-95 opacity-0 translate-y-12 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-lg shadow-2xl flex flex-col h-[600px]">
          {/* Header with back button */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-bold text-gray-800">Customer Support</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 transition-colors rounded-full hover:bg-gray-100"
              title="Close chat"
            >
              <X size={24} className="text-gray-500" />
            </button>
          </div>

          {/* ChatBot Component */}
          <div className="flex-1 overflow-hidden">
            <ChatBot />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatLauncher;