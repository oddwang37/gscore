import { useState } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { wrapper } from 'state/store';
import { productsSelectors } from 'state/ducks/products';
import { PricingCard } from 'components';
import { getProductsList } from 'state/ducks/products/thunks';
import { Products, Product } from 'state/ducks/products/types';

const GetStarted: NextPage<GetStartedProps> = ({ products }) => {
  return (
    <div>
      <Title>Get started with Gscore today</Title>
      <PricingCardsWrapper>
        {products.map((product, i) => (
          <PricingCard
            name={product.name}
            price={product.prices[0].price}
            sitesQuantity={product.sitesCount}
            key={product.id}
            isMainColor={i === 1 ? true : false}
          />
        ))}
      </PricingCardsWrapper>
      <OtherTariff>
        Have more than 10 sites?
        <ContactUsLink>Contact us</ContactUsLink>
      </OtherTariff>
    </div>
  );
};

export default GetStarted;

export const getStaticProps = wrapper.getStaticProps((store) => async ({ preview }) => {
  let result;
  try {
    result = await store.dispatch(getProductsList()).unwrap();
  } catch (e) {}
  return { props: { products: result } };
});

type GetStartedProps = {
  products: Products;
};
const Title = styled.h1`
  ${({ theme: { typography } }) => typography.title44Center}
`;
const PricingCardsWrapper = styled.div`
  height: 55%;
  display: flex;
  align-items: flex-end;
  gap: 28px;
  margin-top: 48px;
  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`;
const MainPricingCardWrapper = styled.div`
  align-self: start;
  padding-bottom: 4%;
`;
const OtherTariff = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-top: 32px;
  text-align: center;
`;
const ContactUsLink = styled.a`
  color: ${({ theme: { colors } }) => colors.primaryColor};
  text-decoration: underline;
  margin-bottom: 42px;
  display: block;
`;
