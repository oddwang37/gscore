import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { useAppDispatch } from 'state/store';

import { getMe } from 'state/ducks/auth/thunks';
import { Header, Steps, CreateAccountForm, LogInForm, CheckoutForm, Footer } from 'components';

const CreateAccount: NextPage = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const nextStep = () => setActiveStepIndex((prev) => prev + 1);
  const stepHeaders = ['Create Account', 'Log in', 'Checkout'];
  const contentArray = [
    <CreateAccountForm key="0" nextStep={nextStep} />,
    <LogInForm key="1" nextStep={nextStep} />,
    <CheckoutForm key="2" />,
  ];

  const dispatch = useAppDispatch();

  return (
    <Container>
      <Header />
      <Wrapper>
        <Steps
          contentArray={contentArray}
          stepHeaders={stepHeaders}
          activeStepIndex={activeStepIndex}
        />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default CreateAccount;

const Container = styled.div`
  margin: 0 6%;
`;
const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
