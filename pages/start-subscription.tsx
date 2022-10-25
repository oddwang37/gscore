import styled from 'styled-components';
import { NextPage } from 'next';
import Link from 'next/link';
import _ from 'lodash';
import { useSelector } from 'react-redux';

import { productsSelectors } from 'state/ducks/products';
import PrimaryButton from 'components/UI/buttons/PrimaryButton/PrimaryButton';
import { Delete } from 'components/svg';
import { Container } from 'components';

const StartSub: NextPage = () => {
  const productInfo = useSelector(productsSelectors.selectedProduct);

  return (
    <Container>
      <Root>
        <Title>Start your subscription</Title>
        <Text>
          We have sent you a payment receipt by e-mail and a link to download the plugin with a
          license key.
        </Text>
        <ListWrapper>
          <Header>
            <div>Package name</div>
            <div>Price</div>
          </Header>
          <ListItem>
            <div>{productInfo?.name}</div>
            <Wrapper>
              <div>${productInfo?.prices[0].price}</div>
              <Delete />
            </Wrapper>
          </ListItem>
        </ListWrapper>
        <Link href="/my-subscriptions">
          <Button>Go to my subscriptions</Button>
        </Link>
      </Root>
    </Container>
  );
};

export default StartSub;

const Root = styled.div`
  padding-top: 64px;
  padding-bottom: 228px;
  width: 50%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;
const Title = styled.h1`
  ${({ theme: { typography } }) => typography.title44};
`;
const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-top: 16px;
`;
const ListWrapper = styled.div`
  background-color: #272727;
  font-size: 24px;
  border-radius: 12px;
  margin-top: 32px;
  margin-bottom: 48px;
  padding-bottom: 20px;
  @media (max-width: 576px) {
    font-size: 22px;
  }
`;
const ListItem = styled.div`
  padding: 32px 48px;
  border-top: 1px solid #969696;
  display: flex;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const Button = styled(PrimaryButton)`
  width: 100%;
  padding: 26px 0;
  height: 72px;
`;
const Header = styled.div`
  font-weight: 700;
  padding: 48px 72px 32px 32px;
  display: flex;
  justify-content: space-between;
`;
