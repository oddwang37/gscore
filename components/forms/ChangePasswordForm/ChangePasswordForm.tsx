import { FC, useState } from 'react';
import styled from 'styled-components';
import { useForm, FieldValues } from 'react-hook-form';

import { useAppDispatch } from 'state/store';
import { authSelectors, authThunks } from 'state/ducks/auth';

import { InputFormField } from '../components/InputFormField';
import { PrimaryButton } from 'components';
import { useSelector } from 'react-redux';

interface FormValues extends FieldValues {
  currentPassword: string;
  newPassword: string;
}

const ChangePasswordForm: FC<ChangePasswordFormProps> = () => {
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { isValid, isDirty },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      currentPassword: '',
      newPassword: '',
    },
  });
  const dispatch = useAppDispatch();
  const userEmail = useSelector(authSelectors.email);
  const isLoading = useSelector(authSelectors.isLoading);

  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState<boolean>(false);

  const onSubmit = (data: FormValues) => {
    const { currentPassword, newPassword } = data;
    dispatch(authThunks.loginUser({ email: userEmail, password: currentPassword }))
      .unwrap()
      .then(() => {
        dispatch(authThunks.updatePassword({ currentPassword, newPassword }))
          .unwrap()
          .then(() => {
            reset();
            setIsSuccessfullySubmitted(true);
          });
      })
      .catch(({ statusCode }) => {
        switch (statusCode) {
          case 400: {
            setError('currentPassword', { type: 'server', message: 'Incorrect password' });
            setIsSuccessfullySubmitted(false);
            break;
          }
        }
      });
  };

  if (isDirty && isSuccessfullySubmitted) {
    setIsSuccessfullySubmitted(false);
  }
  return (
    <Root>
      <Title>Change password</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputsWrapper>
          <InputFormField
            control={control}
            name="currentPassword"
            placeholder="Current Password"
            rules={{ required: 'This field is required' }}
          />
          <InputFormField
            control={control}
            name="newPassword"
            placeholder="New Password"
            rules={{
              required: 'This field is required',
              minLength: { value: 6, message: 'Password must contain more than 5 characters' },
            }}
          />
          {isSuccessfullySubmitted && <SuccessMessage>Data updated successfully</SuccessMessage>}
        </InputsWrapper>
        <PrimaryButton disabled={!isValid} isLoading={isLoading}>
          Save
        </PrimaryButton>
      </Form>
    </Root>
  );
};

export default ChangePasswordForm;

type ChangePasswordFormProps = {};
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
const InputsWrapper = styled.div`
  margin-bottom: 48px;
`;
const SuccessMessage = styled.div`
  color: ${({ theme }) => theme.colors.green};
  font-size: 14px;
  margin-top: 10px;
`;
