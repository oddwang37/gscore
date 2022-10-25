import { useState } from 'react';

import { UpdatePersonalData, ChangePasswordForm, Tabs, Container } from 'components';

const Settings = () => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const changeActiveTabIndex = (index: number) => {
    setActiveTabIndex(index);
  };

  const tabHeaders = ['Personal Info', 'Change password'];
  const contentArray = [<UpdatePersonalData key="0" />, <ChangePasswordForm key="1" />];

  return (
    <Container>
      <Tabs
        activeTabIndex={activeTabIndex}
        changeActiveTabIndex={changeActiveTabIndex}
        tabHeaders={tabHeaders}
        contentArray={contentArray}
      />
    </Container>
  );
};

export default Settings;
