'use client'
import React, { useState, FormEvent } from 'react'
import LyricsForm from '../components/lyricsForm'
import LyricsDisplay from '../components/lyricsDisplay'

function Lyrics() {
    const [lyrics, setLyrics] = useState("");

    return (
        <div className="container">
            <LyricsForm setParentLyrics={setLyrics} />
            <LyricsDisplay parentLyrics={lyrics} />
        </div>
    )
}

export default Lyrics