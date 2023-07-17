import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { createUsers } from './features/userDetailSlice'

function App() {

  const [user,setUser]= useState({})

  const dispatch = useDispatch()
  const getData = (e)=>{

    setUser({...user,[e.target.name] : e.target.value})
  }


 



  const onsubmit = ()=>{

    console.log(user)
    dispatch(createUsers(user))


  }

  
  return (
  <div>
    
   <form onSubmit={onsubmit()}>
   <label>email</label>
   <input type="text"  name="email" onChange={getData} />
   <label>name</label>
   <input type="text" name="name" onChange={getData}/>
   <label>age</label>
   <input type="number" name="age"onChange={getData} />
   <lable>male</lable>
   <input type="radio" name="gender" value="male" onChange={getData}/>
   <label>female</label>
   <input type="radio" name="gender" value="female"onChange={getData}/>
   
    <input type="submit" />
   </form>
  </div>
  );
}

export default App;
