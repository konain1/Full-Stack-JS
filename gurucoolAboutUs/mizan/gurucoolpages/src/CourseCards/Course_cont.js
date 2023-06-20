import React from 'react'
import { HeadingsItems } from './Headings'
import Course_card_box from './Course_card_box'
import './Course_cont.css'
import { tests } from '../TestPage/Test_data'
import { Neet_tests } from '../NeetTest/Neetdata'




function Course_cont(props) {
  return (
    <div className='course-cont'>

    <div className='heading'>
    <h1  >{props.x}</h1>
    </div>
 
    <div className='courseBox'>
    {props.elem === tests ? <Course_card_box val={tests} /> : <Course_card_box val={Neet_tests} ></Course_card_box>}
     </div>
{console.log(props.elem)}
    </div>
  )
}

export default Course_cont
