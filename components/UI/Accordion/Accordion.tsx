import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { ChevronDown, ChevronRight } from 'components/svg';

const Accordion = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const switchIsOpened = () => {
    setIsOpened((prev) => !prev);
  };
  return (
    <Root isOpened={isOpened} onClick={switchIsOpened}>
      <div>
        <Title>Title</Title>
        {isOpened && <Text>Some text</Text>}
      </div>
      {isOpened ? <ChevronDown /> : <ChevronRight />}
    </Root>
  );
};

export default Accordion;

type RootProps = {
  isOpened: boolean;
};
const Root = styled.div<RootProps>`
  background-color: #272727;
  border-radius: 12px;
  padding: 2.5rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
`;
const Text = styled.div`
  line-height: 30px;
  font-size: 18px;
  margin-top: 16px;
  color: #d7d7d7;
`;
