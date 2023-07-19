'use client';
import React, { useEffect, useState } from 'react'

export default function student() {
    const[student,setstudents]=useState([]);

    useEffect(()=>{
        fetch('/api/students',{})
        .then((res)=>{
           return res.json();
        })
        .then((data)=>{
            console.log(data.students)
            setstudents(data.students)
        })
        .catch((error)=>{
            console.log(error)
        });
    },[])


  return (

    <>
    <div>student</div>
    <ul>
       
        {
            student.length>0&& student.map((cv,idx,arr)=>{
                return  <li key={idx}>{cv.id} {cv.name} {cv.surname}</li>
            })
        }
    </ul>
    </>
  )
}
