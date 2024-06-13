import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LyricsForm from '../app/components/lyricsForm'

function setLyrics(lyrics: string) {
    return lyrics;
}

describe('Lyrics form test', () => {

    it('It should handle text input events', async () => {
        render(<LyricsForm setParentLyrics={setLyrics} />)

        const artistInput = screen.getByPlaceholderText('Artist')
        await userEvent.type(artistInput, 'Ed Sheeran')
        expect(artistInput).toHaveProperty('value', 'Ed Sheeran');

        const songInput = screen.getByPlaceholderText('Title')
        await userEvent.type(songInput, 'Perfect')
        expect(songInput).toHaveProperty('value', 'Perfect');

    })

})