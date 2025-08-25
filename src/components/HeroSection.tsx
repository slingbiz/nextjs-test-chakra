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
  const bgOverlay = useColorModeValue(
    'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))',
    'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))'
  )
  const textColor = useColorModeValue('gray.800', 'white')
  const buttonBg = useColorModeValue('pink.500', 'pink.400')
  const buttonHoverBg = useColorModeValue('pink.600', 'pink.500')

  return (
    <Box
      position="relative"
      height="100vh"
      minHeight="600px"
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
        backgroundImage="url('/images/fashion-hero-banner.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: bgOverlay,
        }}
      />

      {/* Content Overlay */}
      <Container maxW="container.xl" height="100%" position="relative" zIndex={1}>
        <Flex
          height="100%"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Stack spacing={6} alignItems="center">
              <MotionHeading
                as="h1"
                size="3xl"
                fontWeight="bold"
                color={textColor}
                letterSpacing="tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Elevate Your Style
              </MotionHeading>
              
              <MotionText
                fontSize="xl"
                color={textColor}
                maxW="600px"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Discover the latest trends in women's fashion. From elegant dresses to 
                chic accessories, find your perfect look for every occasion.
              </MotionText>

              <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} pt={4}>
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
                  fontWeight="semibold"
                >
                  Shop New Arrivals
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  color={textColor}
                  borderColor={textColor}
                  _hover={{
                    bg: useColorModeValue('gray.100', 'whiteAlpha.200'),
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  transition="all 0.3s"
                  px={8}
                  fontWeight="semibold"
                >
                  View Collections
                </Button>
              </Stack>
            </Stack>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  )
}