import { 
  Flex, 
  Heading, 
  Text, 
  Button, 
  Stack, 
  Container, 
  Badge,
  Box,
  useColorModeValue,
  HStack,
  VStack,
  Icon
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CalendarIcon, StarIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

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
      {/* Animated Background Elements */}
      <MotionBox
        position="absolute"
        top="10%"
        left="10%"
        width="100px"
        height="100px"
        borderRadius="50%"
        bg="purple.400"
        opacity="0.1"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <MotionBox
        position="absolute"
        top="60%"
        right="15%"
        width="60px"
        height="60px"
        borderRadius="50%"
        bg="blue.400"
        opacity="0.15"
        animate={{
          y: [0, 30, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <MotionBox
        position="absolute"
        bottom="20%"
        left="20%"
        width="80px"
        height="80px"
        borderRadius="50%"
        bg="pink.400"
        opacity="0.1"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <Container maxW="7xl" height="100vh">
        <MotionFlex
          align="center"
          justify="center"
          height="100%"
          textAlign="center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <VStack spacing={8} maxW="4xl">
            {/* Event Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge
                colorScheme="purple"
                variant="subtle"
                px={4}
                py={2}
                borderRadius="full"
                fontSize="sm"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="wide"
              >
                <HStack spacing={2}>
                  <Icon as={CalendarIcon} />
                  <Text>December 2025</Text>
                </HStack>
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Heading
                fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                fontWeight="900"
                lineHeight="shorter"
                color={textColor}
                mb={4}
              >
                <Text
                  as="span"
                  bgGradient="linear(to-r, purple.400, pink.400, blue.400)"
                  bgClip="text"
                  fontWeight="inherit"
                >
                  AI Coders
                </Text>
                <br />
                <Text as="span" color={textColor}>
                  Summit 2025
                </Text>
              </Heading>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Text
                fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
                color="gray.500"
                maxW="3xl"
                lineHeight="tall"
                fontWeight="medium"
              >
                Join the most innovative minds in AI-powered development. 
                Discover cutting-edge tools, share breakthrough techniques, 
                and shape the future of coding with artificial intelligence.
              </Text>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <HStack
                spacing={8}
                justify="center"
                flexWrap="wrap"
                color="gray.600"
                fontSize="md"
                fontWeight="semibold"
              >
                <HStack>
                  <Icon as={StarIcon} color={accentColor} />
                  <Text>50+ Expert Speakers</Text>
                </HStack>
                <HStack>
                  <Icon as={StarIcon} color={accentColor} />
                  <Text>Live Coding Sessions</Text>
                </HStack>
                <HStack>
                  <Icon as={StarIcon} color={accentColor} />
                  <Text>AI Tool Workshops</Text>
                </HStack>
              </HStack>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={4}
                align="center"
                justify="center"
              >
                <Button
                  size="lg"
                  colorScheme="purple"
                  bg="purple.500"
                  color="white"
                  px={8}
                  py={6}
                  fontSize="lg"
                  fontWeight="bold"
                  borderRadius="full"
                  rightIcon={<ArrowForwardIcon />}
                  _hover={{
                    bg: "purple.600",
                    transform: "translateY(-2px)",
                    shadow: "xl",
                  }}
                  _active={{
                    transform: "translateY(0)",
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
                  borderWidth="2px"
                  _hover={{
                    bg: "purple.50",
                    transform: "translateY(-2px)",
                    shadow: "lg",
                  }}
                  _active={{
                    transform: "translateY(0)",
                  }}
                  transition="all 0.2s"
                >
                  View Schedule
                </Button>
              </Stack>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <HStack
                spacing={8}
                justify="center"
                pt={8}
                flexWrap="wrap"
              >
                <VStack spacing={1}>
                  <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color={accentColor}
                  >
                    2,500+
                  </Text>
                  <Text fontSize="sm" color="gray.500" fontWeight="medium">
                    Developers
                  </Text>
                </VStack>
                <VStack spacing={1}>
                  <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color={accentColor}
                  >
                    3 Days
                  </Text>
                  <Text fontSize="sm" color="gray.500" fontWeight="medium">
                    of Innovation
                  </Text>
                </VStack>
                <VStack spacing={1}>
                  <Text
                    fontSize="2xl"
                    fontWeight="bold"
                    color={accentColor}
                  >
                    50+
                  </Text>
                  <Text fontSize="sm" color="gray.500" fontWeight="medium">
                    AI Tools
                  </Text>
                </VStack>
              </HStack>
            </motion.div>
          </VStack>
        </MotionFlex>
      </Container>
    </Box>
  );
};
