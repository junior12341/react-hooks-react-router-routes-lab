import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map((movie) => (
    <div key={movie.title}>
      <p>
        <b>Name: {movie.title} </b>
      </p>
      <p>Time: {movie.time} min</p>
      Genres:
      <ul>
        {movie.genres.map((gen, index) => (
          <li key={index}>{gen}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <>
      <h1>Movies Page</h1>
      <div>{movieList}</div>
    </>
  );
}

export default Movies;
