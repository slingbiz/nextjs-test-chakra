import { 
  Flex, 
  Heading, 
  Text, 
  Button, 
  VStack, 
  HStack, 
  Box, 
  useColorModeValue,
  Container as ChakraContainer,
  Badge
} from "@chakra-ui/react";
import { motion } from "framer-motion";
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export const Hero = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("purple.600", "purple.300");
  const subtitleColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Flex
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      bg={bgColor}
      position="relative"
      overflow="hidden"
    >
      {/* Background Animation */}
      <MotionBox
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear(45deg, purple.400, pink.400, blue.400)"
        opacity="0.1"
        animate={{
          background: [
            "linear-gradient(45deg, #805AD5, #ED64A6, #4299E1)",
            "linear-gradient(45deg, #4299E1, #805AD5, #ED64A6)",
            "linear-gradient(45deg, #ED64A6, #4299E1, #805AD5)"
          ]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <ChakraContainer maxW="6xl" px={6}>
        <MotionFlex
          direction="column"
          align="center"
          textAlign="center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Event Badge */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            mb={6}
          >
            <Badge
              colorScheme="purple"
              fontSize="lg"
              px={4}
              py={2}
              borderRadius="full"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              🚀 AI Coders Summit 2025
            </Badge>
          </MotionBox>

          {/* Main Heading */}
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Heading
              as="h1"
              size="4xl"
              fontWeight="bold"
              color={textColor}
              lineHeight="shorter"
              mb={6}
            >
              The Future of{" "}
              <Text
                as="span"
                bgGradient="linear(to-r, purple.400, pink.400, blue.400)"
                bgClip="text"
                fontWeight="extrabold"
              >
                AI-Powered
              </Text>
              <br />
              Development is Here
            </Heading>
          </MotionBox>

          {/* Subtitle */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            mb={8}
          >
            <Text
              fontSize="xl"
              color={subtitleColor}
              maxW="3xl"
              lineHeight="tall"
            >
              Join thousands of developers, AI researchers, and tech innovators
              at the most anticipated coding event of the year. Experience the
              cutting-edge of artificial intelligence in software development.
            </Text>
          </MotionBox>

          {/* Feature Icons */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            mb={10}
          >
            <HStack spacing={8} justify="center" wrap="wrap">
              <MotionBox
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <VStack spacing={2}>
                  <Box
                    p={3}
                    borderRadius="full"
                    bg={accentColor}
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text fontSize="2xl">🧠</Text>
                  </Box>
                  <Text fontSize="sm" fontWeight="medium" color={textColor}>
                    AI-Powered
                  </Text>
                </VStack>
              </MotionBox>
              
              <MotionBox
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <VStack spacing={2}>
                  <Box
                    p={3}
                    borderRadius="full"
                    bg={accentColor}
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text fontSize="2xl">💻</Text>
                  </Box>
                  <Text fontSize="sm" fontWeight="medium" color={textColor}>
                    Code Together
                  </Text>
                </VStack>
              </MotionBox>
              
              <MotionBox
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <VStack spacing={2}>
                  <Box
                    p={3}
                    borderRadius="full"
                    bg={accentColor}
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text fontSize="2xl">👥</Text>
                  </Box>
                  <Text fontSize="sm" fontWeight="medium" color={textColor}>
                    Community
                  </Text>
                </VStack>
              </MotionBox>
              
              <MotionBox
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <VStack spacing={2}>
                  <Box
                    p={3}
                    borderRadius="full"
                    bg={accentColor}
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text fontSize="2xl">🚀</Text>
                  </Box>
                  <Text fontSize="sm" fontWeight="medium" color={textColor}>
                    Innovation
                  </Text>
                </VStack>
              </MotionBox>
            </HStack>
          </MotionBox>

          {/* Call to Action Buttons */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <HStack 
              spacing={{ base: 4, sm: 6 }} 
              direction={{ base: "column", sm: "row" }}
              justify="center"
              wrap="wrap"
            >
              <Button
                size="lg"
                colorScheme="purple"
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="bold"
                borderRadius="full"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "xl"
                }}
                transition="all 0.2s"
              >
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                colorScheme="purple"
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="bold"
                borderRadius="full"
                _hover={{
                  transform: "translateY(-2px)",
                  bg: accentColor,
                  color: "white",
                  borderColor: accentColor
                }}
                transition="all 0.2s"
              >
                Learn More
              </Button>
            </HStack>
          </MotionBox>

          {/* Event Details */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            mt={12}
          >
            <HStack
              spacing={8}
              justify="center"
              wrap="wrap"
              color={subtitleColor}
              fontSize="sm"
            >
              <Text>📅 March 15-17, 2025</Text>
              <Text>📍 San Francisco, CA</Text>
              <Text>👥 5000+ Attendees</Text>
              <Text>🎯 50+ Sessions</Text>
            </HStack>
          </MotionBox>
        </MotionFlex>
      </ChakraContainer>
    </Flex>
  );
};
