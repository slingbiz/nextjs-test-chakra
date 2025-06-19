import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const HeroSection = () => {
  const bgGradient = useColorModeValue(
    "linear(to-r, purple.600, pink.600)",
    "linear(to-r, purple.400, pink.400)"
  );
  const textColor = useColorModeValue("white", "gray.100");
  const buttonBg = useColorModeValue("white", "gray.800");
  const buttonColor = useColorModeValue("purple.600", "purple.300");
  const buttonHoverBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Box
      position="relative"
      width="100%"
      minHeight={{ base: "600px", md: "700px", lg: "800px" }}
      bgGradient={bgGradient}
      bgImage="url('/images/ai-summit-hero.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgBlendMode="overlay"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="blackAlpha.600"
      />
      <Container maxW="7xl" height="100%" position="relative">
        <Flex
          height="100%"
          alignItems="center"
          justifyContent="center"
          px={{ base: 4, md: 8 }}
        >
          <Stack
            spacing={{ base: 6, md: 8 }}
            maxW={{ base: "100%", md: "3xl" }}
            textAlign="center"
          >
            <Heading
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color={textColor}
              lineHeight="shorter"
            >
              AI Coders Summit 2024
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              color={textColor}
              opacity={0.9}
              maxW="2xl"
              mx="auto"
            >
              Join the world's leading developers and AI experts for 3 days of cutting-edge insights, 
              hands-on workshops, and networking opportunities that will transform how you build with AI.
            </Text>
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={4}
              justify="center"
              pt={4}
            >
              <Button
                size="lg"
                bg={buttonBg}
                color={buttonColor}
                _hover={{
                  bg: buttonHoverBg,
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                transition="all 0.2s"
                px={8}
                rightIcon={<ArrowForwardIcon />}
              >
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                color={textColor}
                borderColor={textColor}
                _hover={{
                  bg: "whiteAlpha.200",
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                transition="all 0.2s"
                px={8}
              >
                View Schedule
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default HeroSection;