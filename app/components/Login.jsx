"use client"
import React, { useState } from 'react'
import axios from 'axios'
import { useCookies } from 'react-cookie'

function Signup() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const [cookie,SetCookie]=useCookies(["token"]);
    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await axios.post('http://localhost:3000/api/user/login', user)
        setLocals(res.data.user)
        if (res.data.token) {
            SetCookie("token",res.data.token,{path:"/"});
        }
        window.location.href = "/"
    }
    return (
        <div className=' w-full py-14 flex items-center h-screen'>
            <div className=' w-full flex flex-col justify-center items-center'>
                <form onSubmit={handleSubmit} className='login flex flex-col px-10 bg-slate-200 py-10 w-4/12 rounded-lg '>
                    <h1 className=" font-extrabold flex items-center justify-center text-purple-500 text-4xl font-RobotoMono">Login Page</h1>


                    <label htmlFor="email" className=' p-1 m-2 font-raleway text-2xl text-gray-700'>Email</label>
                    <input type="email" name="email" onChange={(e) => setUser({ ...user, email: e.target.value })} className=' p-3 m-2 rounded-md bg-zinc-50' />


                    <label htmlFor="password" className=' p-1 m-2 font-raleway text-2xl text-gray-700'>Password</label>
                    <input type="password" name="password" onChange={(e) => setUser({ ...user, password: e.target.value })} className=' p-3 m-1 rounded-md bg-zinc-50' />

                    <button type="submit" className=' rounded-md m-1 p-3 font-RobotoMono border-none my-5 bg-slate-500 hover:transition-all hover:bg-slate-300'>Login</button>
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
   
}
