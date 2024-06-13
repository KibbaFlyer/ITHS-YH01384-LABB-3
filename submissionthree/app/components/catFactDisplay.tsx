import React from 'react'

function CatFactDisplay({ parentFact } : { parentFact : string}) {
    return (
        <div className="flex justify-center">
            <p data-testid="fact-display" className="mb-5 text-wrap max-w-screen-lg">{parentFact}</p>
        </div>
    )
}

export default CatFactDisplay