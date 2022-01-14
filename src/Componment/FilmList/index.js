import "./index.css";

export default function FilmList({ filmTitle, filmImage, filmDescription }) {
  return (
    <div className="filmContainer">
      <img src={filmImage} alt={filmTitle} />
      <p>{filmTitle}</p>
      <p>{filmDescription}</p>
    </div>
  );
}
