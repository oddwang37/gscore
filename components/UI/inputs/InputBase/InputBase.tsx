import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const InputBase: FC<InputProps> = (props) => {
  return <Field {...props} />;
};

export default InputBase;

type InputProps = InputHTMLAttributes<HTMLInputElement>;

type FieldProps = {
  disabled?: boolean;
};

const Field = styled.input<FieldProps>`
  height: 66px;
  width: 100%;
  display: block;
  background: #ffffff;
  border-width: 1px;
  border-style: solid;
  box-shadow: 0px 2px 12px rgba(20, 20, 43, 0.06);
  border-radius: 6px;
  padding: 25px 23px;
  color: #393939;
  caret-color: ${({ theme: { colors } }) => colors.primaryColor};
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
  margin-bottom: 24px;
  &:placeholder {
    color: #969696;
  }
  &:focus {
    outline: 1px solid #000;
  }
`;
