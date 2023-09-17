import React from 'react';
import ReactLogo from '../../assets/images/logo.svg';
import {
  ContainerFooter, WrapperFooter, Flex, Logo,
} from './styled';

function Footer() {
  return (
      <ContainerFooter>
        <WrapperFooter>
          <Flex>
          <Logo src={ReactLogo} alt="logo" />
            <p>Fantasy-Quiz</p>
          </Flex>
            <p>Play With Us</p>
        </WrapperFooter>
      </ContainerFooter>
  );
}

export default Footer;
