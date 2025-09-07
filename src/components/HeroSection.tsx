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

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionButton = motion(Button)

export const HeroSection = () => {
  const textColor = useColorModeValue('white', 'white')
  const overlayBg = useColorModeValue(
    'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)',
    'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 100%)'
  )

  return (
    <MotionBox
      position="relative"
      width="100%"
      height={{ base: '600px', md: '700px', lg: '800px' }}
      backgroundImage="url('/images/thailand-beach-paradise.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        background={overlayBg}
      />
      <Container
        maxW="container.xl"
        height="100%"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          spacing={6}
          textAlign="center"
          maxW={{ base: '90%', md: '80%', lg: '800px' }}
        >
          <MotionHeading
            as="h1"
            size={{ base: '2xl', md: '3xl', lg: '4xl' }}
            color={textColor}
            fontWeight="bold"
            lineHeight="shorter"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Discover the Magic of Thailand
          </MotionHeading>
          <MotionText
            fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
            color={textColor}
            maxW="700px"
            mx="auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            From pristine beaches to ancient temples, experience the Land of Smiles
            with unforgettable adventures and warm hospitality
          </MotionText>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={4}
            justify="center"
            pt={4}
          >
            <MotionButton
              size="lg"
              colorScheme="teal"
              px={8}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Destinations
            </MotionButton>
            <MotionButton
              size="lg"
              variant="outline"
              color={textColor}
              borderColor={textColor}
              px={8}
              _hover={{
                bg: 'whiteAlpha.200',
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Plan Your Trip
            </MotionButton>
          </Stack>
        </Stack>
      </Container>
    </MotionBox>
  )
}