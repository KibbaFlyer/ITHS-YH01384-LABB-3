import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Lyrics from '../app/lyrics/page'
 
describe('Page', () => {
  it('renders a heading', () => {
    render(<Lyrics />)
 
    const heading = screen.getByRole('form')
 
    expect(heading).toBeInTheDocument()
  })
})