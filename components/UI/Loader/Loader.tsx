import React from 'react';
import styled from 'styled-components';

import { Loader as Circle } from 'components/svg';

const Loader = () => {
  return (
    <Root>
      <Circle />
    </Root>
  );
};

export default Loader;

const Root = styled.div`
  width: 24px;
  height: 24px;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  animation: spin 1.5s linear infinite;
`;
