import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { RootState, wrapper, useAppDispatch } from 'state/store';
import { PricingCard, Container } from 'components';
import { setSelectedId } from 'state/ducks/products/slices';
import { changeSubscribe } from 'state/ducks/subscribes/thunks';
import { getProductsList } from 'state/ducks/products/thunks';
import { Products } from 'state/ducks/products/types';

const GetStarted = () => {
  const products = useSelector((state: RootState) => state.products.list);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onProductButtonClick = (id: number) => {
    const subscribeId = router.query.subscribeId;
    if (subscribeId) {
      dispatch(changeSubscribe({ productId: id, subscribeId: Number(subscribeId) }));
      router.push({ pathname: '/my-subscriptions', query: { subscribeId: subscribeId } });
    } else {
      dispatch(setSelectedId(id));
      router.push('/create-account');
    }
  };

  return (
    <Container>
      <Title>Get started with Gscore today</Title>
      <PricingCardsWrapper>
        {products.map((product, i) => (
          <PricingCard
            name={product.name}
            price={product.prices[0].price}
            sitesQuantity={product.sitesCount}
            key={product.id}
            isMainColor={i === 1 ? true : false}
            id={product.id}
            onButtonClick={onProductButtonClick}
          />
        ))}
      </PricingCardsWrapper>
      <OtherTariff>
        Have more than 10 sites?
        <ContactUsLink>Contact us</ContactUsLink>
      </OtherTariff>
    </Container>
  );
};

export default GetStarted;

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
  cursor: pointer;
  margin-top: 10px;
`;
