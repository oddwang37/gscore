/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next';

import { withAuth } from 'hocs/withAuth';
import { wrapper } from 'state/store';
import { getCodes } from 'state/ducks/codes/thunks';
import { getSubscribes } from 'state/ducks/subscribes/thunks';
import cookies, { CookiesKeys } from 'services/cookies';
import { MySubscriptions } from 'page-components';

const MySubscriptionsPage: NextPage = () => {
  return <MySubscriptions />;
};

export default withAuth(MySubscriptionsPage);

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, res }) => {
  const token = await cookies.getItem(CookiesKeys.token, { req, res });
  try {
    await store.dispatch(getSubscribes({ headers: { Authorization: `Bearer ${token}` } }));
    await store.dispatch(getCodes({ headers: { Authorization: `Bearer ${token}` } }));
  } catch (e) {
    console.log(e);
  }
  return { props: {} };
});
