import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Wrapper,
  Content,
  HeaderNavButton,
  HeaderDots,
  HeaderTitleText,
  LeftNavItems,
} from "./Header.styles";
import arrowImg from "../../images/back-arrow.svg";
import dotsImg from "../../images/dots.svg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const shouldRenderBackButton = location.pathname !== "/";
  const headerTitleText = shouldRenderBackButton
    ? "Movie Details"
    : "Pop Movies";

  const handleBackClick = () => {
    navigate("/");
  };

  const handleOptionsClick = () => {
    //tbd
  };

  return (
    <Wrapper>
      <Content>
        <LeftNavItems>
          {shouldRenderBackButton && (
            <HeaderNavButton src={arrowImg} onClick={handleBackClick} />
          )}
          <HeaderTitleText>{headerTitleText}</HeaderTitleText>
        </LeftNavItems>

        <HeaderDots src={dotsImg} onClick={handleOptionsClick} />
      </Content>
    </Wrapper>
  );
};

export default Header;
