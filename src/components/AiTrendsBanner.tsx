import React from 'react';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';

/**
 * AiTrendsBanner component
 *
 * Displays a hero banner showcasing the latest AI trends.
 * The banner includes a heading, description, and a CTA button.
 */
const AiTrendsBanner: React.FC = () => {
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
            Explore the Latest AI Trends
          </Heading>
          <Text color='gray.300' fontSize={{ base: 'md', md: 'lg' }} mb={8}>
            Stay ahead of the curve with our cutting-edge AI solutions. Discover the latest trends and innovations that are shaping the future of technology.
          </Text>
          <Button colorScheme='blue' size='lg'>Learn More</Button>
        </Box>
        <Box
          w={{ base: '100%', lg: '50%' }}
          h={{ base: '300px', lg: '400px' }}
          bg='gray.700'
          borderRadius='lg'
          overflow='hidden'
        >
          {/* Replace with your AI image or illustration */}
          <Box h='100%' bg='blue.500'></Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default AiTrendsBanner;
