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

function PostBooks() {
    const [user, setUser] = useState({
        email: '',
        bookname: '',
        issueDate: '',
        returnDate: '',
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await axios.post('/api/user/library', user)
        alert("Book Borrowed Successfully")
    }

    return (
        <div className=' w-full h-screen flex justify-center items-center'>
            <div className=' w-9/12 flex flex-col justify-center items-center'>
                <h1 className=" flex justify-center text-4xl text-pink-500 font-RobotoMono font-extrabold">Borrow Book</h1>
                <form onSubmit={handleSubmit} className=' w-2/5 bg-gray-100 p-10 rounded-xl '>
                    <div className="flex flex-col">
                        <label htmlFor="email" className=' text-xl font-RobotoMono '>Email</label>
                        <input type="email" name="email" id="email" onChange={(e) => setUser({ ...user, email: e.target.value })} className=' p-2 m-1 bg-slate-200 rounded-md' />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="bookName" className=' text-xl font-RobotoMono '>Book Name</label>
                        <input type="text" name="bookname" id="bookName" onChange={(e) => setUser({ ...user, bookname: e.target.value })} className=' p-2 m-1 bg-slate-200 rounded-md' />
                    </div>

                    <button type="submit" className=' p-2 rounded font-RobotoMono bg-fuchsia-400 w-full'>Post </button>
                </form>
            </div>
        </div>

    )
}

export default PostBooks;