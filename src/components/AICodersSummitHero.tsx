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
import { ArrowForwardIcon } from '@chakra-ui/icons'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionButton = motion(Button)

export const AICodersSummitHero = () => {
  const bgGradient = useColorModeValue(
    'linear(to-br, blackAlpha.600, blackAlpha.800)',
    'linear(to-br, blackAlpha.700, blackAlpha.900)'
  )
  const textColor = useColorModeValue('white', 'white')
  const primaryButtonBg = useColorModeValue('purple.500', 'purple.400')
  const primaryButtonHover = useColorModeValue('purple.600', 'purple.500')
  const secondaryButtonBorder = useColorModeValue('white', 'white')

  return (
    <Box
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      overflow="hidden"
    >
      {/* Background Image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundImage="url('/images/ai-summit-hero-bg.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        zIndex={-2}
      />
      
      {/* Gradient Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient={bgGradient}
        zIndex={-1}
      />

      {/* Content */}
      <Container maxW="7xl" position="relative" zIndex={1}>
        <Flex
          direction="column"
          align="center"
          textAlign="center"
          py={{ base: 20, md: 28 }}
          px={{ base: 4, md: 8 }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={textColor}
              fontWeight="semibold"
              mb={4}
              textTransform="uppercase"
              letterSpacing="wide"
            >
              November 15-17, 2024 • Virtual Event
            </Text>
          </MotionBox>

          <MotionHeading
            as="h1"
            size={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight="bold"
            color={textColor}
            mb={6}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            AI Coders Summit 2024
          </MotionHeading>

          <MotionText
            fontSize={{ base: 'xl', md: '2xl' }}
            color={textColor}
            mb={8}
            maxW="3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join the world's leading developers and AI experts for three days of
            cutting-edge insights, hands-on workshops, and networking opportunities
            that will transform your coding journey.
          </MotionText>

          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={4}
            w={{ base: 'full', sm: 'auto' }}
          >
            <MotionButton
              size="lg"
              bg={primaryButtonBg}
              color="white"
              _hover={{ bg: primaryButtonHover }}
              rightIcon={<ArrowForwardIcon />}
              px={8}
              py={6}
              fontSize="lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </MotionButton>

            <MotionButton
              size="lg"
              variant="outline"
              color={textColor}
              borderColor={secondaryButtonBorder}
              _hover={{ bg: 'whiteAlpha.200' }}
              px={8}
              py={6}
              fontSize="lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Agenda
            </MotionButton>
          </Stack>

          {/* Stats or Additional Info */}
          <MotionBox
            mt={12}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={{ base: 4, md: 8 }}
              align="center"
            >
              <Box textAlign="center">
                <Text fontSize="3xl" fontWeight="bold" color={textColor}>
                  50+
                </Text>
                <Text fontSize="sm" color={textColor} opacity={0.8}>
                  Expert Speakers
                </Text>
              </Box>
              <Box textAlign="center">
                <Text fontSize="3xl" fontWeight="bold" color={textColor}>
                  100+
                </Text>
                <Text fontSize="sm" color={textColor} opacity={0.8}>
                  Technical Sessions
                </Text>
              </Box>
              <Box textAlign="center">
                <Text fontSize="3xl" fontWeight="bold" color={textColor}>
                  5000+
                </Text>
                <Text fontSize="sm" color={textColor} opacity={0.8}>
                  Global Attendees
                </Text>
              </Box>
            </Stack>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  )
}