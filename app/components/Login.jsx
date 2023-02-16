"use client"
import React, { useState } from 'react'
import axios from 'axios'
function Signup() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await axios.post('http://localhost:3000/api/user/login', user)
        setLocals(res.data.user, res.data.token)
        window.location.href = "/"
        console.log('All Set');
    }
    return (
        <div>
            <div>
                <h1 className=" flex justify-center font-poppins text-2xl text-teal-500">User Login Page</h1>
                <form onSubmit={handleSubmit} className='SignUp'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>

    )
}

export default Signup


async function setLocals(user, token) {
    if (user) {
        localStorage.setItem('user', JSON.stringify(user))
    }
    if (token) {
        document.cookie = `token=${token}`
    }
}