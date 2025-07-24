import React, { useState } from "react";
import { Send } from "lucide-react";

const ChatAppPage = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, input]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="bg-gray-800 px-6 py-4 text-xl font-bold">Zorvyn Chat</header>

      <main className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className="bg-blue-600/70 px-4 py-3 rounded-lg max-w-md ml-auto">
            {msg}
          </div>
        ))}
      </main>

      <footer className="bg-gray-800 p-4">
        <div className="flex items-center space-x-3">
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-md bg-gray-700 text-white outline-none"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ChatAppPage;
