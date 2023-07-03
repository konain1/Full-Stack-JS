



import React, { useContext } from 'react';
import QBox from './QBox';
import { Q } from './QuestionPage';
import './QTestField.css'

function QTestField(props) {
  const QuestionData = useContext(Q);

  return (
    <div className='subject'>
      <QBox data={props.data} />
    </div>
  );
}

export default QTestField;
