import React, {useContext} from "react";
import {Stack, Link, Text, Icon} from "@chakra-ui/react";
import {AiOutlineBars} from "react-icons/ai";
import {TiTicket} from "react-icons/ti";
import {BiTimeFive} from "react-icons/bi";
import {RiStore2Line} from "react-icons/ri";
import {GiClothes} from "react-icons/gi";
import {AiOutlineTag} from "react-icons/ai";
import {IoIosHelpCircleOutline} from "react-icons/io";

import {Url} from "../utilis";
import DrawerContext from "../../contexts/DrawerContest";

const options = [
  {
    option: "Categorias",
    url: "",
    icon: AiOutlineBars,
  },
  {
    option: "Ofertas",
    url: Url.ofertas,
    icon: TiTicket,
  },
  {
    option: "Historial",
    url: Url.historial,
    icon: BiTimeFive,
  },
  {
    option: "Supermercado",
    url: Url.supermercado,
    icon: RiStore2Line,
  },
  {
    option: "Moda",
    url: Url.moda,
    icon: GiClothes,
  },
  {
    option: "Vender",
    url: Url.login,
    icon: AiOutlineTag,
  },
  {
    option: "Ayuda",
    url: Url.ayuda,
    icon: IoIosHelpCircleOutline,
  },
];

export const MenuOptions = () => {
  const isDrawerOpen = useContext(DrawerContext);

  return (
    <Stack direction={{base: "column", md: "row"}} spacing={6}>
      {options.map(({option, url, icon}, index) => (
        <Link key={index} _hover={{color: "black"}} color="gay.700" href={url}>
          <Stack alignItems="center" direction="row">
            {isDrawerOpen && <Icon as={icon} />}
            <Text fontWeight={500}>{option}</Text>
          </Stack>
        </Link>
      ))}
    </Stack>
  );
};
