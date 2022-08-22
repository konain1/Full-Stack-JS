import React, { Component } from 'react'

export class Banner extends Component {

  render() {
    const poster  = '/6EdKBYkB1ssgGjc249ud1L55o8d.jpg'
    return (
    
      <div className="card banner-card" >
      <img src={`https://image.tmdb.org/t/p/original${poster}`} className="card-img-top" alt="..." />
     
        <h5 className="card-title banner-title">Card title</h5>
        <p className="card-text banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        
    </div>
    
    )
  }
}

export default Banner
