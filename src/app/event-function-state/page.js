"use client"
import React from 'react'

export default function EventFunState() {
    const btnfunction=()=>{
        alert("Hello, I am a function")
    }
  return (
    <div>
        <h1>EVENT | FUNCTION AND STATE</h1>

        {/* EVENT CALL */}
        <button className='border bg-black text-white p-2' onClick={()=>alert("Hello, I am Event")}>I am event</button>

        {/* FUNCTION */}
        <button className='border bg-black text-white p-2' onClick={btnfunction}>I am function</button>
    </div>
  )
}
