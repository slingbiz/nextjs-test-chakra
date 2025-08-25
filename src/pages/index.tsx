import { Box } from '@chakra-ui/react'
import { HeroSection } from '../components/HeroSection'
import { DarkModeSwitch } from '../components/DarkModeSwitch'

const Index = () => (
  <Box minH="100vh">
    <HeroSection />
    <DarkModeSwitch />
  </Box>
)

export default Index