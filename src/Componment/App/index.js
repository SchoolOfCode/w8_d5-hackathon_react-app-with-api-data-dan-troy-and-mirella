import "./index.css";
import { useState, useEffect } from "react";
//Components
import SearchSection from "../SearchSection";
import FilmList from "../FilmList";
import HomePage from "../HomePage";

function App() {
  // UseStates
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [film, setFilm] = useState(false);
  // const [series, setSeries] = useState("");

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
  // useEffect(() => {
  //   async function getSeries() {
  //     const response = await fetch(
  //       `https://imdb-api.com/en/API/SearchSeries/k_slpmf7ll/${search}`
  //     );
  //     const data = await response.json();
  //     console.log(" This is te tv data", data);
  //     setSeries(data.results);
  //   }
  //   getSeries();
  // }, [search]);

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
    <div className="App">
      <SearchSection onClick={handleClick} onChange={handleChange} />
      {/* <SearchResultsSection /> */}
      <div>
        {!film ? (
          <div className="hide">Fetching</div>
        ) : (
          film.map((item) => {
            return (
              <FilmList
                filmTitle={item.title}
                filmImage={item.image}
                filmDescription={item.description}
              />
            );
          })
        )}
      </div>
      <HomePage />
    </div>
  );
}

export default App;
