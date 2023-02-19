"use client"
import React from 'react'
import axios from 'axios'

function GetMarks() {
    const [details, SetDetails] = React.useState([])
    React.useEffect(() => {
        axios.get('/api/user/marks')
            .then(res => {
                SetDetails(res.data)
                console.log(res.data)
            })
            .catch(err => {
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
    // else if (details.length === 1) {
    //     return (
    //         <div className=' w-full'>
    //             <h1>Student Marks</h1>
    //             {
    //                 details.map((detail) => {
    //                     return (
    //                         <div className='w-full'>
    //                             <h1>Student Name: {detail.email}</h1>
    //                             <h1>Student Graphics: {detail.graphics}</h1>
    //                             <h1>Student IOT: {detail.iot}</h1>
    //                             <h1>Student WebTech No: {detail.webtech}</h1>
    //                             <h1>Student StLab: {detail.stlab}</h1>
    //                             <h1>Student Project: {detail.project}</h1>
    //                         </div>
    //                     )
    //                 })
    //             }
    //         </div>
    //     )
    // }
    else {
        return (
            <div className='w-full h-screen flex flex-col justify-center items-center '>
                <div className="div w-full flex flex-col justify-center items-center">
                    <h1>Teacher Profile</h1>

                    <div className="heading flex py-0.5 rounded w-10/12 justify-between bg-fuchsia-800  ">
                        <p className="w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded enlarge">
                            email
                        </p>
                        <p className="w-1/6 bg-slate-50 m-0.5 p-1 font-RobotoMono text-xl font-extrabold rounded enlarge">
                            Testname
                        </p>
                        <p className="w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded enlarge">
                            Graphics
                        </p>
                        <p className="w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded enlarge">
                            IOT
                        </p>
                        <p className="w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded enlarge">
                            WebTech
                        </p>
                        <p className="w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded enlarge">
                            STLab
                        </p>
                        <p className="w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded enlarge">
                            Project
                        </p>
                        <p className="w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded enlarge">
                            Total
                        </p>
                    </div>

                    {details && details.map((detail) => {
                        return (
                            <div className="flex p-0.5 rounded w-10/12 justify-between bg-fuchsia-500 hover:transition-all hover:bg-amber-100 ">
                                <p className="w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl rounded enlarge">
                                    {detail.email}
                                </p>
                                <p className="w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl  rounded enlarge">
                                    {detail.testname}
                                </p>
                                <p className="w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl  rounded enlarge">
                                    {detail.graphics}
                                </p>
                                <p className="w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl rounded enlarge">
                                    {detail.iot}
                                </p>
                                <p className="w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl rounded enlarge">
                                    {detail.webtech}
                                </p>
                                <p className="w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl  rounded enlarge">
                                    {detail.stlab}
                                </p>
                                <p className="w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl  rounded enlarge">
                                    {detail.project}
                                </p>
                                <p className="w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl rounded enlarge">
                                    {Number(detail.graphics) + Number(detail.iot) + Number(detail.webtech) + Number(detail.stlab) + Number(detail.project)}
                                </p>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        )
    }
}

export default GetMarks