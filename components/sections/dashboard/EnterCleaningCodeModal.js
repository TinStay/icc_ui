import { Modal, NumberInput, Button, Flex } from "@mantine/core";
import { useForm } from "@mantine/form";

function EnterCleaningCodeModal({ ...props }) {
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
    <Modal centered {...props}>
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
