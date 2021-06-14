import React, {useState} from "react";
import {Stack, Text, Icon, Image, Button} from "@chakra-ui/react";
import {IoIosArrowDropright, IoIosArrowDropleft} from "react-icons/io";
import styled from "styled-components";

import car1 from "../../../../assets/car1.png";
import car2 from "../../../../assets/car2.png";
import car3 from "../../../../assets/car3.png";
import car4 from "../../../../assets/car4.png";
import car5 from "../../../../assets/car5.png";
import car6 from "../../../../assets/car6.png";

import "./carousel.scss";

export const Carousel = () => {
  const totalCards = [car1, car2, car3, car4, car5, car6];

  const [x, setX] = useState(0);

  const goLeft = () => {
    setX(x + 330);
  };

  const goRight = () => {
    setX(x - 330);
  };

  return (
    <Stack
      boxSizing="border-box"
      className="carousel-container"
      display="flex"
      height="50vh"
      margin={0}
      padding={0}
      position="relative"
    >
      <Stack
        className="carousel-slider"
        direction="row"
        display="flex"
        height="30vh"
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
              <Image height={56} objectFit="contain" overflowY="hidden" src={item} width={56} />
              <Stack direction="column" padding={4} spacing={0}>
                <Text fontSize={25}>$1600</Text>
                <Text color="#00a650" fontSize={18} fontWeight={400}>
                  Envio Gratis
                </Text>
                <Text fontSize={14}>Peluche Stich</Text>
                <Text fontSize={14}>Calidad unica</Text>
              </Stack>
            </Card>
          ))}
        </Stack>
        {x == 0 && (
          <Button alignSelf="center" className="slideRight" variant="unstyled" onClick={goRight}>
            <Icon as={IoIosArrowDropright} color="twitter.500" height={10} width={10} />
          </Button>
        )}
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
