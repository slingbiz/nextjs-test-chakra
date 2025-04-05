import React from 'react';
import { Box, Flex, Heading, Text, Button, Icon, Stack } from '@chakra-ui/react';
import { FcApproval, FcBriefcase, FcSportsMode } from '@chakra-ui/icons';

const Main = () => {
  return (
    <Box px={8} py={20}>
      <Heading as="h2" size="2xl" textAlign="center" mb={8}>
        Key Features
      </Heading>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-around"
        align="center"
        wrap="wrap"
      >
        <Box
          maxW="320px"
          w="full"
          mb={8}
          textAlign="center"
          borderWidth={1}
          borderRadius={8}
          px={6}
          py={8}
          boxShadow="lg"
        >
          <Icon as={FcApproval} boxSize={12} color="primary.500" mb={4} />
          <Heading as="h3" size="lg" mb={2}>
            Curated Selection
          </Heading>
          <Text color="gray.500" fontSize="md">
            Discover the best apps handpicked by our team of experts.
          </Text>
        </Box>
        <Box
          maxW="320px"
          w="full"
          mb={8}
          textAlign="center"
          borderWidth={1}
          borderRadius={8}
          px={6}
          py={8}
          boxShadow="lg"
        >
          <Icon as={FcBriefcase} boxSize={12} color="primary.500" mb={4} />
          <Heading as="h3" size="lg" mb={2}>
            Productivity Boost
          </Heading>
          <Text color="gray.500" fontSize="md">
            Enhance your productivity with apps designed to streamline your workflow.
          </Text>
        </Box>
        <Box
          maxW="320px"
          w="full"
          mb={8}
          textAlign="center"
          borderWidth={1}
          borderRadius={8}
          px={6}
          py={8}
          boxShadow="lg"
        >
          <Icon as={FcSportsMode} boxSize={12} color="primary.500" mb={4} />
          <Heading as="h3" size="lg" mb={2}>
            Entertainment Hub
          </Heading>
          <Text color="gray.500" fontSize="md">
            Explore a wide range of games and entertainment apps to unwind.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Main;
