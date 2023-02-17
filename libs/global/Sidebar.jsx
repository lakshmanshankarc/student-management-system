"use client";
import React from 'react'
import Link from 'next/link'


function Sidebar() {

    const toggleSide = () => {
        const toggleSide = document.getElementById('toggleSide')
        toggleSide.classList.toggle('sideshow')
    }
    return (
        <div>
            <div className=" w-1/12 will-change-auto flex flex-col top-1/2 fixed h-5/6">

                <div className=" sideshow transitioning absolute -top-48 px-5 py-10" id='toggleSide'>
                    <ul>
                        <li className="p-3 m-1 font-RobotoMono animateit"><Link href="/">Home</Link></li>
                        <li className="p-3 m-1 font-RobotoMono animateit"><Link href="/attendance">Attendance</Link></li>
                        <li className="p-3 m-1 font-RobotoMono animateit"><Link href="/marks">Marks</Link></li>
                        <li className="p-3 m-1 font-RobotoMono animateit"><Link href="/library">Library</Link></li>
                    </ul>
                </div>
                <button onClick={() => { toggleSide() }} className=' bg-red-400 font-RobotoMono absolute top-16'>
                    toggle
                </button>
            </div>
        </div>
    )
}

export default Sidebar