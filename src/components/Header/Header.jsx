// import React, { useState } from 'react';
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
// } from './styled';
// import LogoImg from '../../assets/images/logo.svg';

// function Header() {
//   const [extendNavbar, setExtendNavbar] = useState(false);

//   return (
//     <NavbarContainer extendNavbar={extendNavbar}>
//       <NavbarInnerContainer>
//         <LeftContainer>
//           <NavbarLinkContainer>
//             <NavbarLink to="/"> Home</NavbarLink>
//             <NavbarLink to="/select"> Select Quiz</NavbarLink>
//             <NavbarLink to="/create"> Create Quiz</NavbarLink>
//             <NavbarLink to="/about"> About Us</NavbarLink>
//             <OpenLinksButton
//               onClick={() => {
//                 setExtendNavbar((curr) => !curr);
//               }}
//             >
//               {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
//             </OpenLinksButton>
//           </NavbarLinkContainer>
//         </LeftContainer>
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
//           <NavbarLinkExtended to="/about"> About Us</NavbarLinkExtended>
//         </NavbarExtendedContainer>
//       )}
//     </NavbarContainer>
//   );
// }

// export default Header;

// import React, { useState } from 'react';
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
//   NavbarLinkExtended, // Added import for extended links
//   SearchBarContainer,
//   SearchInput,
//   SearchButton,
// } from './styled';
// import LogoImg from '../../assets/images/logo.svg';

// function Header() {
//   const [extendNavbar, setExtendNavbar] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearchInputChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearch = () => {
//     // Implement your search logic here using the 'searchQuery' state
//     console.log(`Searching for: ${searchQuery}`);
//   };

//   // Function to toggle the extended navbar
//   const toggleNavbar = () => {
//     setExtendNavbar((currentExtendNavbar) => !currentExtendNavbar);
//   };

//   return (
//     <NavbarContainer extendNavbar={extendNavbar}>
//       <NavbarInnerContainer>
//         <LeftContainer>
//           <NavbarLinkContainer>
//             <NavbarLink to="/"> Home</NavbarLink>
//             <NavbarLink to="/select"> Select Quiz</NavbarLink>
//             <NavbarLink to="/create"> Create Quiz</NavbarLink>
//             <NavbarLink to="/about"> About Us</NavbarLink>
//             <OpenLinksButton onClick={toggleNavbar}>
//               {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
//             </OpenLinksButton>
//           </NavbarLinkContainer>
//         </LeftContainer>
//         <RightContainer>
//           <Logo src={LogoImg}></Logo>
//           <MainName>Fantasy-Quiz</MainName>
//           {/* Search bar */}
//           <SearchBarContainer>
//             <SearchInput
//               type="text"
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={handleSearchInputChange}
//             />
//             <SearchButton onClick={handleSearch}>Search</SearchButton>
//           </SearchBarContainer>
//         </RightContainer>
//       </NavbarInnerContainer>
//       {extendNavbar && (
//         <NavbarExtendedContainer>
//           {/* Extended navigation links */}
//           <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
//           <NavbarLinkExtended to="/select"> Select Quiz</NavbarLinkExtended>
//           <NavbarLinkExtended to="/create"> Create Quiz</NavbarLinkExtended>
//           <NavbarLinkExtended to="/about"> About Us</NavbarLinkExtended>
//         </NavbarExtendedContainer>
//       )}
//     </NavbarContainer>
//   );
// }

// export default Header;

// import React, { useState } from 'react';
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
// } from './styled'; // Import the styled components from your styled.js file
// import LogoImg from '../../assets/images/logo.svg';

// function Header() {
//   const [extendNavbar, setExtendNavbar] = useState(false);

//   const toggleNavbar = () => {
//     setExtendNavbar((currentExtendNavbar) => !currentExtendNavbar);
//   };

//   return (
//     <NavbarContainer extendNavbar={extendNavbar}>
//       <NavbarInnerContainer>
//         <LeftContainer>
//           <NavbarLinkContainer>
//             <NavbarLink to="/"> Home</NavbarLink>
//             <NavbarLink to="/select"> Select Quiz</NavbarLink>
//             <NavbarLink to="/create"> Create Quiz</NavbarLink>
//             <NavbarLink to="/about"> About Us</NavbarLink>
//             <OpenLinksButton onClick={toggleNavbar}>
//               {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
//             </OpenLinksButton>
//           </NavbarLinkContainer>
//         </LeftContainer>
//         {/* Search bar */}
//         <SearchBarContainer>
//           <SearchInput
//             type="text"
//             placeholder="Search..."
//             // Add your search input state and onChange handler here
//           />
//           <SearchButton onClick={() => {/* Implement your search function here */}}>
//             Search
//           </SearchButton>
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
//           <NavbarLinkExtended to="/about"> About Us</NavbarLinkExtended>
//         </NavbarExtendedContainer>
//       )}
//     </NavbarContainer>
//   );
// }

// export default Header;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
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
  SearchInput,
  SearchButton,
} from './styled'; // Import the styled components from your styled.js file
import LogoImg from '../../assets/images/logo.svg';

function Header() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // Add search query state
  const navigate = useNavigate(); // Initialize navigate for navigation

  const toggleNavbar = () => {
    setExtendNavbar((currentExtendNavbar) => !currentExtendNavbar);
  };

  // Function to handle search
  const handleSearch = () => {
    // Navigate to the quiz detail page with the searchQuery as a parameter
    navigate(`/quiz/${searchQuery}`);
  };

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/"> Home</NavbarLink>
            <NavbarLink to="/select"> Select Quiz</NavbarLink>
            <NavbarLink to="/create"> Create Quiz</NavbarLink>
            <NavbarLink to="/about"> About Us</NavbarLink>
            <OpenLinksButton onClick={toggleNavbar}>
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        {/* Search bar */}
        <SearchBarContainer>
          <SearchInput
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchButton onClick={handleSearch}>Search</SearchButton>
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
          <NavbarLinkExtended to="/about"> About Us</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Header;
