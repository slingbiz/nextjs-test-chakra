import React from 'react'; 
import { Box, Flex, Heading, Spacer, Link } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.800" color="white">
      <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
        My App
      </Heading>

      <Spacer />

      <Box>
        <Link href="/login" mr={4}>
          Login
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;