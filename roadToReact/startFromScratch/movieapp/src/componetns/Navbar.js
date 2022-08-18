import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div style={{display:'flex', padding:'0.5rem'}}>
           <h1>movie app</h1>
           <h2 style={{marginLeft:'2rem', marginTop:'0.5rem'}}>favourite</h2>
      </div>
    )
  }
}

export default Navbar
