import React, { useState } from "react";
import FoxImage from "../../Assets/images/fox.png";

import {
  Text,
  Box,
  Button,
  TextInput,
  Title,
  Image,
  Tooltip,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";

interface Props {
  name: string;
  updateName: (name: string) => void;
  onStartGame: () => void;
}

const Menu: React.FC<Props> = ({ name, updateName, onStartGame }) => {
  const [isReady, setIsReady] = useState<boolean>(name ? true : false);
  const matches = useMediaQuery("(min-width: 900px)");

  // Form values
  const form = useForm({
    initialValues: {
      name: name,
    },

    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
    },
  });

  const enterName = (name: string) => {
    // Update global name
    updateName(name);

    // Show last screen before play
    setIsReady(true);
  };

  const changeName = () => {
    // Show form
    setIsReady(false);
  };

  const startGame = () => {
    onStartGame();
  };

  return (
    <Box sx={(theme) => ({})}>
      <form
        onSubmit={form.onSubmit((values) =>
          !isReady ? enterName(values.name) : startGame()
        )}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          })}
        >
          {/* Input */}
          <Box sx={{ minHeight: "80px" }}>
            {!isReady && (
              <Box sx={{ width: "100%" }}>
                <Text size="xl" weight={600} sx={{ marginBottom: "10px" }}>
                  Enter your name
                </Text>
                {/* Name Input */}
                <TextInput
                  withAsterisk
                  placeholder="John Doe"
                  {...form.getInputProps("name")}
                  sx={(theme) => ({
                    textAlign: "left",
                  })}
                />
              </Box>
            )}
            {isReady && (
              <Box>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Title size={35} sx={{ marginRight: "10px" }}>
                    Hey{" "}
                  </Title>
                  <Tooltip
                    label="Change name"
                    color="lime"
                    position="bottom"
                    withArrow
                  >
                    <Title
                      size={35}
                      variant="gradient"
                      gradient={{ from: "yellow", to: "lime", deg: 45 }}
                      style={{ cursor: "pointer" }}
                      onClick={() => changeName()}
                    >
                      {name}
                    </Title>
                  </Tooltip>
                </Box>
                <Text size="lg">Are you ready to play?</Text>
              </Box>
            )}
          </Box>

          {/* Action button */}
          <Button
            variant="gradient"
            gradient={{ from: "yellow", to: "lime", deg: 45 }}
            type="submit"
            radius="xl"
            size="md"
            sx={{ width: "100%", marginTop: "20px" }}
          >
            {!isReady ? "Enter" : "Play"}
          </Button>

          {/* Fox image */}
          <Box sx={{ minHeight: "160px", margin: "30px auto" }}>
            <Image
              width={matches ? 350 : 250}
              fit="contain"
              src={FoxImage}
              alt="fox"
              withPlaceholder
              sx={() => ({ margin: "0 auto" })}
            />
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default Menu;
