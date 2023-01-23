import React from "react";
import { directors } from "../data";

function Directors() {
  const directorList = directors.map((director) => (
    <div key={director.name}>
      <p>
        <b>Name: {director.name}</b>
      </p>
      Movies:
      <ul>
        {director.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <>
      <h1>Directors Page</h1>
      <div>{directorList}</div>
    </>
  );
}

export default Directors;
