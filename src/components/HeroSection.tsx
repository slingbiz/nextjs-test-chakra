import { Box, Flex, Heading, Text, Button, VStack, HStack, useColorModeValue } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)

export const HeroSection = () => {
  const [hoveredSide, setHoveredSide] = useState<'elon' | 'sam' | null>(null)
  const bgGradient = useColorModeValue(
    'linear(to-r, blue.600, red.600)',
    'linear(to-r, blue.800, red.800)'
  )

  return (
    <Box
      position="relative"
      height="100vh"
      width="100%"
      overflow="hidden"
      bgImage="url('/images/tech-titans-battle.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient={bgGradient}
        opacity="0.85"
      />
      
      <Flex
        position="relative"
        height="100%"
        width="100%"
        align="center"
        justify="center"
      >
        <HStack spacing={0} width="100%" height="100%">
          {/* Elon Side */}
          <MotionBox
            flex={1}
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            cursor="pointer"
            onMouseEnter={() => setHoveredSide('elon')}
            onMouseLeave={() => setHoveredSide(null)}
            animate={{
              scale: hoveredSide === 'elon' ? 1.05 : hoveredSide === 'sam' ? 0.95 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <VStack spacing={6} p={8}>
              <MotionHeading
                size="4xl"
                color="white"
                fontWeight="bold"
                textShadow="2px 2px 4px rgba(0,0,0,0.8)"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                TEAM ELON
              </MotionHeading>
              <Text
                fontSize="xl"
                color="whiteAlpha.900"
                textAlign="center"
                maxW="400px"
                textShadow="1px 1px 2px rgba(0,0,0,0.8)"
              >
                Mars, rockets, and memes. The future is now.
              </Text>
              <Button
                size="lg"
                colorScheme="blue"
                variant="solid"
                _hover={{ transform: 'scale(1.1)' }}
                transition="all 0.2s"
              >
                Join the Mission
              </Button>
            </VStack>
          </MotionBox>

          {/* VS Divider */}
          <Box
            position="absolute"
            left="50%"
            transform="translateX(-50%)"
            zIndex={10}
          >
            <MotionHeading
              size="3xl"
              color="white"
              fontWeight="black"
              textShadow="3px 3px 6px rgba(0,0,0,0.9)"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              VS
            </MotionHeading>
          </Box>

          {/* Sam Side */}
          <MotionBox
            flex={1}
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            cursor="pointer"
            onMouseEnter={() => setHoveredSide('sam')}
            onMouseLeave={() => setHoveredSide(null)}
            animate={{
              scale: hoveredSide === 'sam' ? 1.05 : hoveredSide === 'elon' ? 0.95 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <VStack spacing={6} p={8}>
              <MotionHeading
                size="4xl"
                color="white"
                fontWeight="bold"
                textShadow="2px 2px 4px rgba(0,0,0,0.8)"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                TEAM SAM
              </MotionHeading>
              <Text
                fontSize="xl"
                color="whiteAlpha.900"
                textAlign="center"
                maxW="400px"
                textShadow="1px 1px 2px rgba(0,0,0,0.8)"
              >
                AGI, safety, and the responsible path forward.
              </Text>
              <Button
                size="lg"
                colorScheme="red"
                variant="solid"
                _hover={{ transform: 'scale(1.1)' }}
                transition="all 0.2s"
              >
                Join the Revolution
              </Button>
            </VStack>
          </MotionBox>
        </HStack>
      </Flex>
    </Box>
  )
}