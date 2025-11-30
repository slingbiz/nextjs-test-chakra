import {
  Box,
  BoxProps,
  Button,
  Divider,
  Flex,
  HStack,
  IconButton,
  Link,
  SimpleGrid,
  Stack,
  Text,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

type FooterLink = {
  label: string;
  href: string;
};

type FooterLinkGroup = {
  title: string;
  links: FooterLink[];
};

const linkGroups: FooterLinkGroup[] = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "https://baloon.dev" },
      { label: "Live previews", href: "https://baloon.dev#preview" },
      { label: "Pricing", href: "https://baloon.dev/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Docs", href: "https://docs.baloon.dev" },
      { label: "Templates", href: "https://baloon.dev/templates" },
      { label: "Blog", href: "https://baloon.dev/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "https://baloon.dev/about" },
      { label: "Changelog", href: "https://baloon.dev/changelog" },
      { label: "Support", href: "mailto:hello@baloon.dev" },
    ],
  },
];

const socialLinks: { label: string; href: string; icon: IconType }[] = [
  { label: "Twitter", href: "https://twitter.com/baloon_dev", icon: FaTwitter },
  { label: "GitHub", href: "https://github.com/slingbiz", icon: FaGithub },
  { label: "Discord", href: "https://discord.gg/baloon", icon: FaDiscord },
];

const legalLinks: FooterLink[] = [
  { label: "Status", href: "https://status.baloon.dev" },
  { label: "Privacy", href: "https://baloon.dev/privacy" },
  { label: "Terms", href: "https://baloon.dev/terms" },
];

export const Footer = (props: BoxProps) => {
  const bg = useColorModeValue("white", "gray.900");
  const border = useColorModeValue("gray.200", "whiteAlpha.200");
  const textMuted = useColorModeValue("gray.600", "gray.400");

  return (
    <Box as="footer" width="100%" bg={bg} borderTopWidth="1px" borderColor={border} {...props}>
      <Box maxW="6xl" mx="auto" px={{ base: 6, md: 8 }} py={{ base: 12, md: 16 }}>
        <Stack spacing={10}>
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" gap={{ base: 10, md: 16 }}>
            <Stack spacing={4} maxW="sm">
              <chakra.h2 fontSize="xl" fontWeight="bold">
                Build, preview, and share with Baloon.dev
              </chakra.h2>
              <Text color={textMuted}>
                Spin up collaborative playgrounds, review changes with real-time previews, and keep your UI work in sync
                with the rest of your team.
              </Text>
              <HStack spacing={3}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    as={Link}
                    href={social.href}
                    isExternal
                    aria-label={social.label}
                    variant="ghost"
                    borderRadius="full"
                    icon={<social.icon />}
                    colorScheme="gray"
                  />
                ))}
              </HStack>
              <Button
                as={Link}
                href="https://baloon.dev"
                isExternal
                colorScheme="green"
                alignSelf={{ base: "stretch", md: "flex-start" }}
              >
                Start building
              </Button>
            </Stack>

            <SimpleGrid columns={{ base: 2, md: 3 }} spacing={{ base: 6, md: 12 }} flex="1">
              {linkGroups.map((group) => (
                <Stack key={group.title} spacing={3}>
                  <Text fontWeight="semibold">{group.title}</Text>
                  {group.links.map((link) => (
                    <Link key={link.label} href={link.href} isExternal color={textMuted} _hover={{ color: "green.500" }}>
                      {link.label}
                    </Link>
                  ))}
                </Stack>
              ))}
            </SimpleGrid>
          </Flex>

          <Divider borderColor={border} />

          <Flex
            direction={{ base: "column", md: "row" }}
            align={{ base: "flex-start", md: "center" }}
            justify="space-between"
            gap={6}
          >
            <Text fontSize="sm" color={textMuted}>
              © {new Date().getFullYear()} Baloon.dev. All rights reserved.
            </Text>
            <HStack spacing={{ base: 4, md: 8 }} flexWrap="wrap">
              {legalLinks.map((link) => (
                <Link key={link.label} href={link.href} isExternal fontSize="sm" color={textMuted}>
                  {link.label}
                </Link>
              ))}
            </HStack>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
};
