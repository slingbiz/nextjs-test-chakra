import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  Button, 
  Stack, 
  Container, 
  useColorModeValue,
  VStack,
  HStack
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);

export const Hero = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("purple.600", "purple.300");
  
  return (
    <Box
      minHeight="100vh"
      bg={bgColor}
      position="relative"
      overflow="hidden"
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.05"
        backgroundImage="radial-gradient(circle at 25px 25px, rgba(139, 92, 246, 0.3) 2px, transparent 0)"
        backgroundSize="50px 50px"
      />
      
      <Container maxW="7xl" height="100vh">
        <Flex
          direction="column"
          justify="center"
          align="center"
          height="100%"
          textAlign="center"
          position="relative"
          zIndex={1}
        >
          {/* Main Content */}
          <VStack spacing={8} maxW="4xl">
            {/* Animated Icons */}
            <HStack spacing={8} mb={4}>
              <MotionBox
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Text fontSize="4xl" color={accentColor}>🧠</Text>
              </MotionBox>
              <MotionBox
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Text fontSize="4xl" color={accentColor}>💻</Text>
              </MotionBox>
              <MotionBox
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Text fontSize="4xl" color={accentColor}>🚀</Text>
              </MotionBox>
            </HStack>

            {/* Main Heading */}
            <MotionBox
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Heading
                fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                fontWeight="bold"
                color={textColor}
                lineHeight="shorter"
              >
                <Text
                  as="span"
                  bgGradient="linear(to-r, purple.400, pink.400, blue.400)"
                  bgClip="text"
                >
                  AI Coders
                </Text>
                <br />
                <Text as="span" color={textColor}>
                  Summit 2025
                </Text>
              </Heading>
            </MotionBox>

            {/* Subtitle */}
            <MotionText
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              color={useColorModeValue("gray.600", "gray.300")}
              maxW="3xl"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Where artificial intelligence meets human creativity. Join the future of coding 
              with cutting-edge AI tools, innovative workshops, and a community of visionary developers.
            </MotionText>

            {/* Call to Action Buttons */}
            <MotionBox
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={4}
                mt={8}
              >
                <Button
                  size="lg"
                  px={8}
                  py={6}
                  fontSize="lg"
                  bgGradient="linear(to-r, purple.500, pink.500)"
                  color="white"
                  _hover={{
                    bgGradient: "linear(to-r, purple.600, pink.600)",
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  transition="all 0.2s"
                >
                  Join the Summit
                </Button>
                <Button
                  size="lg"
                  px={8}
                  py={6}
                  fontSize="lg"
                  variant="outline"
                  borderColor={accentColor}
                  color={accentColor}
                  _hover={{
                    bg: accentColor,
                    color: "white",
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  transition="all 0.2s"
                >
                  Learn More
                </Button>
              </Stack>
            </MotionBox>

            {/* Event Details */}
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              mt={12}
            >
              <HStack
                spacing={8}
                justify="center"
                fontSize="sm"
                color={useColorModeValue("gray.500", "gray.400")}
                flexWrap="wrap"
              >
                <Text>📅 March 15-17, 2025</Text>
                <Text>📍 San Francisco, CA</Text>
                <Text>👥 500+ Developers</Text>
                <Text>🤖 50+ AI Tools</Text>
              </HStack>
            </MotionBox>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};
