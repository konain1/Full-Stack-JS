import './App.css';
import Course_cont from './CourseCards/Course_cont';
import Course_navbar from './Navbars/Course_navbar';
import Nav from './Navbars/Nav';
function App() {
  return (
    <div className="App">
   
     <Nav/>
     <Course_navbar/>
     <Course_cont/>
    </div>
  );
}

export default App;
