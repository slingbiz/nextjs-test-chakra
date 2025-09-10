import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Container,
  Flex,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

export const HeroSection = () => {
  const textColor = useColorModeValue('white', 'white')
  const buttonBg = useColorModeValue('orange.400', 'orange.300')
  const buttonHoverBg = useColorModeValue('orange.500', 'orange.400')
  const secondaryButtonBg = useColorModeValue('whiteAlpha.300', 'whiteAlpha.200')
  const secondaryButtonHoverBg = useColorModeValue('whiteAlpha.400', 'whiteAlpha.300')

  return (
    <Box
      position="relative"
      width="100%"
      minHeight={{ base: '600px', md: '700px', lg: '800px' }}
      overflow="hidden"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundImage="url('/images/dubai-skyline-hero.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        filter="brightness(0.7)"
      />
      
      {/* Gradient Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear(to-b, blackAlpha.300, blackAlpha.600)"
      />

      {/* Content */}
      <Container maxW="7xl" height="100%" position="relative" zIndex="1">
        <Flex
          height="100%"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Stack spacing={8} maxW="3xl" mx="auto">
            <MotionHeading
              as="h1"
              size={{ base: '2xl', md: '3xl', lg: '4xl' }}
              color={textColor}
              fontWeight="bold"
              lineHeight="shorter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Discover the Magic of Dubai
            </MotionHeading>
            
            <MotionText
              fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
              color={textColor}
              maxW="2xl"
              mx="auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Experience luxury, adventure, and culture in the heart of the UAE. 
              From stunning skyscrapers to golden beaches, Dubai awaits your arrival.
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
                align="center"
              >
                <Button
                  size="lg"
                  bg={buttonBg}
                  color="white"
                  _hover={{
                    bg: buttonHoverBg,
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  transition="all 0.3s"
                  px={8}
                  py={6}
                  fontSize={{ base: 'md', md: 'lg' }}
                >
                  Start Planning Your Trip
                </Button>
                
                <Button
                  size="lg"
                  bg={secondaryButtonBg}
                  color="white"
                  backdropFilter="blur(10px)"
                  border="1px solid"
                  borderColor="whiteAlpha.300"
                  _hover={{
                    bg: secondaryButtonHoverBg,
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  transition="all 0.3s"
                  px={8}
                  py={6}
                  fontSize={{ base: 'md', md: 'lg' }}
                >
                  Explore Attractions
                </Button>
              </Stack>
            </MotionBox>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}