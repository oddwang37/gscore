import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { Check } from 'components/svg';

const Checkbox: FC<CheckboxProps> = ({ disabled, checked, onClick }) => {
  return (
    <CheckboxContainer onClick={onClick}>
      <HiddenCheckbox defaultChecked={checked} disabled={disabled} />
      <StyledCheckbox $checked={checked} $disabled={disabled}>
        <IconWrapper>
          <Check />
        </IconWrapper>
      </StyledCheckbox>
    </CheckboxContainer>
  );
};

export default Checkbox;

type CheckboxProps = {
  disabled?: boolean;
  checked?: boolean;
  onClick?: () => void;
};
type HiddenCheckboxProps = {
  disabled?: boolean;
};
type StyledCheckboxProps = {
  $checked?: boolean;
  $disabled?: boolean;
};

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 28px;
  height: 28px;
`;

const IconWrapper = styled.div``;
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })<HiddenCheckboxProps>`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<StyledCheckboxProps>`
  width: 28px;
  height: 28px;
  background-color: ${({ $checked }) => ($checked ? '#fc5842;' : '#fff')};
  border: ${({ $checked }) => ($checked ? 'none' : '1px solid #C7C7C7')};
  box-shadow: ${({ $checked }) => ($checked ? 'none' : '0px 2px 6px rgba(20, 20, 43, 0.06)')};
  border-radius: 7px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & path {
    stroke: #fff;
  }
  &:hover {
    background-color: ${({ $checked }) => ($checked ? '#DC2B2B' : '#C7C7C7')};
  }
  ${HiddenCheckbox}:focus + & {
    outline: 4px solid rgba(252, 88, 66, 0.3);
  }

  ${IconWrapper} {
    transform: scale(0.7);
    visibility: ${({ $checked }) => ($checked ? 'visible' : 'hidden')};
  }
`;
