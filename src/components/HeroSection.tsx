import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Flex,
  useColorModeValue,
  Container,
} from '@chakra-ui/react'

export const HeroSection = () => {
  const textColor = useColorModeValue('white', 'white')
  const overlayBg = useColorModeValue(
    'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)',
    'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 100%)'
  )

  return (
    <Box
      position="relative"
      height={{ base: '600px', md: '700px', lg: '800px' }}
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
        backgroundImage="url('/images/chiang-mai-festival-hero.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      />
      
      {/* Gradient Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        background={overlayBg}
      />
      
      {/* Content */}
      <Container maxW="7xl" height="100%" position="relative">
        <Flex
          height="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Stack
            spacing={6}
            textAlign="center"
            maxW={{ base: '90%', md: '80%', lg: '70%' }}
          >
            <Heading
              fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
              fontWeight="bold"
              color={textColor}
              lineHeight="1.2"
            >
              Chiang Mai Music Festival 2024
            </Heading>
            
            <Text
              fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
              color={textColor}
              fontWeight="medium"
            >
              Experience the rhythm of Northern Thailand
            </Text>
            
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color={textColor}
              opacity={0.9}
            >
              March 15-17, 2024 • Royal Park Rajapruek
            </Text>
            
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={4}
              justify="center"
              pt={4}
            >
              <Button
                size="lg"
                colorScheme="orange"
                bg="orange.400"
                _hover={{ bg: 'orange.500' }}
                px={8}
              >
                Get Tickets
              </Button>
              <Button
                size="lg"
                variant="outline"
                color={textColor}
                borderColor={textColor}
                _hover={{ bg: 'whiteAlpha.200' }}
                px={8}
              >
                View Lineup
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </Container>
    </Box>
  )
}
