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
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export const Hero = () => {
  const overlayBg = useColorModeValue(
    "linear-gradient(135deg, rgba(255, 107, 0, 0.8) 0%, rgba(255, 158, 0, 0.7) 50%, rgba(0, 150, 136, 0.8) 100%)",
    "linear-gradient(135deg, rgba(255, 107, 0, 0.85) 0%, rgba(255, 158, 0, 0.75) 50%, rgba(0, 150, 136, 0.85) 100%)"
  );

  return (
    <Box
      position="relative"
      height={{ base: "100vh", md: "100vh" }}
      width="100%"
      overflow="hidden"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgImage="url('https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
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

      {/* Content */}
      <Container
        maxW="container.xl"
        height="100%"
        position="relative"
        zIndex="1"
      >
        <Flex
          height="100%"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Stack spacing={6} maxW="4xl" px={4}>
            <MotionHeading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
              fontWeight="bold"
              color="white"
              textShadow="2px 4px 8px rgba(0,0,0,0.3)"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Discover the Magic of Thailand
            </MotionHeading>

            <MotionText
              fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
              color="white"
              fontWeight="medium"
              textShadow="1px 2px 4px rgba(0,0,0,0.3)"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Experience breathtaking temples, pristine beaches, vibrant culture,
              and unforgettable adventures in the Land of Smiles
            </MotionText>

            <MotionBox
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <Stack
                direction={{ base: "column", sm: "row" }}
                spacing={4}
                justify="center"
                pt={4}
              >
                <Button
                  size="lg"
                  bg="white"
                  color="orange.600"
                  _hover={{
                    bg: "orange.50",
                    transform: "translateY(-2px)",
                    boxShadow: "xl",
                  }}
                  _active={{
                    bg: "orange.100",
                  }}
                  boxShadow="lg"
                  px={8}
                  py={6}
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="bold"
                  transition="all 0.3s"
                >
                  Explore Destinations
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  borderColor="white"
                  borderWidth="2px"
                  color="white"
                  _hover={{
                    bg: "whiteAlpha.200",
                    transform: "translateY(-2px)",
                    boxShadow: "xl",
                  }}
                  _active={{
                    bg: "whiteAlpha.300",
                  }}
                  px={8}
                  py={6}
                  fontSize={{ base: "md", md: "lg" }}
                  fontWeight="bold"
                  transition="all 0.3s"
                >
                  Plan Your Trip
                </Button>
              </Stack>
            </MotionBox>

            <MotionText
              fontSize={{ base: "sm", md: "md" }}
              color="whiteAlpha.900"
              fontWeight="medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              🏝️ Tropical Beaches • 🛕 Ancient Temples • 🍜 Amazing Cuisine • 🎉 Vibrant Festivals
            </MotionText>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};
