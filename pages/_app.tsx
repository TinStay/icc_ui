import { useState, useEffect } from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import initAuth from "../utils/firebase/auth/initAuth";
import { CurrentUser, getCurrentUser } from "@/firebase/auth/variables";

// Mantine
import {
  MantineProvider,
  MantineThemeOverride,
  ColorSchemeProvider,
  ColorScheme,
  MantineColor,
} from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import React from "react";

// Context
import { ConnectedUserContext } from "@/contexts";

initAuth();

function MyApp({ Component, pageProps }: AppProps) {
  // Dark and Light mode
  const [connectedUser, setConnectedUser] = useState({ uid: "" });
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const appTheme: MantineThemeOverride = {
    colorScheme: colorScheme,
    fontFamily: "'Madani-Regular', sans-serif",
    black: "#10316D",
    colors: {
      // Add your color
      backgroundWhite: ["#F8F9FA"],
      primaryBlue: ["#348DF6"],
      darkBlueText: ["#10316D"],
      // or replace default theme color
    },
    components: {
      Button: {
        defaultProps: {
          radius: "xl",
          color: "#348DF6",
        },
      },
      Input: {
        defaultProps: {
          radius: "md",
          color: "#348DF6",
        },
      },
      Divider: {
        defaultProps: {
          color: "#eeeeee",
        },
      },
    },
  };

  useEffect(() => {
    updateCurrentUserState();
  }, []);

  const updateCurrentUserState = async () => {
    let user: any = await getCurrentUser();

    if (user) {
      setConnectedUser(user);
    }
  };

  return (
    <div>
      <Head>
        <title>ICC Realm</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      {/* APP */}
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <ConnectedUserContext.Provider
          value={{ connectedUser, setConnectedUser }}
        >
          <MantineProvider theme={appTheme} withGlobalStyles withNormalizeCSS>
            <NotificationsProvider>
              <Component {...pageProps} />
            </NotificationsProvider>
          </MantineProvider>
        </ConnectedUserContext.Provider>
      </ColorSchemeProvider>
    </div>
  );
}

// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   // const appProps = await App.getInitialProps(appContext);
//   const AuthUser = await getCurrentUser();
//   console.log("AuthUser");

//   // const headerData = ....

//   return { props: AuthUser };
// };

export default MyApp;
