import React from "react";
import {Stack, Text, Icon, Link} from "@chakra-ui/react";
import {RiArrowGoBackFill} from "react-icons/ri";

import {Url} from "../../../utilis";

export const Returns = () => {
  return (
    <Stack direction="row">
      <Icon as={RiArrowGoBackFill} color="success.600" height={8} width={8} />
      <Stack direction="column">
        <Text color="success.600" lineHeight="15px">
          Devolución gratis
        </Text>
        <Text color="blackAlpha.600" lineHeight="15px">
          Tenes 30 dias desde que lo recibis
        </Text>
        <Link href={Url.conoceMas} lineHeight="15px">
          Conocer mas
        </Link>
      </Stack>
    </Stack>
  );
};
