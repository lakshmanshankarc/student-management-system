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
            <div>
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
                        <div key={index} className=' w-full'>
                            <SingleStudent {...detail} />
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
                {details && details.map((detail, index) => {
                    console.log(detail)
                    return (
                        <div key={index} className=' w-full'>
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
        <div className=' container w-full h-5/6 bg-white'>
            <span>
                <h1>{student.email}</h1>
                <p>{student.email}</p>
            </span>
            <p>{student.regNo}</p>
            <p>{student.tutor}</p>
            <p>{student.department}</p>
            <p>{student.year}</p>
            <p>{student.address}</p>
            <p>{student.phone}</p>
        </div>
    </>
}