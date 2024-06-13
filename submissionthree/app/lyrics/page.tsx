'use client'
import React, { useState } from 'react'
import LyricsForm from '../components/lyricsForm'
import LyricsDisplay from '../components/lyricsDisplay'

function Lyrics() {
    const [lyrics, setLyrics] = useState("");

    return (
        <div className="flex flex-col justify-center text-center">
            <LyricsForm setParentLyrics={setLyrics} />
            <LyricsDisplay parentLyrics={lyrics} />
        </div>
    )
}

export default Lyrics