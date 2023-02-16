"use client"
import React, { useState } from 'react'
import axios from 'axios'

// +----------+-------------+------+-----+---------+-------+
// | Field    | Type        | Null | Key | Default | Extra |
// +----------+-------------+------+-----+---------+-------+
// | email    | varchar(50) | NO   | PRI | NULL    |       |
// | testname | varchar(20) | YES  |     | NULL    |       |
// | graphics | varchar(5)  | YES  |     | NULL    |       |
// | iot      | varchar(5)  | YES  |     | NULL    |       |
// | webtech  | varchar(5)  | YES  |     | NULL    |       |
// | stlab    | varchar(5)  | YES  |     | NULL    |       |
// | project  | varchar(5)  | YES  |     | NULL    |       |
// +----------+-------------+------+-----+---------+-------+

function PostMarks() {
    const [user, setUser] = useState({
        email: '',
        testname: '',
        graphics: '',
        iot: '',
        webtech: '',
        stlab: '',
        project: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await axios.post('/api/user/marks', user)
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

                    <div className="flex flex-col">
                        <label htmlFor="testname">Test Name</label>
                        <input type="text" name="testname" id="testname" onChange={(e) => setUser({ ...user, testname: e.target.value })} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="graphics">Graphics</label>
                        <input type="text" name="graphics" id="graphics" onChange={(e) => setUser({ ...user, graphics: e.target.value })} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="iot">IOT</label>
                        <input type="text" name="iot" id="iot" onChange={(e) => setUser({ ...user, iot: e.target.value })} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="webtech">WebTech</label>
                        <input type="text" name="webtech" id="webtech" onChange={(e) => setUser({ ...user, webtech: e.target.value })} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="stlab">STLAB</label>
                        <input type="text" name="stlab" id="stlab" onChange={(e) => setUser({ ...user, stlab: e.target.value })} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="project">Project</label>
                        <input type="text" name="project" id="project" onChange={(e) => setUser({ ...user, project: e.target.value })} />
                    </div>

                    <button type="submit">Post Marks</button>
                </form>
            </div>
        </div>

    )
}

export default PostMarks