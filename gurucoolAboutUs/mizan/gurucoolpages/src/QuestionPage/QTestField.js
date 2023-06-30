import React from 'react'
import QBox from './QBox'
import { useContext } from 'react'
import {Q} from './QuestionPage'

function QTestField(props) {
const QuestionData = useContext(Q)

  return (
    <div className='subject'>
    <QBox data={props.data} />
    </div>
  )
}


export default QTestField
