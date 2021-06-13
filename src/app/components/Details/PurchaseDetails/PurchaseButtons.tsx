import React from "react";
import {Stack, Button} from "@chakra-ui/react";

import {Url} from "../../../utilis";

export const PurchaseButtons = () => {
  return (
    <Stack direction="column">
      <Button colorScheme="twitter" size="lg" variant="solid">
        <a href={Url.login}>Compra ahora</a>
      </Button>
      <Button bg="rgba(65,137,230,.15)" color="#3483fa" size="lg">
        <a href={Url.login}>Agregar al carrito</a>
      </Button>
    </Stack>
  );
};
