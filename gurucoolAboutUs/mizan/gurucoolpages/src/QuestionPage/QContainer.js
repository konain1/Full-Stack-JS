import React from 'react'
import QBox from './QBox'

import './QContainer.css'

import { useContext } from 'react'
import {Q} from './QuestionPage'


function QContainer() {

  const QuestionData = useContext(Q)

  // console.log(useContext(Q))

  return (
    <div className='Qcontainer'>


      <h1>container </h1>
    <QBox data={QuestionData }/>
  


    </div>
  )
}

export default QContainer
