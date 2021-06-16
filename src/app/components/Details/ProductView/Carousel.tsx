import React, {useState} from "react";
import {Stack, Text, Icon, Image, Button} from "@chakra-ui/react";
import {IoIosArrowDropright, IoIosArrowDropleft} from "react-icons/io";
import styled from "styled-components";

import {totalCards} from "../../../utilis";

export const Carousel = () => {
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-320 * Math.floor(totalCards.length / 3)) : setX(x + 320);
  };

  const goRight = () => {
    x === -320 * Math.floor(totalCards.length / 3) ? setX(0) : setX(x - 320);
  };

  return (
    <Stack
      boxSizing="border-box"
      className="carousel-container"
      display="flex"
      height="30vh"
      margin={0}
      padding={0}
      position="relative"
    >
      <Stack
        className="carousel-slider"
        direction="row"
        display="flex"
        height="35vh"
        justifyContent="space-between"
        maxWidth="766px"
        position="static"
        width="100%"
      >
        {x !== 0 && (
          <Button alignSelf="center" className="slideLeft" variant="unstyled" onClick={goLeft}>
            <Icon as={IoIosArrowDropleft} color="twitter.500" height={10} width={10} />
          </Button>
        )}
        <Stack alignItems="center" direction="row" display="flex" overflowX="hidden">
          {totalCards.map((item, index) => (
            <Card key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
              <Stack overflow="hidden">
                <Image height={56} objectFit="contain" overflowY="hidden" src={item} width={56} />
              </Stack>
              <Stack direction="column" padding={4} spacing={0}>
                <Text fontSize={25}>$1600</Text>
                <Text color="success.500" fontSize={18} fontWeight={400}>
                  Envio Gratis
                </Text>
                <Text fontSize={14}>Peluche Stich</Text>
                <Text fontSize={14}>Calidad unica</Text>
              </Stack>
            </Card>
          ))}
        </Stack>
        <Button alignSelf="center" className="slideRight" variant="unstyled" onClick={goRight}>
          <Icon as={IoIosArrowDropright} color="twitter.500" height={10} width={10} />
        </Button>
      </Stack>
    </Stack>
  );
};

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 10px;
  border: 1px solid #f5f5f5;
  border-radius: 4px;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 10%);
  height: 100%;
  transition: 0.5s;
  &:hover {
    box-shadow: 0 1px 20px 0 rgb(0 0 0 / 10%);
  }
  min-width: 224px;
`;
