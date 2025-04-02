import React, { useState } from 'react';
import { Box, Flex, Heading, Input, Button } from '@chakra-ui/react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add authentication logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box bg="gray.200" p={6} rounded="md" w={64}>
        <Heading mb={6}>Login</Heading>
        <form onSubmit={handleSubmit}>
          <Input
            mb={3}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            mb={6}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button colorScheme="blue" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </Flex>
  );
};

export default LoginPage;