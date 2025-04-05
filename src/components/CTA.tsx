import React from 'react';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';

const CTA = () => {
  return (
    <Box bg="primary.500" py={16} px={8}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align="center"
        wrap="wrap"
      >
        <Box mb={{ base: 8, md: 0 }}>
          <Heading as="h2" size="2xl" color="white" mb={4}>
            Ready to Get Started?
          </Heading>
          <Text color="gray.200" fontSize="lg">
            Join our community and discover the latest and greatest apps.
          </Text>
        </Box>
        <Box>
          <Button
            colorScheme="white"
            color="primary.500"
            borderRadius="8px"
            py="4"
            px="6"
            lineHeight="1"
            size="lg"
          >
            Download Now
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default CTA;
