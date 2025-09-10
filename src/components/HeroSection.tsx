import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  Image,
  Container,
  SimpleGrid,
  Badge,
  useColorModeValue,
  Icon,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiShoppingCart, FiTrendingUp, FiStar } from 'react-icons/fi'

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)

interface FeaturedShoe {
  id: number
  name: string
  price: string
  originalPrice?: string
  badge?: string
  rating: number
  image: string
}

const featuredShoes: FeaturedShoe[] = [
  {
    id: 1,
    name: 'Urban Runner Pro',
    price: '$149',
    originalPrice: '$199',
    badge: 'Best Seller',
    rating: 4.8,
    image: '/api/placeholder/300/300',
  },
  {
    id: 2,
    name: 'Street Style Elite',
    price: '$179',
    badge: 'New Arrival',
    rating: 4.9,
    image: '/api/placeholder/300/300',
  },
  {
    id: 3,
    name: 'Comfort Cloud Max',
    price: '$129',
    originalPrice: '$169',
    badge: '25% OFF',
    rating: 4.7,
    image: '/api/placeholder/300/300',
  },
]

export const HeroSection = () => {
  const bgGradient = useColorModeValue(
    'linear(to-br, gray.50, gray.100)',
    'linear(to-br, gray.900, gray.800)'
  )
  const textColor = useColorModeValue('gray.800', 'white')
  const accentColor = useColorModeValue('purple.600', 'purple.400')
  const cardBg = useColorModeValue('white', 'gray.800')
  const shadowColor = useColorModeValue('lg', 'dark-lg')

  return (
    <Box position="relative" overflow="hidden" minH="100vh">
      {/* Background Image with Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage="url('/images/stylish-shoes-hero.jpg')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: 'blackAlpha.600',
          backdropFilter: 'blur(2px)',
        }}
      />

      {/* Hero Content */}
      <Container maxW="7xl" position="relative" zIndex={1}>
        <Flex
          minH="100vh"
          align="center"
          justify="space-between"
          direction={{ base: 'column', lg: 'row' }}
          py={{ base: 20, md: 28 }}
          gap={10}
        >
          {/* Left Content */}
          <MotionFlex
            flex={1}
            direction="column"
            align={{ base: 'center', lg: 'flex-start' }}
            textAlign={{ base: 'center', lg: 'left' }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              colorScheme="purple"
              px={3}
              py={1}
              mb={4}
              borderRadius="full"
              fontSize="sm"
            >
              <HStack spacing={1}>
                <Icon as={FiTrendingUp} />
                <Text>Trending Now</Text>
              </HStack>
            </Badge>

            <Heading
              as="h1"
              size="3xl"
              fontWeight="bold"
              color="white"
              mb={6}
              lineHeight="shorter"
            >
              Step Into
              <Text as="span" color={accentColor} display="block">
                Extraordinary Style
              </Text>
            </Heading>

            <Text
              fontSize="xl"
              color="gray.200"
              mb={8}
              maxW="lg"
            >
              Discover our curated collection of the most stylish shoes that
              blend comfort with cutting-edge fashion. Elevate your every step.
            </Text>

            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={4}
              w={{ base: 'full', sm: 'auto' }}
            >
              <Button
                size="lg"
                colorScheme="purple"
                rightIcon={<FiShoppingCart />}
                px={8}
                py={6}
                fontSize="lg"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'xl',
                }}
                transition="all 0.3s"
              >
                Shop Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                color="white"
                borderColor="white"
                _hover={{
                  bg: 'whiteAlpha.200',
                  transform: 'translateY(-2px)',
                }}
                px={8}
                py={6}
                fontSize="lg"
                transition="all 0.3s"
              >
                View Collection
              </Button>
            </Stack>

            {/* Trust Indicators */}
            <HStack spacing={8} mt={10} color="gray.300">
              <VStack spacing={0} align="center">
                <Text fontSize="2xl" fontWeight="bold" color="white">
                  50K+
                </Text>
                <Text fontSize="sm">Happy Customers</Text>
              </VStack>
              <VStack spacing={0} align="center">
                <HStack spacing={1}>
                  <Icon as={FiStar} color="yellow.400" />
                  <Text fontSize="2xl" fontWeight="bold" color="white">
                    4.9
                  </Text>
                </HStack>
                <Text fontSize="sm">Average Rating</Text>
              </VStack>
              <VStack spacing={0} align="center">
                <Text fontSize="2xl" fontWeight="bold" color="white">
                  500+
                </Text>
                <Text fontSize="sm">Shoe Styles</Text>
              </VStack>
            </HStack>
          </MotionFlex>

          {/* Right Content - Featured Products */}
          <MotionBox
            flex={1}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4}>
              {featuredShoes.map((shoe, index) => (
                <MotionBox
                  key={shoe.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Box
                    bg={cardBg}
                    borderRadius="xl"
                    overflow="hidden"
                    shadow={shadowColor}
                    cursor="pointer"
                    position="relative"
                    _hover={{
                      shadow: '2xl',
                      transform: 'scale(1.02)',
                    }}
                    transition="all 0.3s"
                  >
                    {shoe.badge && (
                      <Badge
                        position="absolute"
                        top={2}
                        right={2}
                        colorScheme="red"
                        borderRadius="full"
                        px={2}
                        py={1}
                        fontSize="xs"
                        zIndex={1}
                      >
                        {shoe.badge}
                      </Badge>
                    )}
                    <Image
                      src={shoe.image}
                      alt={shoe.name}
                      h="200px"
                      w="full"
                      objectFit="cover"
                    />
                    <Box p={4}>
                      <Text fontSize="sm" fontWeight="semibold" mb={1}>
                        {shoe.name}
                      </Text>
                      <HStack spacing={2} align="baseline">
                        <Text fontSize="lg" fontWeight="bold" color={accentColor}>
                          {shoe.price}
                        </Text>
                        {shoe.originalPrice && (
                          <Text
                            fontSize="sm"
                            textDecoration="line-through"
                            color="gray.500"
                          >
                            {shoe.originalPrice}
                          </Text>
                        )}
                      </HStack>
                      <HStack spacing={1} mt={2}>
                        <Icon as={FiStar} color="yellow.400" boxSize={3} />
                        <Text fontSize="xs" color="gray.600">
                          {shoe.rating}
                        </Text>
                      </HStack>
                    </Box>
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>
          </MotionBox>
        </Flex>
      </Container>

      {/* Decorative Elements */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        h="100px"
        bgGradient="linear(to-t, blackAlpha.800, transparent)"
        pointerEvents="none"
      />
    </Box>
  )
}