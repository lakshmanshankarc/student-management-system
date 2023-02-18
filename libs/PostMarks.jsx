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
        alert('Inserted Successfully')
    }
    return (
        <div className=' w-full h-screen flex items-center justify-center'>
            <div className=' w-9/12 flex flex-col items-center justify-center '>
                <h1 className=" flex justify-center text-teal-500 text-4xl font-RobotoMono font-extrabold">Student Marks</h1>
                <form onSubmit={handleSubmit} className=' w-2/5 bg-cyan-50 p-10 rounded-md'>

                    <div className="flex flex-col">
                        <label htmlFor="email" className=' font-RobotoMono text-lg '>Email</label>
                        <input type="email" name="email" id="email" onChange={(e) => setUser({ ...user, email: e.target.value })} className=' p-2 m-1 bg-slate-200 rounded-md' />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="testname" className=' font-RobotoMono text-lg '>Test Name</label>
                        <input type="text" name="testname" id="testname" onChange={(e) => setUser({ ...user, testname: e.target.value })} className=' p-2 m-1 bg-slate-200 rounded-md' />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="graphics" className=' font-RobotoMono text-lg '>Graphics</label>
                        <input type="text" name="graphics" id="graphics" onChange={(e) => setUser({ ...user, graphics: e.target.value })} className=' p-2 m-1 bg-slate-200 rounded-md' />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="iot" className=' font-RobotoMono text-lg '>IOT</label>
                        <input type="text" name="iot" id="iot" onChange={(e) => setUser({ ...user, iot: e.target.value })} className=' p-2 m-1 bg-slate-200 rounded-md' />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="webtech" className=' font-RobotoMono text-lg '>WebTech</label>
                        <input type="text" name="webtech" id="webtech" onChange={(e) => setUser({ ...user, webtech: e.target.value })} className=' p-2 m-1 bg-slate-200 rounded-md' />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="stlab" className=' font-RobotoMono text-lg '>STLAB</label>
                        <input type="text" name="stlab" id="stlab" onChange={(e) => setUser({ ...user, stlab: e.target.value })} className=' p-2 m-1 bg-slate-200 rounded-md' />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="project" className=' font-RobotoMono text-lg '>Project</label>
                        <input type="text" name="project" id="project" onChange={(e) => setUser({ ...user, project: e.target.value })} className=' p-2 m-1 bg-slate-200 rounded-md' />
                    </div>

                    <button type="submit" className=' p-3 bg-teal-300 w-full my-3 rounded-md'>Post Marks</button>
                </form>
            </div>
        </div>

    )
}

export default PostMarks