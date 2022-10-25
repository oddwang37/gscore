import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import _ from 'lodash';

import { buySubscribe, getSubscribes } from 'state/ducks/subscribes/thunks';
import { useAppDispatch } from 'state/store';
import { Product } from 'state/ducks/products/types';
import { productsSelectors } from 'state/ducks/products';
import { PrimaryButton } from 'components';
import { Delete } from 'components/svg';

const CheckoutForm = () => {
  const productsList = useSelector(productsSelectors.list);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [subInfo, setSubInfo] = useState<Product | undefined>();
  const getProduct = () => {
    const id = Number(router.query.priceId);
    // if user reloads page query parameter disappears and product info become empty(
    if (id) {
      return _.find(productsList, { id: id });
    } else {
      router.push('/');
    }
  };

  useEffect(() => {
    setSubInfo(getProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPurchase = () => {
    if (subInfo) {
      dispatch(buySubscribe({ priceId: subInfo.id }));
      router.push('/start-subscription');
    }
  };

  return (
    <Root>
      <Title>Checkout</Title>
      <ListWrapper>
        <Header>
          <div>Package name</div>
          <div>Price</div>
        </Header>
        <ListItem>
          <div>{subInfo?.name}</div>
          <Wrapper>
            <div>${subInfo?.prices[0].price}</div>
            <Delete />
          </Wrapper>
        </ListItem>
      </ListWrapper>
      <TotalWrapper>
        <div>Total:</div>
        <div>${subInfo?.prices[0].price}</div>
      </TotalWrapper>
      <PrimaryButton onClick={onPurchase}>Purschase</PrimaryButton>
    </Root>
  );
};

export default CheckoutForm;

const Root = styled.div`
  padding-top: 64px;
  padding-bottom: 228px;
`;
const Title = styled.h1`
  ${({ theme: { typography } }) => typography.title44};
`;
const ListWrapper = styled.div`
  background-color: #272727;
  font-size: 24px;
  border-radius: 12px;
  margin-top: 32px;
  margin-bottom: 24px;
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
`;
const Header = styled.div`
  font-weight: 700;
  padding: 48px 72px 32px 32px;
  display: flex;
  justify-content: space-between;
`;
const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 48px;
`;
