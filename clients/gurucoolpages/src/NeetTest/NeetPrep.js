import React from 'react'
import Course_card_box from '../CourseCards/Course_card_box'
import { tests } from '../TestPage/Test_data'
import Course_cont from '../CourseCards/Course_cont'
import './NeetPrep.css'
import { HeadingsItems } from '../CourseCards/Headings'
import { Neet_tests } from './Neetdata'




function NeetPrep() {
  return (
    <div className='neetprep'>
  <Course_cont elem={Neet_tests} x={HeadingsItems[1].title}/>
  <h1>neet prep</h1>

    </div>
  )
}

export default NeetPrep
