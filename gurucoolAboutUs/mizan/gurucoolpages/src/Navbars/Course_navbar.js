import React from 'react'
import {CourseNavItems } from './Cousenavdata'
import './Course_navbar.css'


function Course_navbar() {
  return (
    <div className='course-navbar'>
    <div className='course-navbar-innerdiv'>
        <ul>
            {CourseNavItems.map((items,index)=>{
                return <li>{items.title}</li>
            })}
        </ul>
    </div>
    
      
    </div>
  )
}

export default Course_navbar
