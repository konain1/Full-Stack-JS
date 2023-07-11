import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import { view,addOn,subOn } from './feature/displaySlice';
import { useDispatch } from 'react-redux';


function App() {
  const val = useSelector(state => state.dis.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>this is redux</h1>

        <h3>{val}</h3>
        <button onClick={()=>dispatch(addOn())}>next</button>
        <button onClick={()=>dispatch(subOn())}>prev</button>


      </header>
    </div>
  );
}

export default App;
