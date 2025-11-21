import {
  Box,
  BoxProps,
  Button,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

const CONTACT_CHANNELS = [
  {
    label: "Dubai Tourism Concierge",
    detail: "+971 4 123 4567",
  },
  {
    label: "Winter Events Desk",
    detail: "events@visitdubai.ae",
  },
  {
    label: "24/7 WhatsApp",
    detail: "+971 55 000 0000",
  },
];

export const ContactSection = (props: BoxProps) => (
  <Box
    as="section"
    bg="white"
    _dark={{ bg: "gray.800" }}
    px={{ base: 6, md: 12 }}
    py={{ base: 16, md: 24 }}
    {...props}
  >
    <Stack spacing={{ base: 10, md: 12 }} maxW="6xl" mx="auto">
      <Stack spacing={3} textAlign={{ base: "left", md: "center" }}>
        <Text
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="0.3em"
          color="pink.500"
        >
          Plan with experts
        </Text>
        <Text fontSize={{ base: "3xl", md: "4xl" }} fontWeight="bold">
          Contact our Dubai winter specialists
        </Text>
        <Text fontSize="lg" color="gray.600" _dark={{ color: "gray.300" }}>
          Share your plans and we’ll curate bespoke desert escapes, waterfront
          brunches, and cultural nights tailored to your stay.
        </Text>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={6}>
          <FormControl>
            <FormLabel color="gray.700" _dark={{ color: "gray.200" }}>
              Full name
            </FormLabel>
            <Input placeholder="Aisha Al Falasi" size="lg" />
          </FormControl>
          <FormControl>
            <FormLabel color="gray.700" _dark={{ color: "gray.200" }}>
              Email address
            </FormLabel>
            <Input type="email" placeholder="you@email.com" size="lg" />
          </FormControl>
          <FormControl>
            <FormLabel color="gray.700" _dark={{ color: "gray.200" }}>
              Desired travel dates
            </FormLabel>
            <Input placeholder="15 Dec - 05 Jan" size="lg" />
          </FormControl>
          <FormControl>
            <FormLabel color="gray.700" _dark={{ color: "gray.200" }}>
              Message
            </FormLabel>
            <Textarea placeholder="Tell us about your perfect winter escape." />
          </FormControl>
          <Button colorScheme="pink" size="lg" alignSelf="flex-start">
            Send request
          </Button>
        </Stack>

        <Stack
          spacing={6}
          p={{ base: 6, md: 8 }}
          borderRadius="2xl"
          bg="gray.50"
          border="1px solid"
          borderColor="gray.100"
          _dark={{
            bg: "gray.900",
            borderColor: "gray.700",
          }}
        >
          {CONTACT_CHANNELS.map((channel) => (
            <Box
              key={channel.label}
              borderBottom="1px solid"
              borderColor="gray.200"
              pb={4}
              _last={{
                borderBottom: "none",
                pb: 0,
              }}
              _dark={{
                borderColor: "gray.700",
              }}
            >
              <Text fontSize="sm" color="gray.500" _dark={{ color: "gray.400" }}>
                {channel.label}
              </Text>
              <Text fontSize="2xl" fontWeight="bold">
                {channel.detail}
              </Text>
            </Box>
          ))}

          <Box
            p={6}
            borderRadius="xl"
            bg="black"
            color="white"
            textAlign="center"
          >
            <Text fontWeight="semibold" fontSize="lg">
              Need something bespoke?
            </Text>
            <Text color="whiteAlpha.800" mt={2}>
              Our concierge replies within 2 hours for winter itineraries.
            </Text>
          </Box>
        </Stack>
      </SimpleGrid>
    </Stack>
  </Box>
);
