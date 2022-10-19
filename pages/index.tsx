import type { GetServerSideProps, NextPage } from 'next';
import styled from 'styled-components';
import { useEffect } from 'react';

import { getMe } from 'state/ducks/auth/thunks';
import { useAppDispatch } from 'state/store';
import { Header, Footer } from 'components';
import { withAuth } from 'hocs/withAuth';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  return (
    <Container>
      <Header />
      <Footer />
    </Container>
  );
};

export default withAuth(Home);

const Container = styled.div`
  margin: 0 6%;
  @media (max-width: 576px) {
    margin: 0 4%;
  }
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
