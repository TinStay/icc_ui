import { Modal, NumberInput, Button, Flex, useMantineTheme, MantineTheme } from "@mantine/core";
import { useForm } from "@mantine/form";

function EnterCleaningCodeModal({ opened, onClose, ...props }) {
  const theme: MantineTheme = useMantineTheme()

  const cleaningCodeRegex = /\d\d\d\d\d/i;
  const form = useForm({
    initialValues: {
      cleaningCode: "",
    },

    validate: {
      cleaningCode: (value) =>
        cleaningCodeRegex.test(value) ? null : "Invalid code",
    },
  });

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      radius="xl"
      padding="xl"
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={5}
      transition="slide-left"
      {...props}
    >
      <Flex justify="space-between">
        <NumberInput
          placeholder="e.g. 12345"
          size="md"
          hideControls
          mr="10px"
          sx={{ width: "100%" }}
        />
        <Button size="md">Enter</Button>
      </Flex>
    </Modal>
  );
}

export default EnterCleaningCodeModal;
