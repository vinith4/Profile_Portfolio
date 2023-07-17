import React from 'react'
import developer from "../../assets/developer.png"

export default function LandingPage() {
    return (
        <div className='grid grid-cols-2 p-12'>
            <div>
                <h2>VINITHKUMAR S</h2>
            </div>
            <div className="flex">
                <div className="w-60 h-60 rounded-full bg-blue-500 animate-circle order-1"></div>
                <div className="animate-slideRight order-2">
                    <img src={developer} className="w-72 z-10" alt='Developer' />
                </div>
            </div>


        </div>
    )
}
