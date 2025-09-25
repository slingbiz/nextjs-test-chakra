import { 
  Flex, 
  Heading, 
  Text, 
  Button, 
  VStack, 
  HStack, 
  Box, 
  useColorModeValue,
  Container,
  Badge
} from "@chakra-ui/react";

export const Hero = () => {
  const bgGradient = useColorModeValue(
    "linear(135deg, purple.600 0%, blue.500 25%, teal.400 50%, green.400 75%, yellow.400 100%)",
    "linear(135deg, purple.400 0%, blue.300 25%, teal.300 50%, green.300 75%, yellow.300 100%)"
  );
  
  const textColor = useColorModeValue("white", "gray.100");
  const subtitleColor = useColorModeValue("gray.100", "gray.200");

  return (
    <Box
      position="relative"
      height="100vh"
      bgGradient={bgGradient}
      overflow="hidden"
    >
      {/* Animated background pattern */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity={0.1}
        bgImage="radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)"
        bgSize="60px 60px"
        animation="float 20s ease-in-out infinite"
        sx={{
          "@keyframes float": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%": { transform: "translateY(-20px)" }
          }
        }}
      />
      
      <Container maxW="6xl" height="100%" position="relative" zIndex={1}>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          textAlign="center"
          px={4}
        >
          <VStack spacing={6} maxW="4xl">
            {/* Event Badge */}
            <Badge
              colorScheme="yellow"
              variant="solid"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              🚀 Live Event
            </Badge>
            
            {/* Main Headline */}
            <Heading
              fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
              fontWeight="900"
              color={textColor}
              lineHeight="shorter"
              textShadow="0 4px 12px rgba(0,0,0,0.3)"
            >
              AI Coders
              <Text
                as="span"
                bgGradient="linear(to-r, yellow.400, orange.400)"
                bgClip="text"
                display="block"
                mt={2}
              >
                Summit 2025
              </Text>
            </Heading>
            
            {/* Subtitle */}
            <Text
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              color={subtitleColor}
              maxW="3xl"
              lineHeight="tall"
              fontWeight="500"
            >
              Join the future of coding! Connect with AI pioneers, learn cutting-edge techniques, 
              and shape the next generation of intelligent development tools.
            </Text>
            
            {/* Event Details */}
            <HStack
              spacing={8}
              flexWrap="wrap"
              justify="center"
              color={subtitleColor}
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="600"
            >
              <Text>📅 March 15-17, 2025</Text>
              <Text>📍 San Francisco, CA</Text>
              <Text>👥 500+ Developers</Text>
            </HStack>
            
            {/* Call to Action Buttons */}
            <HStack spacing={4} pt={6} flexWrap="wrap" justify="center">
              <Button
                size="lg"
                colorScheme="yellow"
                variant="solid"
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="bold"
                borderRadius="full"
                boxShadow="0 8px 25px rgba(0,0,0,0.2)"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 35px rgba(0,0,0,0.3)",
                }}
                transition="all 0.3s ease"
              >
                Register Now
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                borderColor="white"
                color="white"
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="bold"
                borderRadius="full"
                borderWidth="2px"
                _hover={{
                  bg: "whiteAlpha.200",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.3s ease"
              >
                View Agenda
              </Button>
            </HStack>
            
            {/* Additional Info */}
            <Text
              fontSize="sm"
              color={subtitleColor}
              opacity={0.8}
              pt={4}
            >
              Early bird pricing ends January 31st • Virtual attendance available
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};
