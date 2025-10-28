import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bgGradient="linear(135deg, christmasRed 0%, christmasGreen 100%)"
    position="relative"
    overflow="hidden"
  >
    {/* Snowflakes decoration */}
    <Box
      position="absolute"
      top="10%"
      left="10%"
      fontSize="3xl"
      opacity={0.6}
      animation="float 3s ease-in-out infinite"
    >
      ❄️
    </Box>
    <Box
      position="absolute"
      top="20%"
      right="15%"
      fontSize="2xl"
      opacity={0.5}
      animation="float 4s ease-in-out infinite"
    >
      ⭐
    </Box>
    <Box
      position="absolute"
      bottom="15%"
      left="15%"
      fontSize="2xl"
      opacity={0.6}
      animation="float 3.5s ease-in-out infinite"
    >
      🎄
    </Box>
    <Box
      position="absolute"
      bottom="20%"
      right="10%"
      fontSize="3xl"
      opacity={0.5}
      animation="float 4.5s ease-in-out infinite"
    >
      ❄️
    </Box>
    <Box
      position="absolute"
      top="30%"
      left="20%"
      fontSize="xl"
      opacity={0.4}
      animation="float 5s ease-in-out infinite"
    >
      🎁
    </Box>
    <Box
      position="absolute"
      top="60%"
      right="25%"
      fontSize="xl"
      opacity={0.5}
      animation="float 3.8s ease-in-out infinite"
    >
      ⛄
    </Box>

    {/* Main content */}
    <VStack spacing={6} zIndex={1} textAlign="center" px={4}>
      <Box>
        <Text
          fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
          fontWeight="bold"
          color="white"
          textShadow="0 4px 6px rgba(0,0,0,0.3)"
          mb={2}
        >
          🎄 Merry Christmas! 🎅
        </Text>
        <Heading
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          color="christmasGold"
          textShadow="0 2px 4px rgba(0,0,0,0.2)"
        >
          {title}
        </Heading>
      </Box>
      <Text
        fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
        color="white"
        fontWeight="medium"
        textShadow="0 2px 4px rgba(0,0,0,0.3)"
        maxW="800px"
      >
        Wishing you a season filled with joy, code, and endless possibilities! ✨
      </Text>
    </VStack>

    {/* CSS Animation */}
    <style jsx global>{`
      @keyframes float {
        0%, 100% {
          transform: translateY(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-20px) rotate(10deg);
        }
      }
    `}</style>
  </Flex>
);

Hero.defaultProps = {
  title: "Playground on Baloon.dev",
};
