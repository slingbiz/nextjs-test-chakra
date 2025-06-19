import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";

export const HeroSection = () => {
  const textColor = useColorModeValue("white", "white");
  const overlayBg = useColorModeValue(
    "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))",
    "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))"
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
        backgroundImage="url('/images/thailand-hero.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
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
        px={{ base: 4, md: 8 }}
      >
        <Stack
          spacing={6}
          maxW={{ base: "xl", md: "2xl" }}
          textAlign="center"
        >
          <Heading
            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={textColor}
            lineHeight="shorter"
          >
            Discover the Magic of Thailand
          </Heading>
          
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            color={textColor}
            opacity={0.9}
          >
            Experience breathtaking beaches, ancient temples, vibrant culture, and unforgettable adventures in the Land of Smiles
          </Text>
          
          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={4}
            justify="center"
            pt={4}
          >
            <Button
              size="lg"
              colorScheme="green"
              bg="green.400"
              _hover={{ bg: "green.500" }}
              px={8}
              fontSize={{ base: "md", md: "lg" }}
            >
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              color={textColor}
              borderColor={textColor}
              _hover={{ bg: "whiteAlpha.200" }}
              px={8}
              fontSize={{ base: "md", md: "lg" }}
            >
              Explore Destinations
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};