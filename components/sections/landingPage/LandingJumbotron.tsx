import React from "react";
import Link from "next/link";
import Logo from "@/elements/general/logo/LogoWithText";

import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  MantineTheme,
  useMantineTheme,
} from "@mantine/core";
// import { IconCheck } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export default function LandingJumbotron() {
  const { classes } = useStyles();
  const theme: MantineTheme = useMantineTheme();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Use the <span className={classes.highlight}>ICC Realm</span> app
              to manage your cleanings.
            </Title>
            <Text color="dimmed" mt="md">
              Want to schedule a cleaning or already have one and want to edit
              it? Your convenience is our priority and that is why we have built
              a place where you can manage your cleanings with just a few
              clicks.
            </Text>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                <Link href="/login">Book Cleaning</Link>
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                <Link href="/login">Sign In</Link>
              </Button>
            </Group>
          </div>
          <Logo className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
