import React from "react"
import { Loader as LoadingIcon, Center, Box } from "@mantine/core";
import Logo from "./logo/LogoWithText";

const Loader = () => {
  return (
    <Center style={{ width: "100vw", height: "100vh" }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Logo width="400px" />
        <LoadingIcon size="lg"/>
      </Box>
    </Center>
  );
};

export default Loader;
