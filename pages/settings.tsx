import { useState } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';

import { withAuth } from 'hocs/withAuth';

import { UpdatePersonalData, ChangePasswordForm, Tabs } from 'components';

const Settings: NextPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const changeActiveTabIndex = (index: number) => {
    setActiveTabIndex(index);
  };

  const tabHeaders = ['Personal Info', 'Change password'];
  const contentArray = [<UpdatePersonalData key="0" />, <ChangePasswordForm key="1" />];

  return (
    <Tabs
      activeTabIndex={activeTabIndex}
      changeActiveTabIndex={changeActiveTabIndex}
      tabHeaders={tabHeaders}
      contentArray={contentArray}
    />
  );
};

export default withAuth(Settings);

const Container = styled.div`
  margin: 0 6%;
`;
