import React, { Component } from 'react'
import {movies} from '../movieData'

export class MoviesList extends Component {

  constructor(){
    super()

    this.state = {
      hover : '',
      parr : [1]  
    };
  }
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
        <div className="card movie-card" onMouseEnter={()=> this.setState({hover: ele.id})}
        onMouseLeave={()=>this.setState({hover:''})}>
        
        <img src={`https://image.tmdb.org/t/p/original${ele.backdrop_path}`} className="card-img-top" alt="..."/>
        <h5 className="card-title " >{ele.title}</h5>

        <div className='button-wrap' style={{display:'flex' , justifyContent:'center'}}> 
        {
          this.state.hover == ele.id && (
            <a href="#" class="btn btn-primary movie-btn">Add to Favourite</a>
          )
        }
        
        </div>


       
      </div>
        
      
        
      ))}
      
      </div>

      <div style={{display:'flex' , justifyContent:'center'}}>
      <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>

        {this.state.parr.map((value)=>(
          <li class="page-item"><a class="page-link" href="#">{value}</a></li>
        ))}
       
        
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
    </nav>
    </div>
      </>
    )
  }
}

export default MoviesList
