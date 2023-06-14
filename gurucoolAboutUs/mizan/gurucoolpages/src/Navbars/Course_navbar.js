import React from 'react'
import {CourseNavItems } from './Cousenavdata'
function Course_navbar() {
  return (
    <div className='course-navbar'>
    <div>
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
