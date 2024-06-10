import React from 'react';

function LyricsDisplay({ parentLyrics } : { parentLyrics : string}) {

    return (
        <div className="m-96 text-wrap text-center">
            {parentLyrics.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
            ))}
        </div>
    );
}

export default LyricsDisplay;
