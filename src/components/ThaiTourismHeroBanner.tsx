import React from 'react'; 
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react'; 
import Image from 'next/image'; 

/** 
 * BaliTourismHeroBanner component 
 * 
 * Displays a full-width hero banner with background image, title, subtitle, and CTA buttons. 
 * Used to showcase Bali tourism trends on the home page. 
 */ 
const BaliTourismHeroBanner = () => { 
  const title = 'Explore Bali Tourism Trends'; 
  const subtitle = 'Discover the latest insights and data on Bali\'s booming tourism industry. Stay ahead of the curve with our comprehensive analysis and projections.'; 
  const primaryCTA = 'Learn More'; 
  const secondaryCTA = 'View Data'; 
  const backgroundImageUrl = '/images/bali-tourism-hero.jpg'; 

  return ( 
    <Box bgImage={`url(${backgroundImageUrl})`} bgSize='cover' bgPosition='center' h='80vh'> 
      <Flex 
        maxW='1200px' 
        mx='auto' 
        h='100%' 
        direction='column' 
        justify='center' 
        align='center' 
        px={8} 
      > 
        <Heading as='h1' color='white' fontSize={{ base: '4xl', md: '6xl' }} mb={4}> 
          {title} 
        </Heading> 
        <Text color='white' fontSize={{ base: 'lg', md: 'xl' }} mb={8}> 
          {subtitle} 
        </Text> 
        <Flex> 
          <Button colorScheme='blue' mr={4} mb={4}> 
            {primaryCTA} 
          </Button> 
          <Button variant='outline' colorScheme='blue' mb={4}> 
            {secondaryCTA} 
          </Button> 
        </Flex> 
      </Flex> 
    </Box> 
  ); 
}; 

export default BaliTourismHeroBanner;