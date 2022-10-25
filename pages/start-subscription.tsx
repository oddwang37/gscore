import { NextPage } from 'next';

import { withAuth } from 'hocs/withAuth';

import { StartSubscriptions } from 'page-components';

const StartSubscriptionsPage: NextPage = () => {
  return <StartSubscriptions />;
};

export default withAuth(StartSubscriptionsPage);
