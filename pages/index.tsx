import type { NextPage } from 'next';
import styled from 'styled-components';

import {
  LicenseCard,
  Header,
  Checkbox,
  CodeAccordion,
  Accordion,
  PricingCard,
  Footer,
} from 'components';

const Home: NextPage = () => {
  return (
    <Container>
      <Header />
      <Divider />
      <FlexWrapper>
        <LicenseCard status="active" /> <LicenseCard disabled status="inactive" />
      </FlexWrapper>
      <Divider />
      <Checkbox />
      <Divider />
      <CodeAccordion />
      <Divider />
      <Accordion />
      <Divider />
      <PricingCardsWrapper>
        <PricingCard price={77} sitesQuantity={1} />
        <PricingCard price={117} sitesQuantity={3} isMainColor />
        <PricingCard price={167} sitesQuantity={10} />
      </PricingCardsWrapper>
      <Divider />
      <Footer />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  margin: 0 6%;
`;
const Title = styled.div`
  color: black;
`;
const FlexWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  padding: 20px;
`;
const Divider = styled.div`
  margin: 20px 0;
`;
const PricingCardsWrapper = styled.div`
  display: flex;
  gap: 28px;
`;
