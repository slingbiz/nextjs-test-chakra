import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Container,
  useColorModeValue,
  Badge,
  Circle,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`;

export const Hero = () => {
  const bgGradient = useColorModeValue(
    "linear(135deg, #667eea 0%, #764ba2 100%)",
    "linear(135deg, #2D3748 0%, #1A202C 100%)"
  );
  
  const overlayGradient = useColorModeValue(
    "linear(to-r, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8))",
    "linear(to-r, rgba(45, 55, 72, 0.9), rgba(26, 32, 44, 0.9))"
  );

  return (
    <Box
      position="relative"
      height="100vh"
      bgGradient={bgGradient}
      overflow="hidden"
    >
      {/* Animated Background Elements */}
      <Box position="absolute" top="0" left="0" right="0" bottom="0">
        {/* Floating Code Icons */}
        <MotionBox
          position="absolute"
          top="20%"
          left="10%"
          animation={`${float} 6s ease-in-out infinite`}
          opacity={0.3}
        >
          <Text fontSize="32px">💻</Text>
        </MotionBox>
        
        <MotionBox
          position="absolute"
          top="60%"
          right="15%"
          animation={`${float} 4s ease-in-out infinite`}
          opacity={0.3}
        >
          <Text fontSize="40px">🧠</Text>
        </MotionBox>
        
        <MotionBox
          position="absolute"
          bottom="30%"
          left="20%"
          animation={`${float} 5s ease-in-out infinite`}
          opacity={0.3}
        >
          <Text fontSize="24px">🚀</Text>
        </MotionBox>

        {/* Pulsing Dots */}
        <Box
          position="absolute"
          top="25%"
          right="25%"
          width="4px"
          height="4px"
          borderRadius="50%"
          bg="white"
          animation={`${pulse} 3s infinite`}
        />
        <Box
          position="absolute"
          bottom="40%"
          right="35%"
          width="3px"
          height="3px"
          borderRadius="50%"
          bg="white"
          animation={`${pulse} 4s infinite 1s`}
        />
        <Box
          position="absolute"
          top="70%"
          left="30%"
          width="2px"
          height="2px"
          borderRadius="50%"
          bg="white"
          animation={`${pulse} 2s infinite 0.5s`}
        />
      </Box>

      {/* Main Content */}
      <Flex
        position="relative"
        zIndex={2}
        height="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Container maxW="6xl" textAlign="center">
          <VStack spacing={8}>
            {/* Event Badge */}
            <MotionBox
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge
                colorScheme="purple"
                variant="solid"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
                fontWeight="bold"
                bg="rgba(255, 255, 255, 0.2)"
                backdropFilter="blur(10px)"
                border="1px solid rgba(255, 255, 255, 0.3)"
              >
                🚀 LIVE EVENT 2025
              </Badge>
            </MotionBox>

            {/* Main Heading */}
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Heading
                fontSize={{ base: "4xl", md: "6xl", lg: "8xl" }}
                fontWeight="900"
                color="white"
                textShadow="2px 2px 4px rgba(0,0,0,0.3)"
                lineHeight="shorter"
              >
                AI CODERS
                <Text
                  as="span"
                  display="block"
                  bgGradient="linear(to-r, #FFD700, #FFA500)"
                  bgClip="text"
                  fontSize={{ base: "5xl", md: "7xl", lg: "9xl" }}
                >
                  SUMMIT
                </Text>
              </Heading>
            </MotionBox>

            {/* Subtitle */}
            <MotionText
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              color="whiteAlpha.900"
              maxW="3xl"
              textShadow="1px 1px 2px rgba(0,0,0,0.3)"
              fontWeight="500"
            >
              Join the most innovative developers, AI researchers, and tech leaders 
              shaping the future of intelligent coding
            </MotionText>

            {/* Feature Icons */}
            <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <HStack spacing={8} justify="center" flexWrap="wrap">
                <VStack spacing={2}>
                  <Text fontSize="32px">🧠</Text>
                  <Text color="whiteAlpha.800" fontSize="sm" fontWeight="bold">
                    AI Innovation
                  </Text>
                </VStack>
                <VStack spacing={2}>
                  <Text fontSize="32px">💻</Text>
                  <Text color="whiteAlpha.800" fontSize="sm" fontWeight="bold">
                    Live Coding
                  </Text>
                </VStack>
                <VStack spacing={2}>
                  <Text fontSize="32px">👥</Text>
                  <Text color="whiteAlpha.800" fontSize="sm" fontWeight="bold">
                    Networking
                  </Text>
                </VStack>
                <VStack spacing={2}>
                  <Text fontSize="32px">🚀</Text>
                  <Text color="whiteAlpha.800" fontSize="sm" fontWeight="bold">
                    Future Tech
                  </Text>
                </VStack>
              </HStack>
            </MotionBox>

            {/* CTA Buttons */}
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <HStack spacing={4} justify="center" flexWrap="wrap">
                <Button
                  size="lg"
                  colorScheme="orange"
                  bg="linear-gradient(135deg, #FFD700, #FFA500)"
                  color="black"
                  fontWeight="bold"
                  px={8}
                  py={6}
                  borderRadius="full"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 25px rgba(255, 215, 0, 0.4)",
                  }}
                  transition="all 0.3s ease"
                >
                  Join Summit 2025
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  color="white"
                  borderColor="white"
                  px={8}
                  py={6}
                  borderRadius="full"
                  _hover={{
                    bg: "whiteAlpha.200",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.3s ease"
                >
                  Watch Highlights
                </Button>
              </HStack>
            </MotionBox>

            {/* Stats */}
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <HStack
                spacing={8}
                justify="center"
                flexWrap="wrap"
                pt={8}
                borderTop="1px solid"
                borderColor="whiteAlpha.300"
              >
                <VStack spacing={1}>
                  <Text fontSize="2xl" fontWeight="bold" color="white">
                    500+
                  </Text>
                  <Text fontSize="sm" color="whiteAlpha.700">
                    Speakers
                  </Text>
                </VStack>
                <VStack spacing={1}>
                  <Text fontSize="2xl" fontWeight="bold" color="white">
                    50K+
                  </Text>
                  <Text fontSize="sm" color="whiteAlpha.700">
                    Attendees
                  </Text>
                </VStack>
                <VStack spacing={1}>
                  <Text fontSize="2xl" fontWeight="bold" color="white">
                    100+
                  </Text>
                  <Text fontSize="sm" color="whiteAlpha.700">
                    Sessions
                  </Text>
                </VStack>
                <VStack spacing={1}>
                  <Text fontSize="2xl" fontWeight="bold" color="white">
                    24/7
                  </Text>
                  <Text fontSize="sm" color="whiteAlpha.700">
                    Live Coding
                  </Text>
                </VStack>
              </HStack>
            </MotionBox>
          </VStack>
        </Container>
      </Flex>
    </Box>
  );
};
