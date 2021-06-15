import React from "react";
import {
  Container,
  Stack,
  Box,
  Image,
  Input,
  Text,
  StackDivider,
  Icon,
  Link,
} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {GoLocation} from "react-icons/go";
import {FiPrinter} from "react-icons/fi";
import {RiShoppingCartLine} from "react-icons/ri";

import {Url} from "../utilis";
import logo from "../../assets/logo.png";

const Navbar: React.FC = () => {
  return (
    <Stack>
      <Box bg="primary.500" boxShadow="sm" paddingY="4" width="100%">
        <Container maxWidth="container.xl">
          <Stack direction="column" spacing={3}>
            <Stack direction={{base: "column", md: "row"}} justifyContent="space-between">
              <Stack direction="row" flex={1} spacing={12}>
                <Link href={Url.mercadolibreHome}>
                  <Image objectFit="contain" src={logo} />
                </Link>
                <Stack
                  alignItems="center"
                  bg="white"
                  borderRadius="sm"
                  boxShadow="sm"
                  direction="row"
                  divider={<StackDivider borderColor="gray.200" />}
                  maxWidth={600}
                  padding={2}
                  width="100%"
                >
                  <Input
                    bg="white"
                    paddingX={2}
                    placeholder="Buscar productos, marcas y mas..."
                    variant="unstyled"
                  />
                  <Icon as={AiOutlineSearch} color="gray.400" height={6} width={6} />
                </Stack>
              </Stack>
              <Stack
                alignItems="center"
                color="blackAlpha.700"
                direction="row"
                display={{base: "none", md: "flex"}}
                spacing={3}
              >
                <Icon as={FiPrinter} height={8} width={9} />
                <Text fontSize="lg" fontWeight={500}>
                  Compra tu Point y QR a $189
                </Text>
              </Stack>
            </Stack>
            <Stack
              alignItems={{base: "center", md: "baseline"}}
              direction={{base: "column", md: "row"}}
              justifyContent="space-between"
            >
              <Stack
                alignItems="baseline"
                direction={{base: "column", md: "row"}}
                spacing={{base: 6, md: 12}}
              >
                <Stack
                  alignItems="center"
                  direction="row"
                  display={{base: "none", md: "flex"}}
                  spacing={1}
                >
                  <Icon as={GoLocation} height={8} />
                  <Stack direction="column" spacing={0}>
                    <Text color="blackAlpha.800" fontSize="xs" lineHeight="normal">
                      Enviar a Junin
                    </Text>
                    <Text fontSize="md" fontWeight={500} lineHeight="normal">
                      Pedro Aparicio 25
                    </Text>
                  </Stack>
                </Stack>
                <Stack
                  alignItems="center"
                  color="blackAlpha.600"
                  direction={{base: "column", md: "row"}}
                  fontSize="sm"
                  spacing={6}
                >
                  <Stack direction="row" spacing={6}>
                    <Link _hover={{color: "black"}} color="gray.700">
                      <Text>Categorias</Text>
                    </Link>
                    <Link _hover={{color: "black"}} color="gray.700" href={Url.ofertas}>
                      <Text>Ofertas</Text>
                    </Link>
                    <Link _hover={{color: "black"}} color="gray.700" href={Url.historial}>
                      <Text>Historial</Text>
                    </Link>
                    <Link _hover={{color: "black"}} color="gray.700" href={Url.supermercado}>
                      <Text>Supermercado</Text>
                    </Link>
                  </Stack>
                  <Stack direction="row" spacing={6}>
                    <Link _hover={{color: "black"}} color="gray.700" href={Url.moda}>
                      <Text>Moda</Text>
                    </Link>
                    <Link _hover={{color: "black"}} color="gray.700" href={Url.login}>
                      <Text>Vender</Text>
                    </Link>
                    <Link _hover={{color: "black"}} color="gray.700" href={Url.ayuda}>
                      <Text>Ayuda</Text>
                    </Link>
                  </Stack>
                </Stack>
              </Stack>

              <Stack direction="row" fontSize="sm" spacing={4}>
                <Text>Crea tu cuenta</Text>
                <Text>Ingresa</Text>
                <Text>Tus compras</Text>
                <Link href={Url.login}>
                  <Icon as={RiShoppingCartLine} height={4} width={4} />
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
};

export default Navbar;
