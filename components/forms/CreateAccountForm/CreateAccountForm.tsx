import { FC, useEffect } from 'react';
import styled from 'styled-components';
import { useForm, FieldValues } from 'react-hook-form';
import { useSelector } from 'react-redux';

import patterns from 'constants/validation';
import cookies, { CookiesKeys } from 'services/cookies';
import { useAppDispatch } from 'state/store';
import { authThunks } from 'state/ducks/auth';
import { authSelectors } from 'state/ducks/auth';
import { PrimaryButton } from 'components';
import { InputFormField } from '../components';

interface FormValues extends FieldValues {
  username: string;
  email: string;
  password: string;
}

const CreateAccountForm: FC<CreateAccountProps> = ({ nextStep }) => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });
  const dispatch = useAppDispatch();
  const isLoading = useSelector(authSelectors.isLoading);

  useEffect(() => {
    const token = cookies.getItem(CookiesKeys.token);
    if (token) {
      nextStep();
    }
  });

  const onSubmit = async (data: FormValues) => {
    const { username, email, password } = data;
    try {
      await dispatch(authThunks.registerUser({ username, email, password })).unwrap();
      nextStep();
    } catch ({ statusCode }) {
      if (statusCode === 409) {
        setError('email', { type: 'server', message: 'User with this email already exists' });
      }
    }
  };
  return (
    <Root>
      <Title>Create account</Title>
      <Description>
        You need to enter your name and email. We will send you a temporary password by email
      </Description>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputsWrapper>
          <InputFormField
            control={control}
            name="username"
            placeholder="Username"
            rules={{ required: { value: true, message: 'This field is required' } }}
          />
          <InputFormField
            control={control}
            name="email"
            placeholder="Email"
            rules={{
              required: { value: true, message: 'This field is required' },
              pattern: {
                value: patterns.email,
                message: 'Email must be valid',
              },
            }}
          />
          <InputFormField
            control={control}
            name="password"
            placeholder="Password"
            rules={{
              required: { value: true, message: 'This field is required' },
              minLength: { value: 6, message: 'Password must be longer than 5 characters' },
            }}
          />
        </InputsWrapper>
        <PrimaryButton disabled={!isValid} isLoading={isLoading}>
          Send password
        </PrimaryButton>
      </Form>
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
  ${({ theme: { typography } }) => typography.title44}
`;
const Description = styled.div`
  margin-top: 16px;
  font-size: 14px;
  line-height: 24px;
`;
const Form = styled.form`
  margin-top: 32px;
`;
const InputsWrapper = styled.div`
  margin-bottom: 48px;
`;
const LogIn = styled.div`
  margin-top: 48px;
`;
const LogInLink = styled.a`
  color: ${({ theme: { colors } }) => colors.primaryColor};
  cursor: pointer;
  &:visited {
    color: ${({ theme: { colors } }) => colors.primaryColor};
  }
`;
