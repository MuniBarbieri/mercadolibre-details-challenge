import React, {FunctionComponent, useState} from "react";
import {Stack, Divider, Text} from "@chakra-ui/react";

import {Product} from "../types";
import stichW from "../../../../assets/stichW.png";

import {Carousel} from "./Carousel";
import {ProductImages} from "./ProductImages";

interface ProductImagesProps {
  product: Product;
}

const ProductView: FunctionComponent<ProductImagesProps> = ({product}) => {
  const [productImage, setProductImage] = useState(stichW);

  const changeImage = (e: any) => {
    const img = e.target.src;

    setProductImage(img);
  };

  return (
    <Stack direction="column">
      <ProductImages changeImage={changeImage} product={product} productImage={productImage} />
      <Stack padding={10}>
        <Divider />
      </Stack>
      <Stack direction="column" display={{base: "none", md: "flex"}} padding={10}>
        <Text fontSize={30}> Mas publicacione del Vendedor</Text>
        <Carousel />
      </Stack>
      <Stack padding={10}>
        <Divider />
      </Stack>
    </Stack>
  );
};

export default ProductView;
