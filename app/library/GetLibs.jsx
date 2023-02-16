"use client"
import React from 'react'
import axios from 'axios'


function GetAttendance() {
    const [details, SetDetails] = React.useState([])
    React.useEffect(() => {
        axios.get('/api/user/library')
            .then(res => {
                SetDetails(res.data)
            }).catch(err => {
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
                <h1>Student Profile</h1>
                {details.map((detail) => {
                    return <>Hello</>
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

export default GetAttendance