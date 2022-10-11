import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

import { ErrorMessage } from './components';
import { Check, Close } from 'components/svg';

const Input: FC<InputProps> = ({ error, isDirty, ...props }) => {
  return (
    <Root>
      <Field {...props} error={error} isDirty={isDirty} />
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      <IconWrapper>
        {error && <Close />}
        {!error && isDirty && <Check />}
      </IconWrapper>
    </Root>
  );
};

export default Input;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  isDirty: boolean;
}

type FieldProps = {
  disabled?: boolean;
  error?: string;
  isDirty: boolean;
};
const Root = styled.div`
  position: relative;
`;
const IconWrapper = styled.div`
  position: absolute;
  right: 25px;
  top: 20px;
`;

const Field = styled.input<FieldProps>`
  height: 66px;
  width: 100%;
  display: block;
  background: #ffffff;
  border-width: 1px;
  border-style: solid;
  border-color: ${(p) => {
    if (p.error) {
      return '#ff5a65';
    } else if (p.isDirty) {
      return '#05C168';
    }
  }};
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
