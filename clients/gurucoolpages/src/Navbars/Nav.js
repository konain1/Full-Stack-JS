// import React from 'react'
// import {NavbarItems} from './Navdata.js';
// import { useState } from "react";
// import Menu from '../MenuHover/Menu.js';
// import { Link } from 'react-router-dom';

// import './Nav.css'



// function Navbar() {

//   const [flag,setFlag] = useState(true);
//   const [customClass, setcustomClass] = useState('');


//   function handleMouseEnter(e) {
//     console.log('inside mouse called', e.target)
//     setFlag(true)
//     setcustomClass('active')



//   }



//   function handleMouseLeave(e) {
//     console.log('mouse out called')
//     setFlag(false)
//     setcustomClass('')
//   }


//   return (
//     <div className='custome-nav'>

  
//       <div className='left-navbar'>
//       {/* <Menu flag  ? custom={'crossclass'} : custom={'crossclass2'} /> */}


//         <ul >
//         {
//         NavbarItems.slice(0,2).map((items,index)=>
//           index === 1 ? <li key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} > <Link> {items.title} </Link> 
//           {<Menu custom={customClass}/>}

//           </li> :  <li key={index}>{items.title}</li>
          
//         )
//       }
//         </ul>


//       </div>
//       <div className='right-navbar'>
//         <ul>
//         {
//         NavbarItems.slice(2).map((items,index)=>{
//           return <li key={index}> <Link to={items.imageUrl} > {items.title }</Link> </li>
//         })
//       }
//         </ul>
//       </div>
     
     
      
//     </div>
//   )
// }

// export default Navbar
















import React, { useState } from 'react';
import { NavbarItems } from './Navdata.js';
import Menu from '../MenuHover/Menu.js';
import { Link } from 'react-router-dom';

import './Nav.css';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleMenuToggle() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <div className='custome-nav'>
      <div className='left-navbar'>
        <div className='hamburger' onClick={handleMenuToggle}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>

        <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          {NavbarItems.slice(0,2).map((item, index) => (
            <li key={index}>
              <Link to={item.imageUrl}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='right-navbar'>
        <ul>
          {NavbarItems.slice(2).map((items, index) => (
            <li key={index}>
              <Link to={items.imageUrl}>{items.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

