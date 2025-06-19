import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { HeroSection } from "../components/HeroSection";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

const Index = () => (
  <>
    <HeroSection />
    <Container>
      <Main>
        <Text color="text">
          This is a sample demo project in Baloon. You can setup your own project and make changes direclty.{" "}
        </Text>

        <List spacing={3} my={0} color="text">
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <ChakraLink
              isExternal
              href="https://baloon.dev"
              flexGrow={1}
              mr={2}
            >
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

      <DarkModeSwitch />
      <Footer>
        <Text>Your Code ❤️ Baloon</Text>
      </Footer>
      <CTA />
    </Container>
  </>
);

export default Index;