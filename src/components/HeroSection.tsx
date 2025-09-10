import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Container,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

export const HeroSection = () => {
  const textColor = useColorModeValue('white', 'white')
  const overlayBg = useColorModeValue('blackAlpha.600', 'blackAlpha.700')
  const buttonBg = useColorModeValue('pink.500', 'pink.400')
  const buttonHoverBg = useColorModeValue('pink.600', 'pink.500')

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
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundImage="url('/images/hero-fashion.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        filter="brightness(0.9)"
      />

      {/* Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
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
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Stack
            spacing={8}
            maxW="2xl"
            textAlign="center"
            px={4}
          >
            <MotionHeading
              as="h1"
              size="3xl"
              color={textColor}
              fontWeight="bold"
              lineHeight="1.2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Discover Your Perfect Dress
            </MotionHeading>

            <MotionText
              fontSize="xl"
              color={textColor}
              maxW="lg"
              mx="auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore our exclusive collection of women's dresses. From elegant evening wear to casual chic, find the style that speaks to you.
            </MotionText>

            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                spacing={4}
                justify="center"
              >
                <Button
                  size="lg"
                  bg={buttonBg}
                  color="white"
                  _hover={{ bg: buttonHoverBg, transform: 'translateY(-2px)' }}
                  transition="all 0.3s"
                  px={8}
                  py={6}
                  fontSize="lg"
                  fontWeight="semibold"
                  boxShadow="lg"
                >
                  Shop Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  color={textColor}
                  borderColor={textColor}
                  _hover={{
                    bg: 'whiteAlpha.200',
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.3s"
                  px={8}
                  py={6}
                  fontSize="lg"
                  fontWeight="semibold"
                >
                  View Collection
                </Button>
              </Stack>
            </MotionBox>
          </Stack>
        </Flex>
      </Container>

      {/* Decorative scroll indicator */}
      <MotionBox
        position="absolute"
        bottom="8"
        left="50%"
        transform="translateX(-50%)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Box
          as="div"
          w="30px"
          h="50px"
          borderRadius="15px"
          border="2px solid"
          borderColor={textColor}
          position="relative"
          cursor="pointer"
        >
          <Box
            as="div"
            w="4px"
            h="10px"
            borderRadius="2px"
            bg={textColor}
            position="absolute"
            top="8px"
            left="50%"
            transform="translateX(-50%)"
            animation="scroll 2s infinite"
          />
        </Box>
      </MotionBox>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-50%) translateY(20px);
            opacity: 0;
          }
        }
      `}</style>
    </Box>
  )
}
