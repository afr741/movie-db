import React from "react";

// Config
import { POSTER_SIZE, IMAGE_BASE_URL } from "../config/config";

// Components
import Grid from "./Grid";
import Thumbnail from "./Thumbnail";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import Button from "../components/Button";
import NotFound from "./NotFound";

// Hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

// Image: if API fails to render image then the fallback image used this one
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();

  if (error) {
    return <h1>Something Went Wrong...</h1>;
  }
  return (
    <React.Fragment>
      <SearchBar setSearchTerm={setSearchTerm}></SearchBar>

      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {state.results &&
          state.results.map((movie) => (
            <Thumbnail
              key={movie.id}
              clickable
              image={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                  : NoImage
              }
              movieId={movie.id}
            />
          ))}
      </Grid>

      {loading && <Spinner />}
      {state.results.length === 0 && !loading && <NotFound />}

      {state.page < state.total_pages && !loading && (
        <Button callback={() => setIsLoadingMore(true)}>Load More</Button>
      )}
    </React.Fragment>
  );
};
export default Home;
