import { FC } from 'react';
import styled from 'styled-components';
import { useForm, FieldValues } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'state/store';
import { authThunks } from 'state/ducks/auth';
import { authSelectors } from 'state/ducks/auth';
import { PrimaryButton } from 'components';
import { InputField } from '../components';

interface FormValues extends FieldValues {
  email: string;
  password: string;
}

const LogInForm: FC<LogInFormProps> = ({ nextStep }) => {
  const isLoading = useSelector(authSelectors.isLoading);
  const {
    control,
    handleSubmit,
    setError,
    formState: { isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const dispatch = useAppDispatch();

  const onSubmit = (data: FormValues) => {
    const { username, email, password } = data;
    dispatch(authThunks.loginUser({ email, password }))
      .unwrap()
      .then(() => {
        nextStep();
      })
      .catch(({ statusCode }) => {
        switch (statusCode) {
          case 400: {
            setError('password', { type: 'server', message: 'Incorrect password' });
            break;
          }
          case 404: {
            setError('email', { type: 'server', message: 'User with this email is not found' });
            break;
          }
        }
      });
  };

  return (
    <Root>
      <Title>Log In</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputsWrapper>
          <InputField
            control={control}
            name="email"
            placeholder="Email"
            rules={{
              required: { value: true, message: 'This field is required' },
              pattern: {
                value:
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                message: 'Email must be valid',
              },
            }}
          />
          <InputField
            control={control}
            name="password"
            placeholder="Password"
            rules={{ required: 'This field is required' }}
          />
        </InputsWrapper>
        <PrimaryButton disabled={!isValid} isLoading={isLoading}>
          Log In
        </PrimaryButton>
      </Form>
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
const Form = styled.form`
  margin-top: 32px;
  margin-bottom: 48px;
`;
const InputsWrapper = styled.div`
  margin-bottom: 48px;
`;
