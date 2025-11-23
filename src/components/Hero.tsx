import type { ComponentProps } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

type HeroProps = {
  title?: string;
  subtitle?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
};

const DragonSigil = (props: ComponentProps<typeof Icon>) => (
  <Icon viewBox="0 0 64 64" {...props}>
    <path
      fill="currentColor"
      d="M32 6c-6.6 0-12 5.4-12 12v2.1c-7.1 1.3-12 5.3-12 11.9 0 8.4 8.9 10.5 14.1 6.3 1.8 4.6 5.1 8 9.9 10.4 4.9-2.3 8.2-5.7 10-10.4 5.2 4.2 14 2.1 14-6.3 0-6.6-4.8-10.6-11.9-11.9V18c0-6.6-5.4-12-12.1-12zm0 6c3.3 0 6 2.7 6 6v3.2c-2.1 1.3-3.7 3.2-4.7 5.7-.8-1.4-2-2.5-3.3-3.2V18c0-3.3 2.7-6 6-6zm-12 6.8v5.3c-2.8 1.6-4.4 4.6-4.4 8.2-1.6-.5-3.6-1.9-3.6-4.3 0-3.3 3.3-5.6 8-6.5zm24 0c4.7.9 8 3.2 8 6.5 0 2.4-1.9 3.8-3.5 4.3 0-3.6-1.6-6.6-4.5-8.2V18.8zm-12 9.6c1.9 0 3.5 2.3 3.5 5.1S33.9 36 32 36s-3.5-2.3-3.5-5.1S30.1 24.4 32 24.4z"
    />
  </Icon>
);

const HeroStatCard = ({ label, value }: { label: string; value: string }) => (
  <Stack
    spacing={1}
    bg="whiteAlpha.100"
    backdropFilter="blur(10px)"
    border="1px solid"
    borderColor="whiteAlpha.200"
    rounded="2xl"
    px={6}
    py={4}
  >
    <Text fontSize="sm" textTransform="uppercase" letterSpacing="0.2em">
      {label}
    </Text>
    <Text fontSize="2xl" fontWeight="bold">
      {value}
    </Text>
  </Stack>
);

export const Hero = ({
  title = "How to Train Your Frontend Dragons",
  subtitle = "Craft cinematic hero banners, moody gradients, and tactile CTAs without leaving your editor. Baloon.dev gives you theme control worthy of Berk's dragon riders.",
  ctaPrimary = "Forge a Dragon Banner",
  ctaSecondary = "Watch Sky Tour",
}: HeroProps) => {
  const backgroundImage =
    "linear-gradient(120deg, rgba(3,7,18,0.93) 0%, rgba(88,28,135,0.75) 55%, rgba(244,114,182,0.45) 100%), url('https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=2000&q=80')";

  return (
    <Box
      as="section"
      position="relative"
      w="full"
      minH={{ base: "110vh", md: "100vh" }}
      bg="dragonNight"
      color="white"
      overflow="hidden"
    >
      <Box
        position="absolute"
        inset={0}
        bgImage={backgroundImage}
        bgSize="cover"
        bgPos="center"
        opacity={0.85}
        transform="scale(1.05)"
        transition="transform 6s ease"
        _hover={{ transform: "scale(1.1)" }}
      />

      <Box
        position="absolute"
        inset={0}
        bg="radial-gradient(circle at 20% 20%, rgba(244,114,182,0.55), transparent 50%), radial-gradient(circle at 80% 0%, rgba(59,130,246,0.4), transparent 45%)"
        mixBlendMode="screen"
        opacity={0.8}
      />

      <Flex
        position="relative"
        zIndex={1}
        direction={{ base: "column", lg: "row" }}
        align={{ base: "flex-start", lg: "center" }}
        justify="space-between"
        px={{ base: 6, md: 16 }}
        py={{ base: 20, md: 28 }}
        gap={{ base: 12, lg: 16 }}
      >
        <Stack spacing={6} maxW="2xl">
          <HStack
            spacing={3}
            bg="whiteAlpha.200"
            px={4}
            py={2}
            rounded="full"
            backdropFilter="blur(6px)"
          >
            <DragonSigil boxSize={6} color="dragonEmber" />
            <Text fontWeight="semibold" letterSpacing="0.2em" fontSize="xs">
              Dragonflight Release
            </Text>
          </HStack>

          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
            lineHeight="1.1"
            textShadow="0 15px 45px rgba(0,0,0,0.45)"
          >
            {title}
          </Heading>

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="dragonMist"
            maxW="lg"
          >
            {subtitle}
          </Text>

          <HStack
            spacing={4}
            flexWrap="wrap"
            divider={<Box display={{ base: "none", md: "block" }} />}
          >
            <Button
              size="lg"
              color="white"
              bgGradient="linear(to-r, dragonEmber, dragonSky)"
              _hover={{ opacity: 0.95 }}
              rightIcon={<ArrowForwardIcon />}
            >
              {ctaPrimary}
            </Button>
            <Button
              size="lg"
              variant="outline"
              borderColor="whiteAlpha.600"
              color="white"
              _hover={{ bg: "whiteAlpha.200" }}
            >
              {ctaSecondary}
            </Button>
          </HStack>

          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={4}
            pt={4}
          >
            <HeroStatCard label="Cinematic hero scenes" value="120+" />
            <HeroStatCard label="Dynamic gradients" value="24 presets" />
            <HeroStatCard label="Time to launch" value="5 min" />
          </Stack>
        </Stack>

        <Box
          bg="whiteAlpha.100"
          border="1px solid"
          borderColor="whiteAlpha.200"
          rounded="3xl"
          px={{ base: 6, md: 10 }}
          py={{ base: 8, md: 10 }}
          maxW="sm"
          backdropFilter="blur(18px)"
          boxShadow="0 30px 60px rgba(0,0,0,0.35)"
        >
          <Stack spacing={6}>
            <Text
              textTransform="uppercase"
              letterSpacing="0.4em"
              fontSize="xs"
              color="dragonMist"
            >
              Flight plan
            </Text>
            <Stack spacing={3}>
              <Text fontSize="2xl" fontWeight="bold">
                Build immersive hero banners in Baloon.dev
              </Text>
              <Text color="dragonMist">
                Blend atmospheric nebulae, ember highlights, and cinematic
                typography that echoes the{" "}
                <Text as="span" fontWeight="semibold" color="dragonEmber">
                  How to Train Your Dragon
                </Text>{" "}
                saga.
              </Text>
            </Stack>
            <Stack spacing={3} fontSize="sm" color="dragonMist">
              <Text>• Layered aurora gradients & volumetric fog</Text>
              <Text>• Drag-and-drop CTA choreography</Text>
              <Text>• Theme tokens for day/night flights</Text>
            </Stack>
            <Text fontWeight="semibold" color="dragonSky">
              Next ride initializes in 00:47
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};
