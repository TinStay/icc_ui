import React, { useState, useEffect } from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import initAuth from "../utils/firebase/auth/initAuth";
import { getCurrentUser } from "@/firebase/auth/helpers";

// Mantine
import {
  MantineProvider,
  MantineThemeOverride,
  ColorSchemeProvider,
  ColorScheme,
  MantineTheme,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";

// Context
import { ConnectedUserContext, UtilitiesContext } from "@/contexts";
import { storage } from "@/firebase/storage/reference";

initAuth();

function MyApp({ Component, pageProps }: AppProps) {
  // Dark and Light mode
  const [connectedUser, setConnectedUser] = useState({ UID: "" });
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  storage
    .ref("/account-images/zoltanImg.png")
    .getDownloadURL()
    .then((url) => {
      // `url` is the download URL for 'images/stars.jpg'

      // This can be downloaded directly:
      // var xhr = new XMLHttpRequest();
      // xhr.responseType = 'blob';
      // xhr.onload = (event) => {
      //   var blob = xhr.response;
      // };
      // xhr.open('GET', url);
      // xhr.send();
      // "https://firebasestorage.googleapis.com/v0/b/icc-realm-dev.appspot.com/o/account-images%2Ftinstay.jpg?alt=media&token=37ef4613-5804-4a03-91cc-37f03f442930"
      return url;
    })
    .catch((error) => {
      // Handle any errors
      return error;
    });

  const appTheme: MantineThemeOverride = {
    colorScheme: colorScheme,
    fontFamily: "'Madani-Regular', sans-serif",
    black: "#10316D",
    colors: {
      // Add your color
      backgroundWhite: ["#F8F9FA"],
      primaryBlue: ["#348DF6"],
      darkBlueText: ["#10316D"],
      lightBlueText: ["#2164de"],
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
        },
      },
    },
  };

  const theme: MantineTheme = useMantineTheme();
  const isDesktopView: boolean = useMediaQuery(
    `(min-width: ${theme.breakpoints.xs}px)`
  );

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
            <UtilitiesContext.Provider value={{ isDesktopView }}>
              <NotificationsProvider>
                <Component {...pageProps} />
              </NotificationsProvider>
            </UtilitiesContext.Provider>
          </MantineProvider>
        </ConnectedUserContext.Provider>
      </ColorSchemeProvider>
    </div>
  );
}

export default MyApp;
