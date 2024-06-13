import { render, screen } from '@testing-library/react'
import LyricsDisplay from '../app/components/lyricsDisplay'
import '@testing-library/jest-dom'; 

const testString = "Testing lyrics";

describe('Lyrics display test', () => {

  it('It should display lyrics', async () => {
    render(<LyricsDisplay parentLyrics={testString} />)

    expect(screen.getByText("Testing lyrics")).toBeInTheDocument()
  })

})