"use client"
import React, { useState } from 'react'
import axios from 'axios'
function Signup() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        role: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await axios.post('http://localhost:3000/api/user/signup', user)
        console.log(res)
    }
    return (
        <div>
            <div>
                <h1 className=" flex justify-center font-poppins text-2xl text-teal-500">User Sign Up Page</h1>
                <form onSubmit={handleSubmit} className='SignUp'>
                    <label htmlFor="username">Name</label>
                    <input type="text" name="username" onChange={(e) => setUser({ ...user, username: e.target.value })} />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    <label htmlFor="role">Role</label>
                    <select name="role" onChange={(e) => setUser({ ...user, role: e.target.value })} defaultValue={"student"}>
                        <option value="student">student</option>
                        <option value="teacher">teacher</option>
                    </select>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>

    )
}

export default Signup