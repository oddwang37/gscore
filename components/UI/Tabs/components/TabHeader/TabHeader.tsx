import React, { FC } from 'react';
import styled from 'styled-components';

const TabHeader:FC<TabHeaderProps> = ({title, isActive, onClick}) => {
  return (
    <Root $isActive={isActive} onClick={onClick}>
      <Title>{title}</Title>
    </Root>
    );
};

export default TabHeader;

type TabHeaderProps = {
  title: string;
  isActive?: boolean;
  onClick: () => void;
}

type RootProps = {
  $isActive?: boolean;
}

const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
`

const Root = styled.div<RootProps>`
  padding: 0 24px 15px 24px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({$isActive}) => $isActive ? '#FC5842' : '#393939'};
  cursor: pointer;
  & ${Title} {
    color: ${({$isActive}) => $isActive ? '#FC5842' : '#393939'};
  }
`;
