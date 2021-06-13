import React, {useState, useRef, useEffect} from "react";
import {Stack, Text, Icon, Link, Image, Box, Container, Button} from "@chakra-ui/react";
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

  const carouselArray = [car1, car2, car3];

  const [x, setX] = useState(0);
  const [carousel, setCarousel] = useState([...carouselArray]);

  useEffect(() => {
    console.log("Se monto el componente", x);
  }, []);

  const goLeft = () => {
    console.log("Esto es x", x);
    setX(x + 330);
  };

  const goRight = () => {
    console.log("Esto es x", x);

    setX(x - 330);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slider">
        {x !== 0 && (
          <Button alignSelf="center" className="slideLeft" variant="unstyled" onClick={goLeft}>
            <Icon as={IoIosArrowDropleft} color="twitter.500" height={10} width={10} />
          </Button>
        )}
        <div className="carousel-items-container">
          {carousel.map((item, index) => (
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
        </div>
        {x == 0 && (
          <Button alignSelf="center" className="slideRight" variant="unstyled" onClick={goRight}>
            <Icon as={IoIosArrowDropright} color="twitter.500" height={10} width={10} />
          </Button>
        )}
      </div>
    </div>
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
`;
