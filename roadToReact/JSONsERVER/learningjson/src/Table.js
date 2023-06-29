import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'


const Table = () => {

    const [jdata,setJdata] = useState([])

       useEffect(()=>{
           axios.get('http://localhost:5000/users').then(res => setJdata(res.data) )
            

    },[])


    console.log(jdata)

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {jdata.map((item, index) => (

   

          <tr key={index}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
          </tr>
          
        ))}
      </tbody>
    </table>
  );
};

export default Table;
