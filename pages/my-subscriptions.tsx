/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from 'next';

import { withAuth } from 'hocs/withAuth';
import { wrapper } from 'state/store';
import { getCodes } from 'state/ducks/codes/thunks';
import { getSubscribes } from 'state/ducks/subscribes/thunks';
import cookies, { CookiesKeys } from 'services/cookies';
import { MySubscriptions } from 'page-components';
import { Subscribe } from 'state/ducks/subscribes/types';

const MySubscriptionsPage: NextPage<MySubscriptionsPageProps> = ({ initialSlideIndex }) => {
  return <MySubscriptions initialSlideIndex={initialSlideIndex} />;
};

export default withAuth(MySubscriptionsPage);

type MySubscriptionsPageProps = {
  initialSlideIndex: number;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res, query }) => {
      const token = await cookies.getItem(CookiesKeys.token, { req, res });
      let initialSlideIndex = 0;
      try {
        const subscribesResult = await store
          .dispatch(getSubscribes({ headers: { Authorization: `Bearer ${token}` } }))
          .unwrap();
        if (query.subscribeId) {
          subscribesResult.forEach((sub: Subscribe, index: number) => {
            if (sub.id === Number(query.subscribeId)) {
              initialSlideIndex = index;
            }
          });
        }
        await store.dispatch(getCodes({ headers: { Authorization: `Bearer ${token}` } }));
      } catch (e) {
        console.log(e);
      }
      return { props: { initialSlideIndex } };
    },
);
