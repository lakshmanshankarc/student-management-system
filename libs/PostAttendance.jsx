"use client"
import React, { useState } from 'react'
import axios from 'axios'

// +--------+-------------+------+-----+---------+-------+
// | Field  | Type        | Null | Key | Default | Extra |
// +--------+-------------+------+-----+---------+-------+
// | email  | varchar(50) | NO   | PRI | NULL    |       |
// | absent | text        | YES  |     | NULL    |       |
// | OD     | text        | YES  |     | NULL    |       |
// | month  | varchar(20) | YES  |     | NULL    |       |
// +--------+-------------+------+-----+---------+-------+

function PostAttendance() {
    const [user, setUser] = useState({
        email: '',
        status: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await axios.post('/api/user/attendance', user)
        console.log(res)
        console.log(user);
        alert('Attendance Posted')
    }
    return (
        <div>
            <div className='w-full h-screen flex items-center justify-center flex-col'>
                <h1 className=" flex justify-center text-4xl font-RobotoMono font-extrabold text-fuchsia-500">StudentAttendace</h1>
                <form onSubmit={handleSubmit} className='SignUp flex flex-col p-10 bg-slate-200 rounded-lg'>
                    <div className="flex flex-col">
                        <label htmlFor="email" className=' font-RobotoMono p-1 text-lg'>Email</label>
                        <input type="email" name="email" id="email" onChange={(e) => setUser({ ...user, email: e.target.value })} className=' p-3 m-1 px-5 rounded font-RobotoMono' />
                    </div>

                    <select name="status" onChange={(e) => setUser({ ...user, status: e.target.value })} defaultValue="present" className=' p-3 m-1 rounded bg-slate-100'>
                        <option value="absent">Absent</option>
                        <option value="OD">OnDuty</option>
                        <option value="present">Present</option>
                    </select>
                    <button type="submit" className=' p-3 bg-green-400 rounded-md border-none'>Post Attendance</button>
                </form>
            </div>
        </div>

    )
}

export default PostAttendance