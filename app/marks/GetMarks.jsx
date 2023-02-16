"use client"
import React from 'react'
import axios from 'axios'

function GetMarks() {
    const [details, SetDetails] = React.useState([])
    React.useEffect(() => {
        axios.get('/api/user/marks')
            .then(res => {
                SetDetails(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    console.log(details)
    if (details.length === 0) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    else if (details.length === 1) {
        return (
            <div className=' w-full'>
                <h1>Student Marks</h1>
                {
                    details.map((detail: any) => {
                        return (
                            <div className='w-full'>
                                <h1>Student Name: {detail.email}</h1>
                                <h1>Student Graphics: {detail.graphics}</h1>
                                <h1>Student IOT: {detail.iot}</h1>
                                <h1>Student WebTech No: {detail.webtech}</h1>
                                <h1>Student StLab: {detail.stlab}</h1>
                                <h1>Student Project: {detail.project}</h1>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    else {
        return (
            <div className=' w-full'>
                <h1>Teacher Profile</h1>
            </div>
        )
    }
}

export default GetMarks