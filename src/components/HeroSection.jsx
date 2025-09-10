import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

export const HeroSection = () => {
  const textColor = useColorModeValue("white", "white");
  const overlayBg = useColorModeValue(
    "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
    "linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5))"
  );

  return (
    <Box
      position="relative"
      height="100vh"
      width="100%"
      overflow="hidden"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundImage="url('/images/dubai-luxury-cars.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        filter="brightness(0.9)"
      />

      {/* Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        background={overlayBg}
      />

      {/* Content */}
      <Flex
        position="relative"
        height="100%"
        alignItems="center"
        justifyContent="center"
        px={{ base: 4, md: 8, lg: 16 }}
      >
        <Stack
          spacing={6}
          maxW={{ base: "100%", md: "2xl", lg: "3xl" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Heading
            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={textColor}
            lineHeight="1.2"
          >
            Experience Luxury Car Rentals in Dubai
          </Heading>
          
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            color={textColor}
            opacity={0.9}
            maxW={{ base: "100%", md: "80%" }}
          >
            Drive your dream car through the streets of Dubai. Premium vehicles, exceptional service, unforgettable experiences.
          </Text>

          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={4}
            pt={4}
          >
            <Button
              size="lg"
              colorScheme="green"
              bg="green.400"
              _hover={{ bg: "green.500" }}
              px={8}
              py={6}
              fontSize="lg"
              fontWeight="bold"
            >
              Browse Our Fleet
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              color={textColor}
              borderColor={textColor}
              _hover={{ bg: "whiteAlpha.200" }}
              px={8}
              py={6}
              fontSize="lg"
              fontWeight="semibold"
            >
              Contact Us
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};