import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
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
      height="100vh"
      width="100%"
      overflow="hidden"
      backgroundImage="url('/images/thailand-hero-banner.jpg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      {/* Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        background={overlayBg}
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
        <Stack
          spacing={6}
          textAlign="center"
          maxW="3xl"
          mx="auto"
          px={{ base: 4, md: 8 }}
        >
          <Heading
            fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
            fontWeight="bold"
            color={textColor}
            lineHeight="shorter"
          >
            Discover the Magic of Thailand
          </Heading>
          
          <Text
            fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
            color={textColor}
            maxW="2xl"
            mx="auto"
          >
            Experience pristine beaches, ancient temples, vibrant culture, and unforgettable adventures in the Land of Smiles
          </Text>
          
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={4}
            justify="center"
            pt={4}
          >
            <Button
              size="lg"
              colorScheme="teal"
              bg="teal.400"
              _hover={{ bg: 'teal.500' }}
              px={8}
              fontSize={{ base: 'md', lg: 'lg' }}
            >
              Start Your Journey
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              color={textColor}
              borderColor={textColor}
              _hover={{
                bg: 'whiteAlpha.200',
                borderColor: 'white',
              }}
              px={8}
              fontSize={{ base: 'md', lg: 'lg' }}
            >
              Explore Destinations
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}