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

function PostBookReturn() {
    const [user, setUser] = useState({
        email: '',
        bookname: '',
        issueDate: '',
        returnDate: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await axios.post('/api/user/libraryreturn', user)
        console.log(res)
        console.log(user);
    }

    return (
        <div>
            <div>
                <h1 className=" flex justify-center font-poppins text-2xl text-teal-500">Student Library Book Issue</h1>
                <form onSubmit={handleSubmit} className='SignUp'>

                    <div className="flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="bookName">Book Name</label>
                        <input type="text" name="bookname" id="bookName" onChange={(e) => setUser({ ...user, bookname: e.target.value })} />
                    </div>

                    <button type="submit">Issue Book</button>
                </form>
            </div>
        </div>

    )
}

export default PostBookReturn;