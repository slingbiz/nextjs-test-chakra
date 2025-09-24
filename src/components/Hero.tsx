import { Flex, Heading, Link as ChakraLink } from "@chakra-ui/react";

export const Hero = ({ title }: { title: string }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    height="100vh"
    bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
    bgClip="text"
  >
    <Heading fontSize="6vw">{title}</Heading>
  </Flex>
);

Hero.defaultProps = {
  title: (
    <>
      Playground on <ChakraLink href="https://baloon.dev" isExternal>baloon.dev</ChakraLink>
    </>
  ),
};