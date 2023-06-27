// components/ChatWindow.tsx
import { FC } from "react";

interface Message {
  role: string;
  content: string;
}

interface ChatWindowProps {
  messages: Message[];
}

const ChatWindow: FC<ChatWindowProps> = ({ messages }) => (
  <div>
    {messages.map((message, index) => (
      <p key={index}>
        <strong>{message.role}:</strong> {message.content}
      </p>
    ))}
  </div>
);

export default ChatWindow;
