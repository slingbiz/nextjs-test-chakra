import { Flex, Link as ChakraLink, Text, Code, List, ListIcon, ListItem } from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

const Index = () => (
  <Container>
    <DarkModeSwitch />
    <Flex
      direction="column"
      flex="1"
      w="full"
      maxW="6xl"
      px={{ base: 6, md: 10 }}
      py={{ base: 10, md: 16 }}
      gap={{ base: 12, md: 20 }}
    >
      <Hero />
      <Main>
        <Text color="text">
          This is a sample demo project in Baloon. You can setup your own project and make changes direclty.{" "}
        </Text>

        <List spacing={3} my={0} color="text">
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink isExternal href="https://baloon.dev" flexGrow={1} mr={2}>
              Editable with Baloon <LinkIcon />
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink isExternal href="https://baloon.dev" flexGrow={1} mr={2}>
              Preview-ready instantly ✅ <LinkIcon />
            </ChakraLink>
          </ListItem>
        </List>
      </Main>
      <CTA />
    </Flex>
    <Footer w="full" mt={{ base: 12, md: 16 }} />
  </Container>
);

export default Index;
