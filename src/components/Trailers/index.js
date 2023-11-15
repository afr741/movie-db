import React from "react";
import PropTypes from "prop-types";
// Helpers

// Styles
import {
  Wrapper,
  Content,
  TrailerTitle,
  TrailerButton,
} from "./Trailers.styles";
import arrowImg from "../../images/play-button.svg";

const Trailers = ({ trailers }) => {
  const trailersList = trailers
    ? trailers
    : [
        { id: 2312, name: "trailer1 name", video: {} },
        { id: 2454, name: "trailer2 name", video: {} },
      ];
  return (
    <React.Fragment>
      <Wrapper>
        <Content>
          <TrailerTitle>TRAILERS</TrailerTitle>
          {trailersList &&
            trailersList.map((trailer, index) => (
              <TrailerButton key={trailer.id} src={arrowImg}>
                <span>Play trailer {index + 1} </span>
              </TrailerButton>
            ))}
        </Content>
      </Wrapper>
    </React.Fragment>
  );
};

Trailers.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default Trailers;
