import React from 'react'
import { Link } from 'react-router-dom'
import artwork from './../../images/artwork.png'
// import barcaboy from './../../images/barcaboy.jpg'
// import barcaboy from '../../../public/barcaboy'
import './Header.scss'



function Header() {
  return (
    <div className='Header'>

    <Link to='/'>

    <div className='logo'>movie app</div>
    </Link>

    <div className='user-image'>
      <img scr='../../images/artwork.png' alt='user' />
    </div>
      
    </div>
  )
}

export default Header
