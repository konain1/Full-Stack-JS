import './App.css';
import {useEffect} from 'react'
import axios from 'axios'
import { AddMovies } from './feature/movieSlice';

import {useDispatch,useSelector} from 'react-redux'
function App() {


  let movieName = 'Narnia';
  const baseUrl = `https://www.omdbapi.com?apikey=5601c585&s=${movieName}`;

const dispathc = useDispatch()




  // console.log(baseUrl+`${movieName}`)
  useEffect(() => {

          axios.get(baseUrl).then((res)=>{
            // console.log(res.data)
            dispathc(AddMovies(res.data))
          }).catch((e)=>{
            console.log(e)
          })


          // const allmovie =  fetch(baseUrl).then((res)=> {
          //   if (!res.ok) {
          //     throw new Error('Network response was not ok');
          //   }
          //   return  res.json()
          // }).then((response)=>{
          //   // console.log(response.Search)
          //   dispathc(AddMovies(response.Search))
          // }).catch((err)=>{
          //   console.log(err)
          // })
          
          
        },[])


  const movieData = useSelector((state)=>state.ombd.searchedMovie)
  console.log(movieData)

  // console.log(movieData)

  return (
    <div className="App">
    <h1>this is app redux</h1>

    {
      movieData.Search?.map((movie,index)=>{
        return (<p key={index}>{movie.Title}</p>)
      })
    }

  
     
     
    
    

  
    

    </div>
  );
}

export default App;
