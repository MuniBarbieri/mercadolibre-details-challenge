import React from "react";
import {Container, Stack, Box, Image, Input, Text, StackDivider, Icon} from "@chakra-ui/react";
import {AiOutlineSearch} from "react-icons/ai";
import {GoLocation} from "react-icons/go";
import {FiPrinter} from "react-icons/fi";
import {RiShoppingCartLine} from "react-icons/ri";

import logo from "../assets/logo.png";

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Stack>
      <Box bg="primary.500" boxShadow="sm" paddingY="4">
        <Container maxWidth="container.xl">
          <Stack direction="column" spacing={3}>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" flex={1} spacing={12}>
                <Image objectFit="contain" src={logo} />
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
              <Stack alignItems="center" color="blackAlpha.700" direction="row" spacing={3}>
                <Icon as={FiPrinter} height={8} width={9} />
                <Text fontSize="lg" fontWeight="500">
                  Compra tu Point y QR a $189
                </Text>
              </Stack>
            </Stack>
            <Stack alignItems="baseline" direction="row" justifyContent="space-between">
              <Stack alignItems="baseline" direction="row" spacing={12}>
                <Stack alignItems="center" direction="row" spacing={1}>
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
                  direction="row"
                  fontSize="sm"
                  spacing={5}
                >
                  <Text>Categorias</Text>
                  <Text>Categorias</Text>
                  <Text>Categorias</Text>
                  <Text>Categorias</Text>
                  <Text>Categorias</Text>
                  <Text>Categorias</Text>
                  <Text>Categorias</Text>
                </Stack>
              </Stack>

              <Stack direction="row" fontSize="sm" spacing={4}>
                <Text>Crea tu cuenta</Text>
                <Text>Ingresa</Text>
                <Text>Tus compras</Text>
                <Icon as={RiShoppingCartLine} height={4} width={4} />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Box>
        <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
          <Routes />
        </Container>
      </Box>
    </Stack>
  );
};

export default App;
