import "./index.css";

export default function SeriesList({
  seriesTitle,
  seriesImage,
  seriesDescription,
}) {
  return (
    <div className="seriesContainer">
      <img className="seriesImage" src={seriesImage} alt={seriesTitle} />
      <p>{seriesTitle}</p>
      <p>{seriesDescription}</p>
    </div>
  );
}
