import { useState } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';

import { PricingCard } from 'components';

const GetStarted: NextPage = () => {
  return (
    <Container>
      <Title>Get started with Gscore today</Title>
      <PricingCardsWrapper>
        {/* <PricingCard price={77} sitesQuantity={1} />
        <PricingCard price={117} sitesQuantity={3} isMainColor />
        <PricingCard price={167} sitesQuantity={10} /> */}
      </PricingCardsWrapper>
      <OtherTariff>
        Have more than 10 sites?
        <ContactUsLink>Contact us</ContactUsLink>
      </OtherTariff>
    </Container>
  );
};

export default GetStarted;

const Container = styled.div`
  margin: 0 6%;
`;
const Title = styled.h1`
  ${({ theme: { typography } }) => typography.title44Center}
`;
const PricingCardsWrapper = styled.div`
  height: 55%;
  display: flex;
  align-items: flex-end;
  gap: 28px;
  margin-top: 48px;
  @media (max-width: 768px) {
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
