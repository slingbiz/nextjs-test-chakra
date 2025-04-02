import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Stack, Textarea, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import Container from '../components/Container';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const toast = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Here you can integrate with a contact management system or send the data to a designated email address
      console.log('Form data:', formData);
      toast({
        title: 'Message sent successfully',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: 'Error sending message',
        description: 'Please try again later',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container>
      <Box borderWidth={1} borderRadius={8} p={8} mb={8}>
        <Heading size="lg" mb={6}>Contact Us</Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea name="message" value={formData.message} onChange={handleChange} required />
            </FormControl>
            <Flex justify="flex-end">
              <Button type="submit" colorScheme="blue">Submit</Button>
            </Flex>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default ContactPage;