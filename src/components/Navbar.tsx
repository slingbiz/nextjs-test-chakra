import { Box, Flex, Heading, Link, Spacer } from '@chakra-ui/react';
import NextLink from 'next/link';

const Navbar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.800" color="white">
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          <NextLink href="/" passHref>
            <Link>My App</Link>
          </NextLink>
        </Heading>
      </Flex>

      <Spacer />

      <Box>
        <NextLink href="/" passHref>
          <Link mr={4}>Home</Link>
        </NextLink>
        <NextLink href="/contact" passHref>
          <Link mr={4}>Contact</Link>
        </NextLink>
      </Box>
    </Flex>
  );
};

export default Navbar;