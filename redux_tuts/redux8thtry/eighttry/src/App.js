import { useSelector } from 'react-redux';
import './App.css';

function App() {

  const count = useSelector(state => state)
  return (
    <div className="App">
     <h2>count is{count} </h2>

    </div>
  );
}

export default App;
