import type { NextPage } from 'next';

import { withAuth } from 'hocs/withAuth';

import { SettingsPage } from 'page-components';

const Settings: NextPage = () => {

  return (
    <SettingsPage />
  );
};

export default withAuth(Settings);
