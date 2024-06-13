import React, { FormEvent } from 'react';
import useLyricsFetcher from '../hooks/useLyricsFetcher';

function LyricsForm({ setParentLyrics }: { setParentLyrics: (lyrics: string) => void }) {
    const { fetchLyrics } = useLyricsFetcher();

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const artist = formData.get('artist')?.toString() ?? '';
        const title = formData.get('title')?.toString() ?? '';

        const lyrics = await fetchLyrics(artist, title);
        setParentLyrics(lyrics);
    }

    return (
        <form onSubmit={onSubmit} className="pt-16">
            <input type="text" name="artist" placeholder="Artist" className="text-black rounded p-2 ml-10 shadow" />
            <input type="text" name="title" placeholder="Title" className="text-black rounded p-2 ml-10 shadow" />
            <button type="submit" className="bg-orange-300 rounded p-2 ml-10 shadow">Submit</button>
        </form>
    );
}

export default LyricsForm;
