import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  Button, 
  VStack, 
  HStack, 
  useColorModeValue,
  Container,
  Badge,
  Link as ChakraLink,
  Icon
} from "@chakra-ui/react";
import { StarIcon, ViewIcon, AtSignIcon, ChatIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionText = motion(Text);

export const Hero = () => {
  const bgGradient = useColorModeValue(
    "linear(to-br, purple.400, blue.500, cyan.400)",
    "linear(to-br, purple.600, blue.700, cyan.600)"
  );
  
  const overlayBg = useColorModeValue(
    "rgba(255, 255, 255, 0.1)",
    "rgba(0, 0, 0, 0.3)"
  );

  return (
    <Box
      position="relative"
      minHeight="100vh"
      bgGradient={bgGradient}
      overflow="hidden"
    >
      {/* Background Pattern */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        opacity={useColorModeValue(0.1, 0.05)}
        backgroundImage={`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}
        backgroundSize="60px 60px"
        backgroundAttachment="fixed"
      />
      
      {/* Floating Elements */}
      <MotionBox
        position="absolute"
        top="20%"
        left="10%"
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <AtSignIcon w={8} h={8} color="whiteAlpha.300" />
      </MotionBox>
      
      <MotionBox
        position="absolute"
        top="30%"
        right="15%"
        initial={{ y: 0 }}
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <ViewIcon w={10} h={10} color="whiteAlpha.400" />
      </MotionBox>
      
      <MotionBox
        position="absolute"
        bottom="20%"
        left="20%"
        initial={{ y: 0 }}
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <StarIcon w={6} h={6} color="whiteAlpha.200" />
      </MotionBox>

      {/* Main Content */}
      <Container maxW="6xl" height="100vh">
        <Flex
          direction="column"
          align="center"
          justify="center"
          height="100%"
          textAlign="center"
          color="white"
          px={4}
        >
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              colorScheme="cyan"
              variant="solid"
              px={4}
              py={2}
              rounded="full"
              mb={6}
              fontSize="sm"
              fontWeight="bold"
            >
              🚀 AI CODERS SUMMIT 2025
            </Badge>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Heading
              fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
              fontWeight="bold"
              mb={6}
              lineHeight="shorter"
              bgGradient="linear(to-r, white, cyan.200)"
              bgClip="text"
            >
              The Future of
              <br />
              <Text as="span" color="cyan.300">
                AI-Powered Coding
              </Text>
            </Heading>
          </MotionBox>

          <MotionText
            fontSize={{ base: "lg", md: "xl" }}
            mb={8}
            maxW="2xl"
            opacity={0.9}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join thousands of developers, AI researchers, and tech innovators 
            as we explore the cutting-edge intersection of artificial intelligence 
            and software development.
          </MotionText>

          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <HStack spacing={4} mb={8} flexWrap="wrap" justify="center">
              <HStack>
                <ChatIcon />
                <Text fontSize="sm">10,000+ Attendees</Text>
              </HStack>
              <HStack>
                <ViewIcon />
                <Text fontSize="sm">AI Workshops</Text>
              </HStack>
              <HStack>
                <AtSignIcon />
                <Text fontSize="sm">Live Coding</Text>
              </HStack>
            </HStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <VStack spacing={4}>
              <HStack spacing={4} flexWrap="wrap" justify="center">
                <Button
                  size="lg"
                  colorScheme="cyan"
                  variant="solid"
                  px={8}
                  py={6}
                  fontSize="lg"
                  rounded="full"
                  shadow="xl"
                  _hover={{
                    transform: "translateY(-2px)",
                    shadow: "2xl",
                  }}
                  transition="all 0.2s"
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
                  rounded="full"
                  _hover={{
                    bg: "whiteAlpha.200",
                    transform: "translateY(-2px)",
                  }}
                  transition="all 0.2s"
                >
                  View Schedule
                </Button>
              </HStack>
              
              <Text fontSize="sm" opacity={0.8} mt={4}>
                Early bird pricing ends December 31st
              </Text>
            </VStack>
          </MotionBox>
        </Flex>
      </Container>

      {/* Bottom Wave */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        height="100px"
        background={overlayBg}
        clipPath="polygon(0 50%, 100% 80%, 100% 100%, 0% 100%)"
      />
    </Box>
  );
};
