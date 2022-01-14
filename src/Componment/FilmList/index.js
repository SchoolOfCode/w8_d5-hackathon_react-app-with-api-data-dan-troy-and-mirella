import "./index.css";

export default function FilmList({ filmTitle, filmImage, filmDescription }) {
  return (
    <div className="filmContainer">
      <img className="filmImage" src={filmImage} alt={filmTitle} />
      <p className="filmTitle">{filmTitle}</p>
      <p className="filmDescription">{filmDescription}</p>
    </div>
  );
}
