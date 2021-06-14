import React, {FunctionComponent, useState} from "react";
import {Stack, Box, Image, Divider, Text, Input, Button, FormLabel} from "@chakra-ui/react";

import {Product} from "../types";
import stichW from "../../../../assets/stichW.png";

import {Carousel} from "./Carousel";

interface ProductImagesProps {
  product: Product;
}

const ProductView: FunctionComponent<ProductImagesProps> = ({product}) => {
  const [productImage, setProductImage] = useState(stichW);
  const [question, setQuestion] = useState("");
  const [questionsContainer, setQuestionContainer] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const question = e.target.value;

    setQuestion(question);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuestionContainer([...questionsContainer, question]);
    setQuestion("");
  };

  const changeImage = (e: any) => {
    const img = e.target.src;

    setProductImage(img);
  };

  return (
    <Stack direction="column">
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
        <Stack alignSelf="center" paddingRight={10}>
          <Image boxSize="468px" objectFit="contain" src={productImage} />
        </Stack>
      </Stack>
      <Stack padding={10}>
        <Divider />
      </Stack>
      <Stack direction="column" padding={10}>
        <Text fontSize={30}> Mas publicacione del Vendedor</Text>
        <Carousel />
      </Stack>
      <Stack padding={10}>
        <Divider />
      </Stack>
      <Stack direction="column" padding={10}>
        <form onSubmit={handleSubmit}>
          <FormLabel fontSize={20}>Preguntale al vendedor</FormLabel>
          <Stack direction="row">
            <Input
              focusBorderColor="blue.400"
              placeholder="Escribi tu pregunta..."
              size="lg"
              value={question}
              onChange={handleChange}
            />
            <Button colorScheme="twitter" size="lg" type="submit" variant="solid">
              Preguntar
            </Button>
          </Stack>
        </form>
        <Stack>
          <Text fontSize={20} fontWeight={500}>
            {" "}
            Ultimas realizadas
          </Text>
        </Stack>
        {questionsContainer.map((question, i) => (
          <Stack key={i}>
            <Text>{question}</Text>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default ProductView;
