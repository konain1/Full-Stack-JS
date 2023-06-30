import React, { useState } from 'react'
import QBox from './QBox'
// import {subjects} from './Subjects'
import './QContainer.css'

import { useContext } from 'react'
import {Q} from './QuestionPage'
import QCircles from './QCircles'
import QTestField from './QTestField'

function QContainer() {

  const QuestionData = useContext(Q)

  // console.log(useContext(Q))

  const [sub,setSub] = useState('')
 
  
//  const subjects = ["physics","mathamatics","chemistry","biology"]
const selectHandle = (e) =>{
  setSub(e);

}


  
  const getData = QuestionData.filter((item,key)=>{
    return item.subject == sub
  })
 




  return (
   

    <div className='Qcontainer'>  

    <button onClick={(e)=>selectHandle(e.target.innerText)} > physics</button>
    <button onClick={(e)=>selectHandle(e.target.innerText)} > biology</button>
    <button onClick={(e)=>selectHandle(e.target.innerText)} > math</button>


      <QTestField data={getData} />
    {/* <QBox data={QuestionData}/> */}
  


    </div>
  )
}

export default QContainer
