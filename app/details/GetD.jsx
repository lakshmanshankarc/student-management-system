"use client";
import React from "react";
import axios from "axios";
function GetD() {
  const [details, SetDetails] = React.useState([]);
  React.useEffect(() => {
    axios.get("/api/user/details")
      .then((res) => {
        SetDetails(res.data);
      });
  }, []);

  if (details.length === 0) {
    return (
      <div className=' w-full h-screen flex items-center justify-center'>
        <h1 className=' font-RobotoMono text-2xl text-zinc-50'>Loading...</h1>
      </div>
    )
  } else if (details.length === 1) {
    return (
      <div className=" w-full">

        {details && details.map((detail, index) => {
          console.log(detail);
          return (
            <div
              key={index}
              className=" w-full flex flex-col justify-center items-center h-screen"
            >
              <h1 className=" text-4xl font-RobotoMono text-violet-500">Student Profile</h1>
              <div className=" w-2/5 flex p-1 rounded-lg m-2 bg-purple-700">
                <p className=" p-2 w-1/2 bg-slate-100 m-1 font-RobotoMono rounded-md enlarge">
                  Register No
                </p>
                <span className=" p-2 w-1/2 bg-slate-300 font-RobotoMono rounded-md m-1 enlarge">
                  {detail.regNo}
                </span>
              </div>

              <div className=" w-2/5 flex bg-purple-700 p-1 rounded-lg m-2">
                <p className=" p-2 w-1/2 bg-slate-100 m-1 font-RobotoMono rounded-md enlarge">
                  Year
                </p>
                <span className=" p-2 w-1/2 bg-slate-300 font-RobotoMono rounded-md m-1 enlarge">
                  {detail.year}
                </span>
              </div>

              <div className=" w-2/5 flex bg-purple-700 p-1 rounded-lg m-2">
                <p className=" p-2 w-1/2 bg-slate-100 m-1 font-RobotoMono rounded-md enlarge">
                  Teacher
                </p>
                <span className=" p-2 w-1/2 bg-slate-300 font-RobotoMono rounded-md m-1 enlarge">
                  {detail.tutor}
                </span>
              </div>

              <div className=" w-2/5 flex bg-purple-500 p-1 rounded-lg m-2">
                <p className=" p-2 w-1/2 bg-slate-100 m-1 font-RobotoMono rounded-md enlarge">
                  Department
                </p>
                <span className=" p-2 w-1/2 bg-slate-300 font-RobotoMono rounded-md m-1 enlarge">
                  {detail.department}
                </span>
              </div>

              <div className=" w-2/5 flex bg-purple-500 p-1 rounded-lg m-2">
                <p className=" p-2 w-1/2 bg-slate-100 m-1 font-RobotoMono rounded-md enlarge">
                  Address
                </p>
                <span className=" p-2 w-1/2 bg-slate-300 font-RobotoMono rounded-md m-1 enlarge">
                  {detail.address}
                </span>
              </div>

              <div className=" w-2/5 flex bg-purple-500 p-1 rounded-lg m-2">
                <p className=" p-2 w-1/2 bg-slate-100 m-1 font-RobotoMono rounded-md enlarge">
                  Phone Number
                </p>
                <span className=" p-2 w-1/2 bg-slate-300 font-RobotoMono rounded-md m-1 enlarge">
                  {detail.phone}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className=" w-full h-screen flex flex-col justify-center items-center">
        <div className="heading  flex p-2 rounded w-10/12 justify-between bg-purple-900 ">
          <p className="w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded enlarge">
            regNo
          </p>
          <p className="w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded enlarge">
            tutor
          </p>
          <p className="w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded enlarge">
            department
          </p>
          <p className="w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded enlarge">
            year
          </p>
          <p className="w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded enlarge">
            address
          </p>
          <p className="w-1/6 bg-slate-50 m-1 p-1 font-RobotoMono text-xl font-extrabold rounded enlarge">
            phone
          </p>
        </div>
        {details && details.map((detail, index) => {
          console.log(detail);
          return (
            <div key={index} className="w-10/12 bg-purple-700 rounded-md hover:transition-colors hover:bg-pink-400">
              <SingleStudent {...detail} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default GetD;

function SingleStudent(student) {
  return (
    <>
      <div className=" heading flex p-2 w-full justify-between  ">
        <p className=" w-1/6 bg-slate-50 mx-1 p-1 rounded font-RobotoMono enlarge">
          {student.regNo}
        </p>
        <p className=" w-1/6 bg-slate-50 mx-1 p-1 rounded font-RobotoMono enlarge">
          {student.tutor}
        </p>
        <p className=" w-1/6 bg-slate-50 mx-1 p-1 rounded font-RobotoMono enlarge">
          {student.department}
        </p>
        <p className=" w-1/6 bg-slate-50 mx-1 p-1 rounded font-RobotoMono enlarge">
          {student.year}
        </p>
        <p className=" w-1/6 bg-slate-50 mx-1 p-1 rounded font-RobotoMono enlarge">
          {student.address}
        </p>
        <p className=" w-1/6 bg-slate-50 mx-1 p-1 rounded font-RobotoMono enlarge">
          {student.phone}
        </p>
      </div>
    </>
  );
}

