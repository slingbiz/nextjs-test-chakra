import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.800" py={8}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        wrap="wrap"
        px={8}
      >
        <Text color="white" mb={{ base: 4, md: 0 }}>
          &copy; {new Date().getFullYear()} AppHub. All rights reserved.
        </Text>
        <Flex align="center">
          <Link href="#" mr={4} color="gray.400">
            Privacy Policy
          </Link>
          <Link href="#" color="gray.400">
            Terms of Service
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
