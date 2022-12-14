import { useState } from 'react';
import styled from 'styled-components';

import { Steps, CreateAccountForm, LogInForm, CheckoutForm, Container } from 'components';

const CreateAccount = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const nextStep = () => setActiveStepIndex((prev) => prev + 1);
  const stepHeaders = ['Create Account', 'Log in', 'Checkout'];
  const contentArray = [
    <CreateAccountForm key="0" nextStep={nextStep} />,
    <LogInForm key="1" nextStep={nextStep} />,
    <CheckoutForm key="2" />,
  ];

  return (
    <Container>
      <Wrapper>
        <Steps
          contentArray={contentArray}
          stepHeaders={stepHeaders}
          activeStepIndex={activeStepIndex}
        />
      </Wrapper>
    </Container>
  );
};

export default CreateAccount;

const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
