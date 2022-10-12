import { FC } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { PrimaryButton } from 'components';
import { InputBase } from 'components';

const LogInForm: FC<LogInFormProps> = ({ nextStep }) => {
  return (
    <Root>
      <Title>Log In</Title>
      <Form>
        <InputBase placeholder="Email" />
        <InputBase placeholder="Password" />
      </Form>
      <PrimaryButton onClick={nextStep}>Log In</PrimaryButton>
    </Root>
  );
};

export default LogInForm;

type LogInFormProps = {
  nextStep: () => void;
};
const Root = styled.div`
  padding-top: 64px;
  padding-bottom: 228px;
`;
const Title = styled.h1`
  ${({ theme: { typography } }) => typography.title44}
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
