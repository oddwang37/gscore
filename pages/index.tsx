import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { Card, Header, Checkbox, Tabs, Steps, CodeAccordion, Accordion, PricingCard, Footer } from 'components';
import { RootState, useAppDispatch } from 'state/store';
import { addNumber } from 'state/ducks/some';

const Home: NextPage = () => {
  const number = useSelector((state: RootState) => state.some.number);
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Header />
      <Divider />
      <FlexWrapper>
        <Card status="active"/> <Card disabled status="unactive" />
      </FlexWrapper>
      <Divider />
      <Checkbox />
      <Divider />
      <Tabs />
      <Divider />
      <Steps />
      <Divider />
      <CodeAccordion />
      <Divider />
      <Accordion />
      <Divider />
      <PricingCardsWrapper>
        <PricingCard price={77} sitesQuantity={1} />
        <PricingCard price={117} sitesQuantity={3} isMainColor />
        <PricingCard price={167} sitesQuantity={10}  />
      </PricingCardsWrapper>
      <Divider />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  margin: 0 6%;
`
const Title = styled.div`
  color: black;
`;
const FlexWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  padding: 20px;
`
const Divider = styled.div`
  margin: 20px 0;
`
const PricingCardsWrapper = styled.div`
  display: flex;
  gap: 28px;
`