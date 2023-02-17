"use client"
import React from 'react'
import axios from 'axios'
function GetD() {
    const [details, SetDetails] = React.useState([])
    React.useEffect(() => {
        axios.get('/api/user/details')
            .then(res => {
                SetDetails(res.data)
            })
    }, [])

    if (details.length === 0) {
        return (
            <div className=' w-full h-screen flex items-center justify-center'>
                <h1>Loading...</h1>
            </div>
        )
    }

    else if (details.length === 1) {
        return (
            <div className=' w-full'>
                <h1>Student Profile</h1>
                {details && details.map((detail, index) => {
                    console.log(detail)
                    return (
                        <div key={index} className=' w-full flex flex-col justify-center items-center h-screen'>
                            <div className=' w-2 /5 flex bg-slate-500 p-1 rounded-lg m-2'>
                                <p className=' p-2 w-1/2 bg-slate-100 m-1 font-RobotoMono rounded-md'>Register No</p>
                                <span className=' p-2 w-1/2 bg-slate-300 font-RobotoMono rounded-md m-1'>{detail.regNo}</span>
                            </div>


                            <div className=' w-2/5 flex bg-slate-500 p-1 rounded-lg m-2'>
                                <p className=' p-2 w-1/2 bg-slate-100 m-1 font-RobotoMono rounded-md'>Year</p>
                                <span className=' p-2 w-1/2 bg-slate-300 font-RobotoMono rounded-md m-1'>{detail.year}</span>
                            </div>


                            <div className=' w-2/5 flex bg-slate-500 p-1 rounded-lg m-2'>
                                <p className=' p-2 w-1/2 bg-slate-100 m-1 font-RobotoMono rounded-md'>Teacher</p>
                                <span className=' p-2 w-1/2 bg-slate-300 font-RobotoMono rounded-md m-1'>{detail.tutor}</span>
                            </div>


                            <div className=' w-2/5 flex bg-slate-500 p-1 rounded-lg m-2'>
                                <p className=' p-2 w-1/2 bg-slate-100 m-1 font-RobotoMono rounded-md'>Department</p>
                                <span className=' p-2 w-1/2 bg-slate-300 font-RobotoMono rounded-md m-1'>{detail.department}</span>
                            </div>


                            <div className=' w-2/5 flex bg-slate-500 p-1 rounded-lg m-2'>
                                <p className=' p-2 w-1/2 bg-slate-100 m-1 font-RobotoMono rounded-md'>Address</p>
                                <span className=' p-2 w-1/2 bg-slate-300 font-RobotoMono rounded-md m-1'>{detail.address}</span>
                            </div>


                            <div className=' w-2/5 flex bg-slate-500 p-1 rounded-lg m-2'>
                                <p className=' p-2 w-1/2 bg-slate-100 m-1 font-RobotoMono rounded-md'>Phone Number</p>
                                <span className=' p-2 w-1/2 bg-slate-300 font-RobotoMono rounded-md m-1'>{detail.phone}</span>
                            </div>

                        </div>
                    )
                })
                }
            </div>
        )
    }
    else {
        return (
            <div className=' w-full h-screen flex flex-col justify-center items-center bg-red-400'>
                <div className="heading  flex p-2 rounded w-10/12 justify-between ">
                    <p className='w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded'>regNo</p>
                    <p className='w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded'>tutor</p>
                    <p className='w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded'>department</p>
                    <p className='w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded'>year</p>
                    <p className='w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded'>address</p>
                    <p className='w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded'>phone</p>
                </div>
                {details && details.map((detail, index) => {
                    console.log(detail)
                    return (
                        <div key={index} className='w-10/12'>
                            <SingleStudent {...detail} />
                        </div>
                    )
                })
                }
            </div>
        )
    }

}

export default GetD


function SingleStudent(student) {
    return <>
        <div className=' heading flex  p-2 w-full justify-between '>
            <p className=' w-1/6 bg-slate-50 mx-1 p-1 rounded font-RobotoMono'>{student.regNo}</p>
            <p className=' w-1/6 bg-slate-50 mx-1 p-1 rounded font-RobotoMono'>{student.tutor}</p>
            <p className=' w-1/6 bg-slate-50 mx-1 p-1 rounded font-RobotoMono'>{student.department}</p>
            <p className=' w-1/6 bg-slate-50 mx-1 p-1 rounded font-RobotoMono'>{student.year}</p>
            <p className=' w-1/6 bg-slate-50 mx-1 p-1 rounded font-RobotoMono'>{student.address}</p>
            <p className=' w-1/6 bg-slate-50 mx-1 p-1 rounded font-RobotoMono'>{student.phone}</p>
        </div>
    </>
}