"use client"
import React from 'react'
import axios from 'axios'
import { removeDuplicates, stringToList } from "../.././utils/main"

function GetAttendance() {
    const [details, SetDetails] = React.useState([])
    React.useEffect(() => {
        axios.get('/api/user/attendance')
            .then(res => {
                SetDetails(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])

    console.log(details)
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
    //             <h1>Student Profile</h1>
    //             {details.map((detail) => {
    //                 return <>Hello</>
    //             })
    //             }
    //         </div>
    //     )
    // }
    else {
        return (
            <div className=' w-full flex flex-col h-screen items-center justify-center'>
                <h1 className=' text-4xl font-RobotoMono text-pink-400'>Student Attendance</h1>
                <div className="w-4/6 px-2 rounded flex justify-between bg-violet-200">
                    <div className=" w-1/3 m-1 p-3 bg-violet-500 rounded-md text-white font-RobotoMono email">Email</div>
                    <div className=" w-1/3 m-1 p-3 bg-violet-500 rounded-md text-white font-RobotoMono absent">Absent</div>
                    <div className=" w-1/3 m-1 p-3 bg-violet-500 rounded-md text-white font-RobotoMono OnDuty">OnDuty</div>
                </div>
                {details.data.map((detail) => {
                    console.log(detail)
                    return (
                        <div className='w-4/6 px-2 flex m-1 justify-between rounded-md bg-purple-500 hover:transition-all hover:bg-fuchsia-500' key={detail.email}>
                            <div className=" w-1/3 p-2 m-1 bg-zinc-300 hover:bg-purple-200 rounded-md email">{detail.email}</div>
                            <div className=" w-1/3 p-2 m-1 bg-zinc-300 hover:bg-purple-200 rounded-md absent">{removeDuplicates(stringToList(detail.absent))}</div>
                            <div className=" w-1/3 p-2 m-1 bg-zinc-300 hover:bg-purple-200 rounded-md OnDuty">{detail.OD}</div>
                        </div>)
                })
                }
            </div>
        )
    }

}

export default GetAttendance
