import React, {FunctionComponent} from "react";
import {Stack, Text, Link} from "@chakra-ui/react";

import {Url} from "../../../utilis";
import {Product} from "../types";

interface PaymentProps {
  product: Product;
}
export const Payment: FunctionComponent<PaymentProps> = ({product}) => {
  return (
    <Stack direction="column">
      <Text fontSize="36px" fontWeight={300} lineHeight="25px">
        ${product.price}
      </Text>
      <Text fontSize="18px" fontWeight={400} lineHeight="25px">
        en 12x $ 1.985
      </Text>
      <Link fontSize="14px" fontWeight={400} href={Url.mediosDepago} lineHeight="25px">
        Ver los medios de pago
      </Link>
    </Stack>
  );
};
