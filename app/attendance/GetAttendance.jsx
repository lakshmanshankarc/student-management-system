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

                {details.data.map((detail) => {
                    return (
                        <div className='flex flex-col items-center justify-center' key={detail.email}>
                            <span>Absent{removeDuplicates(stringToList(detail.absent))}</span>
                            <span> Email {detail.email}</span>
                            <span> OnDuty {detail.OD}</span>
                        </div>)
                })
                }
            </div>
        )
    }

}

export default GetAttendance
