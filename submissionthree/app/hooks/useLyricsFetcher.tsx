const useLyricsFetcher = () => {

    async function fetchLyrics(artist: string, title: string) {
        try {
            const response = await fetch("/api/lyrics", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ artist, title }),
            });
            if (!response.ok) throw new Error('Failed to fetch lyrics');

            const data = await response.json();
            const firstRow = data.lyrics.split("\n")[0];
            return data.lyrics.replace(firstRow, "");
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    return { fetchLyrics };
};

export default useLyricsFetcher;
