
import './App.css';
import Counter from './component/Counter';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  return (
    <div className="App">
   <button onClick={()=> dispatch({type:'increment'})} >increment</button>
   <Counter/>
   <button onClick={()=> dispatch({type:'decrement'})}>decrement</button>
     
    </div>
  );
}

export default App;
