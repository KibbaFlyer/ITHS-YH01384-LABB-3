'use client'
import React, { useState } from 'react'
import SpinnyText from '../components/spinnytext';
import CatFactDisplay from '../components/catFactDisplay';
import CatFactButton from '../components/catFactButton';

function CatFacts() {
    const [fact, setFact] = useState("");

    return (
        <div data-testid="fact-container" className="p-2 text-center">
            <>
                <CatFactDisplay parentFact={fact} />
                <CatFactButton setParentFact={setFact} />
                <SpinnyText text={fact} />
            </>
        </div>

    )
}

export default CatFacts