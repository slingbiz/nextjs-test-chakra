import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Box,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { AICodersSummitHero } from "../components/AICodersSummitHero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

const Index = () => (
  <Box>
    {/* AI Coders Summit Hero Banner */}
    <AICodersSummitHero />
    
    {/* Original Content Section */}
    <Container minH="50vh" py={16}>
      <Main>
        <Text color="text" fontSize="lg" mb={6}>
          Welcome to the AI Coders Summit - where innovation meets implementation. This demo showcases how Baloon.dev can transform your development workflow.
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
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <Text>
              AI-powered development tools and workflows
            </Text>
          </ListItem>
          <ListItem>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            <Text>
              Connect with the global developer community
            </Text>
          </ListItem>
        </List>
      </Main>

      <DarkModeSwitch />
      <Footer>
        <Text>AI Coders Summit 2025 ❤️ Powered by Baloon</Text>
      </Footer>
      <CTA />
    </Container>
  </Box>
);

export default Index;
