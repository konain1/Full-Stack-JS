import React from 'react'
import { menuItems } from './Menu_data'
import "./Menu.css"

function Menu(props) {
  return (
    <div className='menu'>
      
      <div className={`menu-box ${props.custom}`}>

        {
            menuItems.map((items,index)=>{
               return <><li key={index}> {items.title}</li></> 
            })
        }
      </div>


    </div>
  )
}

export default Menu
