'use client'
import React, { useState, useEffect } from 'react'

function CatFacts() {
    const [fact, setFact] = useState();

    useEffect(() => {
        fetchData();

    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch("/api/catfacts");
            if (response) {
                const data = await response.json();
                console.log(data)
                setFact(data.fact);
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <pre>{fact}</pre>
            <button onClick={fetchData}>Get more facts</button>
        </>

    )
}

export default CatFacts