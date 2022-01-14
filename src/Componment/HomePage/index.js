import { useState, useEffect } from "react";
import "./index.css";

export default function HomePage() {
  const [topMovies, setTopMovies] = useState("");

  useEffect(() => {
    async function getTopMovies() {
      const response = await fetch(
        `https://imdb-api.com/en/API/MostPopularMovies/k_y5g0i8z2`
      );
      const data = await response.json();
      console.log(data);
      setTopMovies(data.items);
    }
    getTopMovies();
  }, []);

  const top5 = [...topMovies.slice(0, 10)];
  console.log(top5);
  return (
    <div className="filmContainer">
      {top5.map(function (film) {
        return (
          <div className="filmResult">
            <img className="filmImage" src={film.image} alt={film.title} />
            <p className="title">{film.fullTitle}</p>
            <p className="rating"> {film.imDbRating}</p>
          </div>
        );
      })}
    </div>
  );
}
