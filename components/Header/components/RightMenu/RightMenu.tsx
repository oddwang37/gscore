import React, { FC, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { useAppDispatch } from 'state/store';
import { logout } from 'state/ducks/auth/slices';
import { authSelectors } from 'state/ducks/auth';

import { Settings, Logout, Close, Logo, ChevronDown } from 'components/svg';
import { HeaderDropdown } from '../HeaderDropdown';

const RightMenu: FC<RightMenuProps> = ({ isOpened, closeMenu }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [isDropdownOpened, setIsDropdownOpened] = useState<boolean>(false);

  const openDropdown = () => setIsDropdownOpened(true);
  const closeDropdown = () => setIsDropdownOpened(false);

  const onLogoutClick = () => {
    dispatch(logout());
    router.reload();
    closeDropdown();
  };

  const onSettingsClick = () => {
    closeMenu();
    closeDropdown();
  };

  const username = useSelector(authSelectors.username);

  return (
    <Root $isOpened={isOpened}>
      <Header>
        <CloseWrapper>
          <Close onClick={closeMenu} />
        </CloseWrapper>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
      </Header>
      <MenuItems>
        <Link href="/my-subscriptions">
          <MenuItem>My subscriptions</MenuItem>
        </Link>
        <MenuItem>
          <FlexWrapper>
            <div>{username}</div>
            {isDropdownOpened ? (
              <ChevronUp onClick={closeDropdown}>
                <ChevronDown />
              </ChevronUp>
            ) : (
              <ChevronDown onClick={openDropdown} />
            )}
          </FlexWrapper>
          <Dropdown $isOpened={isDropdownOpened}>
            <Link href="/settings">
              <DropdownItem onClick={onSettingsClick}>
                <Settings />
                <ItemText>Settings</ItemText>
              </DropdownItem>
            </Link>
            <DropdownItem onClick={onLogoutClick}>
              <Logout />
              <ItemText>Logout</ItemText>
            </DropdownItem>
          </Dropdown>
        </MenuItem>
      </MenuItems>
    </Root>
  );
};

export default RightMenu;

type RightMenuProps = {
  isOpened: boolean;
  closeMenu: () => void;
};

type RootProps = {
  $isOpened: boolean;
};

const Root = styled.div<RootProps>`
  position: fixed;
  top: 0;
  right: ${({ $isOpened }) => ($isOpened ? '0' : '-100%')};
  width: 70vw;
  height: 100vh;
  transition: 0.5s all;
  background-color: #272727;
  padding: 28px 24px 0 24px;
  z-index: 5;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;
const LogoWrapper = styled.div`
  @media (max-width: 576px) {
    transform: scale(0.8) translateX(-12%);
  }
`;
const CloseWrapper = styled.div`
  path {
    stroke: #fff;
  }
`;
const MenuItems = styled.div`
  margin-top: 48px;
`;
const MenuItem = styled.a`
  padding-bottom: 20px;
  border-bottom: 1px solid #393939;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
  display: block;
`;
const ItemText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #969696;
`;
const DropdownItem = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
  align-items: center;
  path {
    stroke: #969696;
  }
`;
const ChevronUp = styled.div`
  transform: rotate(180deg);
  width: 24px;
  height: 24px;
`;
const Dropdown = styled.div<RootProps>`
  padding: 28px 0 24px 0;
  display: ${({ $isOpened }) => ($isOpened ? 'flex' : 'none')};
  flex-direction: column;
  gap: 24px;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;