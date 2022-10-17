import { FC, useState } from 'react';
import styled from 'styled-components';
import { useForm, FieldValues } from 'react-hook-form';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'state/store';
import { authThunks } from 'state/ducks/auth';
import { authSelectors } from 'state/ducks/auth';

import { PrimaryButton } from 'components';
import { InputFormField } from '../components/InputFormField';

interface FormValues extends FieldValues {
  username: string;
  email: string;
}
const UpdatePersonalData: FC<UpdatePersonalProps> = () => {
  const currentEmail = useSelector(authSelectors.email);
  const currentUsername = useSelector(authSelectors.username);
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { isValid, isSubmitting, isDirty },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      username: '',
      email: '',
    },
  });
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const onSubmit = (data: FormValues) => {
    const username = data.username || currentUsername;
    const email = data.email || currentEmail;
    dispatch(authThunks.updatePersonalData({ username, email }))
      .unwrap()
      .then(() => {
        reset();
        setIsSuccessfullySubmitted(true);
      })
      .catch(({ statusCode }) => {
        switch (statusCode) {
          case 409:
            setError('email', { type: 'server', message: 'User with this email already exists' });
        }
        setIsSuccessfullySubmitted(false);
      });
  };

  if (isDirty && isSuccessfullySubmitted) {
    setIsSuccessfullySubmitted(false);
  }

  return (
    <Root>
      <Title>Personal Info</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <InputFormField
            control={control}
            name="username"
            placeholder="Username"
            rules={{
              minLength: { value: 2, message: 'Username must contain at least 2 characters' },
            }}
          />
          <InputFormField
            control={control}
            name="email"
            placeholder="Email"
            rules={{
              pattern: {
                value:
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                message: 'Email must be valid',
              },
            }}
          />
          {isSuccessfullySubmitted && <SuccessMessage>Data updated successfully</SuccessMessage>}
        </InputWrapper>
        <PrimaryButton disabled={!isDirty || !isValid} isLoading={isSubmitting}>
          Save
        </PrimaryButton>
      </Form>
    </Root>
  );
};

export default UpdatePersonalData;

type UpdatePersonalProps = {};
const Root = styled.div`
  padding-top: 64px;
  padding-bottom: 378px;
  width: 40%;
  @media (max-width: 992px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;
const Title = styled.h1`
  font-size: 28px;
`;
const Form = styled.form`
  margin-top: 24px;
  margin-bottom: 48px;
`;
const InputWrapper = styled.div`
  margin-bottom: 48px;
`;
const SuccessMessage = styled.div`
  color: ${({ theme }) => theme.colors.green};
  font-size: 14px;
  margin-top: 10px;
`;
