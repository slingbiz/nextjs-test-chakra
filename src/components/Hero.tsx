import React from 'react';
import { Box, Flex, Heading, Text, Button, Stack } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Flex
      align="center"
      justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
      direction={{ base: 'column-reverse', md: 'row' }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
    >
      <Stack
        spacing={4}
        w={{ base: '80%', md: '40%' }}
        align={['center', 'center', 'flex-start', 'flex-start']}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={['center', 'center', 'left', 'left']}
        >
          Discover Your Next <br />
          Favorite App
        </Heading>
        <Text
          fontSize="lg"
          color="gray.500"
          textAlign={['center', 'center', 'left', 'left']}
        >
          Our cutting-edge platform offers a seamless experience for exploring and downloading the latest mobile apps.
        </Text>
        <Box>
          <Button
            colorScheme="primary"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
          >
            Get Started
          </Button>
        </Box>
      </Stack>
      <Box
        w={{ base: '80%', sm: '60%', md: '50%' }}
        mb={{ base: 12, md: 0 }}
      >
        <img src="/hero.svg" size="100%" alt="Hero image" />
      </Box>
    </Flex>
  );
};

export default Hero;
