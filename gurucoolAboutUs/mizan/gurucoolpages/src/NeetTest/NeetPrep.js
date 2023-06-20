import React from 'react'
import Course_card_box from '../CourseCards/Course_card_box'
import { tests } from '../TestPage/Test_data'
import Course_cont from '../CourseCards/Course_cont'
import './NeetPrep.css'
import { HeadingsItems } from '../CourseCards/Headings'

function NeetPrep() {
  return (
    <div className='neetprep'>
  <Course_cont elem={tests} x={HeadingsItems[1].title}/>

    </div>
  )
}

export default NeetPrep
