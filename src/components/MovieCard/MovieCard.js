import React from "react";
import "./MovieCard.scss";

function MovieCard(props) {
  const { data } = props;
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={data.Poster} alt={data.Title} />
        </div>
      </div>
      <div className="card-bottom">
        <div className="card-info">
          <h4>{data.Title}</h4>
          <p>{data.Year}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
