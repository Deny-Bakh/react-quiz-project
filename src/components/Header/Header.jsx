import React, { useState } from 'react';
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  MainName,
  OpenLinksButton,
  NavbarLinkExtended,
  SearchBarContainer,
} from './styled';
import LogoImg from '../../assets/images/logo.svg';
import SearchBar from '../SearchBar/SearchBar';

function Header() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const toggleNavbar = () => {
    setExtendNavbar((currentExtendNavbar) => !currentExtendNavbar);
  };

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Home</NavbarLink>
            <NavbarLink to="/select"> Select Quiz</NavbarLink>
            <NavbarLink to="/create-quiz"> Create Quiz</NavbarLink>
            <NavbarLink to="/favorite"> Favorite</NavbarLink>
            <OpenLinksButton onClick={toggleNavbar}>
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <SearchBarContainer>
          <SearchBar />
        </SearchBarContainer>

        <RightContainer>
          <Logo src={LogoImg}></Logo>
          <MainName>Fantasy-Quiz</MainName>
        </RightContainer>
      </NavbarInnerContainer>

      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/select"> Select Quiz</NavbarLinkExtended>
          <NavbarLinkExtended to="/create-quiz"> Create Quiz</NavbarLinkExtended>
          <NavbarLinkExtended to="/favorite"> Favorite</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Header;
