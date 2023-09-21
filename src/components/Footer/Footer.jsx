import React from 'react';
import ReactLogo from '../../assets/images/logo.svg';
import {
  ContainerFooter, WrapperFooter, Flex, Logo, CustomLink,
} from './styled';

function Footer() {
  const linkedInURL = 'https://www.linkedin.com/in/denys-bakhmachuk/';

  return (
      <ContainerFooter>
        <WrapperFooter>
          <Flex>
          <Logo src={ReactLogo} alt="logo" />
            <p>Fantasy-Quiz</p>
          </Flex>
          <CustomLink to={linkedInURL} target="_blank" rel="noopener noreferrer">
            <p>Who Are We?</p>
          </CustomLink>
        </WrapperFooter>
      </ContainerFooter>
  );
}

export default Footer;
