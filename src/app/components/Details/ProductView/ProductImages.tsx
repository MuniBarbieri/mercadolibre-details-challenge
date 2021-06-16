import React, {FunctionComponent} from "react";
import {Stack, Box, Image} from "@chakra-ui/react";

import {Product} from "../types";

interface ProductImagesProps {
  product: Product;
  changeImage: (e: any) => void;
  productImage: string;
}

export const ProductImages: FunctionComponent<ProductImagesProps> = ({
  product,
  changeImage,
  productImage,
}) => (
  <Stack direction="row" flex={1} justifyContent="space-between" maxWidth={800} padding={8}>
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
    <Stack alignSelf="center" paddingRight={{base: 0, md: 10}}>
      <Image boxSize={{base: "200px", md: "470px"}} objectFit="contain" src={productImage} />
    </Stack>
  </Stack>
);
