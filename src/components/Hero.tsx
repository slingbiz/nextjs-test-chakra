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
  const overlayBg = useColorModeValue('blackAlpha.600', 'blackAlpha.700');
  const headingColor = useColorModeValue('white', 'white');
  const textColor = useColorModeValue('whiteAlpha.900', 'whiteAlpha.900');
  
  return (
    <Box
      position="relative"
      height={{ base: "80vh", md: "90vh" }}
      width="100%"
      overflow="hidden"
    >
      {/* Background with gradient overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear(to-br, #FF6B35, #F7931E, #FDC830, #37B5A6, #0B4F6C)"
        opacity="0.95"
      />
      
      {/* Decorative elements */}
      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        width="400px"
        height="400px"
        borderRadius="full"
        bgGradient="radial(circle, rgba(253, 200, 48, 0.3), transparent)"
        filter="blur(60px)"
      />
      <Box
        position="absolute"
        bottom="-10%"
        left="-5%"
        width="500px"
        height="500px"
        borderRadius="full"
        bgGradient="radial(circle, rgba(55, 181, 166, 0.3), transparent)"
        filter="blur(60px)"
      />
      
      {/* Content */}
      <Flex
        position="relative"
        height="100%"
        alignItems="center"
        justifyContent="center"
        zIndex="1"
      >
        <Container maxW="container.xl">
          <Stack
            spacing={{ base: 6, md: 8 }}
            align="center"
            textAlign="center"
            px={{ base: 4, md: 8 }}
          >
            {/* Badge */}
            <Box
              bg="whiteAlpha.300"
              backdropFilter="blur(10px)"
              px={4}
              py={2}
              borderRadius="full"
              border="1px solid"
              borderColor="whiteAlpha.400"
            >
              <Text
                fontSize={{ base: "xs", md: "sm" }}
                fontWeight="600"
                color="white"
                letterSpacing="wide"
                textTransform="uppercase"
              >
                ✨ Amazing Thailand 2024
              </Text>
            </Box>

            {/* Main Heading */}
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
              fontWeight="900"
              color={headingColor}
              lineHeight="1.1"
              textShadow="0 2px 20px rgba(0,0,0,0.2)"
            >
              Discover the Land of{" "}
              <Text as="span" color="yellow.300">
                Smiles
              </Text>
            </Heading>

            {/* Subtitle */}
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              color={textColor}
              maxW="3xl"
              fontWeight="500"
              textShadow="0 1px 10px rgba(0,0,0,0.3)"
            >
              Experience breathtaking temples, pristine beaches, vibrant culture, 
              and unforgettable adventures in Thailand's tropical paradise
            </Text>

            {/* CTA Buttons */}
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={4}
              pt={4}
            >
              <Button
                size="lg"
                height="60px"
                px={8}
                fontSize="lg"
                fontWeight="bold"
                color="white"
                bg="orange.500"
                _hover={{
                  bg: "orange.600",
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                }}
                _active={{
                  bg: "orange.700",
                }}
                boxShadow="lg"
                transition="all 0.3s"
              >
                Start Your Journey 🌴
              </Button>
              <Button
                size="lg"
                height="60px"
                px={8}
                fontSize="lg"
                fontWeight="bold"
                color="white"
                bg="whiteAlpha.300"
                backdropFilter="blur(10px)"
                border="2px solid"
                borderColor="whiteAlpha.500"
                _hover={{
                  bg: "whiteAlpha.400",
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                }}
                transition="all 0.3s"
              >
                Explore Destinations 🗺️
              </Button>
            </Stack>

            {/* Stats */}
            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={{ base: 4, md: 8 }}
              pt={8}
              divider={
                <Box 
                  height={{ base: "1px", sm: "50px" }}
                  width={{ base: "100%", sm: "1px" }}
                  bg="whiteAlpha.400"
                />
              }
            >
              <Box>
                <Text fontSize="3xl" fontWeight="bold" color="white">
                  1,430+
                </Text>
                <Text fontSize="sm" color="whiteAlpha.800">
                  Islands to Explore
                </Text>
              </Box>
              <Box>
                <Text fontSize="3xl" fontWeight="bold" color="white">
                  40,000+
                </Text>
                <Text fontSize="sm" color="whiteAlpha.800">
                  Buddhist Temples
                </Text>
              </Box>
              <Box>
                <Text fontSize="3xl" fontWeight="bold" color="white">
                  77
                </Text>
                <Text fontSize="sm" color="whiteAlpha.800">
                  Provinces
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Flex>

      {/* Bottom wave decoration */}
      <Box
        position="absolute"
        bottom="-2"
        left="0"
        right="0"
        height="100px"
        opacity="0.3"
      >
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
          <path
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            fill="white"
          />
        </svg>
      </Box>
    </Box>
  );
};
