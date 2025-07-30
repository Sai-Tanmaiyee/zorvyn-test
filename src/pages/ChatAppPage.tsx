import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Mic,
  Plus,
  Share2,
  X,
  ChevronUp,
  ChevronDown,
  User,
} from "lucide-react";

interface Message {
  type: "user" | "ai";
  text: string;
}

const ChatAppPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [showSplitView, setShowSplitView] = useState<boolean>(false);
  const [isTemplatesCollapsed, setIsTemplatesCollapsed] = useState<boolean>(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, { type: "user", text: input }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    if (e.target.value.trim() !== "") setShowSplitView(true);
  };

  const closeSplitView = () => setShowSplitView(false);
  const toggleTemplatesCollapse = () => setIsTemplatesCollapsed((p) => !p);

  const allTemplates = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="h-screen bg-gray-950 text-white flex flex-col font-inter">
      {/* Header */}
      <header className="flex-shrink-0 bg-gray-800 px-6 py-4 text-lg font-semibold flex items-center justify-between shadow-md z-20">
        <span>Ask Zorvyn...</span>
        <div className="flex items-center space-x-3">
          <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md text-sm flex items-center space-x-1 transition-colors duration-200">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </button>
          <button className="text-gray-400 hover:text-white p-2 rounded-full transition-colors duration-200">
            <User className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main content */}
      <div className={`flex-1 flex ${showSplitView ? "md:flex-row-reverse" : "flex-col"} h-full`}>
        {/* Resume panel */}
        <div
          className={`flex flex-col justify-between ${
            showSplitView ? "md:flex md:w-1/2" : "hidden"
          } bg-gray-800 shadow-lg z-20 overflow-hidden`}
        >
          {/* Panel header */}
          <div className="flex justify-between items-center p-6 pb-4">
            <h2 className="text-xl font-bold">Your Resume</h2>
            <button
              onClick={closeSplitView}
              className="text-gray-400 hover:text-white p-2 rounded-full transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Resume preview */}
          <div className="flex-shrink-0 bg-gray-700 rounded-lg overflow-hidden flex items-center justify-center p-4 mx-6 mb-4">
            <img
              src="https://placehold.co/400x600/333333/FFFFFF?text=Your+Resume+Preview"
              alt="Resume Preview"
              className="w-2/3 max-h-[60vh] object-contain rounded-md shadow-md mx-auto"
              onError={(e) => {
                const t = e.target as HTMLImageElement;
                t.onerror = null;
                t.src = "https://placehold.co/400x600/333333/FFFFFF?text=Image+Error";
              }}
            />
          </div>

          {/* Templates section */}
          <div
            className={`p-3 bg-gray-900 rounded-t-lg transition-all duration-300 ease-in-out ${
              isTemplatesCollapsed ? "h-auto" : "h-full"
            } ${isTemplatesCollapsed ? "z-20" : "z-30"}`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Resume Templates</h2>
              <button
                onClick={toggleTemplatesCollapse}
                className="text-gray-400 hover:text-white p-2 rounded-full transition-colors duration-200"
              >
                {isTemplatesCollapsed ? (
                  <ChevronUp className="w-6 h-6" />
                ) : (
                  <ChevronDown className="w-6 h-6" />
                )}
              </button>
            </div>
            <div
              className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto ${
                isTemplatesCollapsed ? "max-h-[150px]" : "max-h-[calc(100vh-320px)]"
              }`}
            >
              {(isTemplatesCollapsed ? allTemplates.slice(0, 3) : allTemplates).map((num) => (
                <div
                  key={num}
                  className="bg-gray-700 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-200"
                >
                  <img
                    src={`https://placehold.co/300x400/555555/FFFFFF?text=Template+${num}`}
                    alt={`Template ${num}`}
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      t.onerror = null;
                      t.src = "https://placehold.co/300x400/555555/FFFFFF?text=Error";
                    }}
                  />
                  <p className="p-2 text-sm text-center">Modern Template {num}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chat area */}
        <div className={`flex flex-col ${showSplitView ? "md:w-1/2" : "w-full"} h-full`}>
          <main className="flex-grow overflow-y-auto p-6 space-y-4 flex flex-col min-h-[0px]">
            {messages.length === 0 ? (
              <div className="text-center text-gray-500 text-lg">Start typing to begin your chat!</div>
            ) : (
              messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`px-4 py-3 rounded-xl max-w-md break-words ${
                    msg.type === "user" ? "bg-blue-600/70 ml-auto text-right" : "bg-gray-700 mr-auto text-left"
                  }`}
                >
                  {msg.text}
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </main>
        </div>
      </div>

      {/* Input bar */}
      <div
        className={`flex-shrink-0 bg-gray-950 p-3 shadow-lg z-10 ${
          showSplitView ? "md:flex md:flex-row" : "flex flex-col"
        }`}
      >
        <div className={`w-full ${showSplitView ? "md:w-1/2" : "md:w-full"} p-3`}>
          <div className="flex items-center space-x-2 bg-gray-700 rounded-full py-1.5 px-3 max-w-md mx-auto">
            <button className="text-gray-400 hover:text-white p-1 rounded-full">
              <Plus className="w-4 h-4" />
            </button>
            <input
              type="text"
              className="flex-1 bg-transparent text-white outline-none placeholder-gray-400 text-sm"
              placeholder="Ask Zorvyn..."
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
            <button type="button" className="text-gray-400 hover:text-white p-1 rounded-full">
              <Mic className="w-4 h-4" />
            </button>
            <button
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 p-1.5 rounded-full text-white transition-colors duration-200"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatAppPage;
