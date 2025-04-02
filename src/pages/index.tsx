import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Container from '../components/Container';

const HomePage = () => {
  return (
    <Box>
      <Header />
      <Container>
        <Hero />
      </Container>
    </Box>
  );
};

export default HomePage;