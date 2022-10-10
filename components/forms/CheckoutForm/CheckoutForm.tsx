import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import { Input, PrimaryButton } from 'components';
import { Delete } from 'components/svg';

const CreateAccountForm = () => {

  return (
    <Root>
      <Title>Checkout</Title>
      <ListWrapper>
        <Header>
          <div>Package name</div>
          <div>Price</div>
        </Header>
        <ListItem>
          <div>Single site license</div>
          <Wrapper>
            <div>$77</div>
            <Delete />
          </Wrapper>
        </ListItem>
      </ListWrapper>
      <TotalWrapper>
        <div>Total:</div>
        <div>$77</div>
      </TotalWrapper>
      <PrimaryButton>Purschase</PrimaryButton>
    </Root>
  );
};

export default CreateAccountForm;

const Root = styled.div`
  padding-top: 64px;
  padding-bottom: 228px;
`;
const Title = styled.h1`
  font-size: 44px;
`
const ListWrapper = styled.div`
  background-color: #272727;
  font-size: 24px;
  border-radius: 12px;
  margin-top: 32px;
  margin-bottom: 24px;
`
const ListItem = styled.div`
  padding: 32px 48px;
  border-top: 1px solid #969696;
  display: flex;
  justify-content: space-between;
`
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`
const Header = styled.div`
  font-weight: 700;
  padding: 48px 72px 32px 32px;
  display: flex;
  justify-content: space-between;
`
const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 48px;
`
