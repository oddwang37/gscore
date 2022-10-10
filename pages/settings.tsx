import { useState } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';

import { Header, SettingsForm, ChangePasswordForm, Footer, Tabs } from 'components';

const Settings: NextPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const changeActiveTabIndex = (index: number) => {
    setActiveTabIndex(index);
  }

  const tabHeaders = ['Personal Info', 'Change password'];
  const contentArray = [<SettingsForm key="0" />, <ChangePasswordForm key="1" />]

  return (
    <Container>
      <Header />
        <Tabs 
          activeTabIndex={activeTabIndex} 
          changeActiveTabIndex={changeActiveTabIndex} 
          tabHeaders={tabHeaders}
          contentArray={contentArray}
        />
      <Footer />
    </Container>
  );
};

export default Settings;

const Container = styled.div`
  margin: 0 6%;
`;
const Wrapper = styled.div`
  width: 50%;
  margin: 0 auto;
`;
