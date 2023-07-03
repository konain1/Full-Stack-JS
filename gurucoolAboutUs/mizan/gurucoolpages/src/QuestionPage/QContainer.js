

import React, { useContext } from 'react';
import QBox from './QBox';
// import {subjects} from './Subjects'
import './QContainer.css';
import { Q } from './QuestionPage';
import QCircles from './QCircles';
import QTestField from './QTestField';

function QContainer(props) {
  const QuestionData = useContext(Q);

  return (
    <div className='Qcontainer'>
      <QTestField data={props.data} />
      {/* <QBox data={QuestionData}/> */}
    </div>
  );
}

export default QContainer;

