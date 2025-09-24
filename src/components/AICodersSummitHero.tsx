import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Container,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

export const AICodersSummitHero: React.FC = () => {
  const textColor = useColorModeValue('white', 'white');
  const primaryButtonBg = useColorModeValue('purple.600', 'purple.400');
  const primaryButtonHoverBg = useColorModeValue('purple.700', 'purple.500');
  const secondaryButtonBg = useColorModeValue('whiteAlpha.200', 'whiteAlpha.200');
  const secondaryButtonHoverBg = useColorModeValue('whiteAlpha.300', 'whiteAlpha.300');

  return (
    <Box
      position="relative"
      width="100%"
      minHeight={{ base: '600px', md: '700px', lg: '800px' }}
      overflow="hidden"
    >
      {/* Background Image with Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundImage="url('/images/ai-coders-summit-hero.jpg')"
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
          bg: 'blackAlpha.700',
          backdropFilter: 'blur(2px)',
        }}
      />

      {/* Content */}
      <Container
        maxW="container.xl"
        position="relative"
        zIndex="1"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight={{ base: '600px', md: '700px', lg: '800px' }}
      >
        <Flex
          direction="column"
          align="center"
          textAlign="center"
          py={{ base: 20, md: 28 }}
          px={{ base: 4, md: 8 }}
        >
          <MotionHeading
            as="h1"
            size={{ base: '2xl', md: '3xl', lg: '4xl' }}
            fontWeight="bold"
            color={textColor}
            mb={6}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            AI Coders Summit 2024
          </MotionHeading>

          <MotionText
            fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
            color={textColor}
            mb={8}
            maxW="3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join the future of coding with AI. Connect with industry leaders,
            explore cutting-edge technologies, and shape tomorrow's development landscape.
          </MotionText>

          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={4}
            width={{ base: '100%', sm: 'auto' }}
          >
            <MotionButton
              size="lg"
              bg={primaryButtonBg}
              color="white"
              _hover={{
                bg: primaryButtonHoverBg,
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              px={8}
              py={6}
              fontSize={{ base: 'md', md: 'lg' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </MotionButton>

            <MotionButton
              size="lg"
              bg={secondaryButtonBg}
              color="white"
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.300"
              _hover={{
                bg: secondaryButtonHoverBg,
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              px={8}
              py={6}
              fontSize={{ base: 'md', md: 'lg' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </MotionButton>
          </Stack>

          {/* Event Details */}
          <MotionBox
            mt={12}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Text color={textColor} fontSize={{ base: 'md', md: 'lg' }} fontWeight="medium">
              March 15-17, 2024 • San Francisco, CA
            </Text>
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};