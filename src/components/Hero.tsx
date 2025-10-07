import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  Button, 
  Stack,
  Container,
  Badge,
  Icon,
  HStack,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@chakra-ui/icons";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export const Hero = ({ title }: { title?: string }) => {
  const waveFillColor = useColorModeValue("#F7FAFC", "#171923");
  
  return (
  <Box
    position="relative"
    width="100%"
    bgGradient="linear(to-br, purple.600, pink.500, orange.400)"
    _dark={{
      bgGradient: "linear(to-br, purple.800, pink.700, orange.600)",
    }}
    overflow="hidden"
  >
    {/* Animated background elements */}
    <MotionBox
      position="absolute"
      top="10%"
      left="5%"
      width="300px"
      height="300px"
      borderRadius="full"
      bg="whiteAlpha.200"
      filter="blur(80px)"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
    <MotionBox
      position="absolute"
      bottom="10%"
      right="10%"
      width="400px"
      height="400px"
      borderRadius="full"
      bg="whiteAlpha.200"
      filter="blur(100px)"
      animate={{
        scale: [1, 1.3, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />

    <Container maxW="container.xl" py={{ base: 16, md: 24 }}>
      <MotionFlex
        direction="column"
        alignItems="center"
        textAlign="center"
        gap={6}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* AI Enhancement Badge */}
        <MotionBox
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Badge
            colorScheme="whiteAlpha"
            fontSize={{ base: "sm", md: "md" }}
            px={4}
            py={2}
            borderRadius="full"
            bg="whiteAlpha.300"
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor="whiteAlpha.400"
          >
            <HStack spacing={2}>
              <Box
                as="span"
                display="inline-block"
                w={2}
                h={2}
                borderRadius="full"
                bg="green.300"
                animation="pulse 2s infinite"
              />
              <Text as="span" color="white" fontWeight="bold">
                🤖 AI-Powered Development
              </Text>
            </HStack>
          </Badge>
        </MotionBox>

        {/* Main Heading */}
        <Heading
          as="h1"
          fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
          fontWeight="extrabold"
          color="white"
          lineHeight="1.2"
          maxW="900px"
        >
          {title || "Build Faster with AI-Enhanced Development"}
        </Heading>

        {/* Subheading */}
        <Text
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          color="whiteAlpha.900"
          maxW="700px"
          fontWeight="medium"
        >
          Transform your JIRA issues into production-ready code instantly.
          Let AI handle the heavy lifting while you focus on what matters.
        </Text>

        {/* Feature highlights */}
        <VStack spacing={3} mt={4}>
          <HStack spacing={3} color="white" fontSize={{ base: "md", md: "lg" }}>
            <Icon as={CheckCircleIcon} color="green.300" boxSize={5} />
            <Text>Automated Code Generation</Text>
          </HStack>
          <HStack spacing={3} color="white" fontSize={{ base: "md", md: "lg" }}>
            <Icon as={CheckCircleIcon} color="green.300" boxSize={5} />
            <Text>Smart Context-Aware Suggestions</Text>
          </HStack>
          <HStack spacing={3} color="white" fontSize={{ base: "md", md: "lg" }}>
            <Icon as={CheckCircleIcon} color="green.300" boxSize={5} />
            <Text>Instant Preview & Deploy</Text>
          </HStack>
        </VStack>

        {/* CTA Buttons */}
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          mt={8}
        >
          <Button
            size="lg"
            bg="white"
            color="purple.600"
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "xl",
            }}
            _active={{
              transform: "translateY(0)",
            }}
            transition="all 0.2s"
            px={8}
            py={6}
            fontSize="lg"
            fontWeight="bold"
            borderRadius="full"
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            color="white"
            borderColor="white"
            _hover={{
              bg: "whiteAlpha.200",
              transform: "translateY(-2px)",
            }}
            _active={{
              transform: "translateY(0)",
            }}
            transition="all 0.2s"
            px={8}
            py={6}
            fontSize="lg"
            fontWeight="bold"
            borderRadius="full"
          >
            Learn More
          </Button>
        </Stack>
      </MotionFlex>
    </Container>

    {/* Bottom wave decoration */}
    <Box
      position="absolute"
      bottom="-1px"
      left="0"
      right="0"
      height="60px"
    >
      <svg
        viewBox="0 0 1440 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", top: "-59px", width: "100%", height: "60px" }}
      >
        <path
          d="M0 30L60 25C120 20 240 10 360 8.3C480 6.7 600 13.3 720 18.3C840 23.3 960 26.7 1080 25C1200 23.3 1320 16.7 1380 13.3L1440 10V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0V30Z"
          fill={waveFillColor}
        />
      </svg>
    </Box>
  </Box>
  );
};

Hero.defaultProps = {
  title: undefined,
};
