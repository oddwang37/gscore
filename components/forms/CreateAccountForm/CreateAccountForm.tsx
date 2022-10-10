import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { Input, PrimaryButton } from 'components';

const CreateAccountForm: FC<CreateAccountProps> = ({ nextStep }) => {
  return (
    <Root>
      <Title>Create account</Title>
      <Description>
        You need to enter your name and email. We will send you a temporary password by email
      </Description>
      <Form>
        <Input placeholder="Username" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
      </Form>
      <PrimaryButton onClick={nextStep}>Send password</PrimaryButton>
      <LogIn>
        Have an account? <LogInLink onClick={nextStep}>Go to the next step</LogInLink>
      </LogIn>
    </Root>
  );
};

export default CreateAccountForm;

type CreateAccountProps = {
  nextStep: () => void;
};

const Root = styled.div`
  padding-top: 64px;
  padding-bottom: 228px;
`;
const Title = styled.h1`
  font-size: 44px;
`;
const Description = styled.div`
  margin-top: 16px;
  font-size: 14px;
  line-height: 24px;
`;
const Form = styled.form`
  margin-top: 32px;
  margin-bottom: 48px;
`;
const LogIn = styled.div`
  margin-top: 48px;
`;
const LogInLink = styled.a`
  color: #fc5842;
  cursor: pointer;
  &:visited {
    color: #fc5842;
  }
`;
