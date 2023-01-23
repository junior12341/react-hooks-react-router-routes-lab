import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            activeStyle={{
              background: "lightblue",
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            exact
            activeStyle={{
              background: "lightblue",
            }}
          >
            Movies
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/directors"
            exact
            activeStyle={{
              background: "lightblue",
            }}
          >
            Directors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/actors"
            exact
            activeStyle={{
              background: "lightblue",
            }}
          >
            Actors
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;

