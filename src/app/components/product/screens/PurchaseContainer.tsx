import React, {FunctionComponent} from "react";
import {Stack, Box, Text, StackDivider, Icon, Link, Button} from "@chakra-ui/react";
import {BiHeart} from "react-icons/bi";
import {HiOutlineTruck} from "react-icons/hi";
import {RiArrowGoBackFill} from "react-icons/ri";

import {Url} from "../../../utilis";
import {Product} from "../types";

interface PurchaseContainerProps {
  product: Product;
}

const PurchaseContainer: FunctionComponent<PurchaseContainerProps> = ({product}) => {
  return (
    <Stack maxWidth={{base: "100%", md: "400px"}} paddingX={8} paddingY={6}>
      <Stack
        border="1px solid #e6e6e6"
        borderRadius="8px"
        direction="column"
        paddingX={8}
        paddingY={6}
      >
        <Stack direction="row" divider={<StackDivider borderColor="gray.200" />}>
          <Text color="gray.400">{product.condition.toLocaleUpperCase()}</Text>
          <Text color="gray.400"> {product.sold_quantity} Vendidos</Text>
        </Stack>
        <Stack alignItems="end" direction="row" justifyContent="space-between">
          <Stack direction="column" spacing={0}>
            <Text fontSize="22px" fontWeight="500" lineHeight="25px" maxWidth="250px">
              {product.title}
            </Text>
          </Stack>

          <Icon as={BiHeart} color="#3483fa" height={8} width={8} />
        </Stack>
        <Stack direction="column">
          <Text fontSize="36px" fontWeight={300} lineHeight="25px">
            ${product.price}
          </Text>
          <Text fontSize="18px" fontWeight={400} lineHeight="25px">
            en 12x $ 1.985
          </Text>
          <Link fontSize="14px" fontWeight={400} href={Url.mediosDepago} lineHeight="25px">
            Ver los medios de pago
          </Link>
        </Stack>
        <Stack direction="row">
          <Icon as={HiOutlineTruck} color="#00a650" height={8} width={8} />
          <Stack direction="column" paddingY={1}>
            <Text color="#00a650" lineHeight="15px">
              Llega gratis <b>entre el viernes y el jueves 24 de junio</b>
            </Text>
            <Text color="blackAlpha.600" lineHeight="15px">
              Beneficio mercado puntos
            </Text>
            <Link href={Url.formasDeEntraga} lineHeight="15px">
              Ver mas formas de entrega
            </Link>
          </Stack>
        </Stack>
        <Stack direction="row">
          <Icon as={RiArrowGoBackFill} color="#00a650" height={8} width={8} />
          <Stack direction="column">
            <Text color="#00a650" lineHeight="15px">
              Devolución gratis
            </Text>
            <Text color="blackAlpha.600" lineHeight="15px">
              Tenes 30 dias desde que lo recibis
            </Text>
            <Link href={Url.conoceMas} lineHeight="15px">
              Conocer mas
            </Link>
          </Stack>
        </Stack>
        <Stack>
          <Text fontSize="22px" fontWeight="500">
            ¡Última disponible!
          </Text>
        </Stack>
        <Stack direction="column">
          <Button colorScheme="twitter" size="lg" variant="solid">
            <a href={Url.login}>Compra ahora</a>
          </Button>
          <Button bg="rgba(65,137,230,.15)" color="#3483fa" size="lg">
            <a href={Url.login}>Agregar al carrito</a>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default PurchaseContainer;
