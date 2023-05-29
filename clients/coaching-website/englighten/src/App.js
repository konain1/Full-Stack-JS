import './App.css';
import Nav from './components/menu/Nav';
// import Container from './components/container/Container';
// import Attr_cont from './components/Attractive-cont/Attr_cont';
// import Group_study from './components/mobile-cont/Group_study';
// import Group_therapy from './components/mobile-cont/Group_therapy';
import Footer from './components/footer/Footer.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Coursepage from './components/CoursePage/Coursepage';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Nav></Nav> 
      <Routes>
      <Route path='/'  element={<Home/>} />
      <Route path='/coursepage'  element={<Coursepage/>} />
      <Route path='/contact' element={<Coursepage/>}></Route>
     </Routes>
     
     <Footer/>
     
    </div>
  );
}

export default App;
