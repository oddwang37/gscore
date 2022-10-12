import React, { FC } from 'react';
import Link from 'next/Link';
import styled from 'styled-components';

import { useAppDispatch } from 'state/store';
import { SecondaryButton } from 'components';
import { Check } from 'components/svg';

const PricingCard: FC<PricingCardProps> = ({ price, sitesQuantity, isMainColor }) => {
  return (
    <Root $isMainColor={isMainColor}>
      <Price>${price}</Price>
      <SitesQuantity>{sitesQuantity === 1 ? 'Single' : sitesQuantity} Site license</SitesQuantity>
      <Description $isMainColor={isMainColor}>
        Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual
        price
      </Description>
      <Divider />
      <List>
        <ListItem>
          <ListItemCheck $isMainColor={isMainColor}>
            <Check />
          </ListItemCheck>
          <ListItemText>All features for 3 sites</ListItemText>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <ListItemCheck $isMainColor={isMainColor}>
            <Check />
          </ListItemCheck>
          <ListItemText>Special introductory pricing</ListItemText>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <ListItemCheck $isMainColor={isMainColor}>
            <Check />
          </ListItemCheck>
          <ListItemText>Unlimited Pages and Keywords</ListItemText>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <ListItemCheck $isMainColor={isMainColor}>
            <Check />
          </ListItemCheck>
          <ListItemText>Billed annually</ListItemText>
        </ListItem>
      </List>
      <Link href="/create-account">
        <Button $isMainColor={isMainColor}>Get Gscore</Button>
      </Link>
    </Root>
  );
};

export default PricingCard;

type PricingCardProps = {
  price: number;
  sitesQuantity: number;
  isMainColor?: boolean;
};

type IsMainColorProp = {
  $isMainColor?: boolean;
};

const Root = styled.div<IsMainColorProp>`
  padding: 42px 48px;
  text-align: center;
  background-color: ${({ $isMainColor }) => ($isMainColor ? '#FC5842' : '#272727')};
  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  @media (min-width: 768px) {
    margin-bottom: ${($isMainColor) => ($isMainColor ? '5%' : '0')};
  }
`;

const Price = styled.div`
  ${({ theme: { typography } }) => typography.title54};
`;

const SitesQuantity = styled.div`
  margin-top: 10px;
  font-size: 24px;
  font-weight: 700;
`;
const Description = styled.div<IsMainColorProp>`
  ${({ theme: { typography } }) => typography.textMedium18Center}
  margin-top: 8px;
  color: ${({ $isMainColor }) => ($isMainColor ? '#fff' : '#c7c7c7')};
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #fff;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const List = styled.ul`
  list-style-type: none;
  text-align: left;
  margin-bottom: 32px;
`;

const ListItem = styled.li`
  display: flex;
  gap: 14px;
  align-items: center;
  text-align: left;
  margin-bottom: 20px;
`;
const ListItemText = styled.div`
  ${({ theme: { typography } }) => typography.textMedium18}
`;
const ListItemCheck = styled.div<IsMainColorProp>`
  width: 26px;
  height: 26px;
  background-color: #fff;
  border-radius: 100%;
  & svg {
    transform: scale(0.7);
    width: 26px;
    height: 26px;
  }
  & path {
    stroke: ${({ $isMainColor }) => ($isMainColor ? '#FC5842' : '#272727')};
  }
`;
const Button = styled.button<IsMainColorProp>`
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  font-family: THICCCBOI;
  opacity: ${(p) => (p.disabled ? 0.6 : 1)};
  color: #fff;
  border: none;
  cursor: pointer;
  box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);
  border-radius: 4px;
  padding: 20px 60px;
  background-color: #fff;
  &:hover {
    background-color: #fbfbfb;
  }
  &:focus {
    outline: 4px solid rgba(252, 88, 66, 0.3);
  }
  color: ${({ $isMainColor }) => ($isMainColor ? '#FC5842' : '#181818')};
  box-shadow: none;
`;
