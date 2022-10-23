import React, { FC } from 'react';
import styled from 'styled-components';

const Container: FC<ContainerProps> = ({ children }) => {
  return <Root>{children}</Root>;
};

type ContainerProps = {
  children: React.ReactNode;
};

export default Container;

const Root = styled.div`
  margin: 0 6vw;
  @media (max-width: 576px) {
    margin: 0 4vw;
  }
`;
