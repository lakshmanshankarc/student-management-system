"use client"
import React from 'react'
import axios from 'axios'


function GetAttendance() {
    const [details, SetDetails] = React.useState([])
    React.useEffect(() => {
        axios.get('/api/user/library')
            .then(res => {
                SetDetails(res.data)
                console.log(res.data);
            }).catch(err => {
                console.log(err)
            })

    }, [])

    if (details.length === 0) {
        return (
            <div className=' w-full h-screen flex items-center justify-center'>
                <h1 className=' font-RobotoMono text-2xl text-zinc-50'>Loading...</h1>
            </div>
        )
    }

    else if (details.student) {
        return (
            <div className='w-full h-screen flex flex-col justify-center items-center '>
                <h1>Student Profile</h1>
                <div className="heading flex p-2 rounded w-10/12 justify-between bg-fuchsia-500 ">
                    <p className="w-1/4 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded enlarge">
                        email
                    </p>
                    <p className="w-1/4 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded enlarge">
                        bookName
                    </p>
                    <p className="w-1/4 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded enlarge">
                        Issued
                    </p>
                    <p className="w-1/4 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded enlarge">
                        Returned
                    </p>
                </div>
                {details.student.map((item, index) => {
                    return (
                        <div key={index} className=" heading flex p-2 rounded w-10/12 justify-between bg-purple-900 hover:transition-all hover:bg-pink-200 " >
                            <p className="w-1/4 bg-slate-50 m-1 p-1 font-RobotoMono text-lg  rounded enlarge">
                                {item.email}
                            </p>
                            <p className="w-1/4 bg-slate-50 m-1 p-1 font-RobotoMono text-lg rounded enlarge">
                                {item.bookName}
                            </p>
                            <p className="w-1/4 bg-slate-50 m-1 p-1 font-RobotoMono text-lg rounded enlarge">
                                {item.issueDate}
                            </p>
                            <p className="w-1/4 bg-slate-50 m-1 p-1 font-RobotoMono text-lg rounded enlarge">
                                {item.returnDate}
                            </p>
                        </div>
                    )
                })}
            </div>
        )
    }
    else {
        return (
            <div className='w-full h-screen flex flex-col justify-center items-center '>
                <h1>Teacher Profile</h1>
                <div className="heading flex p-2 rounded w-10/12 justify-between bg-fuchsia-500 ">
                    <p className="w-1/4 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded enlarge">
                        email
                    </p>
                    <p className="w-1/4 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded enlarge">
                        bookName
                    </p>
                    <p className="w-1/4 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded enlarge">
                        Issued
                    </p>
                    <p className="w-1/4 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded enlarge">
                        Return
                    </p>
                </div>
                {details.teacher.map((item, index) => {
                    return (
                        <div key={index} className=" heading flex p-2 rounded w-10/12 justify-between bg-purple-900 hover:transition-all hover:bg-pink-200 " >
                            <p className="w-1/4 bg-slate-50 m-1 p-1 font-RobotoMono text-lg  rounded enlarge">
                                {item.email}
                            </p>
                            <p className="w-1/4 bg-slate-50 m-1 p-1 font-RobotoMono text-lg rounded enlarge">
                                {item.bookName}
                            </p>
                            <p className="w-1/4 bg-slate-50 m-1 p-1 font-RobotoMono text-lg rounded enlarge">
                                {item.issueDate}
                            </p>
                            <p className="w-1/4 bg-slate-50 m-1 p-1 font-RobotoMono text-lg rounded enlarge">
                                {item.returnDate}
                            </p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default GetAttendance