import React from 'react'
import developer from "../../assets/png/developer.png"



export default function LandingPage() {

    return (
        <div className="grid grid-cols-2">
        <div className="grid">
          <h1 className="">VINITHKUMAR S</h1>
        </div>
        <div className="">
          <img src={developer} className="w-6 h-6" alt="React logo" />
        </div>
      </div>
      
    )
}
