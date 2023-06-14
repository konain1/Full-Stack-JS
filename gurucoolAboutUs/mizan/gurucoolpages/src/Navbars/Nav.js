import React from 'react'
import {NavbarItems} from './Navdata.js'
import './Nav.css'



function Navbar() {
  return (
    <div className='custome-nav'>

  
      <div className='left-navbar'>
        <ul >
        {
        NavbarItems.slice(0,2).map((items,index)=>{
          return <li key={index}>{items.title }</li>
        })
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
