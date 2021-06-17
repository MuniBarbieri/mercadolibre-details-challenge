import React, {FunctionComponent} from "react";
import {Stack, Text} from "@chakra-ui/react";

import {Product} from "../types";

import {Shipping} from "./Shipping";
import {Returns} from "./Returns";
import {Payment} from "./Payment";
import {PurchaseButtons} from "./PurchaseButtons";
import {ProductDetails} from "./ProductDetails";

interface PurchaseContainerProps {
  product: Product;
}

const PurchaseDetails: FunctionComponent<PurchaseContainerProps> = ({product}) => {
  return (
    <Stack maxWidth={{base: "100%", md: "400px"}} paddingX={8} paddingY={6}>
      <Stack
        border="1px solid #e6e6e6"
        borderRadius="8px"
        direction="column"
        paddingX={8}
        paddingY={6}
      >
        <ProductDetails product={product} />
        <Payment product={product} />
        <Shipping />
        <Returns />
        <Stack>
          <Text fontSize="22px" fontWeight="500">
            ¡Última disponible!
          </Text>
        </Stack>
        <PurchaseButtons />
      </Stack>
    </Stack>
  );
};

export default PurchaseDetails;
