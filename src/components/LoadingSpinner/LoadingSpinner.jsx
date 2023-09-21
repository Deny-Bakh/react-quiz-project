import React from 'react';
import { SpinnerContainer, Spinner } from './styled';

function LoadingSpinner() {
  return (
    <SpinnerContainer>
      <Spinner></Spinner>
    </SpinnerContainer>
  );
}

export default LoadingSpinner;
