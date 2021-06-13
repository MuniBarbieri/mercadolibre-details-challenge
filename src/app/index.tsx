import React from "react";
import {Container, Stack, Box, Text} from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container height="100%" maxWidth="100%" padding={0}>
        <Routes />
      </Container>
    </>
  );
};

export default App;
