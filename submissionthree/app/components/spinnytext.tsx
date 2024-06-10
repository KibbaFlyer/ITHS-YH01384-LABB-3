import React from 'react'
import '../styling/animations.css'

function SpinnyText({ text }: { text: string }) {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="mt-96 pt-10 w-3/6 spin">
                {text}
            </div>
        </div>
    )
}

export default SpinnyText