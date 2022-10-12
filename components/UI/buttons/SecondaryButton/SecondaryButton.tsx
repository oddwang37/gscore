import React, { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

import { BaseButton } from '../BaseButton';

const PrimaryButton: FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <Root {...rest}>
      <div>{children}</div>
    </Root>
  );
};

export default PrimaryButton;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Root = styled(BaseButton)`
  background-color: #fff;
  &:hover {
    background-color: #fbfbfb;
  }
`;
