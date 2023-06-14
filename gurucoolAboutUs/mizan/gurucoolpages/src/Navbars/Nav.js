import React from 'react'
import {NavbarItems} from './Navdata.js'
function Navbar() {
  return (
    <div>

      <ul>
      {
        NavbarItems.map((items,index)=>{
          return <li key={index}>{items.title }</li>
        })
      }
      </ul>
      
    </div>
  )
}

export default Navbar
