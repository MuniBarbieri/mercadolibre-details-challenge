import React, {FunctionComponent} from "react";
import {Stack, Icon, Drawer, DrawerBody, DrawerHeader, IconButton} from "@chakra-ui/react";
import {AiOutlineMenu} from "react-icons/ai";

import {MenuOptions} from "./MenuOptions";

interface DrawerComponentProps {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
}

export const DrawerComponent: FunctionComponent<DrawerComponentProps> = ({
  onClose,
  onToggle,
  isOpen,
}) => (
  <Stack display={{md: "none"}}>
    <IconButton aria-label="Menu" boxShadow="none" variant="unstyled" onClick={onToggle}>
      <Icon as={AiOutlineMenu} />
    </IconButton>
    <Drawer isFullHeight isOpen={isOpen} placement="top" size="full" onClose={onClose}>
      <DrawerHeader borderBottomWidth="1px">Bienvenido</DrawerHeader>
      <DrawerBody>
        <MenuOptions />{" "}
      </DrawerBody>
    </Drawer>
  </Stack>
);
