import './App.scss';
import Header from './components/Header/Header'
import PageNotFound from './components/pageNotfound/PageNotFound';
import Home from './Home/Home'
import {BrowserRouter as Router , Route,Routes} from "react-router-dom"
import Footer from './components/Footer/Footer'
import MovieDetails from './components/MovieDetails/MovieDetails'


function App() {
  return (
    <div className="App">
    <Router>
    
      <Header></Header>
      <Routes>

      <Route path='/' element={<Home/>}  />
      <Route path='*' element={<PageNotFound/>} />
      <Route path='/movie/:imbdID' element={<MovieDetails/>} />
      </Routes>
      <Footer/>
    </Router>

    </div>
  );
}

export default App;
