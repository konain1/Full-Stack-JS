import logo from './logo.svg';
import './App.css';
import {useDispatch,useSelector} from 'react-redux'
import { getallData } from './feature/userSlice';

function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) =>{
    return state.app;
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       <h1>api call</h1>
       <button onClick={()=>dispatch(getallData())}>getGithubUsers</button>
     
        {data.user.map((ele,index)=>{
         
          return (
            <p key={index}><span> login :</span>{ele.login}</p>
          )
          
        })}
       
      </header>
    </div>
  );
}

export default App;
