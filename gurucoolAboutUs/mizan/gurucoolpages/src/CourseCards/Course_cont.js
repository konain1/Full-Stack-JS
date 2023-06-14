import React from 'react'
import { HeadingsItems } from './Headings'
import Course_card_box from './Course_card_box'
import './Course_cont.css'




function Course_cont() {
  return (
    <div className='course-cont'>

    <div className='heading'>
    <h1>{HeadingsItems[0].title}</h1>
    </div>

    <div className='courseBox'>
    <Course_card_box/>
     </div>

   
    

      
    </div>
  )
}

export default Course_cont
