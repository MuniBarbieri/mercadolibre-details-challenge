import React, {FunctionComponent} from "react";
import {Stack, Box, Image, Divider, Text} from "@chakra-ui/react";

import {Product} from "../types";
import stichW from "../../../../assets/stichW.png";

import {Carousel} from "./Carousel";

interface ProductImagesProps {
  product: Product;
}

const ProductView: FunctionComponent<ProductImagesProps> = ({product}) => {
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
            >
              <Image boxSize="44px" fit="contain" src={picture.url} />
            </Box>
          ))}
        </Stack>
        <Stack alignSelf="center" paddingRight={4}>
          <Image boxSize="468px" objectFit="contain" src={stichW} />
        </Stack>
      </Stack>
      <Carousel />
      {/* <Stack direction="row">
        <Box
          border="1px"
          borderColor="gray.400"
          borderRadius="6px"
          boxShadow="md"
          padding={1}
          width="fit-content"
        >
          <Image fit="cover" height="224px" src={stichW} width="224px" />
          <Divider />
          <Text>$1150</Text>
        </Box>
        <Box
          border="1px"
          borderColor="gray.400"
          borderRadius="6px"
          boxShadow="md"
          padding={1}
          width="fit-content"
        >
          <Image fit="cover" height="224px" src={stichW} width="224px" />
          <Divider />
        </Box>
        <Box
          border="1px"
          borderColor="gray.400"
          borderRadius="6px"
          boxShadow="md"
          flexDirection="column"
          padding={1}
          width="fit-content"
        >
          <Image fit="cover" height="224px" src={stichW} width="224px" />
          <Box>$1150</Box>
        </Box>
      </Stack> */}
    </Stack>
  );
};

export default ProductView;
