import {
  Modal,
  NumberInput,
  Button,
  Flex,
  useMantineTheme,
  MantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { IconX } from "@tabler/icons";

import { ActivateSubscription } from "@/firebase/firestore/functions";

function EnterCleaningCodeModal({ opened, onSuccess, onClose, ...props }) {
  const theme: MantineTheme = useMantineTheme();

  const cleaningCodeRegex = /(?<!\d)\d{5}(?!\d)/;
  const form = useForm({
    initialValues: {
      cleaningCode: "",
    },

    validate: {
      cleaningCode: (value) =>
        cleaningCodeRegex.test(value)
          ? null
          : "Activation code must be 5 digits.",
    },
  });

  const submitCode = async () => {
    // Get all subcriptions and check them for id

    await ActivateSubscription(+form.values.cleaningCode)
      .then((msg: any) => {
        showNotification({
          id: "valid-code",
          disallowClose: false,
          title: msg,
          message: "You can go ahead and check it out",
          color: "green",
          radius: "xl",
          icon: <IconX />,
          loading: false,
        });
        onSuccess()
      })
      .catch((err) =>
        // Return error if not found
        showNotification({
          id: "invalid-code",
          disallowClose: false,
          title: err.message,
          message:
            "Please ensure that you have entered it correctly and try again.",
          color: "red",
          radius: "xl",
          icon: <IconX />,
          loading: false,
        })
      );

    // Add subscription if found
    // Add uid of user to Users array in subscription
  };

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
      <form onSubmit={form.onSubmit(submitCode)}>
        <Flex justify="space-between">
          <NumberInput
            placeholder="e.g. 12345"
            size="md"
            hideControls
            mr="10px"
            sx={{ width: "100%" }}
            {...form.getInputProps("cleaningCode")}
          />
          <Button size="md" type="submit">
            Enter
          </Button>
        </Flex>
      </form>
    </Modal>
  );
}

export default EnterCleaningCodeModal;
