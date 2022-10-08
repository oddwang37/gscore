import React, { FC } from 'react';
import styled from 'styled-components';

const StepHeader: FC<StepHeaderProps> = ({ title, isActive }) => {
  return (
    <Root>
      <Title>{title}</Title>
      <Indicator isActive={isActive} />
    </Root>
  );
};

export default StepHeader;

type StepHeaderProps = {
  title: string;
  isActive?: boolean;
};

type IndicatorProps = {
  isActive?: boolean;
};

const Root = styled.div`
  width: 195px;
`;
const Title = styled.div`
  font-size: 18px;
`;
const Indicator = styled.div<IndicatorProps>`
  height: 8px;
  background-color: ${(p) => (p.isActive ? '#fc5842' : '#393939')};
  border-radius: 4px;
  margin-top: 8px;
`;
