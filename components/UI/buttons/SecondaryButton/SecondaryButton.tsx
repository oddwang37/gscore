import React, { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

const SecondaryButton: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Root {...rest} >
      <div>{children}</div>
    </Root>
  );
};

export default SecondaryButton;

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type RootProps = {
	disabled?: boolean;
}

export const Root = styled.button<RootProps>`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  background-color: #fff;
  opacity: ${p => p.disabled ? 0.6 : 1};
  color: #FC5842;
  border: none;
  cursor: pointer;
  box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);
  border-radius: 4px;
  padding: 20px 42px;
  height: 58px;
  font-family: THICCCBOI;
  &:hover {
    background-color: #FBFBFB;
  }
  &:focus {
  	outline: 4px solid rgba(252, 88, 66, 0.3);
  }
`;