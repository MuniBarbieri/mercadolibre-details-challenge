import React, {FunctionComponent} from "react";
import {Stack, Text, StackDivider, Icon} from "@chakra-ui/react";
import {BiHeart} from "react-icons/bi";

import {Product} from "../types";

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails: FunctionComponent<ProductDetailsProps> = ({product}) => {
  return (
    <>
      <Stack direction="row" divider={<StackDivider borderColor="gray.200" />}>
        <Text color="gray.400">{product.condition.toLocaleUpperCase()}</Text>
        <Text color="gray.400"> {product.sold_quantity} Vendidos</Text>
      </Stack>
      <Stack alignItems="end" direction="row" justifyContent="space-between">
        <Stack direction="column" spacing={0}>
          <Text fontSize="22px" fontWeight="500" lineHeight="25px" maxWidth="250px">
            {product.title}
          </Text>
        </Stack>

        <Icon as={BiHeart} color="#3483fa" height={8} width={8} />
      </Stack>
    </>
  );
};
