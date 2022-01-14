// render the input box and the button DONE
// const [search, setSearch] = useState("") DONE
// Two function to handle the button and the input DONE
// state for the input value DONE
// assign the input value to the state in the handleChange function DONE
// handleClick function for the button DONE
// within the handleClick function, we need to use setSearch DONE
// Another function for enter key ( same functionality as click)
// useEffect for each api (`https://imdb-api.com/en/API/SearchMovie/k_slpmf7ll/${search}`)
import "./index.css";

export default function SearchSection({ onChange, onClick }) {
  return (
    <div>
      <h1> IMDB FILM SEARCH</h1>
      <input
        type="text"
        placeholder="Search for any films."
        onChange={onChange}
        // onSubmit={(e) => handleSubmit(e)}
      />
      <button className="searchButton" onClick={onClick}>
        search
      </button>
    </div>
  );
}
