import React from "react";
import { actors } from "../data";

function Actors() {
  const actorList = actors.map((actor) => (
    <div key={actor.name}>
      <p>
        <b>Name: {actor.name}</b>
      </p>
      Movies:
      <ul>
        {actor.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <>
      <h1>Actors Page</h1>
      <div>{actorList}</div>
    </>
  );
}

export default Actors;
