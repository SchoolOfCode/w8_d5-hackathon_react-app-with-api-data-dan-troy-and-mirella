import React, { useState, useEffect } from "react";
// render the input box and the button
// const [search, setSearch] = useState("")
// Two function to handle the button and the input
// state for the input value
// assign the input value to the state in the handleChange function
// handleClick function for the button
// within the handleClick function, we need to use setSearch
// Another function for enter key ( same functionality as click)
// useEffect for each api (`https://imdb-api.com/en/API/SearchMovie/k_slpmf7ll/${search}`)

export default function SearchSection() {
  return (
    <div>
      <h1> IMDB FILM SEARCH</h1>
      <input type="text" placeholder="Search for any films." />{" "}
      <button> Search </button>
    </div>
  );
}
