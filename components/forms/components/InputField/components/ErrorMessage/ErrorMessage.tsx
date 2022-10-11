import React, { FC } from 'react';
import styled from 'styled-components';

const ErrorMessage: FC<ErrorMessageProps> = ({ children }) => {
  return <Root>{children}</Root>;
};

export default ErrorMessage;

type ErrorMessageProps = {
  children: string;
};

const Root = styled.div`
  color: #dc2b2b;
  margin-top: 2px;
  margin-bottom: 4px;
`;
