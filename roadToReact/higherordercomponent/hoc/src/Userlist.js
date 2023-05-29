import React from 'react'
import {useState,useEffect} from 'react'



function Userlist() {

    const [Ruser,setUser] = useState([]);
    const [term,setTerm] = useState([])

    useEffect(()=>{

        const fetchuser = async ()=>{
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const json = await res.json()

            setUser(json);
        }
        fetchuser();

    },[])

    let renderuser = Ruser.map((user)=> {

        return (
       

           
            <div key={user.id}>
            <p>
            <strong>{user.name}</strong>
            </p>
            </div>
           

        )

    })

    let fitleredUser = Ruser.filter((name)=>{
        return name.name == term
        
    }).map((user)=> {
        return (

            <div key={user.id}>
            <p>
            <strong>{user.name}</strong>
            </p>
            </div>
        )
    })

    console.log(fitleredUser)
  return (
    <>

    <div>
     <input onChange={(e)=> setTerm(e.target.value)} />
     </div>
    <div>
      {fitleredUser}
    </div>
   
    </>
  )
}

export default Userlist
