import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const HeroSection = () => {
  const textColor = useColorModeValue("white", "white");
  const overlayBg = useColorModeValue(
    "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.5))",
    "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6))"
  );

  return (
    <Box
      position="relative"
      width="100%"
      height={{ base: "70vh", md: "80vh", lg: "90vh" }}
      overflow="hidden"
      mt="-100px"
      pt="100px"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundImage="url('/images/thailand-hero.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        _after={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: overlayBg,
        }}
      />

      {/* Content Overlay */}
      <Flex
        position="relative"
        height="100%"
        alignItems="center"
        justifyContent="center"
        px={{ base: 4, md: 8 }}
        zIndex={1}
      >
        <Stack
          spacing={6}
          maxW={{ base: "90%", md: "3xl" }}
          textAlign="center"
          align="center"
        >
          <Heading
            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
            fontWeight="bold"
            color={textColor}
            lineHeight="shorter"
            textShadow="2px 2px 4px rgba(0,0,0,0.5)"
          >
            Discover the Magic of Thailand
          </Heading>
          
          <Text
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            color={textColor}
            maxW={{ base: "100%", md: "80%" }}
            textShadow="1px 1px 2px rgba(0,0,0,0.5)"
          >
            Experience breathtaking beaches, ancient temples, vibrant culture, and unforgettable adventures in the Land of Smiles
          </Text>

          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={4}
            pt={4}
          >
            <Button
              size="lg"
              colorScheme="green"
              rightIcon={<ArrowForwardIcon />}
              px={8}
              py={6}
              fontSize="lg"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              transition="all 0.2s"
            >
              Start Your Journey
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              color={textColor}
              borderColor={textColor}
              px={8}
              py={6}"
              fontSize="lg"
              _hover={{
                bg: "whiteAlpha.200",
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              transition="all 0.2s"
            >
              Explore Destinations
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};

export default HeroSection;