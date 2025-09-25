import {
  Box,
  Link as ChakraLink,
  Text,
  List,
  ListIcon,
  ListItem,
  Container,
  VStack,
  Heading,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";

const FeatureCard = ({ emoji, title, description }: { emoji: string, title: string, description: string }) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  
  return (
    <Box
      p={6}
      bg={bgColor}
      border="1px"
      borderColor={borderColor}
      borderRadius="lg"
      textAlign="center"
      _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
      transition="all 0.2s"
    >
      <Text fontSize="4xl" mb={4}>{emoji}</Text>
      <Heading size="md" mb={3} color={useColorModeValue("gray.800", "white")}>
        {title}
      </Heading>
      <Text color={useColorModeValue("gray.600", "gray.300")}>
        {description}
      </Text>
    </Box>
  );
};

const Index = () => (
  <Box>
    {/* Hero Section */}
    <Hero />
    
    {/* Content Section */}
    <Container maxW="7xl" py={16}>
      <VStack spacing={16}>
        {/* About Section */}
        <VStack spacing={8} textAlign="center" maxW="4xl">
          <Heading
            fontSize={{ base: "3xl", md: "4xl" }}
            color={useColorModeValue("gray.800", "white")}
          >
            Revolutionizing Development with AI
          </Heading>
          <Text
            fontSize="lg"
            color={useColorModeValue("gray.600", "gray.300")}
            lineHeight="tall"
          >
            Join us at the AI Coders Summit 2025, where the brightest minds in technology 
            converge to explore the intersection of artificial intelligence and software development. 
            This is your opportunity to learn, network, and shape the future of coding.
          </Text>
        </VStack>

        {/* Features Grid */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
          <FeatureCard
            emoji="💡"
            title="Innovation Workshops"
            description="Hands-on sessions with cutting-edge AI tools and frameworks that are reshaping how we write code."
          />
          <FeatureCard
            emoji="👥"
            title="Expert Network"
            description="Connect with industry leaders, AI researchers, and fellow developers passionate about the future."
          />
          <FeatureCard
            emoji="💻"
            title="Live Coding"
            description="Watch AI-assisted development in action with real-time coding demonstrations and pair programming."
          />
        </SimpleGrid>

        {/* Baloon.dev Integration */}
        <Box
          w="full"
          p={8}
          bg={useColorModeValue("purple.50", "purple.900")}
          borderRadius="xl"
          textAlign="center"
        >
          <VStack spacing={4}>
            <Heading size="lg" color={useColorModeValue("purple.800", "purple.200")}>
              Powered by Baloon.dev
            </Heading>
            <Text color={useColorModeValue("purple.600", "purple.300")}>
              This summit website is built and deployed using Baloon.dev - 
              the platform that makes development and deployment seamless.
            </Text>
            <List spacing={3} color={useColorModeValue("purple.700", "purple.200")}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <ChakraLink
                  isExternal
                  href="https://baloon.dev"
                  _hover={{ textDecoration: "underline" }}
                >
                  Editable with Baloon <LinkIcon />
                </ChakraLink>
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="green.500" />
                <ChakraLink 
                  isExternal 
                  href="https://baloon.dev"
                  _hover={{ textDecoration: "underline" }}
                >
                  Preview-ready instantly ✅ <LinkIcon />
                </ChakraLink>
              </ListItem>
            </List>
          </VStack>
        </Box>
      </VStack>
    </Container>

    {/* Fixed Position Elements */}
    <DarkModeSwitch />
    <Footer>
      <Text>AI Coders Summit 2025 ❤️ Powered by Baloon.dev</Text>
    </Footer>
    <CTA />
  </Box>
);

export default Index;
