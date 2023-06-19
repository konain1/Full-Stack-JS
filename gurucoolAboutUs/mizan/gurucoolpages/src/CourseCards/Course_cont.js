import React from 'react'
import { HeadingsItems } from './Headings'
import Course_card_box from './Course_card_box'
import './Course_cont.css'
import { tests } from './Test_data'




function Course_cont() {
  return (
    <div className='course-cont'>

    <div className='heading'>
    <h1  className={HeadingsItems[0].Cname}>{HeadingsItems[0].title}</h1>
    </div>

    <div className='courseBox'>
    <Course_card_box tests={tests}/>
     </div>

   
    

      
    </div>
  )
}

export default Course_cont
