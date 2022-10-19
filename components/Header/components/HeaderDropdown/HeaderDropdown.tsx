import React, { FC, useState, useEffect, useRef, RefObject } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { useAppDispatch } from 'state/store';
import { logout } from 'state/ducks/auth/slices';

import { Settings, Logout } from 'components/svg';

const HeaderDropdown: FC<HeaderDropdownProps> = ({ isOpened, closeDropdown }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onLogoutClick = () => {
    dispatch(logout());
    router.reload();
    closeDropdown();
  };

  const onSettingsClick = () => {
    closeDropdown();
  };

  return (
    <Root $isOpened={isOpened}>
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
    </Root>
  );
};

export default HeaderDropdown;

type HeaderDropdownProps = {
  isOpened: boolean;
  closeDropdown: () => void;
};

type RootProps = {
  $isOpened: boolean;
};

const Root = styled.div<RootProps>`
  position: absolute;
  bottom: -50px;
  right: 0;
  width: 15%;
  padding: 28px 24px;
  background-color: #272727;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: space-between;
  border-radius: 12px;
  display: ${({ $isOpened }) => ($isOpened ? 'flex' : 'none')};
  transform: translateY(50%);
`;
const ItemText = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
const DropdownItem = styled.div`
  display: flex;
  gap: 12px;
  cursor: pointer;
  &:hover ${ItemText} {
    color: #fbfbfb;
  }
  &:hover path {
    stroke: #fbfbfb;
  }
`;
