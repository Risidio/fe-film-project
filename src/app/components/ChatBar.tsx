'use client';
import React, { useState } from 'react';

const ChatBar: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <div className="flex w-xl justify-end rounded-2xl border border-gray-200 pl-6 text-white shadow-md backdrop-blur-sm">
      <input
        type="text"
        placeholder="Ask me anything about your script..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 bg-transparent text-sm placeholder-gray-400 focus:outline-none"
      />

      <button
        onClick={handleSend}
        className="ml-2 flex items-center gap-1 rounded-2xl bg-cyan-600 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
      >
        Send
      </button>
    </div>
  );
};

export default ChatBar;
