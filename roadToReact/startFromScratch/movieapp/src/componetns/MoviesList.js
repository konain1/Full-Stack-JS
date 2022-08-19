import React, { Component } from 'react'
import {movies} from '../movieData'

export class MoviesList extends Component {
  render() {

    let moviesArr = movies.results
    console.log(moviesArr)
    return (
      <>

      <div> 
      <h3 className='text-center'>Trending</h3>
      </div>

      <div className='moviesList'>
      {moviesArr.map((ele)=>(
        <div classname="card " style={{width:"18rem"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFPuiCvkZy2jrZvGEWlUrejv3ygarS-1TJJw&usqp=CAU" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{ele.title}</h5>
        </div>
      </div>
        
      ))}
      
      </div>
      </>
    )
  }
}

export default MoviesList
