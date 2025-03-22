import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TbMessageChatbot, TbMicrophone, TbSend, TbX } from "react-icons/tb";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [chatbot, setChatbot] = useState(false);
  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "bot",
            text: "Thank you for your message. We will get back to you shortly.",
          },
        ]);
      }, 1000);
    }
  };
  return (
    <div>
      <AnimatePresence>
        {chatbot && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="absolute w-[400px] bg-gray-100 border border-zinc-300 h-[80%] bottom-4 rounded-2xl right-4 flex flex-col"
          >
            <button onClick={() => setChatbot(false)} className="p-2">
              <TbX className="w-8 h-8" />
            </button>
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  className={`mb-4 p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white self-end"
                      : "bg-zinc-200 text-black self-start"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div></div>
                  {message.text}
                </motion.div>
              ))}
            </div>
            <div className="p-4 border-t border-zinc-300 flex bg-zinc-50 rounded-2xl">
              <input
                type="text"
                value={input}
                onKeyDown={(e) => (e.key == "Enter" ? handleSend() : null)}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-4 py-2 border border-zinc-300 rounded-lg"
                placeholder="Type your message..."
              />
              <button
                onClick={handleSend}
                className="ml-4 bg-blue-500 p-3 text-white rounded-full hover:bg-blue-600"
              >
                <TbSend className="w-8 h-8" />
              </button>
              <button
                onClick={handleSend}
                className="ml-4 bg-blue-500 p-3 text-white rounded-full hover:bg-blue-600"
              >
                <TbMicrophone className="w-8 h-8" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!chatbot && (
          <div
            onClick={() => setChatbot(true)}
            className="hover:cursor-pointer absolute flex justify-center items-center flex-col bottom-10 right-10"
          >
            <div className="bg-blue-800 w-min p-2 text-white rounded-full animate-bounce">
              <TbMessageChatbot className="w-10 h-10" />
            </div>
            <p className="text-xl font-light">Ask the XpertAI</p>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
