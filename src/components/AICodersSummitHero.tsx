import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Container,
  Stack,
  VStack,
  HStack,
  useColorModeValue,
  Badge,
  Icon,
} from "@chakra-ui/react";
import { 
  StarIcon, 
  SettingsIcon, 
  TimeIcon, 
  AtSignIcon 
} from "@chakra-ui/icons";
import { keyframes } from "@emotion/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

// Animation keyframes
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const AICodersSummitHero = () => {
  const bgGradient = useColorModeValue(
    "linear(to-br, purple.400, blue.500, teal.400)",
    "linear(to-br, purple.600, blue.700, teal.600)"
  );
  
  const overlayBg = useColorModeValue(
    "rgba(255, 255, 255, 0.1)",
    "rgba(0, 0, 0, 0.3)"
  );

  const textColor = useColorModeValue("white", "gray.100");
  const subTextColor = useColorModeValue("gray.100", "gray.300");

  return (
    <Box
      position="relative"
      minH="100vh"
      bgGradient={bgGradient}
      overflow="hidden"
    >
      {/* Animated Background Elements */}
      <Box
        position="absolute"
        top="10%"
        left="10%"
        w="100px"
        h="100px"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.1)"
        animation={`${float} 6s ease-in-out infinite`}
      />
      <Box
        position="absolute"
        top="60%"
        right="15%"
        w="80px"
        h="80px"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.08)"
        animation={`${float} 4s ease-in-out infinite reverse`}
      />
      <Box
        position="absolute"
        bottom="20%"
        left="20%"
        w="60px"
        h="60px"
        borderRadius="full"
        bg="rgba(255, 255, 255, 0.06)"
        animation={`${float} 8s ease-in-out infinite`}
      />

      {/* Main Content */}
      <Container maxW="7xl" h="100vh" position="relative" zIndex={1}>
        <Flex
          direction="column"
          align="center"
          justify="center"
          h="100%"
          textAlign="center"
          px={4}
        >
          <MotionBox
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            {/* Event Badge */}
            <MotionBox variants={fadeInUp} mb={6}>
              <Badge
                px={4}
                py={2}
                bg={overlayBg}
                color={textColor}
                fontSize="sm"
                fontWeight="bold"
                borderRadius="full"
                backdropFilter="blur(10px)"
                border="1px solid rgba(255, 255, 255, 0.2)"
              >
                🚀 LIVE EVENT • 2025
              </Badge>
            </MotionBox>

            {/* Main Heading */}
            <MotionBox variants={fadeInUp}>
              <Heading
                as="h1"
                size="4xl"
                color={textColor}
                mb={6}
                fontWeight="bold"
                lineHeight="shorter"
                textShadow="2px 2px 4px rgba(0,0,0,0.3)"
              >
                AI Coders
                <Text
                  as="span"
                  bgGradient="linear(to-r, yellow.200, orange.300)"
                  bgClip="text"
                  display="block"
                  animation={`${pulse} 3s ease-in-out infinite`}
                >
                  Summit 2025
                </Text>
              </Heading>
            </MotionBox>

            {/* Subtitle */}
            <MotionBox variants={fadeInUp}>
              <Text
                fontSize="xl"
                color={subTextColor}
                mb={8}
                maxW="2xl"
                mx="auto"
                lineHeight="tall"
              >
                Where artificial intelligence meets human creativity. Join the most innovative
                developers, AI researchers, and tech visionaries shaping the future of code.
              </Text>
            </MotionBox>

            {/* Feature Icons */}
            <MotionBox variants={fadeInUp} mb={8}>
              <HStack spacing={8} justify="center" flexWrap="wrap">
                <VStack spacing={2}>
                  <Box
                    p={4}
                    bg={overlayBg}
                    borderRadius="full"
                    backdropFilter="blur(10px)"
                    border="1px solid rgba(255, 255, 255, 0.2)"
                    _hover={{
                      transform: "scale(1.1)",
                      transition: "transform 0.2s",
                    }}
                  >
                    <StarIcon w={6} h={6} color={textColor} />
                  </Box>
                  <Text fontSize="sm" color={subTextColor} fontWeight="medium">
                    AI-Powered
                  </Text>
                </VStack>
                <VStack spacing={2}>
                  <Box
                    p={4}
                    bg={overlayBg}
                    borderRadius="full"
                    backdropFilter="blur(10px)"
                    border="1px solid rgba(255, 255, 255, 0.2)"
                    _hover={{
                      transform: "scale(1.1)",
                      transition: "transform 0.2s",
                    }}
                  >
                    <SettingsIcon w={6} h={6} color={textColor} />
                  </Box>
                  <Text fontSize="sm" color={subTextColor} fontWeight="medium">
                    Code Innovation
                  </Text>
                </VStack>
                <VStack spacing={2}>
                  <Box
                    p={4}
                    bg={overlayBg}
                    borderRadius="full"
                    backdropFilter="blur(10px)"
                    border="1px solid rgba(255, 255, 255, 0.2)"
                    _hover={{
                      transform: "scale(1.1)",
                      transition: "transform 0.2s",
                    }}
                  >
                    <TimeIcon w={6} h={6} color={textColor} />
                  </Box>
                  <Text fontSize="sm" color={subTextColor} fontWeight="medium">
                    Future Tech
                  </Text>
                </VStack>
                <VStack spacing={2}>
                  <Box
                    p={4}
                    bg={overlayBg}
                    borderRadius="full"
                    backdropFilter="blur(10px)"
                    border="1px solid rgba(255, 255, 255, 0.2)"
                    _hover={{
                      transform: "scale(1.1)",
                      transition: "transform 0.2s",
                    }}
                  >
                    <AtSignIcon w={6} h={6} color={textColor} />
                  </Box>
                  <Text fontSize="sm" color={subTextColor} fontWeight="medium">
                    Global Community
                  </Text>
                </VStack>
              </HStack>
            </MotionBox>

            {/* CTA Buttons */}
            <MotionBox variants={fadeInUp}>
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={4}
                justify="center"
                align="center"
              >
                <Button
                  size="lg"
                  bg="white"
                  color="purple.600"
                  px={8}
                  py={6}
                  borderRadius="full"
                  fontWeight="bold"
                  fontSize="lg"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "xl",
                    bg: "gray.50",
                  }}
                  transition="all 0.2s"
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
                  borderRadius="full"
                  fontWeight="bold"
                  fontSize="lg"
                  _hover={{
                    bg: "rgba(255, 255, 255, 0.1)",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.2s"
                >
                  Learn More
                </Button>
              </Stack>
            </MotionBox>

            {/* Event Details */}
            <MotionBox variants={fadeInUp} mt={12}>
              <HStack
                spacing={8}
                justify="center"
                color={subTextColor}
                fontSize="sm"
                flexWrap="wrap"
              >
                <Text>📅 March 15-17, 2025</Text>
                <Text>📍 San Francisco, CA</Text>
                <Text>👥 500+ Developers</Text>
                <Text>🎯 50+ Sessions</Text>
              </HStack>
            </MotionBox>
          </MotionBox>
        </Flex>
      </Container>

      {/* Bottom Wave */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        height="100px"
        background="white"
        _dark={{ background: "gray.900" }}
        clipPath="polygon(0 100%, 100% 100%, 100% 0, 0 80%)"
      />
    </Box>
  );
};