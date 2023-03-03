import React, { useState } from "react";
import { useRouter } from "next/router";
// Components
import Logo from "@/elements/general/logo/LogoWithoutText";

// Mantine
import {
  createStyles,
  Header,
  Menu,
  Group,
  Center,
  Burger,
  Container,
  Box,
  Paper,
  Transition,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

// Types & Constants
import { MenuLinks } from "@/constants";
import UserMenu from "./components/UserMenu";

const HEADER_HEIGHT = 74;

const useStyles = createStyles((theme) => ({
  header: {
    borderBottom: 0,
  },

  inner: {
    padding: "10px 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 5,
    right: 5,
    zIndex: 1,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    margin: "8px",
    borderRadius: theme.radius.xl,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

const HeaderMenu: React.FC = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { classes, cx } = useStyles();

  // Ruoter
  const router = useRouter();

  // Menu items
  const items = MenuLinks.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: router.asPath === link.link,
      })}
      // onClick={(event) => {
      //   event.preventDefault();
      //   close();
      // }}
    >
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={20} className={classes.header}>
      <Container>
        <div className={classes.inner}>
          <Logo width="50px" />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Group spacing={5} className={classes.links}>
              {items}
            </Group>
            {/* Dropdown user menu */}
            <UserMenu />
          </Box>
          <Burger
            opened={opened}
            onClick={toggle}
            className={classes.burger}
            size="sm"
          />

          {/* Mobile view */}
          <Transition
            transition="pop-top-right"
            duration={200}
            mounted={opened}
          >
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
        </div>
      </Container>
    </Header>
  );
};

export default HeaderMenu;
