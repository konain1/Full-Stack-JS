import React from 'react'
import MovieListing from '../components/Movielisting/MovieListing'
import MovieApi from '../components/apis/MovieApi'
import { useEffect } from 'react'
import { apikey } from '../components/apis/MoviesApiKey'
import {useDispatch} from 'react-redux'
import { addMovies } from '../features/movies/movieSlice'

function Home() {
    let movietext = 'Harry'
    const dispatch =useDispatch();

    useEffect(()=>{
        const fetchMovies = async ()=>{
            const response = await MovieApi.get(`?apiKey=${apikey}&s=${movietext}`).catch((err)=>{
                console.log(err)
            })


            dispatch(addMovies(response.data))
        }

        fetchMovies()
        
    },[])

    
  return (
    <div className='home'>
      <MovieListing/>
    </div>
  )
}

export default Home
