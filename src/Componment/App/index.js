import "./index.css";

//Components
import SearchSection from "../SearchSection";
import SearchResultsSection from "../SearchResultsSection";

function App() {
  return (
    <div className="App">
      <SearchSection />
      <SearchResultsSection />
    </div>
  );
}

export default App;
