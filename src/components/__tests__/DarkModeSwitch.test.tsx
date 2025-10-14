import { render, screen, fireEvent } from '@testing-library/react'
import { DarkModeSwitch } from '../DarkModeSwitch'
import { ChakraProvider } from '@chakra-ui/react'

// Wrapper component to provide Chakra context
const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <ChakraProvider>{children}</ChakraProvider>
)

describe('DarkModeSwitch Component', () => {
  it('renders the toggle button', () => {
    render(<DarkModeSwitch />, { wrapper: Wrapper })
    const button = screen.getByLabelText(/toggle theme/i)
    expect(button).toBeInTheDocument()
  })

  it('has correct aria-label', () => {
    render(<DarkModeSwitch />, { wrapper: Wrapper })
    const button = screen.getByLabelText('Toggle Theme')
    expect(button).toBeInTheDocument()
  })

  it('is clickable', () => {
    render(<DarkModeSwitch />, { wrapper: Wrapper })
    const button = screen.getByLabelText(/toggle theme/i)
    fireEvent.click(button)
    expect(button).toBeInTheDocument()
  })
})
