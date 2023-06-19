import './App.css';
import Course_cont from './CourseCards/Course_cont';
import Course_navbar from './Navbars/Course_navbar';
import Nav from './Navbars/Nav';
import {Routes,Route} from 'react-router-dom';

import Testpage from './NeetTest/Testpage';




function App() {
  return (
    <div className="App">

   
     <Nav/>
     <Course_navbar/>
     <Routes>
          <Route path='/Testpage' element={<Testpage/>  } ></Route>
          <Route path='/course-cont' element={<Course_cont/>}></Route>

        </Routes>
    </div>
  );
}

export default App;
