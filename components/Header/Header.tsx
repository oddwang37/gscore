import React, { FC, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { ChevronDown, Logo } from 'components/svg';
import { HeaderDropdown } from './components';
import { authSelectors } from 'state/ducks/auth';

const Header = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const openDropdown = () => setIsOpened(true);
  const closeDropdown = () => setIsOpened(false);

  const username = useSelector(authSelectors.username);

  return (
    <Root>
      <Container>
        <Link href="/">
          <SLink>
            <Logo />
          </SLink>
        </Link>
        {username && (
          <FlexWrapper>
            <Link href="/my-subscriptions">
              <SLink>My subscriptions</SLink>
            </Link>
            <UserWrapper>
              <Username>{username}</Username>
              <IconWrapper>
                {isOpened ? (
                  <ChevronUp onClick={closeDropdown}>
                    <ChevronDown />
                  </ChevronUp>
                ) : (
                  <ChevronDown onClick={openDropdown} />
                )}
              </IconWrapper>
            </UserWrapper>
            <HeaderDropdown isOpened={isOpened} closeDropdown={closeDropdown} />
            {/* <PrimaryButton>Get Gscore</PrimaryButton> */}
          </FlexWrapper>
        )}
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
  position: relative;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const UserWrapper = styled.div`
  display: flex;
  gap: 8px;
  color: #fff;
`;
const FlexWrapper = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
`;
const Username = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
  align-items: center;
`;
const SLink = styled.a`
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
`;
const ChevronUp = styled.div`
  width: 24px;
  height: 24px;
  transform: rotateZ(180deg);
`;
const IconWrapper = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
`;
