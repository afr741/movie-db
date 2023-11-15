import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGray);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* max-width: var(--maxWidth); */
  padding: 20px 0;
  margin: 0 auto;
`;

export const LeftNavItems = styled.div`
  display: flex;
  align-items: center;
`;
export const NavButton = styled.button`
  width: 28px;
  height: 28px;
  background: none;
  background-image: ${(props) => `url(${props.src})`};
  background-repeat: no-repeat;
  background-size: fit;
  border: none;
`;
export const HeaderNavButton = styled(NavButton)`
  margin-right: 10px;
`;

export const HeaderDots = styled(NavButton)`
  background-position: center;
`;

export const HeaderTitleText = styled.h1``;
