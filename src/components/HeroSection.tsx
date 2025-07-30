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
import { ArrowForwardIcon } from '@chakra-ui/icons'

export const HeroSection = () => {
  const bgGradient = useColorModeValue(
    'linear(to-r, blackAlpha.600, blackAlpha.400)',
    'linear(to-r, blackAlpha.800, blackAlpha.600)'
  )
  const textColor = useColorModeValue('white', 'white')
  const buttonBg = useColorModeValue('teal.400', 'teal.500')
  const buttonHoverBg = useColorModeValue('teal.500', 'teal.600')

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
        backgroundImage="url('/images/ai-coders-summit-bg.jpg')"
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
        zIndex="1"
      >
        <Flex
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Stack
            spacing={8}
            maxW="3xl"
            textAlign="center"
            px={6}
          >
            <Heading
              as="h1"
              size="4xl"
              fontWeight="bold"
              color={textColor}
              lineHeight="1.2"
              textShadow="2px 2px 4px rgba(0,0,0,0.4)"
            >
              AI Coders Summit 2024
            </Heading>
            
            <Text
              fontSize="2xl"
              color={textColor}
              fontWeight="medium"
              textShadow="1px 1px 2px rgba(0,0,0,0.4)"
            >
              Join the future of coding with AI. Connect with industry leaders,
              learn cutting-edge techniques, and shape tomorrow's technology.
            </Text>
            
            <Stack
              direction={{ base: 'column', md: 'row' }}
              spacing={4}
              justify="center"
              pt={4}
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
                rightIcon={<ArrowForwardIcon />}
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="bold"
              >
                Register Now
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                color={textColor}
                borderColor={textColor}
                _hover={{
                  bg: 'whiteAlpha.200',
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                transition="all 0.3s"
                px={8}
                py={6}
                fontSize="lg"
                fontWeight="semibold"
              >
                View Schedule
              </Button>
            </Stack>
            
            <Text
              fontSize="lg"
              color={textColor}
              fontWeight="medium"
              pt={4}
            >
              March 15-17, 2024 • San Francisco, CA
            </Text>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}
