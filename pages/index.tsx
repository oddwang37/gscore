import type { NextPage } from 'next';

import { wrapper } from 'state/store';
import { getProductsList } from 'state/ducks/products/thunks';
import { Products} from 'state/ducks/products/types';

import { GetStarted } from 'page-components';

const GetStartedPage: NextPage<GetStartedProps> = () => {
  return (
    <GetStarted />
  );
};

export default GetStartedPage;

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  try {
    await store.dispatch(getProductsList()).unwrap();
  } catch (e) {}
  return { props: {} };
});

type GetStartedProps = {
  products: Products;
};
