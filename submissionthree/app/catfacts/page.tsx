'use client'
import React, { useState, useEffect } from 'react'
import SpinnyText from '../components/spinnytext';

function CatFacts() {
    const [fact, setFact] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch("/api/catfacts");
            if (response) {
                const data = await response.json();
                setFact(data.fact);
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="p-2 text-center">
            {fact != "" &&
                <>
                    <div className="flex justify-center">
                        <p className="mb-5 text-wrap max-w-screen-lg">{fact}</p>
                    </div>
                    <button className="bg-orange-300 rounded p-2 motion-safe:animate-bounce" onClick={fetchData}>Get more facts</button>
                    <SpinnyText text={fact} />
                </>
            }
        </div>

    )
}

export default CatFacts