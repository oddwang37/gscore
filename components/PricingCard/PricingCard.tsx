import React, { FC } from 'react';
import Link from 'next/Link';
import styled from 'styled-components';

import { useAppDispatch } from 'state/store';
import { Root as SecondaryButton } from 'components/UI/buttons/SecondaryButton/SecondaryButton';
import { Check } from 'components/svg';

const PricingCard: FC<PricingCardProps> = ({ price, sitesQuantity, isMainColor }) => {
  return (
    <Root isMainColor={isMainColor}>
      <Price>${price}</Price>
      <SitesQuantity>{sitesQuantity === 1 ? 'Single' : sitesQuantity} Site license</SitesQuantity>
      <Description isMainColor={isMainColor}>
        Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual
        price
      </Description>
      <Divider />
      <List>
        <ListItem>
          <ListItemCheck isMainColor={isMainColor}>
            <Check />
          </ListItemCheck>
          <ListItemText>All features for 3 sites</ListItemText>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <ListItemCheck isMainColor={isMainColor}>
            <Check />
          </ListItemCheck>
          <ListItemText>Special introductory pricing</ListItemText>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <ListItemCheck isMainColor={isMainColor}>
            <Check />
          </ListItemCheck>
          <ListItemText>Unlimited Pages and Keywords</ListItemText>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <ListItemCheck isMainColor={isMainColor}>
            <Check />
          </ListItemCheck>
          <ListItemText>Billed annually</ListItemText>
        </ListItem>
      </List>
      <Link href="/create-account">
        <Button isMainColor={isMainColor}>Get Gscore</Button>
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
  isMainColor?: boolean;
};

const Root = styled.div<IsMainColorProp>`
  padding: 42px 48px;
  text-align: center;
  background-color: ${(p) => (p.isMainColor ? '#FC5842' : '#272727')};
  box-shadow: 0px 8px 28px rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  @media (min-width: 768px) {
    margin-bottom: ${(p) => (p.isMainColor ? '5%' : '0')};
  }
`;

const Price = styled.div`
  font-size: 54px;
  font-weight: 700;
`;

const SitesQuantity = styled.div`
  margin-top: 10px;
  font-size: 24px;
  font-weight: 700;
`;
const Description = styled.div<IsMainColorProp>`
  line-height: 30px;
  font-size: 18px;
  font-weight: 500;
  margin-top: 8px;
  color: ${(p) => (p.isMainColor ? '#fff' : '#c7c7c7')};
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
  font-size: 18px;
  font-weight: 500;
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
    stroke: ${(p) => (p.isMainColor ? '#FC5842' : '#272727')};
  }
`;
const Button = styled(SecondaryButton)<IsMainColorProp>`
  color: ${(p) => (p.isMainColor ? '#FC5842' : '#181818')};
  box-shadow: none;
`;
