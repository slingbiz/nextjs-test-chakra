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
    'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))',
    'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))'
  )
  const textColor = useColorModeValue('white', 'white')
  const primaryButtonBg = useColorModeValue('purple.600', 'purple.400')
  const primaryButtonHover = useColorModeValue('purple.700', 'purple.500')
  const secondaryButtonBg = useColorModeValue('whiteAlpha.200', 'whiteAlpha.100')
  const secondaryButtonHover = useColorModeValue('whiteAlpha.300', 'whiteAlpha.200')

  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      position="relative"
      width="100%"
      minHeight={{ base: '600px', md: '700px', lg: '800px' }}
      backgroundImage="url('/images/ai-summit-hero.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        background={bgOverlay}
      />
      
      <Container maxW="container.xl" height="100%" position="relative">
        <Flex
          height="100%"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          py={{ base: 20, md: 28 }}
        >
          <Stack spacing={{ base: 8, md: 10 }} maxW="3xl">
            <MotionHeading
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
              fontWeight="bold"
              color={textColor}
              lineHeight="110%"
            >
              AI Coders Summit 2024
            </MotionHeading>
            
            <MotionText
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              color={textColor}
              fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
              maxW="2xl"
              mx="auto"
            >
              Join the future of coding at the premier AI development conference. 
              Connect with industry leaders, explore cutting-edge AI tools, and 
              transform your development workflow.
            </MotionText>
            
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={4}
              justify="center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              as={motion.div}
            >
              <Button
                size="lg"
                bg={primaryButtonBg}
                color="white"
                _hover={{
                  bg: primaryButtonHover,
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                transition="all 0.3s"
                px={8}
                fontSize={{ base: 'md', md: 'lg' }}
              >
                Register Now
              </Button>
              
              <Button
                size="lg"
                bg={secondaryButtonBg}
                color="white"
                backdropFilter="blur(10px)"
                border="1px solid"
                borderColor="whiteAlpha.300"
                _hover={{
                  bg: secondaryButtonHover,
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
                transition="all 0.3s"
                px={8}
                fontSize={{ base: 'md', md: 'lg' }}
              >
                Learn More
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Container>
    </MotionBox>
  )
}
