import React, {useContext} from "react";
import {Stack, Link, Text, Icon} from "@chakra-ui/react";

import {options} from "../utilis";
import DrawerContext from "../../contexts/DrawerContest";

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
