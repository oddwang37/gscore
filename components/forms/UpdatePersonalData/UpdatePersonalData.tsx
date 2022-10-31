import { FC } from 'react';
import styled from 'styled-components';
import { useForm, FieldValues } from 'react-hook-form';

import patterns from 'constants/validation';
import { useEditUser } from 'hooks/useEditUser';

import { PrimaryButton } from 'components';
import { InputFormField } from '../components/InputFormField';

interface FormValues extends FieldValues {
  username: string;
  email: string;
}
const UpdatePersonalData: FC<UpdatePersonalProps> = () => {
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { isValid, isDirty },
  } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      username: '',
      email: '',
    },
  });

  const { onSubmit, isLoading, isSuccessfullySubmitted } = useEditUser(
    reset,
    setError,
    isDirty,
  );

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
                value: patterns.email,
                message: 'Email must be valid',
              },
            }}
          />
          {isSuccessfullySubmitted && <SuccessMessage>Data updated successfully</SuccessMessage>}
        </InputWrapper>
        <PrimaryButton disabled={!isDirty || !isValid} isLoading={isLoading}>
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
