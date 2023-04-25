import React, { useState } from 'react';

const ChatGPT = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (message) => {
    setMessages([...messages, { type: 'user', content: message }]);
    // Replace the below function with an actual call to the OpenAI API
    fakeChatGptResponse(message);
  };

  const fakeChatGptResponse = (message) => {
    setTimeout(() => {
      setMessages([...messages, { type: 'gpt', content: `Response to: ${message}` }]);
    }, 1000);
  };

  const handleInputMessageChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleInputMessageSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputMessage);
    setInputMessage('');
  };

  return (
    <aside className="bg-gray-200 w-1/4 p-4">
      <div className="h-80 overflow-y-scroll mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`text-gray-800 ${message.type === 'gpt' ? 'text-green-500' : ''}`}>
            {message.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleInputMessageSubmit}>
        <input
          type="text"
          className="w-full p-2 border-2 border-gray-400 rounded"
          placeholder="Ask your digital tutor"
          value={inputMessage}
          onChange={handleInputMessageChange}
        />
      </form>
    </aside>
  );
};

export default ChatGPT;
