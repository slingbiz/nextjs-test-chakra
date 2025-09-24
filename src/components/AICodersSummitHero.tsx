import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Container,
  Icon,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ArrowForwardIcon, CalendarIcon } from '@chakra-ui/icons'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionButton = motion(Button)

export const AICodersSummitHero = () => {
  const bgGradient = useColorModeValue(
    'linear(to-r, blackAlpha.600, blackAlpha.800)',
    'linear(to-r, blackAlpha.700, blackAlpha.900)'
  )
  const textColor = useColorModeValue('white', 'white')
  const buttonBg = useColorModeValue('teal.400', 'teal.500')
  const buttonHoverBg = useColorModeValue('teal.500', 'teal.600')
  const secondaryButtonBg = useColorModeValue('whiteAlpha.200', 'whiteAlpha.300')
  const secondaryButtonHoverBg = useColorModeValue('whiteAlpha.300', 'whiteAlpha.400')

  return (
    <Box
      position="relative"
      height={{ base: '100vh', md: '90vh' }}
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
        backgroundImage="url('/images/ai-summit-hero-bg.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        filter="brightness(0.8)"
      />
      
      {/* Gradient Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient={bgGradient}
      />
      
      {/* Content */}
      <Container
        maxW="container.xl"
        height="100%"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack
          spacing={8}
          align="center"
          textAlign="center"
          maxW="4xl"
          px={{ base: 4, md: 8 }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HStack spacing={2} justify="center" mb={4}>
              <Icon as={CalendarIcon} color={textColor} />
              <Text color={textColor} fontSize="lg" fontWeight="medium">
                March 15-17, 2024 • Bangkok, Thailand
              </Text>
            </HStack>
          </MotionBox>
          
          <MotionHeading
            as="h1"
            size={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight="bold"
            color={textColor}
            lineHeight="shorter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            AI Coders Summit 2024
          </MotionHeading>
          
          <MotionText
            fontSize={{ base: 'xl', md: '2xl' }}
            color={textColor}
            maxW="3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join the world's leading developers and AI experts for three days of
            cutting-edge insights, hands-on workshops, and networking opportunities
            that will transform your approach to AI-powered development.
          </MotionText>
          
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={4}
            pt={4}
            width={{ base: '100%', sm: 'auto' }}
          >
            <MotionButton
              size="lg"
              bg={buttonBg}
              color="white"
              _hover={{ bg: buttonHoverBg, transform: 'translateY(-2px)' }}
              _active={{ transform: 'translateY(0)' }}
              rightIcon={<ArrowForwardIcon />}
              px={8}
              py={6}
              fontSize="lg"
              fontWeight="bold"
              boxShadow="lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </MotionButton>
            
            <MotionButton
              size="lg"
              bg={secondaryButtonBg}
              color={textColor}
              _hover={{ bg: secondaryButtonHoverBg, transform: 'translateY(-2px)' }}
              _active={{ transform: 'translateY(0)' }}
              px={8}
              py={6}
              fontSize="lg"
              fontWeight="medium"
              backdropFilter="blur(10px)"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </MotionButton>
          </Stack>
          
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            pt={8}
          >
            <Text color={textColor} fontSize="md" opacity={0.9}>
              Limited Early Bird Tickets Available
            </Text>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  )
}