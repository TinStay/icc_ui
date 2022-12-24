import { useState } from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import initAuth from "../utils/firebase/auth/initAuth";

// Mantine
import {
  MantineProvider,
  MantineThemeOverride,
  ColorSchemeProvider,
  ColorScheme,
  MantineColor,
} from "@mantine/core";
import React from "react";

initAuth();

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  const appTheme: MantineThemeOverride = {
    colorScheme: "light",
    fontFamily: "Madani-Regular, sans-serif",
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
    },
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
        <MantineProvider theme={appTheme} withGlobalStyles withNormalizeCSS>
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </div>
  );
}

export default MyApp;
