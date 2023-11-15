import React from "react";
import PropTypes from "prop-types";
// Styles
import { Content } from "./MovieTitle.styles";

const MovieTitle = ({ movieTitle }) => {
  return (
    <React.Fragment>
      <Content>
        <span>{movieTitle}</span>
      </Content>
    </React.Fragment>
  );
};

MovieTitle.propTypes = {
  movieTitle: PropTypes.string,
};

export default MovieTitle;
