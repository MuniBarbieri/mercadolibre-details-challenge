import React from "react";
import {Stack, Link, Text} from "@chakra-ui/react";

import {Url} from "../utilis";

const options = [
  {
    option: "Categorias",
    url: "",
  },
  {
    option: "Ofertas",
    url: Url.ofertas,
  },
  {
    option: "Historial",
    url: Url.historial,
  },
  {
    option: "Supermercado",
    url: Url.supermercado,
  },
  {
    option: "Moda",
    url: Url.moda,
  },
  {
    option: "Vender",
    url: Url.login,
  },
  {
    option: "Ayuda",
    url: Url.ayuda,
  },
];

export const MenuOptions = () => (
  <Stack direction={{base: "column", md: "row"}} spacing={6}>
    {options.map(({option, url}, index) => (
      <Link key={index} _hover={{color: "black"}} color="gay.700" href={url}>
        <Text>{option}</Text>
      </Link>
    ))}
  </Stack>
);
