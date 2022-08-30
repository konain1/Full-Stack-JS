
import './App.css';
import Navbar from './componetns/Navbar';
import Banner from './componetns/Banner';
import MoviesList from './componetns/MoviesList';
import Fvrt from './componetns/Fvrt';
import { BrowserRouter , Routes , Route} from 'react-router-dom'


function App() {
  return (
    < BrowserRouter >

    <Routes>
    <Route path='/' element={<> <Banner/> <Navbar/><MoviesList/> </>}/>
    <Route path='favourite' element={<>  <Navbar/>   <Fvrt/>     </>} />
    </Routes>
    
     
    
    
    

    </ BrowserRouter>
  );
}

export default App;
