import {
  UnstyledButton,
  UnstyledButtonProps,
  Group,
  Avatar,
  Text,
  Box,
  createStyles,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  user: {
    position: "relative",
    display: "block",
    width: "100%",
    padding: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[0],
    },
  },
}));

interface UserButtonProps extends UnstyledButtonProps {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
  isOpen?: boolean;
}

export function UserButton({
  image,
  name,
  email,
  icon,
  isOpen,
  ...others
}: UserButtonProps) {
  const { classes } = useStyles();

  return (
    <UnstyledButton className={classes.user} {...others}>
      <Group>
        <Avatar src={image} radius="xl" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="dimmed" size="xs">
            {email}
          </Text>
        </div>

        <Box
          sx={{
            transform: isOpen ? "rotate(90deg)" : "0",
            transition: "all ease-in-out 200ms",
          }}
        >
          {icon || <IconChevronRight size={14} stroke={1.5} />}
        </Box>
      </Group>
    </UnstyledButton>
  );
}
