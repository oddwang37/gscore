import { FC } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { Input, PrimaryButton } from 'components';

const SettingsForm: FC<SettingsFormProps> = ({ nextStep }) => {

  return (
    <Root>
      <Title>Personal Info</Title>
      <Form>
        <Input placeholder="Username" />
        <Input placeholder="Email" />
      </Form>
      <PrimaryButton onClick={nextStep}>Save</PrimaryButton>
    </Root>
  );
};

export default SettingsForm;

type SettingsFormProps = {
  nextStep: () => void;
};
const Root = styled.div`
  padding-top: 64px;
  padding-bottom: 378px;
  width: 40%;
`;
const Title = styled.h1`
  font-size: 28px;
`;
const Form = styled.form`
  margin-top: 24px;
  margin-bottom: 48px;
`;
