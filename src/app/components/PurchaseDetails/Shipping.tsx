import React from "react";
import {Stack, Text, Icon, Link} from "@chakra-ui/react";
import {HiOutlineTruck} from "react-icons/hi";

import {Url} from "../../utilis";

export const Shipping = () => {
  return (
    <Stack direction="row">
      <Icon as={HiOutlineTruck} color="success.600" height={8} width={8} />
      <Stack direction="column" paddingY={1}>
        <Text color="success.600" lineHeight="15px">
          Llega gratis <b>entre el viernes y el jueves 24 de junio</b>
        </Text>
        <Text color="blackAlpha.600" lineHeight="15px">
          Beneficio mercado puntos
        </Text>
        <Link href={Url.formasDeEntraga} lineHeight="15px">
          Ver mas formas de entrega
        </Link>
      </Stack>
    </Stack>
  );
};
