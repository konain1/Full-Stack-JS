import React from 'react'
import Course_cont from '../CourseCards/Course_cont'
import Course_card_box from '../CourseCards/Course_card_box'
import { Neet_tests } from '../NeetTest/Neetdata'
import { HeadingsItems } from '../CourseCards/Headings'
import { tests } from './Test_data'

import './TestPage.css'

function Testpage() {
  return (
    <div >
      <Course_cont elem={tests} x={HeadingsItems[0].title}/>
      {/* <Course_card_box/>     */}
      <h1>Testpage</h1>
      
    </div>
  )
}

export default Testpage
