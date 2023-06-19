import React from 'react'
import {NavbarItems} from './Navdata.js';
import { useState } from "react";
import Menu from '../MenuHover/Menu.js';

import './Nav.css'



function Navbar() {

  const [flag,setFlag] = useState(true);
  const [customClass, setcustomClass] = useState('');


  function handleMouseEnter(e) {
    console.log('inside mouse called', e.target)
    setFlag(true)
    setcustomClass('active')



  }



  function handleMouseLeave(e) {
    console.log('mouse out called')
    setFlag(false)
    setcustomClass('')
  }


  return (
    <div className='custome-nav'>

  
      <div className='left-navbar'>
      {/* <Menu flag  ? custom={'crossclass'} : custom={'crossclass2'} /> */}


        <ul >
        {
        NavbarItems.slice(0,2).map((items,index)=>
          index === 1 ? <li key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >{items.title} 
          {<Menu custom={customClass}/>}

          </li> :  <li key={index} >{items.title}</li>
          
        )
      }
        </ul>


      </div>
      <div className='right-navbar'>
        <ul>
        {
        NavbarItems.slice(2).map((items,index)=>{
          return <li key={index}>{items.title }</li>
        })
      }
        </ul>
      </div>
     
     
      
    </div>
  )
}

export default Navbar