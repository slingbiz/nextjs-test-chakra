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

export const DubaiHeroBanner = () => {
  const bgGradient = useColorModeValue(
    "linear(to-r, blue.400, teal.500, orange.400)",
    "linear(to-r, blue.600, teal.700, orange.600)"
  );
  
  const overlayBg = useColorModeValue(
    "rgba(255, 255, 255, 0.9)",
    "rgba(26, 32, 44, 0.9)"
  );

  return (
    <Box
      position="relative"
      width="100%"
      minHeight="600px"
      bgGradient={bgGradient}
      overflow="hidden"
    >
      {/* Decorative elements for a modern look */}
      <Box
        position="absolute"
        top="-50px"
        right="-50px"
        width="300px"
        height="300px"
        borderRadius="full"
        bg="whiteAlpha.200"
        filter="blur(60px)"
      />
      <Box
        position="absolute"
        bottom="-100px"
        left="-100px"
        width="400px"
        height="400px"
        borderRadius="full"
        bg="whiteAlpha.200"
        filter="blur(80px)"
      />

      <Container maxW="container.xl" position="relative" zIndex={1}>
        <Flex
          direction="column"
          align="center"
          justify="center"
          minHeight="600px"
          textAlign="center"
          py={20}
        >
          <Stack spacing={6} maxW="800px">
            {/* Main Heading */}
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              fontWeight="bold"
              color="white"
              textShadow="2px 2px 4px rgba(0,0,0,0.2)"
              lineHeight="1.2"
            >
              Discover the Magic of Dubai
            </Heading>

            {/* Subheading */}
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              color="whiteAlpha.900"
              fontWeight="medium"
              maxW="700px"
              mx="auto"
            >
              Experience luxury, adventure, and culture in the world's most iconic city
            </Text>

            {/* Description */}
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="whiteAlpha.800"
              maxW="600px"
              mx="auto"
            >
              From towering skyscrapers to golden deserts, pristine beaches to 
              world-class shopping, Dubai offers unforgettable experiences for every traveler.
            </Text>

            {/* Call-to-Action Buttons */}
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={4}
              justify="center"
              pt={4}
            >
              <Button
                size="lg"
                colorScheme="orange"
                bg="orange.500"
                color="white"
                _hover={{
                  bg: "orange.600",
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                }}
                transition="all 0.3s"
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="bold"
                boxShadow="lg"
              >
                Explore Destinations
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="white"
                color="white"
                _hover={{
                  bg: "whiteAlpha.200",
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                }}
                transition="all 0.3s"
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="bold"
                boxShadow="lg"
              >
                Plan Your Trip
              </Button>
            </Stack>

            {/* Stats or Highlights */}
            <Flex
              direction={{ base: "column", sm: "row" }}
              justify="center"
              align="center"
              gap={8}
              pt={8}
              flexWrap="wrap"
            >
              <Box textAlign="center">
                <Text
                  fontSize="3xl"
                  fontWeight="bold"
                  color="white"
                  textShadow="1px 1px 2px rgba(0,0,0,0.2)"
                >
                  300+
                </Text>
                <Text fontSize="sm" color="whiteAlpha.800" fontWeight="medium">
                  Days of Sunshine
                </Text>
              </Box>
              <Box textAlign="center">
                <Text
                  fontSize="3xl"
                  fontWeight="bold"
                  color="white"
                  textShadow="1px 1px 2px rgba(0,0,0,0.2)"
                >
                  200+
                </Text>
                <Text fontSize="sm" color="whiteAlpha.800" fontWeight="medium">
                  Nationalities
                </Text>
              </Box>
              <Box textAlign="center">
                <Text
                  fontSize="3xl"
                  fontWeight="bold"
                  color="white"
                  textShadow="1px 1px 2px rgba(0,0,0,0.2)"
                >
                  #1
                </Text>
                <Text fontSize="sm" color="whiteAlpha.800" fontWeight="medium">
                  Tourist Destination
                </Text>
              </Box>
            </Flex>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};
