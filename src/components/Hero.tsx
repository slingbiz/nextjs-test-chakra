import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

export const Hero = () => {
  const bgGradient = useColorModeValue(
    "linear(to-br, blue.400, purple.500, pink.400)",
    "linear(to-br, blue.600, purple.700, pink.600)"
  );
  
  const overlayBg = useColorModeValue(
    "rgba(0, 0, 0, 0.3)",
    "rgba(0, 0, 0, 0.5)"
  );

  const textColor = "white";
  const accentColor = useColorModeValue("yellow.300", "yellow.200");

  return (
    <Box
      position="relative"
      width="100%"
      height={{ base: "600px", md: "700px", lg: "100vh" }}
      maxHeight="900px"
      overflow="hidden"
    >
      {/* Background with gradient overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient={bgGradient}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        {/* Decorative elements to simulate Thailand scenery */}
        <Box
          position="absolute"
          bottom="-10%"
          left="-5%"
          width="40%"
          height="60%"
          bgGradient="radial(circle, rgba(34,139,34,0.4) 0%, transparent 70%)"
          borderRadius="full"
          filter="blur(60px)"
        />
        <Box
          position="absolute"
          bottom="-10%"
          right="-5%"
          width="40%"
          height="60%"
          bgGradient="radial(circle, rgba(255,140,0,0.3) 0%, transparent 70%)"
          borderRadius="full"
          filter="blur(60px)"
        />
        <Box
          position="absolute"
          top="10%"
          left="50%"
          transform="translateX(-50%)"
          width="300px"
          height="300px"
          bgGradient="radial(circle, rgba(255,215,0,0.5) 0%, transparent 70%)"
          borderRadius="full"
          filter="blur(80px)"
        />
      </Box>

      {/* Overlay for better text readability */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg={overlayBg}
      />

      {/* Content */}
      <Container
        maxW="container.xl"
        height="100%"
        position="relative"
        zIndex={1}
      >
        <Flex
          height="100%"
          alignItems="center"
          justifyContent="center"
          direction="column"
          textAlign="center"
          px={{ base: 4, md: 8 }}
        >
          <Stack spacing={{ base: 6, md: 8 }} maxW="900px">
            {/* Tagline */}
            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              fontWeight="semibold"
              color={accentColor}
              letterSpacing="wide"
              textTransform="uppercase"
              textShadow="0 2px 10px rgba(0,0,0,0.3)"
            >
              Discover the Land of Smiles
            </Text>

            {/* Main Heading */}
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
              fontWeight="bold"
              color={textColor}
              lineHeight="1.1"
              textShadow="0 4px 20px rgba(0,0,0,0.5)"
            >
              Experience the Magic of{" "}
              <Text as="span" color={accentColor}>
                Thailand
              </Text>
            </Heading>

            {/* Description */}
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              color={textColor}
              maxW="700px"
              mx="auto"
              textShadow="0 2px 10px rgba(0,0,0,0.4)"
              fontWeight="medium"
            >
              From pristine beaches to ancient temples, vibrant cities to lush
              jungles - Thailand offers unforgettable adventures for every
              traveler
            </Text>

            {/* CTA Buttons */}
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={4}
              justify="center"
              pt={4}
            >
              <Button
                size="lg"
                height="60px"
                px={8}
                colorScheme="yellow"
                color="gray.800"
                fontSize="lg"
                fontWeight="bold"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                }}
                transition="all 0.2s"
                boxShadow="lg"
              >
                Plan Your Trip
              </Button>
              <Button
                size="lg"
                height="60px"
                px={8}
                variant="outline"
                colorScheme="whiteAlpha"
                color={textColor}
                borderWidth="2px"
                fontSize="lg"
                fontWeight="bold"
                _hover={{
                  bg: "whiteAlpha.200",
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                }}
                transition="all 0.2s"
                boxShadow="lg"
              >
                Explore Destinations
              </Button>
            </Stack>

            {/* Additional Info */}
            <Flex
              justify="center"
              gap={{ base: 6, md: 12 }}
              pt={8}
              flexWrap="wrap"
            >
              <Box textAlign="center">
                <Text
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="bold"
                  color={accentColor}
                  textShadow="0 2px 10px rgba(0,0,0,0.4)"
                >
                  1,430+
                </Text>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color={textColor}
                  textShadow="0 2px 10px rgba(0,0,0,0.4)"
                >
                  Islands
                </Text>
              </Box>
              <Box textAlign="center">
                <Text
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="bold"
                  color={accentColor}
                  textShadow="0 2px 10px rgba(0,0,0,0.4)"
                >
                  40,000+
                </Text>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color={textColor}
                  textShadow="0 2px 10px rgba(0,0,0,0.4)"
                >
                  Temples
                </Text>
              </Box>
              <Box textAlign="center">
                <Text
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="bold"
                  color={accentColor}
                  textShadow="0 2px 10px rgba(0,0,0,0.4)"
                >
                  Year-Round
                </Text>
                <Text
                  fontSize={{ base: "sm", md: "md" }}
                  color={textColor}
                  textShadow="0 2px 10px rgba(0,0,0,0.4)"
                >
                  Sunshine
                </Text>
              </Box>
            </Flex>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};
