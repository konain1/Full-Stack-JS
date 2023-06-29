import React,{useState} from 'react';
import {data} from './data'



const Table = () => {

    const [search,setSearch] = useState('')
    
  return (

   <div>

   <h1>search contact</h1>
   <input type='text' onChange={(e)=>{setSearch(e.target.value)}} />
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        <tr>
        
        </tr>
      </thead>
      <tbody>
        {data.filter((i)=>{
            return search.toLowerCase() === ' ' ? i : i.first_name.toLowerCase().includes(search);
        }).map((item, index) => (
          <tr key={index}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Table;
