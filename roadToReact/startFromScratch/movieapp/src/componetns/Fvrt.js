import { getRoles } from "@testing-library/react";
import React, { Component } from "react";
import { movies } from "../movieData";

export class Fvrt extends Component {
  render() {
    let localMoviesData = movies.results;

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

    let TempArr = []

    localMoviesData.map((ele)=>{
      if(!TempArr.includes(genreids[ele.genre_ids[0]])){
        TempArr.push(genreids[ele.genre_ids[0]])
      }
    })

   
    return (
      <>
        <div className="main-cont">
          <div className="row">
            <div className="col-3">
              <ul className="list-group fvrt-ul">
                <li className="list-group-item">all genre</li>
               {  TempArr.map((ele)=>(
                <li className="list-group-item">{ele}</li>
               ))}
              </ul>
            </div>
            <div className="col-9 fvrt-movies">
              <div className="row">
                <input type="text" className="input-group-text col" />
                <input type="number" className="input-group-text col" />
              </div>
              <div className="row">
                <table class="table">
                  <thead className="thead-dark">
                    <tr>
                      <th></th>
                      <th scope="col">Title</th>
                      <th scope="col">Genre</th>
                      <th scope="col">Popularity</th>
                      <th scope="col">Rating</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {localMoviesData.map((ele) => (
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
