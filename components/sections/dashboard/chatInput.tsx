// components/ChatInput.tsx
import { FC, useState } from "react";
import { TextInput, ActionIcon, useMantineTheme } from "@mantine/core";
// import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const theme = useMantineTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSendMessage(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
        placeholder="Type your message..."
        radius="xl"
        size="md"
        rightSection={
          <ActionIcon
            onClick={handleSubmit}
            size={32}
            radius="xl"
            color={
              theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.primaryColor
            }
            variant="filled"
          >
            {/* {theme.dir === "ltr" ? (
              <IconArrowRight size="1.1rem" stroke={1.5} />
            ) : (
              <IconArrowLeft size="1.1rem" stroke={1.5} />
            )} */}
          </ActionIcon>
        }
        rightSectionWidth={42}
      />
    </form>
  );
};

export default ChatInput;
