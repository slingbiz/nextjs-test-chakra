import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

type ContactFormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: ContactFormState = {
  name: "",
  email: "",
  message: "",
};

export const ContactSection = () => {
  const toast = useToast();
  const [formData, setFormData] = useState<ContactFormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setFormData(initialState);

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out - we'll be in touch shortly.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  return (
    <Box
      as="section"
      width="100%"
      px={{ base: "1rem", md: "2rem" }}
      py={{ base: "3rem", md: "4rem" }}
      bg="white"
      borderTopWidth="1px"
      borderColor="gray.200"
      _dark={{
        bg: "gray.800",
        borderColor: "gray.700",
      }}
    >
      <Stack spacing={8} maxW="48rem" mx="auto">
        <Stack spacing={3} textAlign="center">
          <Heading size="lg">Contact Us</Heading>
          <Text color="gray.600" _dark={{ color: "gray.300" }}>
            Have a question or want to work with us? Send a quick message and we
            will reply soon.
          </Text>
        </Stack>

        <Box
          as="form"
          onSubmit={handleSubmit}
          bg="gray.50"
          _dark={{ bg: "gray.900" }}
          p={{ base: 6, md: 8 }}
          borderRadius="lg"
          boxShadow="md"
        >
          <Stack spacing={6}>
            <FormControl isRequired>
              <FormLabel htmlFor="name">Full name</FormLabel>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jane Doe"
                bg="white"
                _dark={{ bg: "gray.800" }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                bg="white"
                _dark={{ bg: "gray.800" }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="message">Message</FormLabel>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what's on your mind..."
                rows={5}
                bg="white"
                _dark={{ bg: "gray.800" }}
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="green"
              size="lg"
              isLoading={isSubmitting}
              loadingText="Sending"
            >
              Send message
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
