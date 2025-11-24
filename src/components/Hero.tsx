import { Badge, Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

type HeroProps = {
  title?: string;
  subtitle?: string;
};

const snowDrift = keyframes`
  0% { transform: translateY(-8%); }
  50% { transform: translateY(8%); }
  100% { transform: translateY(-8%); }
`;

const glowPulse = keyframes`
  0% { opacity: 0.3; }
  50% { opacity: 0.7; }
  100% { opacity: 0.3; }
`;

export const Hero = ({
  title = "Playground on Baloon.dev",
  subtitle = "Wrap up the year by shipping bold experiments faster than ever.",
}: HeroProps) => (
  <Flex
    w="100%"
    alignSelf="stretch"
    position="relative"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
    px={{ base: 6, md: 12 }}
    textAlign="center"
    overflow="hidden"
    bgGradient="linear(140deg, heroBgStart 0%, heroBgMid 50%, heroBgEnd 100%)"
    color="white"
    _dark={{
      color: "whiteAlpha.900",
    }}
  >
    <Box
      position="absolute"
      inset={0}
      bg="radial-gradient(circle at 25% 20%, rgba(255,255,255,0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.18), transparent 55%)"
      opacity={0.8}
      zIndex={0}
    />

    <Box
      position="absolute"
      inset={0}
      backgroundImage="radial-gradient(var(--chakra-colors-heroSnow) 1px, transparent 1px)"
      backgroundSize="80px 80px"
      opacity={0.5}
      animation={`${snowDrift} 18s ease-in-out infinite`}
      zIndex={0}
    />

    <Box
      position="absolute"
      top="-15%"
      right="-15%"
      width="60vmax"
      height="60vmax"
      bgGradient="radial(closest-side, heroGradientEnd, transparent)"
      opacity={0.35}
      filter="blur(60px)"
      animation={`${glowPulse} 12s ease-in-out infinite`}
      zIndex={0}
    />

    <VStack spacing={6} zIndex={1} maxW="4xl">
      <Badge
        variant="subtle"
        px={4}
        py={2}
        fontSize="sm"
        letterSpacing="widest"
        textTransform="uppercase"
        borderRadius="full"
        color="heroAccent"
        bg="whiteAlpha.900"
        _dark={{
          bg: "whiteAlpha.200",
          color: "heroAccent",
        }}
      >
        Holiday limited banner
      </Badge>

      <Heading
        size="3xl"
        fontWeight="extrabold"
        bgGradient="linear(to-r, heroGradientStart, heroGradientEnd)"
        bgClip="text"
        lineHeight={1.1}
      >
        {title}
      </Heading>

      <Text fontSize={{ base: "lg", md: "2xl" }} color="whiteAlpha.900">
        {subtitle}
      </Text>

      <Text fontSize="md" color="whiteAlpha.800" maxW="2xl">
        The same reliable Baloon.dev playground you know, wrapped in a festive
        glow with instant previews, dark mode, and edit-in-production superpowers.
      </Text>
    </VStack>
  </Flex>
);
