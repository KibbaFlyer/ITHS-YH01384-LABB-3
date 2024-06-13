import React, { useState, useEffect } from 'react'

function CatFactButton({ setParentFact }: { setParentFact: (fact: string) => void }) {
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch("/api/catfacts");
            if (response) {
                const data = await response.json();
                setParentFact(data.fact);
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <button
            data-testid="fact-button"
            className="bg-orange-300 rounded p-2 motion-safe:animate-bounce"
            onClick={fetchData}
        >Get more facts
        </button>
    )
}

export default CatFactButton