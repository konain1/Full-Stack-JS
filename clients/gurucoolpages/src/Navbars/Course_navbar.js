import React from 'react'
import {CourseNavItems } from './Cousenavdata'
import './Course_navbar.css'
import { Link,Routes,Route } from 'react-router-dom'
import Testpage from '../TestPage/Testpage'

function Course_navbar() {
  return (
    <div className='course-navbar'>
    <div className='course-navbar-innerdiv'>
        <ul>
            {CourseNavItems.map((items,index)=>{

                return <>
                         

                 <li key={index}><Link to={items.imageUrl}>{items.title}</Link></li>
                 </>
            })}
        </ul>
        
    </div>
    
      
    </div>
  )
}

export default Course_navbar
