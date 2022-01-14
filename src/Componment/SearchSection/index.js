import React, { useState, useEffect } from "react";
// render the input box and the button DONE
// const [search, setSearch] = useState("") DONE
// Two function to handle the button and the input DONE
// state for the input value DONE
// assign the input value to the state in the handleChange function DONE
// handleClick function for the button DONE
// within the handleClick function, we need to use setSearch DONE
// Another function for enter key ( same functionality as click)
// useEffect for each api (`https://imdb-api.com/en/API/SearchMovie/k_slpmf7ll/${search}`)

export default function SearchSection({ onChange, onClick }) {
  // UseStates
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [film, setFilm] = useState("");
  const [series, setSeries] = useState("");

  // Use Effect - FETCH FILMS
  useEffect(() => {
    async function getFilms() {
      const response = await fetch(
        `https://imdb-api.com/en/API/SearchMovie/k_slpmf7ll/${search}`
      );
      const data = await response.json();
      console.log(data);
      setFilm(data.results);
    }
    getFilms();
  }, [search]);

  // Use Effect - FETCH TV SHOWS
  useEffect(() => {
    async function getSeries() {
      const response = await fetch(
        `https://imdb-api.com/en/API/SearchSeries/k_slpmf7ll/${search}`
      );
      const data = await response.json();
      console.log(" This is te tv data", data);
      setSeries(data.results);
    }
    getSeries();
  }, [search]);

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleClick(e) {
    setSearch(inputValue);
  }

  // function handleSubmit(e) {
  //   setSearch(inputValue);
  // }

  console.log(search);

  return (
    <div>
      <h1> IMDB FILM SEARCH</h1>
      <input
        type="text"
        placeholder="Search for any films."
        onChange={(e) => handleChange(e)}
        // onSubmit={(e) => handleSubmit(e)}
      />
      <button onClick={(e) => handleClick(e)}> Search </button>
    </div>
  );
}
