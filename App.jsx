import { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! I'm your AI Chatbot. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    let botReply = "I'm still learning! 😊";

    if (input.toLowerCase().includes("hello")) {
      botReply = "Hello! Nice to meet you.";
    } else if (input.toLowerCase().includes("react")) {
      botReply = "React is a JavaScript library for building user interfaces.";
    } else if (input.toLowerCase().includes("how are you")) {
      botReply = "I'm doing great! Thanks for asking.";
    }

    const botMessage = {
      sender: "bot",
      text: botReply,
    };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="container">
      <div className="chatbox">
        <div className="header">
          🤖 AI Chatbot
        </div>

        <div className="messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.sender === "user"
                  ? "message user"
                  : "message bot"
              }
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="input-area">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
          />

          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
