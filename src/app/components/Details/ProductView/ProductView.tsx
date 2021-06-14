import React, {FunctionComponent, useState} from "react";
import {Stack, Box, Image, Divider, Text} from "@chakra-ui/react";

import {Product} from "../types";
import stichW from "../../../../assets/stichW.png";

import {Carousel} from "./Carousel";

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
      <Stack direction="row" flex={1} justifyContent="space-between" padding={8}>
        <Stack alignSelf={{base: "center", md: "flex-start"}} direction="column">
          {product.pictures.map((picture) => (
            <Box
              key={picture.id}
              border="1px"
              borderColor="gray.400"
              borderRadius="6px"
              padding={1}
              onClick={changeImage}
            >
              <Image boxSize="44px" fit="contain" src={picture.url} />
            </Box>
          ))}
        </Stack>
        <Stack alignSelf="center" paddingRight={4}>
          <Image boxSize="468px" objectFit="contain" src={productImage} />
        </Stack>
      </Stack>
      <Carousel />
    </Stack>
  );
};

export default ProductView;
