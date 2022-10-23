import React, { FC } from 'react';
import styled from 'styled-components';

import { Copy } from 'components/svg';

const CodeInput: FC<CodeInputProps> = ({ copyable, code }) => {
  return (
    <Root>
      <Field $copyable={copyable} readOnly defaultValue={code}/>
      {copyable && (
        <IconWrapper>
          <Copy />
        </IconWrapper>
      )}
    </Root>
  );
};

export default CodeInput;

type CodeInputProps = {
  copyable?: boolean;
  code: string;
};

type FieldProps = {
  $copyable?: boolean;
};

const Root = styled.div`
  position: relative;
`;
const IconWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 53%;
  transform: translateY(-50%);
  cursor: pointer;
  &:hover path {
    stroke: #c7c7c7;
  }
`;
const Field = styled.input<FieldProps>`
  height: 66px;
  width: 100%;
  display: block;
  background: #393939;
  box-shadow: 0px 2px 12px rgba(20, 20, 43, 0.06);
  border-radius: 6px;
  border: none;
  color: #969696;
  padding-right: ${({ $copyable }) => ($copyable ? '30%' : '0')};
  margin-bottom: 0;
  padding: 25px 23px;
  color: #393939;
  &:focus {
    outline: 1px solid #000;
  }
`;
