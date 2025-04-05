import React from 'react';
import { Box } from '@chakra-ui/react';
import Hero from '../components/Hero';
import Main from '../components/Main';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <Box>
      <Hero />
      <Main />
      <CTA />
      <Footer />
    </Box>
  );
};

export default Home;
