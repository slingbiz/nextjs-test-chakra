import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  Button, 
  Stack,
  Container,
  useColorModeValue 
} from "@chakra-ui/react";

export const Hero = () => {
  const overlayBg = useColorModeValue('rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.6)');
  const textColor = 'white';
  const buttonColorScheme = useColorModeValue('orange', 'yellow');
  
  return (
    <Box
      position="relative"
      height={{ base: "100vh", md: "90vh" }}
      width="100%"
      overflow="hidden"
    >
      {/* Background with gradient overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bgGradient="linear(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgGradient: 'linear(to-br, rgba(255, 165, 0, 0.3), rgba(30, 144, 255, 0.3), rgba(255, 215, 0, 0.2))',
          animation: 'gradient 15s ease infinite',
          backgroundSize: '400% 400%',
        }}
      />
      
      {/* Overlay for better text readability */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg={overlayBg}
      />

      {/* Content */}
      <Container
        maxW="container.xl"
        height="100%"
        position="relative"
        zIndex="1"
      >
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          textAlign="center"
          px={{ base: 4, md: 8 }}
        >
          <Stack spacing={6} maxW="4xl">
            {/* Main Heading */}
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
              fontWeight="extrabold"
              color={textColor}
              lineHeight="1.2"
              textShadow="2px 2px 4px rgba(0,0,0,0.3)"
            >
              Discover the Magic of{" "}
              <Text
                as="span"
                bgGradient="linear(to-r, #FFD700, #FFA500, #FF6347)"
                bgClip="text"
                fontWeight="black"
              >
                Thailand
              </Text>
            </Heading>

            {/* Subheading */}
            <Text
              fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}
              color={textColor}
              fontWeight="medium"
              maxW="3xl"
              mx="auto"
              textShadow="1px 1px 2px rgba(0,0,0,0.3)"
            >
              Explore pristine beaches, ancient temples, vibrant markets, 
              and unforgettable experiences in the Land of Smiles
            </Text>

            {/* Feature tags */}
            <Flex
              gap={4}
              flexWrap="wrap"
              justifyContent="center"
              fontSize={{ base: "sm", md: "md" }}
              color={textColor}
              fontWeight="semibold"
            >
              <Text>🏝️ Tropical Paradise</Text>
              <Text>🛕 Rich Culture</Text>
              <Text>🍜 Amazing Cuisine</Text>
              <Text>😊 Warm Hospitality</Text>
            </Flex>

            {/* CTA Buttons */}
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={4}
              justifyContent="center"
              pt={4}
            >
              <Button
                size="lg"
                colorScheme={buttonColorScheme}
                px={8}
                py={6}
                fontSize="xl"
                fontWeight="bold"
                boxShadow="xl"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "2xl",
                }}
                transition="all 0.3s"
              >
                Plan Your Trip
              </Button>
              <Button
                size="lg"
                variant="outline"
                colorScheme="whiteAlpha"
                px={8}
                py={6}
                fontSize="xl"
                fontWeight="bold"
                borderWidth="2px"
                borderColor="white"
                color="white"
                _hover={{
                  bg: "whiteAlpha.200",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.3s"
              >
                Explore Destinations
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Container>

      {/* Decorative bottom wave */}
      <Box
        position="absolute"
        bottom="-2"
        left="0"
        width="100%"
        overflow="hidden"
        lineHeight="0"
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '80px' }}
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="white"
            fillOpacity="0.1"
          />
        </svg>
      </Box>
    </Box>
  );
};
