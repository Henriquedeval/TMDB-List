import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Card = ({ topM, showLink = true }) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500/`;
  console.log(topM)
  return (
    <>
      <div className="movie-card">
        <p id="title">{topM.original_title}</p>
        <img src={imgUrl + topM.poster_path} />

        <div className="movie-infocard">
          <p>
            <FaStar /> {topM.vote_average}
          </p>
          {showLink && <Link to={`/movie/${topM.id}`}><button id='details'>Details</button></Link>}
        </div>
      </div>
    </>
  );
};

export default Card;
