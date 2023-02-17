"use client"
import React, { useState } from 'react'
import axios from 'axios'

// +------------+-------------+------+-----+---------+-------+
// | Field      | Type        | Null | Key | Default | Extra |
// +------------+-------------+------+-----+---------+-------+
// | regNo      | varchar(20) | NO   |     | NULL    |       |
// | email      | varchar(50) | NO   | PRI | NULL    |       |
// | tutor      | varchar(50) | NO   |     | NULL    |       |
// | department | varchar(50) | NO   |     | NULL    |       |
// | year       | varchar(50) | NO   |     | NULL    |       |
// | address    | text        | NO   |     | NULL    |       |
// | phone      | varchar(50) | NO   |     | NULL    |       |
// +------------+-------------+------+-----+---------+-------+

function PostDetails() {
    const [user, setUser] = useState({
        regno: "",
        email: "",
        tutor: "",
        department: "",
        year: "",
        address: "",
        phone: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await axios.post('http://localhost:3000/api/user/details', user)
        console.log(res)
        alert('Added Successfully')
    }
    return (
        <div>
            <div className=' w-full h-screen flex justify-center items-center flex-col '>
                <h1 className=" flex justify-center text-4xl text-teal-500 font-RobotoMono">Student Details </h1>
                <form onSubmit={handleSubmit} className='SignUp w-2/5 px-10 py-6 bg-slate-100 rounded-xl'>
                    <div className="flex flex-col">
                        <label htmlFor="regno" className=' font-RobotoMono font-extralight text-lg my-1'>Registration Number</label>
                        <input type="text" name="regno" id="regno" onChange={(e) => setUser({ ...user, regno: e.target.value })} className=' p-3 m-1 rounded-lg bg-slate-300' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className=' font-RobotoMono font-extralight text-lg my-1' >Email</label>
                        <input type="email" name="email" id="email" onChange={(e) => setUser({ ...user, email: e.target.value })} className=' p-3 m-1 rounded-lg bg-slate-300' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="tutor" className=' font-RobotoMono font-extralight text-lg my-1'>Tutor</label>
                        <input type="text" name="tutor" id="tutor" onChange={(e) => setUser({ ...user, tutor: e.target.value })} className=' p-3 m-1 rounded-lg bg-slate-300' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="department" className=' font-RobotoMono font-extralight text-lg my-1'>Department</label>
                        <input type="text" name="department" id="department" onChange={(e) => setUser({ ...user, department: e.target.value })} className=' p-3 m-1 rounded-lg bg-slate-300' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="year" className=' font-RobotoMono font-extralight text-lg my-1'>Year</label>
                        <input type="text" name="year" id="year" onChange={(e) => setUser({ ...user, year: e.target.value })} className=' p-3 m-1 rounded-lg bg-slate-300' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="address" className=' font-RobotoMono font-extralight text-lg my-1'>Address</label>
                        <input type="text" name="address" id="address" onChange={(e) => setUser({ ...user, address: e.target.value })} className=' p-3 m-1 rounded-lg bg-slate-300' />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone" className=' font-RobotoMono font-extralight text-lg my-1'>Phone</label>
                        <input type="text" name="phone" id="phone" onChange={(e) => setUser({ ...user, phone: e.target.value })}
                            className=' p-3 m-1 rounded-lg bg-slate-300' />
                    </div>
                    <button type="submit" className=' w-full rounded font-RobotoMono bg-red-300 p-2'>Add Details</button>
                </form>
            </div>
        </div>

    )
}

export default PostDetails