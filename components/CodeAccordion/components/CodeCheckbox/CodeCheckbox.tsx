import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { RootState, useAppDispatch } from 'state/store';
import { codesSelectors } from 'state/ducks/codes';
import { selectCode, deselectCode } from 'state/ducks/codes';
import Checkbox from 'components/UI/Checkbox/Checkbox';

const CodeCheckbox: FC<CodeCheckboxProps> = ({ codeId }) => {
  const isChecked = useSelector((state: RootState) => codesSelectors.isCodeSelected(state, codeId));
  const dispatch = useAppDispatch();

  const onClick = () => {
    if (isChecked) {
      dispatch(deselectCode(codeId));
    } else {
      dispatch(selectCode(codeId));
    }
  };
  return <Checkbox onClick={onClick} checked={isChecked} />;
};

export default CodeCheckbox;

type CodeCheckboxProps = {
  codeId: number;
};
