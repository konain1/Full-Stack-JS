import React from 'react'

import './QCirlce.css'
import OMR from './OMR'
import { useContext } from 'react'
import { Q } from './QuestionPage'




function QCircles(props) {

  const QuestionData = useContext(Q)
  // console.log(QuestionData)

  return (
    <div className='QCircles'>
      <h1>QCircles</h1>

      <h1>{QuestionData.question}</h1>
      <OMR data={QuestionData}/>


      <div className='result'>
        <div className='correct'> <p>correct</p> 22</div>
        <div className='wrong'><p>wrong</p> 7</div>
        <div className='unAttempted'><p>UnAttempted</p> 11 </div>
     </div>
    </div>
  )
}

export default QCircles
