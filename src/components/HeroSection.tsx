import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Container,
  useColorModeValue,
  VStack,
  HStack,
  Icon,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { ArrowForwardIcon, InfoIcon } from '@chakra-ui/icons'

/**
 * HeroSection Component
 * 
 * A production-ready hero banner component for promoting the new USA in-house market strategy.
 * This component is fully responsive, accessible, and integrates with Chakra UI theming.
 * 
 * @component
 * @example
 * ```tsx
 * <HeroSection />
 * ```
 * 
 * @returns {JSX.Element} The rendered hero section component
 */

interface HeroSectionProps {
  /** Optional title override */
  title?: string
  /** Optional subtitle override */
  subtitle?: string
  /** Optional primary CTA text override */
  primaryCTA?: string
  /** Optional secondary CTA text override */
  secondaryCTA?: string
  /** Optional callback for primary CTA click */
  onPrimaryClick?: () => void
  /** Optional callback for secondary CTA click */
  onSecondaryClick?: () => void
}

const MotionBox = motion(Box)

export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Empowering American Business Excellence",
  subtitle = "Discover the new USA in-house market strategy designed to strengthen domestic innovation and accelerate economic growth under the Trump administration's pro-business policies.",
  primaryCTA = "Get Started Today",
  secondaryCTA = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
}) => {
  const bgGradient = useColorModeValue(
    'linear(to-br, blue.600, red.600)',
    'linear(to-br, blue.800, red.800)'
  )
  const overlayBg = useColorModeValue(
    'rgba(0, 0, 0, 0.4)',
    'rgba(0, 0, 0, 0.6)'
  )
  const textColor = 'white'
  const buttonBg = useColorModeValue('red.500', 'red.600')
  const buttonHoverBg = useColorModeValue('red.600', 'red.700')

  return (
    <MotionBox
      as="section"
      position="relative"
      width="100%"
      minHeight={{ base: '600px', md: '700px', lg: '800px' }}
      display="flex"
      alignItems="center"
      overflow="hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      role="banner"
      aria-label="Hero section for USA market strategy"
    >
      {/* Background Image Layer */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundImage="url('/images/usa-market-strategy-banner.jpg')"
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
          bgGradient: bgGradient,
          opacity: 0.7,
        }}
      />

      {/* Content Overlay */}
      <Container
        maxW="container.xl"
        position="relative"
        zIndex="1"
        py={{ base: 12, md: 16, lg: 20 }}
      >
        <VStack
          spacing={{ base: 6, md: 8 }}
          align="center"
          textAlign="center"
          maxW="4xl"
          mx="auto"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Heading
              as="h1"
              fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
              fontWeight="bold"
              color={textColor}
              lineHeight="1.2"
              textShadow="2px 2px 4px rgba(0,0,0,0.4)"
            >
              {title}
            </Heading>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Text
              fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
              color={textColor}
              maxW="3xl"
              lineHeight="1.6"
              textShadow="1px 1px 2px rgba(0,0,0,0.4)"
            >
              {subtitle}
            </Text>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={4}
              width="100%"
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
                _active={{
                  transform: 'translateY(0)',
                  boxShadow: 'md',
                }}
                rightIcon={<ArrowForwardIcon />}
                onClick={onPrimaryClick}
                px={8}
                py={6}
                fontSize={{ base: 'md', md: 'lg' }}
                fontWeight="bold"
                transition="all 0.3s"
                aria-label="Primary call to action: Get Started Today"
              >
                {primaryCTA}
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
                _active={{
                  transform: 'translateY(0)',
                  boxShadow: 'md',
                }}
                leftIcon={<InfoIcon />}
                onClick={onSecondaryClick}
                px={8}
                py={6}
                fontSize={{ base: 'md', md: 'lg' }}
                fontWeight="semibold"
                transition="all 0.3s"
                aria-label="Secondary call to action: Learn More"
              >
                {secondaryCTA}
              </Button>
            </Stack>
          </motion.div>
        </VStack>
      </Container>
    </MotionBox>
  )
}

export default HeroSection