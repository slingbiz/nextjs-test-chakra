import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Container,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionButton = motion(Button)

export const HeroSection = () => {
  const textColor = useColorModeValue('white', 'white')
  const overlayBg = useColorModeValue(
    'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%)',
    'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 100%)'
  )

  return (
    <MotionBox
      position="relative"
      width="100%"
      height={{ base: '100vh', md: '90vh' }}
      minHeight="600px"
      overflow="hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Image */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundImage="url('/images/stylish-shoes-hero.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        zIndex="-2"
      />
      
      {/* Gradient Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        background={overlayBg}
        zIndex="-1"
      />

      {/* Content */}
      <Container
        maxW="container.xl"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          spacing={8}
          maxW={{ base: '100%', md: '60%' }}
          textAlign={{ base: 'center', md: 'left' }}
          px={{ base: 4, md: 0 }}
        >
          <MotionHeading
            as="h1"
            size={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight="bold"
            color={textColor}
            lineHeight="1.2"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Step Into Style,
            <br />
            Walk With Confidence
          </MotionHeading>

          <MotionText
            fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
            color={textColor}
            maxW={{ base: '100%', md: '80%' }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Discover our exclusive collection of the most stylish shoes that
            elevate your every step. From runway to street, make every moment
            a fashion statement.
          </MotionText>

          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={4}
            pt={4}
          >
            <MotionButton
              size="lg"
              colorScheme="teal"
              rightIcon={<ArrowForwardIcon />}
              px={8}
              py={6}
              fontSize="lg"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              Shop Now
            </MotionButton>

            <MotionButton
              size="lg"
              variant="outline"
              color={textColor}
              borderColor={textColor}
              px={8}
              py={6}
              fontSize="lg"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              _hover={{
                bg: 'whiteAlpha.200',
                transform: 'translateY(-2px)',
              }}
            >
              Explore Collections
            </MotionButton>
          </Stack>
        </Stack>
      </Container>
    </MotionBox>
  )
}