import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

type HeroProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
};

const HERO_BACKGROUND =
  "url('https://images.unsplash.com/photo-1504272017917-9c0421e800fe?auto=format&fit=crop&w=2000&q=80')";

const HIGHLIGHTS = [
  { value: "26°C", label: "avg daytime warmth" },
  { value: "120+", label: "winter events & festivals" },
  { value: "300+", label: "sunny beach days a year" },
];

export const Hero = ({
  eyebrow = "Dubai Tourism • Winter Season",
  title = "Winter in Dubai is a sunlit celebration",
  description = "Swap snow for golden dunes, rooftop sunsets, and waterfront brunches. Discover morning desert safaris, cool evenings at the Creek, and a calendar packed with global culture all winter long.",
  primaryCtaLabel = "Plan your winter escape",
  primaryCtaHref = "https://www.visitdubai.com/en/plan-your-trip/seasons/winter",
  secondaryCtaLabel = "See winter events",
  secondaryCtaHref = "https://www.visitdubai.com/en/whats-on",
}: HeroProps = {}) => {
  const buttonSize = useBreakpointValue({ base: "md", lg: "lg" });

  return (
    <Box
      as="section"
      position="relative"
      minH="100vh"
      width="100%"
      overflow="hidden"
      bg="black"
      color="white"
    >
      <Box
        aria-hidden="true"
        role="presentation"
        position="absolute"
        inset={0}
        bgImage={HERO_BACKGROUND}
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        transform="scale(1.05)"
        filter="saturate(1.2)"
      />
      <Box
        position="absolute"
        inset={0}
        bgGradient="linear(to-b, rgba(2,12,27,0.25), rgba(2,12,27,0.92))"
      />

      <Flex
        position="relative"
        zIndex={1}
        minH="inherit"
        align="center"
        justify="flex-start"
        px={{ base: 6, md: 12 }}
        py={{ base: 24, md: 32 }}
      >
        <Stack spacing={{ base: 6, md: 8 }} maxW="4xl">
          <Text
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="0.3em"
            color="whiteAlpha.800"
          >
            {eyebrow}
          </Text>
          <Heading
            as="h1"
            fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
            lineHeight={{ base: "1.2", md: "1.1" }}
          >
            {title}
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="whiteAlpha.900">
            {description}
          </Text>

          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={4}
            width="full"
          >
            <Button
              as="a"
              href={primaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="pink"
              size={buttonSize}
              rightIcon={<ArrowForwardIcon />}
            >
              {primaryCtaLabel}
            </Button>
            <Button
              as="a"
              href={secondaryCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              colorScheme="whiteAlpha"
              size={buttonSize}
            >
              {secondaryCtaLabel}
            </Button>
          </Stack>

          <SimpleGrid
            columns={{ base: 1, sm: 3 }}
            spacing={4}
            pt={{ base: 2, md: 6 }}
          >
            {HIGHLIGHTS.map((highlight) => (
              <Box
                key={highlight.label}
                bg="whiteAlpha.200"
                borderRadius="2xl"
                p={5}
                border="1px solid"
                borderColor="whiteAlpha.300"
                backdropFilter="auto"
                backdropBlur="6px"
              >
                <Text fontSize="3xl" fontWeight="bold">
                  {highlight.value}
                </Text>
                <Text
                  textTransform="uppercase"
                  fontSize="xs"
                  letterSpacing="0.2em"
                  color="whiteAlpha.800"
                >
                  {highlight.label}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Flex>
    </Box>
  );
};
