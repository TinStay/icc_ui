import { useState } from "react";
import axios from "axios";
import ChatWindow from "../components/sections/dashboard/chatWindow";
import ChatInput from "../components/sections/dashboard/chatInput";
import { Box, Button, Modal } from "@mantine/core";
import { AiOutlineMessage } from "react-icons/ai";

const Chat = () => {
  const [messages, setMessages] = useState<
    Array<{ role: string; content: string }>
  >([]);
  const [chatOpen, setChatOpen] = useState(false);

  const handleSendMessage = async (message: string) => {
    // Add user's message to chat
    setMessages((messages) => [
      ...messages,
      { role: "user", content: message },
    ]);

    try {
      const response = await axios.post("/api/openai", {
        messages: [
          {
            role: "system",
            content:
              "You are an assistant that specializes in providing information about house cleaning services.",
          },
          {
            role: "user",
            content: message,
          },
        ],
      });

      // Add assistant's message to chat
      setMessages((messages) => [
        ...messages,
        { role: "assistant", content: response.data.generatedText },
      ]);
    } catch (error) {
      console.error("Error:", error);
      // You can add an error message to chat, or handle the error differently
      setMessages((messages) => [
        ...messages,
        { role: "assistant", content: "Sorry, there was an error." },
      ]);
    }
  };

  return (
    <Box
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Button
        onClick={() => setChatOpen(true)}
        style={{
          position: "absolute",
          right: "20px",
          bottom: "20px",
        }}
      >
        <AiOutlineMessage size={24} />
      </Button>

      <Modal
        opened={chatOpen}
        onClose={() => setChatOpen(false)}
        title="Chat with our assistant"
        size="xl"
      >
        <Box
          style={{
            height: "600px",
            width: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            overflowY: "auto",
            background: "#f5f5f5",
          }}
        >
          <ChatWindow messages={messages} />
          <ChatInput onSendMessage={handleSendMessage} />
        </Box>
      </Modal>
    </Box>
  );
};

export default Chat;

// import { useState } from "react";
// import axios from "axios";
// import ChatWindow from "../components/sections/dashboard/chatWindow";
// import ChatInput from "../components/sections/dashboard/chatInput";
// import { Box } from "@mantine/core";

// const Chat = () => {
//   const [messages, setMessages] = useState<
//     Array<{ role: string; content: string }>
//   >([]);

//   const handleSendMessage = async (message: string) => {
//     // Add user's message to chat
//     setMessages((messages) => [
//       ...messages,
//       { role: "user", content: message },
//     ]);

//     try {
//       const response = await axios.post("/api/openai", {
//         messages: [
//           {
//             role: "system",
//             content:
//               "You are an assistant that specializes in providing information about house cleaning services.",
//           },
//           {
//             role: "user",
//             content: message,
//           },
//         ],
//       });

//       // Add assistant's message to chat
//       setMessages((messages) => [
//         ...messages,
//         { role: "assistant", content: response.data.generatedText },
//       ]);
//     } catch (error) {
//       console.error("Error:", error);
//       // You can add an error message to chat, or handle the error differently
//       setMessages((messages) => [
//         ...messages,
//         { role: "assistant", content: "Sorry, there was an error." },
//       ]);
//     }
//   };

//   return (
//     <Box
//       style={{
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Box
//         style={{
//           height: "600px",
//           width: "400px",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "space-between",
//           padding: "20px",
//           border: "1px solid #ccc",
//           borderRadius: "10px",
//           overflowY: "auto",
//           background: "#f5f5f5",
//         }}
//       >
//         <ChatWindow messages={messages} />
//         <ChatInput onSendMessage={handleSendMessage} />
//       </Box>
//     </Box>
//   );
// };

// export default Chat;
