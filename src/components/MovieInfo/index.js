import React from "react";
import PropTypes from "prop-types";
// Components
import Thumbnail from "../Thumbnail";

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config/config";

// Fallback Image
import NoImage from "../../images/no_image.jpg";
import Trailers from "../Trailers";
// Styles
import {
  Wrapper,
  ThumbnailWrapper,
  MovieFeatures,
  Details,
  Plot,
  AddFavoriteButton,
} from "./MovieInfo.styles";
import {
  roundRating,
  convertDate,
  truncateOverview,
} from "../../helpers/helpers";

const MovieInfo = ({ movie }) => {
  const rating = roundRating(movie.vote_average);
  const releaseDate = convertDate(movie.release_date);
  const truncatedOverview = truncateOverview(movie.overview);
  return (
    <Wrapper>
      <MovieFeatures>
        <ThumbnailWrapper>
          <Thumbnail
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            clickable={false}
          />
        </ThumbnailWrapper>
        <Details>
          <h1>{releaseDate}</h1>
          <p className="runtime">{movie.runtime} mins</p>
          <p className="rating">{rating}/10</p>
          <AddFavoriteButton>Add to Favourites</AddFavoriteButton>
        </Details>
      </MovieFeatures>
      <Plot>{truncatedOverview}.</Plot>
      <Trailers />
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfo;
