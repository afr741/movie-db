import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  animation: animateMovieInfo 1s;
  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  gap: 20px;
`;

export const MovieFeatures = styled.div`
  display: flex;
  padding: 24px;
  gap: 16px;
  @media screen and (max-width: 365px) {
    flex-direction: column;
  }
`;

export const ThumbnailWrapper = styled.div`
  width: 115px;
  top: 144px;
  left: 24px;
  border-radius: 2px;
`;

export const Details = styled.div`
  color: var(--darkGray);
  h1 {
    font-weight: 500;
    color: var(--darkGray);
  }
  h3 {
    padding-top: 20px;
    padding-bottom: 10px;
  }
  .runtime {
    font-style: italic;
    font-weight: 400;
  }
  .rating {
    margin-top: 40px;
    font-weight: 700;
  }
`;

export const AddFavoriteButton = styled.button`
  width: 196px;
  height: 56px;
  top: 258px;
  left: 155px;
  margin-top: 20px;
  border-radius: 2px;
  background: #746a64;
  box-shadow: 0px 0px 4px 0px #0000001a;
  color: var(--white);
  font-weight: 500;
  font-size: 1rem;

  :hover {
    background: var(--lightGray);
  }
  :active {
    background: var(--lightGray);
  }
`;
export const Plot = styled.div`
  margin: 0;
  padding: 0 24px;
  color: var(--lightGray);
  font-weight: 500;
`;
