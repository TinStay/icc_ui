import React from "react";
import Link from "next/link";

// Components
import Navbar from "@/sections/navbar/Navbar";

// Mantine
import { Button, createStyles} from "@mantine/core";
import { MenuLinksLandingPage } from "@/constants";

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

const HeaderMenu: React.FC = ({}) => {
  const { classes, cx } = useStyles();

  return (
    <Navbar links={MenuLinksLandingPage} navbarWidth="xl">
      {/* Call to action */}
      <Button radius="xl" size="sm" mx="md">
        <Link href="/">Book Cleaning</Link>
      </Button>
      <Button
        variant="default"
        radius="xl"
        size="sm"
        className={classes.control}
      >
        <Link href="/login">Sign In</Link>
      </Button>
    </Navbar>
  );
};

export default HeaderMenu;