import React from 'react'
import { HeadingsItems } from './Headings'
import Course_card_box from './Course_card_box'




function Course_cont() {
  return (
    <div className='course-cont'>

    <h1>{HeadingsItems[0].title}</h1>
    <Course_card_box/>

      
    </div>
  )
}

export default Course_cont
