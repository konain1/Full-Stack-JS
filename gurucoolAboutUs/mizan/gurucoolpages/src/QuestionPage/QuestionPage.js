



import React, { useState } from 'react';
import './QuestionPage.css';
import QContainer from './QContainer';
import QCircles from './QCircles';
import { createContext } from 'react';
import { QuestionData } from './DataCenter/DataCeter';

export const Q = createContext();

function QuestionPage() {
  const [sub, setSub] = useState('');

  const selectHandle = (e) => {
    setSub(e);
  };

  const getData = QuestionData.filter((item, key) => {
    return item.subject === sub;
  });

  return (
    <div className='QuestionPage'>
      <div className='button-container'>
        <button onClick={(e) => selectHandle(e.target.innerText)}>physics</button>
        <button onClick={(e) => selectHandle(e.target.innerText)}>biology</button>
        <button onClick={(e) => selectHandle(e.target.innerText)}>math</button>
      </div>
      <Q.Provider value={QuestionData}>
        <QContainer data={getData} />
        <QCircles />
      </Q.Provider>
    </div>
  );
}

export default QuestionPage;
