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
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ArrowForwardIcon } from '@chakra-ui/icons';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

export const HeroBanner = () => {
  const bgGradient = useColorModeValue(
    'linear(to-br, blackAlpha.600, blackAlpha.800)',
    'linear(to-br, blackAlpha.700, blackAlpha.900)'
  );

  const textColor = useColorModeValue('white', 'white');
  const buttonBg = useColorModeValue('teal.400', 'teal.500');
  const buttonHoverBg = useColorModeValue('teal.500', 'teal.600');

  return (
    <Box
      position="relative"
      width="100%"
      minHeight={{ base: '600px', md: '700px', lg: '800px' }}
      overflow="hidden"
    >
      {/* Background Image with Animation */}
      <MotionBox
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundImage="url('/images/ai-summit-hero-bg.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
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
        position="relative"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        py={{ base: 20, md: 28 }}
      >
        <Stack
          spacing={{ base: 8, md: 10 }}
          align="center"
          textAlign="center"
          maxW={{ base: '100%', md: '3xl' }}
        >
          <MotionHeading
            as="h1"
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight="bold"
            color={textColor}
            lineHeight="shorter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI Coders Summit 2024
          </MotionHeading>

          <MotionText
            fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
            color={textColor}
            maxW={{ base: '90%', md: '80%' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Join the future of coding where AI meets innovation. Connect with
            leading developers, explore cutting-edge technologies, and shape the
            future of software development.
          </MotionText>

          <Stack
            direction={{ base: 'column', sm: 'row' }}
            spacing={4}
            width={{ base: '100%', sm: 'auto' }}
          >
            <MotionButton
              size="lg"
              bg={buttonBg}
              color="white"
              _hover={{
                bg: buttonHoverBg,
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              rightIcon={<ArrowForwardIcon />}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </MotionButton>

            <MotionButton
              size="lg"
              variant="outline"
              color={textColor}
              borderColor={textColor}
              _hover={{
                bg: 'whiteAlpha.200',
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </MotionButton>
          </Stack>

          {/* Event Details */}
          <Flex
            mt={8}
            gap={{ base: 4, md: 8 }}
            flexWrap="wrap"
            justify="center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }}>
              📅 March 15-17, 2024
            </Text>
            <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }}>
              📍 San Francisco, CA
            </Text>
            <Text color={textColor} fontSize={{ base: 'sm', md: 'md' }}>
              👥 500+ Developers
            </Text>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};
