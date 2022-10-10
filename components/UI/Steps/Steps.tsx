import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { StepHeader } from './components';

const Steps: FC<StepsProps> = ({ stepHeaders, contentArray, activeStepIndex }) => {
  return (
    <Root>
      <StepHeaders>
        {stepHeaders.map((header, index) => (
          <StepHeader title={header} isActive={index <= activeStepIndex} key={index} />
        ))}
      </StepHeaders>
      <StepContent>{contentArray[activeStepIndex]}</StepContent>
    </Root>
  );
};

export default Steps;

type StepsProps = {
  activeStepIndex: number;
  stepHeaders: Array<string>;
  contentArray: Array<JSX.Element>;
};

const Root = styled.div``;

const StepHeaders = styled.div`
  display: flex;
  gap: 12px;
`;
const StepContent = styled.div``;
