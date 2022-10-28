import React, { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { RootState } from 'state/store';
import { codesSelectors } from 'state/ducks/codes';

import { Container, CodeAccordion } from 'components';

const Codes: FC<CodesProps> = ({ subscribeId }) => {
  const codes = useSelector((state: RootState) => codesSelectors.codesOfSub(state, subscribeId));

  return (
    <Root>
      {codes.map((code) => (
        <CodeAccordion
          status={code.status}
          code={code.code}
          origin={code.origin ? code.origin : ''}
          id={code.id}
          key={code.id}
        />
      ))}
    </Root>
  );
};

export default Codes;

type CodesProps = {
  subscribeId: number;
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 32px;
`;
