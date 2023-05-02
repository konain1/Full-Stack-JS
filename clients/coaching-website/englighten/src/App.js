import './App.css';
import Nav from './components/menu/Nav';
import Container from './components/container/Container';
import Attr_cont from './components/Attractive-cont/Attr_cont';
import Group_study from './components/mobile-cont/Group_study';
import Group_therapy from './components/mobile-cont/Group_therapy';
function App() {
  return (
    <div className="App">

     <Nav></Nav>
     <Container/>
     
     <Attr_cont/>
     <Group_study/>
     <Group_therapy/>
     
    </div>
  );
}

export default App;
