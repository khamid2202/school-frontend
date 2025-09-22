import React from 'react'
import { useState, useEffect } from "react";


useEffect(() => {
  fetch("/Teachers.json")
    .then(res => res.json())
    .then(data => setTeachers(data));
}, []);

export default function UserPage() 
{
  return (
    <div>
      {teachers.map((teacher) => (
        <div key={teacher.id}>
          <h2>{teacher.name}</h2>
          <p>{teacher.subject}</p>
          <p>{teacher.email}</p>
        </div>
      ))}
    </div>
  )
}
