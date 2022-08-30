import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
      <div style={{display:'flex', padding:'0.5rem', justifyContent:'center'}}>

      <Link to='/' style={{textDecoration:'none'}}><h1>movie app</h1></Link>
      <Link to='/favourite' style={{textDecoration:'none'}}><h2  style={{marginLeft:'2rem', marginTop:'0.5rem'}}   >favourite</h2></Link>
           
           
      </div>
    )
  }
}

export default Navbar
