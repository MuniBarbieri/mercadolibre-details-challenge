import React, {FunctionComponent} from "react";
import {Stack} from "@chakra-ui/react";

import {Product} from "./types";
import mock from "./mock";
import PurchaseDetails from "./PurchaseDetails";
import ProductView from "./ProductView/ProductView";

interface DetailsScreenProps {
  product: Product;
}

const DetailsScreen: FunctionComponent<DetailsScreenProps> = ({product = mock.product}) => {
  return (
    <Stack alignItems="center" bg="gray.100" paddingY={6}>
      <Stack bg="white" borderRadius="4px" boxShadow="md" direction={{base: "column", md: "row"}}>
        <ProductView product={product} />
        <PurchaseDetails product={product} />
      </Stack>
    </Stack>
  );
};

export default DetailsScreen;
