import React, {useState} from "react";
import {Container} from "@chakra-ui/react";

import DrawerContext from "../contexts/DrawerContest";

import Navbar from "./components/Navbar";
import Routes from "./routes";

const App: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <DrawerContext.Provider value={isDrawerOpen}>
        <Navbar setIsDrawerOpen={setIsDrawerOpen} />
        <Container height="100%" maxWidth="100%" padding={0}>
          <Routes />
        </Container>
      </DrawerContext.Provider>
    </>
  );
};

export default App;
