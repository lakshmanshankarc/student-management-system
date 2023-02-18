"use client"
import React, { useState } from 'react'
import axios from 'axios'
function Signup() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        role: "student"
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await axios.post('http://localhost:3000/api/user/signup', user)
        console.log(res)
        if (res.status === 201) {
            window.location.href = "/login"
        }
    }
    return (
        <div className=' w-full h-screen scroll-smooth scroll-pl-6'>
            <div className=' w-full h-full justify-center items-center py-14'>
                <form onSubmit={handleSubmit} className='SignUp h-full py-10 flex flex-col items-center'>
                    <div className=" w-2/6 flex flex-col p-10 rounded-xl bg-slate-200 ">
                        <h1 className=" flex justify-center font-poppins text-5xl p-2 font-extrabold text-fuchsia-600 border-teal-500">Sign up</h1>

                        <label htmlFor="username" className=' p-2 font-raleway text-xl'>Name</label>
                        <input type="text" name="username" onChange={(e) => setUser({ ...user, username: e.target.value })} className=' p-2 m-1 rounded-md bg-opacity-5' />

                        <label htmlFor="email" className=' p-2 font-raleway text-xl'>Email</label>
                        <input type="email" name="email" onChange={(e) => setUser({ ...user, email: e.target.value })} className=' p-2 m-1 rounded-md bg-opacity-5' />

                        <label htmlFor="password" className=' p-2 font-raleway text-xl'>Password</label>
                        <input type="password" name="password" onChange={(e) => setUser({ ...user, password: e.target.value })} className=' p-2 m-1 rounded-md bg-opacity-5' />

                        <label htmlFor="role" className=' p-2 font-raleway text-xl'>Role</label>
                        <select name="role" onChange={(e) => setUser({ ...user, role: e.target.value })} defaultValue="student" className=' p-2 m-2 rounded-md bg-opacity-5'>
                            <option value="student">student</option>
                            <option value="teacher">teacher</option>
                        </select>

                        <button type="submit" className=' p-3 m-3 border-none rounded-md shadow-indigo-500 font-raleway bg-slate-300'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Signup