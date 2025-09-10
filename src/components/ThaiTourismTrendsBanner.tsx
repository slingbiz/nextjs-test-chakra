import React from 'react';
import { Box, Flex, Heading, Text, Button, Link } from '@chakra-ui/react';

/**
 * BaliTourismTrendsBanner component
 *
 * Displays a hero banner showcasing information about Bali tourism trends.
 * The banner includes a heading, description, CTA button, and a link to a GitHub repository.
 */
const BaliTourismTrendsBanner: React.FC = () => {
  return (
    <Box bg='gray.800' py={20}>
      <Flex
        maxW='1200px'
        mx='auto'
        direction={{ base: 'column', lg: 'row' }}
        align='center'
        justify='space-between'
      >
        <Box mr={{ base: 0, lg: 10 }} mb={{ base: 8, lg: 0 }}>
          <Heading as='h1' color='white' fontSize={{ base: '3xl', md: '4xl' }} mb={4}>
            Explore Bali Tourism Trends
          </Heading>
          <Text color='gray.300' fontSize={{ base: 'md', md: 'lg' }} mb={8}>
            Discover the latest insights and data on Bali's booming tourism industry. Stay ahead of the curve with our comprehensive analysis and projections.
          </Text>
          <Button colorScheme='blue' size='lg' mr={4}>Learn More</Button>
          <Link href='https://github.com/bali-tourism-trends' isExternal color='blue.300'>
            <Button variant='outline' colorScheme='blue' size='lg'>View on GitHub</Button>
          </Link>
        </Box>
        <Box
          w={{ base: '100%', lg: '50%' }}
          h={{ base: '300px', lg: '400px' }}
          bg='gray.700'
          borderRadius='lg'
          overflow='hidden'
        >
          {/* Replace with your Bali tourism image or illustration */}
          <Box h='100%' bg='blue.500'></Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default BaliTourismTrendsBanner;
