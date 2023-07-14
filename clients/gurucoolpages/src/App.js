import './App.css';
import Course_cont from './CourseCards/Course_cont';
import Course_navbar from './Navbars/Course_navbar';
import Nav from './Navbars/Nav';
import {Routes,Route} from 'react-router-dom';

import NeetPrep from './NeetTest/NeetPrep';
import Testpage from './TestPage/Testpage';
import QuestionPage from './QuestionPage/QuestionPage';





function App() {
  return (
    <div className="App">

   
     <Nav/>
     <Course_navbar/>
     <Routes>
          <Route path='/testpage' element={<Testpage/>  } ></Route>
          <Route path='/neetprep' element={<NeetPrep/>}></Route>

          

        </Routes>
        <QuestionPage/>
    </div>
  );
}

export default App;
