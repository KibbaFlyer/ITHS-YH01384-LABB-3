'use client'
import React, { useState, useEffect } from 'react'

export interface boredObj {
    activity: string;
    type: string;
    participants: number;
    price: string;
    link: string;
}

function Bored() {
    const [content, setContent] = useState<boredObj>();

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch("/api/bored");
            if (response) {
                const data = await response.json();
                console.log(data)
                setContent(data);
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="p-2 text-center">
            <h1>You have come to the right place!</h1>
            <h2 className="mb-5">Here are some ideas for what to do</h2>
            {content &&
                <div>
                    <p>Activity: {content.activity}</p>
                    <p>Type: {content.type}</p>
                    <p>Participants: {content.participants}</p>
                    <p>Price: {content.price}</p>
                    <a className="text-orange-300" href={content.link}>Link</a>
                    <br/>
                    <button 
                    onClick={fetchData}
                    className="bg-orange-300 rounded p-2 mt-5 motion-safe:animate-bounce"
                    >
                        Re-roll
                    </button>
                </div>
            }
            {!content && `No data was found`}
        </div>

    )
}

export default Bored