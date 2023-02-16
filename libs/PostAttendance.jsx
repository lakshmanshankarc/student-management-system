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
    }
    return (
        <div>
            <div>
                <h1 className=" flex justify-center font-poppins text-2xl text-teal-500">User Sign Up Page</h1>
                <form onSubmit={handleSubmit} className='SignUp'>

                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </div>

                    <select name="status" onChange={(e) => setUser({ ...user, status: e.target.value })} defaultValue={"present"}>
                        <option value="absent">Absent</option>
                        <option value="OD">OnDuty</option>
                        <option value="present">Present</option>
                    </select>
                    <button type="submit">Post Attendance</button>
                </form>
            </div>
        </div>

    )
}

export default PostAttendance