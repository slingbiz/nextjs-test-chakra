import React from "react";
import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  Button, 
  Stack, 
  Container as ChakraContainer,
  useColorModeValue,
  Icon,
  VStack,
  HStack,
  Badge
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);
const MotionHStack = motion(HStack);

export const Hero = () => {
  const bgGradient = useColorModeValue(
    "linear(to-br, purple.400, blue.400, teal.400)",
    "linear(to-br, purple.600, blue.600, teal.600)"
  );

  return (
    <Box
      position="relative"
      height="100vh"
      bgGradient={bgGradient}
      overflow="hidden"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 0.3,
      }}
    >
      {/* Main content */}
      <Flex
        position="relative"
        height="100%"
        alignItems="center"
        justifyContent="center"
        zIndex={1}
      >
        <ChakraContainer maxW="6xl" px={6}>
          <MotionVStack 
            spacing={8} 
            textAlign="center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <MotionBox
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge
                colorScheme="purple"
                fontSize="sm"
                px={4}
                py={2}
                borderRadius="full"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                🚀 Coming Soon 2024
              </Badge>
            </MotionBox>

            {/* Main heading */}
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Heading
                fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                fontWeight="bold"
                color="white"
                textShadow="2px 2px 4px rgba(0,0,0,0.3)"
                lineHeight="shorter"
              >
                AI Coders
                <Text as="span" color="yellow.300"> Summit</Text>
              </Heading>
            </MotionBox>

            {/* Subheading */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Text
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                color="gray.100"
                maxW="3xl"
                textShadow="1px 1px 2px rgba(0,0,0,0.3)"
              >
                Join the future of coding with AI. Connect with developers, learn cutting-edge techniques, 
                and shape the next generation of software development.
              </Text>
            </MotionBox>

            {/* Feature icons */}
            <MotionHStack 
              spacing={8} 
              justify="center" 
              flexWrap="wrap"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <VStack spacing={2}>
                <Text fontSize="3xl">🧠</Text>
                <Text color="white" fontSize="sm" fontWeight="medium">AI-Powered</Text>
              </VStack>
              <VStack spacing={2}>
                <Text fontSize="3xl">💻</Text>
                <Text color="white" fontSize="sm" fontWeight="medium">Live Coding</Text>
              </VStack>
              <VStack spacing={2}>
                <Text fontSize="3xl">👥</Text>
                <Text color="white" fontSize="sm" fontWeight="medium">Community</Text>
              </VStack>
              <VStack spacing={2}>
                <Text fontSize="3xl">🚀</Text>
                <Text color="white" fontSize="sm" fontWeight="medium">Innovation</Text>
              </VStack>
            </MotionHStack>

            {/* CTA Buttons */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={4}
                justify="center"
                align="center"
              >
                <Button
                  size="lg"
                  colorScheme="yellow"
                  variant="solid"
                  px={8}
                  py={6}
                  fontSize="lg"
                  fontWeight="bold"
                  borderRadius="full"
                  boxShadow="xl"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "2xl",
                  }}
                  transition="all 0.3s"
                >
                  Register Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  borderColor="white"
                  color="white"
                  px={8}
                  py={6}
                  fontSize="lg"
                  fontWeight="bold"
                  borderRadius="full"
                  _hover={{
                    bg: "whiteAlpha.200",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s"
                >
                  Learn More
                </Button>
              </Stack>
            </MotionBox>

            {/* Event details */}
            <MotionHStack
              spacing={6}
              justify="center"
              color="gray.200"
              fontSize="sm"
              flexWrap="wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Text>📅 December 15-17, 2024</Text>
              <Text>🌍 Virtual & In-Person</Text>
              <Text>👥 500+ Developers</Text>
            </MotionHStack>
          </MotionVStack>
        </ChakraContainer>
      </Flex>
    </Box>
  );
};