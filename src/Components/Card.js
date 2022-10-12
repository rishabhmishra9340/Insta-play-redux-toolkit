import React from "react";
import { Link } from "react-router-dom";
import HoverVideoPlayer from "react-hover-video-player";
import style from "./style.css";
import play from "../../src/images/play.png";
import StarRating from "./Rating/Starrating";

const Card = (movie) => {
  let img_path = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <Link to={`/movie/${movie.info.id}`}>
        <div className="movies">
          <div className="img-poster">
            <img
              src={img_path + movie.info.poster_path}
              className="Poster"
            ></img>
          </div>
          <div className="movie-Details">
            <div className="box">
              <div>
                <p className="title">{movie.info.title}</p>
                <h6 className="star">
                  {/* <span id="star-tag" class="fa fa-star checked"></span>
                  {(movie.info.vote_average / 2).toFixed(1)}/5 */}

                  <StarRating
                    rating={Math.round((movie.info.vote_average * 10) / 10) / 2}
                  />
                </h6>
              </div>

              <div className="play">
                <img src={play}></img>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Card;
