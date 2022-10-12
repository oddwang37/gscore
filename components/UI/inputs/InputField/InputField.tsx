import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

import { ErrorMessage } from 'components/UI/inputs/InputField/components';
import { Check, Close } from 'components/svg';
import { InputBase } from '../InputBase';

const InputField: FC<InputProps> = ({ error, isDirty, ...props }) => {
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

export default InputField;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  isDirty?: boolean;
}

type FieldProps = {
  disabled?: boolean;
  error?: string;
  isDirty?: boolean;
};
const Root = styled.div`
  position: relative;
`;
const IconWrapper = styled.div`
  position: absolute;
  right: 25px;
  top: 20px;
`;

const Field = styled(InputBase)<FieldProps>`
  border-width: 1px;
  border-style: solid;
  border-color: ${(p) => {
    if (p.error) {
      return '#ff5a65';
    } else if (p.isDirty) {
      return '#05C168';
    } else {
      return 'rgba(0, 0, 0, 0)';
    }
  }};
  margin-bottom: ${(p) => (p.error ? '10px' : '24px')};
  &:placeholder {
    color: #969696;
  }
  &:focus {
    outline: 1px solid
      ${(p) => {
        if (p.error) {
          return '#ff5a65';
        } else if (p.isDirty) {
          return '#05C168';
        } else {
          return '#000';
        }
      }};
  }
`;
