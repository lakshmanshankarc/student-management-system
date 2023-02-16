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
    }
    return (
        <div>
            <div>
                <h1 className=" flex justify-center font-poppins text-2xl text-teal-500">User Sign Up Page</h1>
                <form onSubmit={handleSubmit} className='SignUp'>
                    <div className="flex flex-col">
                        <label htmlFor="regno">Registration Number</label>
                        <input type="text" name="regno" id="regno" onChange={(e) => setUser({ ...user, regno: e.target.value })} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="tutor">Tutor</label>
                        <input type="text" name="tutor" id="tutor" onChange={(e) => setUser({ ...user, tutor: e.target.value })} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="department">Department</label>
                        <input type="text" name="department" id="department" onChange={(e) => setUser({ ...user, department: e.target.value })} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="year">Year</label>
                        <input type="text" name="year" id="year" onChange={(e) => setUser({ ...user, year: e.target.value })} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" id="address" onChange={(e) => setUser({ ...user, address: e.target.value })} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" id="phone" onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>

    )
}

export default PostDetails