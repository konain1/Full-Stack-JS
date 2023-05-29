// import '../App.css/App.css';
import Nav from './menu/Nav';
import Container from './container/Container';
import Attr_cont from './Attractive-cont/Attr_cont';
import Group_study from './mobile-cont/Group_study';
import Group_therapy from './mobile-cont/Group_therapy';
import Footer from './footer/Footer';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Coursepage from './CoursePage/Coursepage';





function Home() {
  return (
    <div>
      
    <Container/>
    <Attr_cont/>

    <Group_study/>

    <Group_therapy/>

    {/* <Footer/> */}



    </div>
  )
}

export default Home
