import Link from 'next/link'
import React, { useState, useEffect } from 'react'

function AccountBanner() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        setUser(user)
    }, [])

    return (
        <div>
            {user ? (
                <div className="flex items-center justify-end">
                    <div className="flex items-center justify-center">
                        <p className="text-white font-raleway mr-2 text-xl px-3">{user.username}</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <button onClick={() => {
                            localStorage.removeItem('user')
                            setUser(null)
                            document.cookie = "token=;";
                        }} className=' border-none bg-gray-100 p-3 rounded-md font-RobotoMono'> Logout </button>
                    </div>
                </div>
            ) : (
                <div className="flex items-center justify-end">
                    <div className="flex items-center justify-center">
                        <Link href="/signup"><p className="text-white p-2 bg-blend-difference bg-purple-500 rounded font-RobotoMono  mr-2">Signup</p></Link>
                        <Link href="/login"><p className="text-white  p-2 bg-blend-difference bg-purple-500 rounded font-RobotoMono">Login</p></Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AccountBanner