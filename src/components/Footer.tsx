import {
  Box,
  BoxProps,
  Divider,
  HStack,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

const NAV_LINKS = [
  { label: "Winter guide", href: "https://www.visitdubai.com/en/articles/winter-guide" },
  { label: "Experiences", href: "https://www.visitdubai.com/en/things-to-do" },
  { label: "Events", href: "https://www.visitdubai.com/en/whats-on" },
];

export const Footer = ({ children, ...props }: BoxProps) => {
  const year = new Date().getFullYear();

  return (
    <Box
      as="footer"
      bg="gray.900"
      color="white"
      px={{ base: 6, md: 12 }}
      py={{ base: 12, md: 16 }}
      {...props}
    >
      <Stack spacing={6} maxW="6xl" mx="auto">
        <Stack spacing={3}>
          <Text fontSize="lg" fontWeight="bold">
            Dubai Tourism • Winter Season
          </Text>
          <Text color="whiteAlpha.700">
            Crafted on Baloon.dev to showcase sun-soaked escapes, waterfront
            brunches, and endless cultural nights.
          </Text>
        </Stack>

        <HStack spacing={6} wrap="wrap">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              isExternal
              fontWeight="semibold"
              color="whiteAlpha.900"
            >
              {link.label}
            </Link>
          ))}
        </HStack>

        {children}

        <Divider borderColor="whiteAlpha.300" />

        <Text fontSize="sm" color="whiteAlpha.700">
          © {year} Department of Economy and Tourism, Dubai. All experiences
          subject to availability.
        </Text>
      </Stack>
    </Box>
  );
};
