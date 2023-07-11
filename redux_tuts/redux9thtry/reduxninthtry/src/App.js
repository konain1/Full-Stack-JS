import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const data = useSelector(state => state.show.value)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Redux toolkit {data}</h1>

       
      </header>
    </div>
  );
}

export default App;
