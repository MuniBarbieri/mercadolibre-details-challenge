import React, {FunctionComponent, useContext} from "react";
import {Stack, Text} from "@chakra-ui/react";

import DrawerContext from "../../contexts/DrawerContest";

import {Product} from "./types";
import mock from "./mock";
import PurchaseDetails from "./PurchaseDetails";
import ProductView from "./ProductView/ProductView";
import {QuestionsBox} from "./ProductView/QuestionsBox";
import {BuyersFeedback} from "./ProductPunctuation";

interface DetailsScreenProps {
  product: Product;
}

const DetailsScreen: FunctionComponent<DetailsScreenProps> = ({product = mock.product}) => {
  const isDrawerOpen = useContext(DrawerContext);

  return (
    <Stack alignItems="center" bg="gray.100" display={isDrawerOpen ? "none" : "flex"} paddingY={6}>
      <Stack
        bg="white"
        borderRadius="4px"
        boxShadow="md"
        direction={{base: "column", md: "column"}}
      >
        <Stack direction={{base: "column", md: "row"}}>
          <ProductView product={product} />
          <PurchaseDetails product={product} />
        </Stack>
        <Stack width={{base: "100%", md: "70%"}}>
          <QuestionsBox />
        </Stack>
        <Stack width={{base: "100%", md: "70%"}}>
          <BuyersFeedback />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DetailsScreen;
