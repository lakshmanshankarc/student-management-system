"use client"
import React from 'react'
import AccountBanner from './AccountBanner'

function Navbar() {

    return (
        <div className='w-full fixed flex justify-center'>
            <nav className=" w-11/12 flex items-center justify-between flex-wrap blurry px-24 p-3 fixed mx-2 rounded-lg">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className="font-semibold text-xl font-raleway">Student Management System</span>
                </div>

                <div className="bullet">
                    <AccountBanner />
                </div>
            </nav>
        </div>
    )
}

export default Navbar