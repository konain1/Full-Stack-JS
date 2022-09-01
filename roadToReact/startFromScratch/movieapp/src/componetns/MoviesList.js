import React, { Component } from "react";
// import {movies} from '../movieData'
import axios from "axios";

export class MoviesList extends Component {
  constructor() {
    super();

    this.state = {
      hover: "",
      parr: [1],
      movies: [],
      currPage :1,
      favourites:[]
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=eb29820ff34c7a78e2eed374a36d8824&language=en-US&page=${this.state.currPage}`
    );
    const apiMovieData = res.data;
    // console.log(apiMovieData);

    this.setState({
      movies: [...apiMovieData.results],
    });
  }
  changeMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=eb29820ff34c7a78e2eed374a36d8824&language=en-US&page=${this.state.currPage}`
    );
    const apiMovieData = res.data;
    // console.log(apiMovieData);

    this.setState({
      movies: [...apiMovieData.results],
    });
  };

  handleNext = () => {
    let tempArr = [];
    for (let i = 1; i <= this.state.parr.length + 1; i++) {
      tempArr.push(i);
      
    }
    // console.log(tempArr+"---->>>>");

    this.setState({
      parr : [...tempArr],
     currPage:this.state.currPage+1,
    
      
    },this.changeMovies)
   
    // console.log(this.state.currPage)
   
  };

  handleprev = ()=>{
    if(this.state.currPage != 1){
      this.setState({
        currPage:this.state.currPage-1,
        parr:this.state.currPage-1
        
      },this.changeMovies)

  }}
  handlePageValue = (value)=>{
    if(value != this.state.currPage){
      this.setState({
        currPage:value
      },this.changeMovies)
    }
  }

  handleFvrt = (movieObj)=>{

    let oldData = JSON.parse(localStorage.getItem('movies-app') || '[]')

    if(this.state.favourites.includes(movieObj.id)){
      // if id not equal then donot remove nor remove same id movies
      oldData = oldData.filter((m)=> m.id != movieObj.id
      )
    }else {
      oldData.push(movieObj)
    }
    // localStorage.clear();
    localStorage.setItem('movies-app',JSON.stringify(oldData)) 

    console.log(oldData)
   this.handleFvrtState()
    
  }

  handleFvrtState = ()=>{

    let oldData = JSON.parse(localStorage.getItem('movies-app') || '[]')

    let temp = oldData.map((m)=>m.id)


    this.setState({
      favourites :[...temp]
    })
    

  }

 
  render() {
    return (
      <>
        <div>
          <h3 className="text-center">Trending</h3>
        </div>

        <div className="moviesList">
          {this.state.movies.map((ele) => (
            <div
              className="card movie-card"
              onMouseEnter={() => this.setState({ hover: ele.id })}
              onMouseLeave={() => this.setState({ hover: "" })}
            >
              <img
                src={`https://image.tmdb.org/t/p/original${ele.backdrop_path}`}
                className="card-img-top"
                alt="..."
              />
              <h5 className="card-title ">{ele.title}</h5>

              <div
                className="button-wrap"
                style={{ display: "flex", justifyContent: "center" }}
              >
                {this.state.hover == ele.id && 
                  <a  class="btn btn-primary movie-btn" onClick={()=>this.handleFvrt(ele)}>

                  {this.state.favourites.includes(ele.id)?"Remove from Favourite" : "Add to Favourite"}
                  
                  </a>
                  }
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link"  onClick={this.handleprev}>
                  Previous
                </a>
              </li>

              {this.state.parr.map((value) => (
                <li class="page-item">
                  <a class="page-link" onClick={()=>{this.handlePageValue(value)}} >
                    {value}
                  </a>
                </li>
              ))}

              <li class="page-item">
                <a class="page-link" onClick={this.handleNext}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export default MoviesList;
