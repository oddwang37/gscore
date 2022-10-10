import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const Input: FC<InputProps> = (props) => {
  return <Root {...props} />;
};

export default Input;

type InputProps = InputHTMLAttributes<HTMLInputElement>;

type RootProps = {
  disabled?: boolean;
}
const Root = styled.input`
  height: 66px;
  width: 100%;
  display: block;
  background: #FFFFFF;
  border: 1px solid #D7D7D7;
  box-shadow: 0px 2px 12px rgba(20, 20, 43, 0.06);
  border-radius: 6px;
  padding: 25px 23px;
  color: #393939;
  caret-color: #FC5842;
  opacity: ${p => p.disabled ? 0.6 : 1};
  margin-bottom: 24px;
  &:placeholder {
    color: #969696;
  }
  &:focus {
    outline: 1px solid #000;
  }
`;