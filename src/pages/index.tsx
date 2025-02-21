import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, Textarea, useToast } from '@chakra-ui/react';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { CTA } from '../components/CTA';

const Index = () => {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission
    toast({
      title: 'Message sent',
      description: 'Thank you for contacting us!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };
  
  return (
    <Container height="100vh">
      <Hero />
      <Main>
        <Stack spacing={8}>
          <Heading>Contact Us</Heading>
          <Box as="form" onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Your name" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>  
                <Input type="email" placeholder="you@example.com" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea placeholder="Your message" rows={6} />
              </FormControl>
              <Button type="submit" colorScheme="blue">Send Message</Button>
            </Stack>
          </Box>
        </Stack>
      </Main>

      <DarkModeSwitch />
      <Footer>
        <CTA />
      </Footer>
    </Container>
  );
};

export default Index;
