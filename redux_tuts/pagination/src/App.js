import './App.css';
import Api from './comp/Api';
import {  useSelector } from 'react-redux';
import  { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addData } from './features/paginationSlice';
import {getLength} from './features/paginationSlice'





function App() {
  const api = 'https://api.github.com/users';



  const dispatch = useDispatch();
  const lenDispatch = useDispatch()

  const [user,setUsers] = useState()
  const [len,setLen] = useState();



  // console.log("legbth"+len)


    const apicall = ()=>{
      axios.get(api).then((res)=> {
        setLen(res.data.length)
        // console.log(res.data.length)
        setUsers(res.data)
           return res.data
       }).catch((err)=>{
           console.log(err)
       })

       
    }

    dispatch(addData(user)) 
    lenDispatch(getLength(len))

 useEffect(()=>{

  apicall()



 },[])


  const selector = useSelector((state)=> state.userApi.data)

  // const userLength = useSelector((state)=>state.userApi.length)

  // console.log(userLength)


  return (
    <div className="App">
    <h3>Github users</h3>
     <Api datas={selector} length={len}/>

     <div>
        
     </div>

    </div>
  );
}

export default App;
