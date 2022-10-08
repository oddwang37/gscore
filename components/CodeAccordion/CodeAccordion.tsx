import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { SecondaryButton, Checkbox } from 'components';
import { CodeInput } from './components';

const CodeAccordion = () => {
  const [isOpened, setIsOpened ] = useState<boolean>(false);
  const status = 'active';

  const switchOpened = () => {
    setIsOpened(prev => !prev);
  }

  return (
    <Root onClick={switchOpened}>
      <Checkbox />
      <div>
        {isOpened && <Heading>License code</Heading>}
        <CodeInput copyable/>
      </div>
      <div>
        {isOpened && <Heading>Domain</Heading>}
        <CodeInput />
      </div>
      <div>
        {isOpened && <Heading><InvisibleText>text</InvisibleText></Heading>}
        <SecondaryButton>Activate</SecondaryButton>
      </div>
      <div>
        {isOpened && <Heading>Status</Heading>}
        <Status status={status}>{status}</Status>
      </div>
    </Root>
  );
};

export default CodeAccordion;

type Status = 'active' | 'hold' | 'inactive';

type RootProps = {
  status: Status;
}

type StatusProps = {
  status: Status;
}

const Root = styled.div<RootProps>`
  width: 100%;
  padding: 2.5% 6% 2.5% 2.5%;
  background-color: #272727;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 5% 24% 1fr 10% 8%;
  gap: 20px;
  grid-template-rows: 1fr;
  align-items: center;
  cursor: pointer;

`;
const Heading = styled.div`
  color: #969696;
  font-weight: 700;
  margin-bottom: 12px;
`
const InvisibleText = styled.div`
  opacity: 0;
`
const Status = styled.div<StatusProps>`
  font-size: 22px;
  font-weight: 700;
  text-transform: capitalize;
  justify-self: end;
  color: ${p => {
    switch (p.status) {
      case 'active':
        return '#05C168';
      case 'hold':
        return '#FF9E2C';
      case 'inactive':
        return '#FF5A65';
    }
  }};
`