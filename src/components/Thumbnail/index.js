import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// Styles
import { Image } from "./Thumbnail.styles";

const Thumbnail = ({ image, movieId, clickable }) => {
  return (
    <React.Fragment>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="movie-thumb" />
        </Link>
      ) : (
        <Image src={image} alt="movie-thumb" />
      )}
    </React.Fragment>
  );
};

Thumbnail.prototype = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default Thumbnail;
