import React from "react"
import { Image, useMantineTheme } from "@mantine/core";




const Logo = (props) => {
  const theme = useMantineTheme();

  return (
    <Image
      src={
        theme.colorScheme === "light"
          ? "/ICCLogoBlueText.png"
          : "ICClogoWhiteText.png"
      }
      {...props}
    />
  );
};

export default Logo;
