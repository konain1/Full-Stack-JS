import { getRoles } from "@testing-library/react";
import React, { Component } from "react";
import { movies } from "../movieData";


export class Fvrt extends Component {

  constructor(){
    super()

    this.state ={
      genre :[],
      currentgenre : 'all genre',
      localFvrtMovies : [],
      searchText:'',
    }
  }
  
  componentDidMount(){

    let genreids = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };
    let data = JSON.parse(localStorage.getItem('movies-app') || '[]') 
    let TempArr = []
    data.map((ele)=>{
      if(!TempArr.includes(genreids[ele.genre_ids[0]])){
        TempArr.push(genreids[ele.genre_ids[0]])
      }
    })

    TempArr.unshift('all genre')

    this.setState({
      localFvrtMovies:[...data],
      genre:[...TempArr]
    })


  }

  handleGenreChange=(genre) =>{

    this.setState({
      currentgenre : genre
    })
  }

  sortPopularityAsc=()=>{
    let temp = this.state.localFvrtMovies
     temp.sort((a,b)=> {
      return  a.popularity - b .popularity
    })

    this.setState({
      localFvrtMovies : [...temp]
    })
  }

  sortPopularityDesc=()=>{
    let temp = this.state.localFvrtMovies
    temp.sort(function(objA , objB){
       return objB.popularity-objA.popularity
    })

    this.setState({
      localFvrtMovies : [...temp]
    })
 }
sortRatingDesc=()=>{
  let temp = this.state.localFvrtMovies
  temp.sort((a,b)=> a.vote_average - b.vote_average )

  this.setState({
    localFvrtMovies : [...temp]
  })

}

sortRatingAsc=()=>{
  let temp = this.state.localFvrtMovies
  temp.sort((a,b)=> b.vote_average - a.vote_average )

  this.setState({
    localFvrtMovies : [...temp]
  })

}
  render() {

    let genreids = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };

   
    let filterArr = []



   
   

  if(this.state.searchText === ''){
    filterArr = this.state.localFvrtMovies
  }else {
    filterArr = this.state.localFvrtMovies.filter((moviesObj)=>{
      let title = moviesObj.original_title.toLowerCase();
      return title.includes(this.state.searchText.toLowerCase().trim());
    })
  }

  if(this.state.currentgenre !=='all genre'){ 
    filterArr = this.state.localFvrtMovies.filter((movieobj)=>genreids[movieobj.genre_ids[0]] == this.state.currentgenre)
}
  

   
    return (
      <>
        <div className="main-cont">
          <div className="row">
            <div className="col-3">
              <ul className="list-group fvrt-ul">
                {/* <li className="list-group-item">all genre</li> */}
               {  this.state.genre.map((ele)=>(
                this.state.currentgenre == ele?

                <li style={{background:'grey', color:'white'}} className="list-group-item">{ele}</li>:

                <li style={{color:'grey'}} className="list-group-item" onClick={()=>this.handleGenreChange(ele)} > {ele} </li>
               ))}
              </ul>
            </div>
            <div className="col-9 fvrt-movies">
              <div className="row">
                <input type="text" placeholder="searchText" className="input-group-text col"    onChange={(e)=> this.setState({searchText : e.target.value}) }/>
                <input type="number" className="input-group-text col" />
              </div>
              <div className="row">
                <table class="table">
                  <thead className="thead-dark">
                    <tr>
                      <th></th>
                      <th scope="col">Title</th>
                      <th scope="col">Genre</th>
                      <th scope="col"><i class="fa-solid fa-sort-up" onClick={this. sortPopularityDesc}></i> Popularity <i class="fa-solid fa-sort-down" onClick={this.sortPopularityAsc}></i></th>
                      <th scope="col"><i class="fa-solid fa-sort-up" onClick={this. sortRatingDesc}></i> Rating<i class="fa-solid fa-sort-down" onClick={this.sortRatingAsc}></i></th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filterArr.map((ele) => (
                      <tr>
                        <td> <img style={{width:'6rem'}} src={`https://image.tmdb.org/t/p/original${ele.backdrop_path}`}/></td>
                        <th scope="row">
                          {ele.title}
                         
                        </th>
                        <td>{genreids[ele.genre_ids[0]]}</td>
                        <td>{ele.popularity}</td>
                        <td>{ele.vote_average}</td>
                        <td>
                          <button type="button" class="btn btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Previous
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Fvrt;
