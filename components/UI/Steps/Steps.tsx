import React, { FC, useState } from 'react';
import styled from 'styled-components';

import { StepHeader } from './components';

const Steps = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(1);

  const stepHeaders = ['Profile', 'Subscriptions', 'Change password'];

  const steps = [
    <div key="0">one div</div>,
    <div key="1">other div</div>,
    <div key="2">another one div</div>,
  ];

  const onChangeCategory = (index: number) => {
    setActiveStepIndex(index);
  };

  return (
    <Root>
      <StepHeaders>
        {stepHeaders.map((header, index) => (
          <StepHeader title={header} isActive={index <= activeStepIndex} key={index} />
        ))}
      </StepHeaders>
      <StepContent>{steps[activeStepIndex]}</StepContent>
    </Root>
  );
};

export default Steps;

const Root = styled.div``;

const StepHeaders = styled.div`
  display: flex;
  gap: 12px;
`;
const StepContent = styled.div``;
