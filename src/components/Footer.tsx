import {
  Box,
  BoxProps,
  Divider,
  Flex,
  IconButton,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { AtSignIcon, EmailIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const resourcesLinks = [
  { label: "Product tour", href: "https://baloon.dev/#product" },
  { label: "Docs", href: "https://baloon.dev/docs" },
  { label: "Pricing", href: "https://baloon.dev/pricing" },
];

const supportLinks = [
  { label: "Changelog", href: "https://baloon.dev/changelog" },
  { label: "Community", href: "https://discord.gg/baloon" },
  { label: "Status", href: "https://status.baloon.dev" },
];

const policyLinks = [
  { label: "Privacy", href: "https://baloon.dev/privacy" },
  { label: "Terms", href: "https://baloon.dev/terms" },
  { label: "Security", href: "https://baloon.dev/security" },
];

export const Footer = (props: BoxProps) => {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const bgColor = useColorModeValue("white", "gray.900");
  const mutedColor = useColorModeValue("gray.600", "gray.400");
  const accentColor = useColorModeValue("green.600", "green.300");

  const renderLinkGroup = (
    title: string,
    links: { label: string; href: string }[]
  ) => (
    <Stack spacing={3}>
      <Text
        fontSize="sm"
        fontWeight="bold"
        textTransform="uppercase"
        letterSpacing="0.08em"
      >
        {title}
      </Text>
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          isExternal
          fontSize="sm"
          color={mutedColor}
          _hover={{ color: accentColor }}
        >
          {link.label}
        </Link>
      ))}
    </Stack>
  );

  return (
    <Box
      as="footer"
      width="100%"
      borderTopWidth="1px"
      borderColor={borderColor}
      bg={bgColor}
      px={{ base: 6, md: 12 }}
      py={{ base: 12, md: 16 }}
      {...props}
    >
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 8, md: 12 }}>
        <Stack spacing={4} maxW="24rem">
          <Text fontSize="lg" fontWeight="bold">
            Your code ❤️ Baloon
          </Text>
          <Text color={mutedColor}>
            Ship UI updates with preview-ready branches, inline comments, and a
            workflow purpose-built for modern product teams.
          </Text>
          <Stack direction="row" spacing={3}>
            <IconButton
              as={Link}
              href="https://baloon.dev"
              isExternal
              aria-label="Visit Baloon.dev"
              icon={<ExternalLinkIcon />}
              variant="ghost"
              colorScheme="green"
            />
            <IconButton
              as={Link}
              href="mailto:hello@baloon.dev"
              aria-label="Email Baloon"
              icon={<EmailIcon />}
              variant="ghost"
              colorScheme="green"
            />
            <IconButton
              as={Link}
              href="https://baloon.dev/blog"
              isExternal
              aria-label="Follow Baloon updates"
              icon={<AtSignIcon />}
              variant="ghost"
              colorScheme="green"
            />
          </Stack>
        </Stack>

        {renderLinkGroup("Resources", resourcesLinks)}
        {renderLinkGroup("Support", supportLinks)}
      </SimpleGrid>

      <Divider my={{ base: 8, md: 12 }} borderColor={borderColor} />

      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={4}
      >
        <Text fontSize="sm" color={mutedColor}>
          © {new Date().getFullYear()} Baloon.dev. All rights reserved.
        </Text>
        <Stack direction={{ base: "column", sm: "row" }} spacing={4} fontSize="sm">
          {policyLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              isExternal
              color={mutedColor}
              _hover={{ color: accentColor }}
            >
              {link.label}
            </Link>
          ))}
        </Stack>
      </Flex>
    </Box>
  );
};
