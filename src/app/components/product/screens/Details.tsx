import React from "react";
import {Container, Stack, Divider} from "@chakra-ui/react";

import stich from "../../../../assets/stichLg.png";
import {Product} from "../types";
import mock from "../mock";

import PurchaseContainer from "./PurchaseContainer";
import ProductImages from "./ProductImages";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  return (
    <Stack alignItems="center" bg="gray.100" paddingY={6}>
      <Stack bg="white" borderRadius="4px" boxShadow="md" direction={{base: "column", md: "row"}}>
        <ProductImages product={product} />
        <PurchaseContainer product={product} />
      </Stack>
    </Stack>
  );
};

export default DetailsScreen;
