import {
  Box,
  BoxProps,
  Container as ChakraContainer,
  Divider,
  Flex,
  HStack,
  IconButton,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ComponentType, createElement } from "react";
import { IconBaseProps } from "react-icons";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  heading: string;
  links: FooterLink[];
};

const footerSections: FooterSection[] = [
  {
    heading: "Product",
    links: [
      { label: "Why Baloon", href: "https://baloon.dev" },
      { label: "Live Previews", href: "https://baloon.dev" },
      { label: "Integrations", href: "https://baloon.dev" },
      { label: "Pricing", href: "https://baloon.dev" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Docs", href: "https://baloon.dev" },
      { label: "Changelog", href: "https://baloon.dev" },
      { label: "Templates", href: "https://baloon.dev" },
      { label: "Support", href: "mailto:hello@baloon.dev" },
    ],
  },
  {
    heading: "Developers",
    links: [
      { label: "API", href: "https://baloon.dev" },
      { label: "Guides", href: "https://baloon.dev" },
      {
        label: "Open Source",
        href: "https://github.com/slingbiz/nextjs-test-chakra",
      },
      { label: "Status", href: "https://baloon.dev" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "https://baloon.dev" },
      { label: "Careers", href: "https://baloon.dev" },
      { label: "Blog", href: "https://baloon.dev" },
      { label: "Contact", href: "mailto:hello@baloon.dev" },
    ],
  },
];

const socialLinks: {
  label: string;
  icon: ComponentType<IconBaseProps>;
  href: string;
}[] = [
  {
    label: "GitHub",
    icon: FaGithub,
    href: "https://github.com/slingbiz/nextjs-test-chakra",
  },
  {
    label: "Discord",
    icon: FaDiscord,
    href: "https://discord.gg/baloon",
  },
  {
    label: "Twitter",
    icon: FaTwitter,
    href: "https://twitter.com/baloon_dev",
  },
];

export const Footer = (props: BoxProps) => {
  const bg = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.200");
  const muted = useColorModeValue("gray.600", "gray.400");
  const accent = useColorModeValue("green.600", "green.300");

  return (
    <Box
      as="footer"
      width="full"
      borderTopWidth="1px"
      borderColor={borderColor}
      bg={bg}
      {...props}
    >
      <ChakraContainer maxW="6xl" py={{ base: 10, md: 16 }}>
        <Stack spacing={{ base: 8, md: 12 }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "flex-start", md: "center" }}
            gap={4}
          >
            <Stack spacing={1}>
              <Text fontSize="lg" fontWeight="bold">
                Baloon.dev
              </Text>
              <Text color={muted}>
                Your code ❤️ Baloon. Preview, iterate, and ship with confidence.
              </Text>
            </Stack>
            <Text fontWeight="semibold" color={accent}>
              Built for teams who ship fast.
            </Text>
          </Flex>

          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            {footerSections.map((section) => (
              <Stack key={section.heading} spacing={3}>
                <Text fontWeight="bold" fontSize="sm" textTransform="uppercase">
                  {section.heading}
                </Text>
                <Stack spacing={2}>
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      isExternal
                      fontSize="sm"
                      color={muted}
                      _hover={{ color: accent, textDecoration: "none" }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>

          <Divider borderColor={borderColor} />

          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify="space-between"
            gap={4}
          >
            <Text fontSize="sm" color={muted}>
              © {new Date().getFullYear()} Baloon.dev. All rights reserved.
            </Text>
            <HStack spacing={3}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  as={Link}
                  href={social.href}
                  isExternal
                  aria-label={social.label}
                  icon={createElement(social.icon, { size: "1.25rem" })}
                  variant="ghost"
                  color={muted}
                  _hover={{ color: accent, bg: "transparent" }}
                />
              ))}
            </HStack>
          </Flex>
        </Stack>
      </ChakraContainer>
    </Box>
  );
};
