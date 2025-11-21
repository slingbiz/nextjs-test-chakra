import { useMemo, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Icon,
  Input,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { EmailIcon, InfoIcon, TimeIcon } from "@chakra-ui/icons";

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  company: "",
  message: "",
};

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactForm = () => {
  const toast = useToast();
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("blackAlpha.200", "whiteAlpha.200");

  const responseTime = useMemo(
    () => ({
      title: "Average response time",
      detail: "Less than 1 business day",
    }),
    []
  );

  const validateForm = (data: ContactFormData): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!data.name.trim()) {
      nextErrors.name = "Please tell us who we're chatting with.";
    }

    if (!emailPattern.test(data.email.trim())) {
      nextErrors.email = "Enter a valid email so we can reply.";
    }

    if (data.message.trim().length < 10) {
      nextErrors.message = "Share a bit more detail (min 10 characters).";
    }

    return nextErrors;
  };

  const handleChange =
    (field: keyof ContactFormData) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      setFormData((prev) => ({ ...prev, [field]: value }));
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      toast({
        title: "Missing information",
        description: "Please fill out the highlighted fields.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    setIsSubmitting(true);

    // This is where an API call would normally go. We simulate a short delay to show loading feedback.
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData(initialFormData);
      setErrors({});

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out — someone from the team will reply shortly.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }, 600);
  };

  return (
    <Box as="section" width="100%">
      <Box
        borderRadius="2xl"
        borderWidth="1px"
        borderColor={borderColor}
        boxShadow="2xl"
        bg={cardBg}
        p={{ base: 6, md: 10 }}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 12 }}>
          <Stack spacing={6}>
            <Tag
              colorScheme="purple"
              size="lg"
              width="fit-content"
              borderRadius="full"
              px={4}
              py={1}
              fontWeight="semibold"
            >
              Let's chat
            </Tag>
            <Stack spacing={3}>
              <Heading size="lg">Tell us about your next project</Heading>
              <Text color="text">
                Share what you’re building, and we’ll get the right person from Baloon to follow up with next steps.
              </Text>
            </Stack>

            <Stack spacing={4}>
              <HStack align="flex-start" spacing={4}>
                <Icon as={TimeIcon} boxSize={5} color="purple.400" mt={1} />
                <Stack spacing={0}>
                  <Text fontWeight="medium">{responseTime.title}</Text>
                  <Text color="text" opacity={0.8}>
                    {responseTime.detail}
                  </Text>
                </Stack>
              </HStack>

              <HStack align="flex-start" spacing={4}>
                <Icon as={EmailIcon} boxSize={5} color="purple.400" mt={1} />
                <Stack spacing={0}>
                  <Text fontWeight="medium">Prefer email?</Text>
                  <Text color="text" opacity={0.8}>
                    Drop us a note at contact@baloon.dev
                  </Text>
                </Stack>
              </HStack>

              <HStack align="flex-start" spacing={4}>
                <Icon as={InfoIcon} boxSize={5} color="purple.400" mt={1} />
                <Stack spacing={0}>
                  <Text fontWeight="medium">Need support?</Text>
                  <Text color="text" opacity={0.8}>
                    The team is online 9am – 6pm CET, Monday to Friday.
                  </Text>
                </Stack>
              </HStack>
            </Stack>
          </Stack>

          <Box as="form" onSubmit={handleSubmit}>
            <Stack spacing={5}>
              <FormControl isRequired isInvalid={Boolean(errors.name)}>
                <FormLabel>Full name</FormLabel>
                <Input
                  placeholder="Ada Lovelace"
                  value={formData.name}
                  onChange={handleChange("name")}
                  autoComplete="name"
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>

              <FormControl isRequired isInvalid={Boolean(errors.email)}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange("email")}
                  autoComplete="email"
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel>Company</FormLabel>
                <Input
                  placeholder="Baloon"
                  value={formData.company}
                  onChange={handleChange("company")}
                  autoComplete="organization"
                />
              </FormControl>

              <FormControl isRequired isInvalid={Boolean(errors.message)}>
                <FormLabel>How can we help?</FormLabel>
                <Textarea
                  placeholder="Share a quick summary of what you need..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange("message")}
                />
                <FormErrorMessage>{errors.message}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                colorScheme="purple"
                size="lg"
                fontWeight="semibold"
                isLoading={isSubmitting}
                loadingText="Sending..."
              >
                Send message
              </Button>
            </Stack>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};
