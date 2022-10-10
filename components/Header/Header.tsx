import React, { FC } from 'react';
import { Logo } from 'components/svg';
import styled from 'styled-components';

import { PrimaryButton } from 'components';
import { ChevronDown } from 'components/svg';

const Header = () => {
  return (
    <Root>
      <Container>
        <Logo />
          <FlexWrapper>
            <UserWrapper>
            <Username>Alex</Username>
            <ChevronDown />
          </UserWrapper>
          <PrimaryButton>Get Gscore</PrimaryButton>
        </FlexWrapper>
      </Container>
    </Root>
  );
};

export default Header;

const Root = styled.div`
  width: 100%;
  height: 105px;
  padding: 32px 0;
  margin-bottom: 32px;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const UserWrapper = styled.div`
  display: flex;
  gap: 8px;
  color: #fff;
`
const FlexWrapper = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`
const Username = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
  align-items: center;
`