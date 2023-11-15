import React from "react";
import { useParams } from "react-router-dom";

// Components
import Spinner from "./Spinner";
import MovieTitle from "./MovieTitle";
import Error from "./Error";
import MovieInfo from "./MovieInfo";

// Hooks
import { useMovieFetch } from "../hooks/useMovieFetch";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <React.Fragment>
      <MovieTitle movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
    </React.Fragment>
  );
};

export default Movie;
