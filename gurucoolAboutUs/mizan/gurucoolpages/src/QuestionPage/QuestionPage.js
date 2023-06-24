import React from 'react'
import './QuestionPage.css'
import QContainer from './QContainer';
import QCircles from './QCircles';
import { createContext } from 'react';
import {QuestionData} from './DataCenter/DataCeter'


export const Q = createContext();
console.log(QuestionData);

function QuestionPage() {

  return (
    <div className='QuestionPage'>

    <Q.Provider value={QuestionData}>

      <QContainer/>
      <QCircles/>


      </Q.Provider>
    </div>
  )
}

export default QuestionPage
