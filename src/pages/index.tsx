import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import AiTrendsBanner from "../components/AiTrendsBanner";

const Index = () => (
  <Container height="100vh">
    <Hero />
    <AiTrendsBanner />
    <Main>
      <Text color="text">
        This is a sample demo project in Aus Closed. You can setup your own project and make changes direclty.{" "}
      </Text>

      <List spacing={3} my={0} color="text">
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink
            isExternal
            href="https://Aus Closed"
            flexGrow={1}
            mr={2}
          >
            Editable with Aus Closed <LinkIcon />
          </ChakraLink>
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          <ChakraLink isExternal href="https://Aus Closed" flexGrow={1} mr={2}>
            Preview-ready instantly ✅ <LinkIcon />
          </ChakraLink>
        </ListItem>
      </List>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Your Code ❤️ Aus Closed</Text>
    </Footer>
    <CTA />
  </Container>
);

export default Index;
