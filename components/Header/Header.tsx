import React, { FC, useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { ChevronDown, Logo, Burger } from 'components/svg';
import { HeaderDropdown, RightMenu } from './components';
import { authSelectors } from 'state/ducks/auth';
import { getMe } from 'state/ducks/auth/thunks';
import { useAppDispatch } from 'state/store';

const Header = () => {
  const dispatch = useAppDispatch();

  const [isDropdownOpened, setIsDropdownOpened] = useState<boolean>(false);

  const openDropdown = () => setIsDropdownOpened(true);
  const closeDropdown = () => setIsDropdownOpened(false);

  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const openMenu = () => setIsMenuOpened(true);
  const closeMenu = () => setIsMenuOpened(false);

  const username = useSelector(authSelectors.username);

  useEffect(() => {
    dispatch(getMe());
  });
  return (
    <Root>
      <Container>
        <Link href="/">
          <SLink>
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
          </SLink>
        </Link>
        {username && (
          <>
            <FlexWrapper>
              <Link href="/my-subscriptions">
                <SLink>My subscriptions</SLink>
              </Link>
              <UserWrapper>
                <Username>{username}</Username>
                <IconWrapper>
                  {isDropdownOpened ? (
                    <ChevronUp onClick={closeDropdown}>
                      <ChevronDown />
                    </ChevronUp>
                  ) : (
                    <ChevronDown onClick={openDropdown} />
                  )}
                </IconWrapper>
              </UserWrapper>
              <HeaderDropdown isOpened={isDropdownOpened} closeDropdown={closeDropdown} />
              {/* <PrimaryButton>Get Gscore</PrimaryButton> */}
            </FlexWrapper>
            <BurgerMenu onClick={openMenu}>
              <Burger />
            </BurgerMenu>
            <RightMenu closeMenu={closeMenu} isOpened={isMenuOpened} />
          </>
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
  @media (max-width: 576px) {
    margin-top: 20px;
    padding: 0;
    position: static;
  }
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
  @media (max-width: 576px) {
    display: none;
  }
`;
const Username = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
  align-items: center;
`;
const LogoWrapper = styled.div`
  @media (max-width: 576px) {
    transform: scale(0.8) translateX(-12%);
  }
`;
const SLink = styled.a`
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  display: block;
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
const BurgerMenu = styled.div`
  display: none;
  @media (max-width: 576px) {
    display: block;
  }
`;
