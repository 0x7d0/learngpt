import React, { useState } from "react";
import { BsFillChatDotsFill } from "react-icons/bs";

const ChatGPT = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = (message) => {
    const updated = [...messages, { type: "user", content: message }];
    setMessages(updated);
    // Replace the below function with an actual call to the OpenAI API
    fakeChatGptResponse(updated, message);
  };

  const fakeChatGptResponse = (messages, message) => {
    setTimeout(() => {
      setMessages([
        ...messages,
        { type: "gpt", content: `Response to: ${message}` },
      ]);
    }, 1000);
  };

  console.log(messages);

  const handleInputMessageChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleInputMessageSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputMessage);
    setInputMessage("");
  };

  return (
    <aside className="flex flex-col bg-gray-200 w-full lg:w-1/4 p-6 px-12 lg:p-6 lg:rounded-s-lg shadow-md lg:min-h-[calc(100vh-180px)] lg:sticky lg:top-8">
      <div className="h-full flex flex-grow flex-col justify-stretch overflow-y-scroll mb-6">
        {messages.map((message, index) => (
          <div key={index}>
            <div className="flex items-center mb-4">
              <div
                className={`flex-1 text-sm  text-gray-800 p-4 rounded-lg mb-2 ${
                  message.type === "gpt"
                    ? "bg-blue-100 rounded-ss-none"
                    : "bg-green-100 rounded-ee-none"
                }`}
              >
                <div>{message.content}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleInputMessageSubmit} className="relative">
        <input
          type="text"
          className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg border-2 border-gray-700 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent w-full "
          placeholder="Ask your digital tutor"
          value={inputMessage}
          onChange={handleInputMessageChange}
        />
        <span className="absolute top-0 left-0 bottom-0">
          <div className="flex items-center justify-center h-full w-12">
            <BsFillChatDotsFill size={24} />
          </div>
        </span>
      </form>
    </aside>
  );
};

export default ChatGPT;
