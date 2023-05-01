import React from 'react'
import {MenuItems} from "./Menu"
import './Nav.scss'
import {useState} from 'react'


function Nav() {

    const [clicked,setClicked] = useState(false)

    const clickedHandler = () =>{
        setClicked(!clicked)
    }

  return (
    <>
        <nav className='NavbarItems'>

        <h1 className='navbar-logo'>logo</h1>

        <div className='menu-icon' onClick={clickedHandler}>
        <i className={clicked == true ?'fa-solid fa-xmark' :'fa-solid fa-bars' }></i>
        </div>

        

        <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((items,index)=>{
                return (
                    <li key={index}> <a href={items.url} className={items.cName} > {items.title} </a></li>
                )
            })}
        </ul>

        </nav>
    </>
  )
}

export default Nav
