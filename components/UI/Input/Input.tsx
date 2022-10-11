import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

import { ErrorMessage } from './components';

const Input: FC<InputProps> = ({ error, ...props }) => {
  return (
    <>
      <Root {...props} error={error} />
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </>
  );
};

export default Input;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

type RootProps = {
  disabled?: boolean;
  error?: string;
};
const Root = styled.input<RootProps>`
  height: 66px;
  width: 100%;
  display: block;
  background: #ffffff;
  border: 1px solid #d7d7d7;
  box-shadow: 0px 2px 12px rgba(20, 20, 43, 0.06);
  border-radius: 6px;
  padding: 25px 23px;
  color: #393939;
  caret-color: #fc5842;
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
  margin-bottom: ${(p) => (p.error ? '10px' : '24px')};
  &:placeholder {
    color: #969696;
  }
  &:focus {
    outline: 1px solid #000;
  }
`;
