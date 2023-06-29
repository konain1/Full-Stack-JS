import React from 'react'
import QBox from './QBox'
import {subjects} from './Subjects'
import './QContainer.css'

import { useContext } from 'react'
import {Q} from './QuestionPage'
import QCircles from './QCircles'
import QTestField from './QTestField'

function QContainer() {

  const QuestionData = useContext(Q)

  // console.log(useContext(Q))

 
  
  


  return (
   
    <div className='Qcontainer'>


      {/* {
        subjects.map((item,key)=>{
    return <h1>{item}</h1> 
  })
      } */}
     

      <QTestField data={QuestionData} />
    {/* <QBox data={QuestionData}/> */}
  


    </div>
  )
}

export default QContainer
