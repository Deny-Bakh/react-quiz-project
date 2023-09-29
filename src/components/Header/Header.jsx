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
            <NavbarLink to="/create"> Create Quiz</NavbarLink>
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
          <NavbarLinkExtended to="/create"> Create Quiz</NavbarLinkExtended>
          <NavbarLinkExtended to="/favorite"> Favorite</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Header;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   NavbarContainer,
//   LeftContainer,
//   RightContainer,
//   NavbarExtendedContainer,
//   NavbarInnerContainer,
//   NavbarLinkContainer,
//   NavbarLink,
//   Logo,
//   MainName,
//   OpenLinksButton,
//   NavbarLinkExtended,
//   SearchBarContainer,
//   SearchInput,
//   SearchButton,
// } from './styled';
// import LogoImg from '../../assets/images/logo.svg';

// function Header() {
//   const [extendNavbar, setExtendNavbar] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();

//   const toggleNavbar = () => {
//     setExtendNavbar((currentExtendNavbar) => !currentExtendNavbar);
//   };

//   const handleSearch = () => {
//     if (searchQuery.trim() !== '') {
//       navigate(`/quiz/${searchQuery}`);
//       setSearchQuery('');
//     }
//   };

//   return (
//     <NavbarContainer extendNavbar={extendNavbar}>
//       <NavbarInnerContainer>
//         <LeftContainer>
//           <NavbarLinkContainer>
//             <NavbarLink to="/"> Home</NavbarLink>
//             <NavbarLink to="/select"> Select Quiz</NavbarLink>
//             <NavbarLink to="/create"> Create Quiz</NavbarLink>
//             <NavbarLink to="/favorite"> Favorite</NavbarLink>
//             <OpenLinksButton onClick={toggleNavbar}>
//               {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
//             </OpenLinksButton>
//           </NavbarLinkContainer>
//         </LeftContainer>
//         <SearchBarContainer>
//           <SearchInput
//             type="text"
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <SearchButton onClick={handleSearch}>Search</SearchButton>
//         </SearchBarContainer>

//         <RightContainer>
//           <Logo src={LogoImg}></Logo>
//           <MainName>Fantasy-Quiz</MainName>
//         </RightContainer>
//       </NavbarInnerContainer>

//       {extendNavbar && (
//         <NavbarExtendedContainer>
//           <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
//           <NavbarLinkExtended to="/select"> Select Quiz</NavbarLinkExtended>
//           <NavbarLinkExtended to="/create"> Create Quiz</NavbarLinkExtended>
//           <NavbarLinkExtended to="/favorite"> Favorite</NavbarLinkExtended>
//         </NavbarExtendedContainer>
//       )}
//     </NavbarContainer>
//   );
// }

// export default Header;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   NavbarContainer,
//   LeftContainer,
//   RightContainer,
//   NavbarExtendedContainer,
//   NavbarInnerContainer,
//   NavbarLinkContainer,
//   NavbarLink,
//   Logo,
//   MainName,
//   OpenLinksButton,
//   NavbarLinkExtended,
//   SearchBarContainer,
//   SearchInput,
//   SearchButton,
// } from './styled';
// import LogoImg from '../../assets/images/logo.svg';

// function Header() {
//   const [extendNavbar, setExtendNavbar] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const navigate = useNavigate();

//   const toggleNavbar = () => {
//     setExtendNavbar((currentExtendNavbar) => !currentExtendNavbar);
//   };

//   const handleSearch = () => {
//     navigate(`/quiz/${searchQuery}`);
//     setSearchQuery('');
//   };

//   return (
//     <NavbarContainer extendNavbar={extendNavbar}>
//       <NavbarInnerContainer>
//         <LeftContainer>
//           <NavbarLinkContainer>
//             <NavbarLink to="/"> Home</NavbarLink>
//             <NavbarLink to="/select"> Select Quiz</NavbarLink>
//             <NavbarLink to="/create"> Create Quiz</NavbarLink>
//             <NavbarLink to="/favorite"> Favorite</NavbarLink>
//             <OpenLinksButton onClick={toggleNavbar}>
//               {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
//             </OpenLinksButton>
//           </NavbarLinkContainer>
//         </LeftContainer>
//         <SearchBarContainer>
//           <SearchInput
//             type="text"
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <SearchButton onClick={handleSearch}>Search</SearchButton>
//         </SearchBarContainer>

//         <RightContainer>
//           <Logo src={LogoImg}></Logo>
//           <MainName>Fantasy-Quiz</MainName>
//         </RightContainer>
//       </NavbarInnerContainer>

//       {extendNavbar && (
//         <NavbarExtendedContainer>
//           <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
//           <NavbarLinkExtended to="/select"> Select Quiz</NavbarLinkExtended>
//           <NavbarLinkExtended to="/create"> Create Quiz</NavbarLinkExtended>
//           <NavbarLinkExtended to="/favorite"> Favorite</NavbarLinkExtended>
//         </NavbarExtendedContainer>
//       )}
//     </NavbarContainer>
//   );
// }

// export default Header;
