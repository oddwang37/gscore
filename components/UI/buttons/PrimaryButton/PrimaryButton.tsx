import React, { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

import { Loader } from 'components';

const PrimaryButton: FC<ButtonProps> = ({ children, isLoading, ...rest }) => {
  return <Root {...rest}>{isLoading ? <Loader /> : <div>{children}</div>}</Root>;
};

export default PrimaryButton;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

type RootProps = {
  disabled?: boolean;
};

const Root = styled.button<RootProps>`
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  font-family: THICCCBOI;
  background-color: #fc5842;
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
  color: #fff;
  border: none;
  cursor: pointer;
  box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);
  border-radius: 4px;
  padding: 20px 60px;
  &:hover {
    background-color: #dc2b2b;
  }
  &:focus {
    outline: 4px solid rgba(252, 88, 66, 0.3);
  }
`;
