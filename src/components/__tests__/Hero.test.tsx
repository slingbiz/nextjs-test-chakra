import { render, screen } from '@testing-library/react'
import { Hero } from '../Hero'

describe('Hero Component', () => {
  it('renders with default title', () => {
    render(<Hero title="Playground on Baloon.dev" />)
    const heading = screen.getByRole('heading', { name: /playground on baloon.dev/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders with custom title', () => {
    const customTitle = 'Test Case'
    render(<Hero title={customTitle} />)
    const heading = screen.getByRole('heading', { name: /test case/i })
    expect(heading).toBeInTheDocument()
  })

  it('displays the correct title text', () => {
    const title = 'baloon.dev test'
    render(<Hero title={title} />)
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
