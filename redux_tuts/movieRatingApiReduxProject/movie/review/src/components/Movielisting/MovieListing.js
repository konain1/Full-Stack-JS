import React from 'react'
// import { getAllMovies } from '../../features/movies/movieSlice'
import {Moviecard} from './../Moviecard/MovieCard'

import {  useSelector } from 'react-redux'

function MovieListing() {

  const moviesList = useSelector(((state) => state.movie.searchedMovies ))


  // console.log(moviesList?.Search)


  // let renderMovies = ''


  // renderMovies = moviesList?.Search.map((data,index)=>{
  //     <Moviecard  key={index} data={data}/>
  // })

  


  
  return (
    <div className='movieLising'>
    <h1>movielisting</h1>
    {
      moviesList.Search?.map((data,index)=>{
        return (
          <p key={index}>{data.Title}</p>
        )
      })
    }
    </div>
  )
}

export default MovieListing
