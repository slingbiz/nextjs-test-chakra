import React from 'react';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';

const HeroBanner = () => {
  return (
    <Box bgImage="url('/images/hero-bg.jpg')" bgSize="cover" bgPosition="center" py={40}>
      <Flex maxW="1200px" mx="auto" direction="column" alignItems="center" textAlign="center">
        <Heading as="h1" size="4xl" color="white" mb={6}>
          Welcome to Our Website
        </Heading>
        <Text fontSize="xl" color="gray.300" mb={8}>
          Discover the best products and services for your needs.
        </Text>
        <Button colorScheme="blue" size="lg">
          Get Started
        </Button>
      </Flex>
    </Box>
  );
};

export default HeroBanner;