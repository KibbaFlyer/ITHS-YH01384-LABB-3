import axios from 'axios';
// The other APIs I have are made in Fetch, but after trying to mock them it seems very difficult. 
// Therefore I have rewritten this in axios so that I can easier test it

const useLyricsFetcher = () => {

    async function fetchLyrics(artist: string, title: string) {
        try {
            const response = await axios.post("/api/lyrics", { artist, title }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response)
            if (response.status !== 200 || !response.data.lyrics) {
                alert('Failed to fetch lyrics - Please double check the spelling')
                throw new Error('Failed to fetch lyrics');
            }

            const data = response.data;
            const firstRow = data.lyrics.split("\n")[0];
            // The API sometimes adds a first line, at least for Ed Sheeran's lyrics
            // We're removing it here
            if (firstRow.includes("Paroles de la chanson")) {
                const cleaned = data.lyrics.replace(firstRow, "")
                return cleaned
            }
            return data.lyrics;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    return { fetchLyrics };
};

export default useLyricsFetcher;