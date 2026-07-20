import { useState } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "👋 Hello! Welcome to AI Chatbot.",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    let reply = "I'm still learning. 😊";

    if (input.toLowerCase().includes("hello")) {
      reply = "Hello! How can I help you today?";
    } else if (input.toLowerCase().includes("react")) {
      reply = "React is a JavaScript library for building user interfaces.";
    } else if (input.toLowerCase().includes("how are you")) {
      reply = "I'm doing great. Thanks for asking!";
    } else if (input.toLowerCase().includes("bye")) {
      reply = "Goodbye! Have a wonderful day.";
    }

    const botMessage = {
      sender: "bot",
      text: reply,
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
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
              className={`message ${msg.sender}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="inputArea">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
          />

          <button onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
