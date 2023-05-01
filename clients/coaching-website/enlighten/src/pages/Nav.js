import React from 'react'
import "./Nav.scss"
import {useState,Link} from 'react'

function Nav() {

    const [toggleState,setToggleState] = useState(true);

    const toggleHandler = () =>{
        setToggleState(!toggleState)
    }
  return (
  
     <div className='navbar'>
     <div className='navbar__toggle' onClick={toggleHandler}>
    
        <div className='navbar__toggle_lines'></div>
        <div className='navbar__toggle_lines'></div>
        <div className='navbar__toggle_lines'></div>
     </div>
     {toggleState == true ?  
        <div className='side__navbar' style={{ transform:toggleState === true ? 'translateX(400px)': "" }}>
        <ul> 
          
               <li>
                home
               </li> 
               <li>
               contact
               </li>
               <li>
               course
               </li>
                

        </ul>
        </div>
      :  " "
      
      }
     
      </div>
  
   
  )
}

export default Nav
