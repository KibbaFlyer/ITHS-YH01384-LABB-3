import React from 'react';

function LyricsDisplay({ parentLyrics } : { parentLyrics : string}) {

    return (
        <div className="p-10 w-fill" >
            {parentLyrics.split("\n").map((line, index) => (
                <p data-testid="lyrics-display" key={index}>{line}</p>
            ))}
        </div>
    );
}

export default LyricsDisplay;
