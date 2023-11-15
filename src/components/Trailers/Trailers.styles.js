import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 50px;
  padding: 0 20px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--lightGray);
  width: 100%;
`;

export const TrailerButton = styled.button`
  display: flex;
  align-items: start;
  background: var(--superLightGray);
  padding: 20px;
  border: none;
  box-shadow: 0px 0px 4px 0px #0000001a;
  background-image: ${(props) => `url(${props.src})`};
  background-repeat: no-repeat;
  background-size: fit;
  background-position: 0 50%;

  :hover {
    background: var(--lightGray);
    background-image: ${(props) => `url(${props.src})`};
    background-repeat: no-repeat;
    background-size: fit;
    background-position: 0 50%;
    span {
      margin-left: 28px;
      color: var(--white);
    }
  }
  span {
    margin-left: 28px;
    color: var(--lightGray);
    font-weight: 500;
  }
`;

export const TrailerTitle = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #dedede;
  margin-bottom: 10px;
`;
